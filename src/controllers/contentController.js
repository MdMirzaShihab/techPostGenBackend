const Content = require("../models/contentModel");
const createError = require("http-errors");
const { generateContent } = require("../services/contentGeneratorGeminiAI");
const { generatePost } = require("../services/contentGeneratorOpenAI");
const { successResponse } = require("./responseController");

// Generate Tech Post using either of the services (use other one by uncommenting and commenting current one) and save a new post
const createPost = async (req, res) => {
  try {
    // const postContentOpenAI = await generatePost();
    const postContentGemini = await generateContent();
    if (!postContentGemini) {
      throw createError(500, "Content generation failed");
    }


    const newPost = await Content.create({ postContent: postContentGemini });

    if (!newPost) {
      throw createError(500, "Post creation failed");
    }


    successResponse(res, {
      statusCode: 201,
      message: "Post generated successfully",
      payload: newPost,
    });

  } catch (error) {
    next(error);
  }
};

// Retrieve all generated posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Content.find().sort({ createdAt: -1 });
    if (!posts) {
      throw createError(500, "Posts retrieval failed");
    }

    successResponse(res, {
      statusCode: 200,
      message: "Posts retrieved successfully",
      payload: posts,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createPost, getAllPosts };