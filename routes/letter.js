const { Router } = require("express");
const letterController = require("../controllers/letter");

const letterRouter = new Router();

letterRouter.get("/all", letterController.findAllLetters);
letterRouter.post("/new-letter", letterController.sendLetter);

module.exports = letterRouter;
