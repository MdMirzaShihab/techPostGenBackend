const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  postContent: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null } // Reference to the user who created the content
});

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;