const { Router } = require("express");
const userRouter = require('./user');
const messageRouter = require("./message");
const bearRouter = require("./bear");

const apiRouter = new Router();

apiRouter.use("/bears", bearRouter);

apiRouter.use("/users", userRouter);

apiRouter.use("/messages", messageRouter);

module.exports = apiRouter;