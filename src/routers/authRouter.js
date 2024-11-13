const express = require ('express');
const { isLoggedIn, isLoggedOut } = require('../middlewares/auth');
const { handleLogin, handleLogout } = require('../controllers/authController');
const authRouter = express.Router();


authRouter.post("/login",isLoggedOut, handleLogin);
authRouter.post("/logout", isLoggedIn, handleLogout);


module.exports = authRouter;