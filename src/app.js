const express = require("express");
const contentRouter = require("./routers/contentRouter");

const app = express();

app.use(express.json());
app.use("/api/posts", contentRouter);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to our TechPostGen API Server" });
});

module.exports = app;