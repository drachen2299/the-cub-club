const { Router } = require("express");
const letterController = require("../controllers/letter");

const letterRouter = new Router();

letterRouter.get("/all", letterController.findAllLetters);

module.exports = letterRouter;
