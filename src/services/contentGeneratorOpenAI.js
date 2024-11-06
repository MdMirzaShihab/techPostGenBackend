const OpenAI = require("openai");
const { OpenAIKey } = require("../secret");

// Configure OpenAI client directly
const openai = new OpenAI({
  apiKey: OpenAIKey,
});

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
      max_tokens: 75, // Approximate to limit character count
    });

    const generatedText = response.choices[0].message.content.trim();
    return generatedText;
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Content generation failed");
  }
};

module.exports = { generatePost };