const express = require("express");
const cors = require('cors');
const contentRouter = require("./routers/contentRouter");

const app = express();


// CORS options to allow localhost and production frontend
const corsOptions = {
  origin: [
    'http://localhost:5173',    // Local development environment
    'https://technews.mirzashihab.com'  // Production domain
  ],
  methods: ['GET', 'POST'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};



app.use(express.json());
app.use(cors(corsOptions));




app.use("/api/posts", contentRouter);


app.get("/", (req, res) => {
  res.send({ message: "Welcome to our TechPostGen API Server" });
});

// client error handling
app.use((req, res, next)=> {
  next(createError(404, 'route not found'));
});

// Server error handling
app.use((err, req, res, next)=> {
  return errorResponse (res, {
      statusCode: err.status,
      message: err.message,
  })
});

module.exports = app;