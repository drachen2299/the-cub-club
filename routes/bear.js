const { Router } = require("express");
const bearController = require("../controllers/bear");
const { restrict } = require("../utils");

const bearRouter = new Router();

bearRouter.get("/all", bearController.findBears);
bearRouter.post("/new-bear", restrict, bearController.createBear);
module.exports = bearRouter;
