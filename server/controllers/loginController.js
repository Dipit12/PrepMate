const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const fs = require("fs").promises
const pdfParse = require("pdf-parse")
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: "Email or password field empty" });
    }

    const userExists = await User.findOne({ where: { email } });

    if (!userExists) {
        return res.status(400).json({ msg: "Register yourself first" });
    }

    // Correct password comparison
    const isValid = await bcrypt.compare(password, userExists.password);
    if (!isValid) {
        return res.status(401).json({ msg: "Incorrect password" });
    }

    console.log("Logged in successfully");
    return res.status(200).json({ msg: "Logged in successfully", redirect: "/dashboard" });
};

const registerUser = async (req, res) => {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
        return res.status(400).json({ msg: "Email, Username, or Password field is empty" });
    }

    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
        return res.status(400).json({ msg: "User already exists, please log in" });
    }

    try {
        const hashedPass = await bcrypt.hash(password, 13);
        const newUser = await User.create({ username, email, password: hashedPass });

        if (newUser) {
            console.log("New user created");
            return res.status(201).json({ msg: "Registration successful", redirect: "/dashboard" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal server error" });
    }
};

const { YoutubeTranscript } = require('youtube-transcript');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const youtubeSummary = async (req, res) => {
    const youtube_video_link = req.body.link;
    const video_id = youtube_video_link.split("v=")[1];

    async function fetchTranscript(videoId) {
        try {
            const transcriptParts = await YoutubeTranscript.fetchTranscript(videoId);
            if (!transcriptParts || transcriptParts.length === 0) {
                return null;
            }
            const transcriptText = transcriptParts.map(part => part.text).join(' ');
            return transcriptText;
        } catch (error) {
            console.error('Error fetching transcript:', error);
            return null;
        }
    }

    async function generateSummary(transcript) {
        const genAI = new GoogleGenerativeAI("AIzaSyBBgpe0q8_9XlnU93cC9lzj8hZX8Kx7S_0");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `Based on the transcript provided, summarize the key points, conclusions, and headings of the educational video. Please ensure that the summary is concise and informative.

        Transcript:
        ${transcript}`;

        try {
            const result = await model.generateContent(prompt);
            return result.response.text();
        } catch (error) {
            console.error("Error generating summary:", error);
            return null;
        }
    }

    const transcript = await fetchTranscript(video_id);
    if (transcript === null) {
        return res.status(500).json({ msg: "Error generating summary." });
    }

    const summary = await generateSummary(transcript);
    if (summary === null) {
        return res.status(500).json({ msg: "Error generating summary." });
    }

    return res.status(200).json({ msg: summary });
};
// const flashCard = async (req, res) => {
//     const flashCard = async (req, res) => {
//         try {
//             console.log("Processing file upload request...");
            
//             if (!req.file) {
//                 console.error("No file uploaded");
//                 return res.status(400).json({ error: "No file uploaded." });
//             }
    
//             console.log("File received:", req.file);
//             const filePath = req.file.path;
//             const fileBuffer = await fs.readFile(filePath);
//             let extractedText = '';
    
//             // Check file type and extract text accordingly
//             if (req.file.mimetype === 'application/pdf') {
//                 console.log("Processing PDF file...");
//                 const pdfData = await pdfParse(fileBuffer);
//                 extractedText = pdfData.text;
//             } else if (req.file.mimetype.includes('powerpoint')) {
//                 // You'll need to add a PPT parsing library here
//                 console.log("Processing PPT file...");
//                 // For example: extractedText = await parsePPT(fileBuffer);
//                 return res.status(400).json({ error: "PPT processing not implemented yet" });
//             } else {
//                 console.error("Unsupported file type:", req.file.mimetype);
//                 return res.status(400).json({ error: "Unsupported file type" });
//             }
    
//             if (!extractedText.trim()) {
//                 console.error("No text extracted from file");
//                 return res.status(400).json({ error: "No text found in the file." });
//             }
    
//             console.log("Generating summary...");
//             const summary = await generateSummary(extractedText);
//             console.log("Summary generated");
    
//             const flashCards = splitSummaryIntoParts(summary);
//             console.log("Flash cards created:", flashCards.length);
    
//             // Clean up uploaded file
//             await fs.unlink(filePath);
//             console.log("File cleaned up");
    
//             return res.status(200).json({ flashCards });
//         } catch (error) {
//             console.error("Error processing the file:", error);
//             return res.status(500).json({ error: error.message || "Failed to process the file." });
//         }
//     };
    
// };

// // Modify the summary generation function to ensure concise and structured output
// async function generateSummary(content) {
//     const genAI = new GoogleGenerativeAI("AIzaSyBBgpe0q8_9XlnU93cC9lzj8hZX8Kx7S_0");
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const prompt = `Summarize the following educational material and divide it into 9 sections with titles. Provide a title for each section followed by its summary:\n\n${content}`;

//     try {
//         const result = await model.generateContent(prompt);
//         return result.response.text();
//     } catch (error) {
//         console.error("Error generating summary:", error);
//         return "Failed to generate summary.";
//     }
// }

// // Split the summary into 9 parts with titles
// function splitSummaryIntoParts(summary) {
//     const sections = summary.split(/\n\n/).filter(part => part.trim() !== ""); // Split by paragraphs

//     const maxParts = 9;
//     const flashCards = [];

//     for (let i = 0; i < maxParts; i++) {
//         if (sections[i]) {
//             const [title, ...content] = sections[i].split(":"); // Extract title and content
//             flashCards.push({
//                 title: title.trim() || `Topic ${i + 1}`,
//                 content: content.join(":").trim() || "No details available."
//             });
//         } else {
//             flashCards.push({
//                 title: `Topic ${i + 1}`,
//                 content: "No details available."
//             });
//         }
//     }

//     return flashCards;
// }

// User Authentication (login, register, youtubeSummary)
// Add your existing loginUser, registerUser, youtubeSummary here

module.exports = { registerUser, loginUser, youtubeSummary };
