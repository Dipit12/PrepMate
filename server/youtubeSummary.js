// take the youtube link from the user using a form and using the youtube transcript api extract the transcripts of the video
// pass down the content to an LLM and extract the summary/short notes 
// give the option to the user to download it as a PDF

// const  YoutubeTranscript = require('youtube-transcript');
// const axios = require("axios")



const { YoutubeTranscript } = require('youtube-transcript');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const youtube_video_link = "https://www.youtube.com/watch?v=7h1s2SojIRw"; 
const video_id = youtube_video_link.split("v=")[1];
const GEMINI_API_KEY = "AIzaSyBBgpe0q8_9XlnU93cC9lzj8hZX8Kx7S_0" // Replace with your API KEY

async function fetchTranscript(videoId) {
  try {
    const transcriptParts = await YoutubeTranscript.fetchTranscript(videoId);

    if (!transcriptParts || transcriptParts.length === 0) {
      console.error("No transcript found for this video.");
      return null; // Important: Return null if no transcript
    }

    const transcriptText = transcriptParts.map(part => part.text).join(' ');
    return transcriptText; // Return the text
  } catch (error) {
    console.error('Error fetching transcript:', error);
    return null; // Return null if there's an error
  }
}

async function generateSummary() {
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const transcript = await fetchTranscript(video_id); // Await the transcript!

  if (transcript === null) {  // Handle the case where no transcript was found
    console.error("Could not retrieve transcript.  Cannot generate summary.");
    return;
  }

  const prompt = `Based on the transcript provided, summarize the key points, conclusions, and headings of the educational video. Please ensure that the summary is concise and informative, highlighting the most important takeaways. Additionally, format the summary with clear headings and subheadings for easy reference. 

  Transcript:
  ${transcript}`; 

  try {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  } catch (error) {
    console.error("Error generating summary:", error);
  }
}

generateSummary();