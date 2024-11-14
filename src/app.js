const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const contentRouter = require("./routers/contentRouter");
const userRouter = require("./routers/userRouter");
const authRouter = require("./routers/authRouter");
const { errorResponse } = require("./controllers/responseController");

const app = express();


// CORS options to allow localhost and production frontend
const corsOptions = {
  origin: [
    'http://localhost:5173',    // Local development environment
    'https://technews.mirzashihab.com'  // Production domain
  ],
  methods: ['GET', 'POST'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true,  // Allow sending cookies with requests
};



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(morgan("dev"));




app.use("/api/posts", contentRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);


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