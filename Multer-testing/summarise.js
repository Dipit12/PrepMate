const fs = require("fs").promises;  // Use promise-based fs
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GEMINI_API_KEY = "AIzaSyBBgpe0q8_9XlnU93cC9lzj8hZX8Kx7S_0"; 


async function readDataFromText(number) {
    try {
        const data = await fs.readFile(`./uploads/${number}.txt`, "utf-8");  
        return data;
    } catch (err) {
        console.error(`Error reading file: ${err.message}`);
        return null;  
    }
}

// Generate summary using Gemini API
async function generateSummary() {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const data = await readDataFromText(1); // Await the data from file

    if (!data) {  // Handle case where no data is found
        console.error("Could not retrieve data. Cannot generate summary.");
        return;
    }

    const prompt = `Based on the data provided, summarize the key points, conclusions, and headings of the educational material. Please ensure the summary is concise and informative, highlighting the most important takeaways. Additionally, format the summary with clear headings and subheadings for easy reference. 

    Data:
    ${data}`; 

    try {
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
    } catch (error) {
        console.error("Error generating summary:", error)
    }
}
generateSummary();