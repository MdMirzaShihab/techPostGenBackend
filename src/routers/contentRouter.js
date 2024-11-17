const express = require("express");
const { createPost, getAllPosts } = require("../controllers/contentController");
const { contentAccessController } = require("../middlewares/auth");

const contentRouter = express.Router();

contentRouter.post("/generate", contentAccessController, createPost);
contentRouter.get("/history", contentAccessController, getAllPosts);

module.exports = contentRouter;