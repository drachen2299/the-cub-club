const { Router } = require("express");
const userRouter = require('./user');
const letterRouter = require("./letter");

const apiRouter = new Router();

apiRouter.use("/users", userRouter);

apiRouter.use("/letters", letterRouter);

module.exports = apiRouter;