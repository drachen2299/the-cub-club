const { Router } = require("express");
const letterController = require("../controllers/letter");
const { restrict } = require("../utils");
const letterRouter = new Router();

letterRouter.get("/all", letterController.findAllLetters);
letterRouter.get("/:recipient", letterController.findLettersByRecipient);
letterRouter.get("/read/:id", letterController.findLetterById);
letterRouter.post("/new-letter", letterController.sendLetter);
letterRouter.delete("/delete/:id", letterController.deleteLetter);

module.exports = letterRouter;
