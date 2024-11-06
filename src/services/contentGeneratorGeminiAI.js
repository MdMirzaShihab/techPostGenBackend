const axios = require("axios");
const { GeminiAPIKey } = require("../secret");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Generate Tech Post using GeminiAI and return the generated text
const generateContent = async () => {
  try {
    const genAI = new GoogleGenerativeAI(GeminiAPIKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        candidateCount: 1,
        stopSequences: ["x"],
        maxOutputTokens: 75,
      },
    });
    const result = await model.generateContent(
      "Write a concise review of the latest tech news from the past week, highlighting key innovations, announcements, or trends. The post should be engaging and limited to 300 characters or fewer.",
    );

    const generatedText = result.response.text();
    return generatedText;
  } catch (error) {
    console.error("Error generating content:", error.toString());
    throw error;
  }
};

module.exports = { generateContent };