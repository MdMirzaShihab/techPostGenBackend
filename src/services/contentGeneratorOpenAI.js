const OpenAI = require("openai");
const { OpenAIKey } = require("../secret");

const openai = new OpenAI({
  apiKey: OpenAIKey,
});

// Generate Tech Post using OpenAI and return the generated text
const generatePost = async () => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            "Write a concise review of the latest tech news from the past week, highlighting key innovations, announcements, or trends. The post should be engaging and limited to 300 characters or fewer.",
        },
      ],
      max_tokens: 75,
    });

    const generatedText = response.choices[0].message.content.trim();
    return generatedText;
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Content generation failed");
  }
};

module.exports = { generatePost };