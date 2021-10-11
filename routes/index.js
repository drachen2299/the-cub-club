const { Router } = require("express");
const userRouter = require('./user');
const letterRouter = require("./letter");
const bearRouter = require("./bear");

const apiRouter = new Router();

apiRouter.use("/bears", bearRouter);

apiRouter.use("/users", userRouter);

apiRouter.use("/letters", letterRouter);

module.exports = apiRouter;