const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  postContent: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;