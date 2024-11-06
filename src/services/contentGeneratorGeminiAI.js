const axios = require("axios");
const { GeminiAPIKey } = require("../secret");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const generateContent = async () => {
  try {
    const genAI = new GoogleGenerativeAI(GeminiAPIKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        candidateCount: 1,
        stopSequences: ["x"],
        maxOutputTokens: 20,
      },
    });
    const result = await model.generateContent(
      "Tell me a story about a magic backpack.",
    );

    const generatedText = result.response.text();
    return generatedText;
  } catch (error) {
    console.error("Error generating content:", error.toString());
    throw error;
  }
};

module.exports = { generateContent };