// const express = require("express");
// const multer = require("multer");
// const fs = require("fs").promises;
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const pdfParse = require("pdf-parse");

// // Setup
// const app = express();
// const upload = multer({ dest: "uploads/" });
// const GEMINI_API_KEY = "AIzaSyBBgpe0q8_9XlnU93cC9lzj8hZX8Kx7S_0"; 

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // File Upload Route
// app.post("/upload", upload.single("file"), async (req, res) => {
//     try {
//         const filePath = req.file.path; 
//         const fileBuffer = await fs.readFile(filePath);

//         // Parse PDF and extract text
//         const pdfData = await pdfParse(fileBuffer);
//         const extractedText = pdfData.text;

//         if (!extractedText.trim()) {
//             return res.status(400).json({ error: "No text found in the PDF." });
//         }

//         // Save extracted text to a .txt file
//         const textFileName = `./uploads/${Date.now()}.txt`;
//         await fs.writeFile(textFileName, extractedText, "utf-8");

//         // Generate summary using Gemini
//         const summary = await generateSummary(textFileName);
//         res.json({ summary });

//     } catch (error) {
//         console.error("Error processing the file:", error);
//         res.status(500).json({ error: "Failed to process the PDF." });
//     }
// });

// // Read Data from Text File
// async function readDataFromText(filePath) {
//     try {
//         const data = await fs.readFile(filePath, "utf-8");
//         return data;
//     } catch (err) {
//         console.error(`Error reading file: ${err.message}`);
//         return null;
//     }
// }

// // Generate Summary using Gemini
// async function generateSummary(filePath) {
//     const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const data = await readDataFromText(filePath);

//     if (!data) {
//         console.error("Could not retrieve data. Cannot generate summary.");
//         return "No content available for summarization.";
//     }

//     const prompt = `Summarize the key points, conclusions, and headings of the following educational material concisely:
    
//     ${data}`;

//     try {
//         const result = await model.generateContent(prompt);
//         return result.response.text();
//     } catch (error) {
//         console.error("Error generating summary:", error);
//         return "Failed to generate summary.";
//     }
// }

// // Server Setup
// app.listen(5001, () => {
//     console.log("Server running on http://localhost:5001");
// });

// HELLO THERE - BY MANEET ;) 
const express = require("express");
const multer = require("multer");
const fs = require("fs").promises;
const { GoogleGenerativeAI } = require("@google/generative-ai");
const pdfParse = require("pdf-parse");

// Setup
const app = express();
const upload = multer({ dest: "uploads/" });
const GEMINI_API_KEY = "AIzaSyBBgpe0q8_9XlnU93cC9lzj8hZX8Kx7S_0"; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// File Upload Route
app.post("/upload", upload.single("file"), async (req, res) => {
    try {
        const filePath = req.file.path; 
        const fileBuffer = await fs.readFile(filePath);

        // Parse PDF and extract text
        const pdfData = await pdfParse(fileBuffer);
        const extractedText = pdfData.text;

        if (!extractedText.trim()) {
            return res.status(400).json({ error: "No text found in the PDF." });
        }

        // Save extracted text to a .txt file
        const textFileName = `./uploads/${Date.now()}.txt`;
        await fs.writeFile(textFileName, extractedText, "utf-8");

        // Generate summary using Gemini
        const summary = await generateSummary(textFileName);

        // Log the summary to the terminal
        console.log("=== Generated Summary ===");
        console.log(summary);
        console.log("=========================");

        res.json({ summary });
    } catch (error) {
        console.error("Error processing the file:", error);
        res.status(500).json({ error: "Failed to process the PDF." });
    }
});

// Read Data from Text File
async function readDataFromText(filePath) {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return data;
    } catch (err) {
        console.error(`Error reading file: ${err.message}`);
        return null;
    }
}

// Generate Summary using Gemini
async function generateSummary(filePath) {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const data = await readDataFromText(filePath);

    if (!data) {
        console.error("Could not retrieve data. Cannot generate summary.");
        return "No content available for summarization.";
    }

    const prompt = `Summarize the key points, conclusions, and headings of the following educational material concisely:
    
${data}`;

    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error generating summary:", error);
        return "Failed to generate summary.";
    }
}

// Server Setup
app.listen(5001, () => {
    console.log("Server running on http://localhost:5001");
});
