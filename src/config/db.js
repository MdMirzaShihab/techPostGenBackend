const mongoose = require("mongoose");
const { MongodbURL } = require("../secret");

const connectDB = async (options) => {
  try {
    await mongoose.connect(MongodbURL, options);
    console.log("MongoDB connected");
    mongoose.connection.on("error", (error) => {
      console.error("DB connection error: ", error);
    });
  } catch (error) {
    console.error("couldn't connect to db: ", error.toString());
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
