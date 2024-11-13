const express = require ('express');
const { registerUser } = require('../controllers/userContrller');
const { isLoggedOut } = require('../middlewares/auth');
const userRouter = express.Router();



userRouter.post("/register", isLoggedOut, registerUser );

module.exports = userRouter;