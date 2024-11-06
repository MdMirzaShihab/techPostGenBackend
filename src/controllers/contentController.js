const Content = require("../models/contentModel");
const { generateContent } = require("../services/contentGeneratorGeminiAI");
const { generatePost } = require("../services/contentGeneratorOpenAI");

// Generate and save a new post
const createPost = async (req, res) => {
  try {
    // const postContentOpenAI = await generatePost();
    const postContentGemini = await generateContent();
    const newPost = await Content.create({ postContent: postContentGemini });

    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error in createPost:", error);
    res.status(500).json({ message: "Error generating post" });
  }
};

// Retrieve all generated posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Content.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error in getAllPosts:", error);
    res.status(500).json({ message: "Error retrieving posts" });
  }
};

module.exports = { createPost, getAllPosts };