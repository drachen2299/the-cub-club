const { Router } = require("express");
const messageController = require("../controllers/message");

const messageRouter = new Router();

messageRouter.get("/all", messageController.findAllMessages);

module.exports = messageRouter;
