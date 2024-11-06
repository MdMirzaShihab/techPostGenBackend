const express = require("express");
const { createPost, getAllPosts } = require("../controllers/contentController");

const contentRouter = express.Router();

contentRouter.post("/generate", createPost);
contentRouter.get("/history", getAllPosts);

module.exports = contentRouter;