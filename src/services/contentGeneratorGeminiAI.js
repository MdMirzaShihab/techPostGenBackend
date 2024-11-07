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
        maxOutputTokens: 100, //will remove before submit to save token.
      },
    });
    const prompt = `Write a concise, engaging, and social-media-ready review of ONE major tech news item from the varity of the tech topics in the past 7 days. The post should be informative yet brief and be no longer than 300 characters.`;
    const result = await model.generateContent(prompt);

    const generatedText = result.response.text();
    return generatedText;
  } catch (error) {
    console.error("Error generating content:", error.toString());
    throw error;
  }
};

module.exports = { generateContent };