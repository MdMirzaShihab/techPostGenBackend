const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const { jwtActivationKey } = require("../secret");

const isLoggedIn = (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      throw createError(401, "Please login first");
    }

    const decoded = jwt.verify(accessToken, jwtActivationKey);

    if (!decoded) {
      throw createError(401, "Please login first");
    }

    req.user = decoded;

    next();
  } catch (error) {
    next(error);
  }
};

const isLoggedOut = (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (accessToken) {
      try {
        const decoded = jwt.verify(accessToken, jwtActivationKey);
        if (decoded) {
          throw createError(400, "The user is already logged in");
        }
      } catch (error) {
        throw error;
      }
    }

    next();
  } catch (error) {
    next(error);
  }
};


const contentAccessController = (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      req.user = null; // No token, set user to null
      return next();
    }

    const decoded = jwt.verify(accessToken, jwtActivationKey);

    if (!decoded) {
      req.user = null; // Invalid token, set user to null
      return next();
    }

    req.user = decoded; // Attach user data to request

    next();
  } catch (error) {
    req.user = null; // On error, set user to null
    next();
  }
};



module.exports = {
  isLoggedIn,
  isLoggedOut,
  contentAccessController
};
