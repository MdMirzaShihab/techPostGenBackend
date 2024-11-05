const express = require('express');

const app = express();

app.get("/", (req, res)=> {
    res.send({
        Message: "Welcome to our TechPostGen API Server",
    })
});

module.exports = app;