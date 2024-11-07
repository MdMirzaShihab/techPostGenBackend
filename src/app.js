const express = require("express");
const contentRouter = require("./routers/contentRouter");

const app = express();

app.use(express.json());
app.use("/api/posts", contentRouter);
app.use("/api/test", (req, res) => {
  res.send({ message: "This is a test route to check if the server CICD is working fine or not" });
});


app.get("/", (req, res) => {
  res.send({ message: "Welcome to our TechPostGen API Server" });
});

module.exports = app;