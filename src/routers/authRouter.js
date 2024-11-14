const express = require ('express');
const { isLoggedIn, isLoggedOut } = require('../middlewares/auth');
const { handleLogin, handleLogout, getStatus } = require('../controllers/authController');
const authRouter = express.Router();


authRouter.post("/login",isLoggedOut, handleLogin);
authRouter.post("/logout", isLoggedIn, handleLogout);
authRouter.get("/status", isLoggedIn, getStatus);


module.exports = authRouter;