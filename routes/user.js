const { Router } = require("express");
const userController = require("../controllers/user");

const userRouter = new Router();

userRouter.get("/all", userController.findAllUsers);

module.exports = userRouter;