const { Router } = require("express");
const letterController = require("../controllers/letter");
const { restrict } = require("../utils");
const letterRouter = new Router();

letterRouter.get("/all", letterController.findAllLetters);
letterRouter.post("/new-letter", restrict, letterController.sendLetter);

module.exports = letterRouter;
