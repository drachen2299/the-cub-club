const { Router } = require("express");
const userController = require("../controllers/user");
const user = require("../models/user");
const { restrict } = require("../utils");

const userRouter = new Router();

userRouter.get("/all", userController.findAllUsers);
userRouter.post("/login", userController.login);
userRouter.post("/register", userController.registration);
userRouter.post("/new-bear", userController.userBear)
userRouter.get("/authenticate", restrict, userController.authenticate);
module.exports = userRouter;