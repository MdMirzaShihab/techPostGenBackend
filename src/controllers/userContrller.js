const createError = require("http-errors");
const User = require("../models/userModel");
const { successResponse } = require("./responseController");


// register user upto sending email
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const userExists = await User.exists({ email: email });
    if (userExists) {
      throw createError(409, "user already exists, please login");
    }

    await User.create({
      name,
      email,
      password,
      phone,
      address,
    });

    successResponse(res, {
      statusCode: 200,
      message: `user registered successfully`,
      payload: {
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser
};
