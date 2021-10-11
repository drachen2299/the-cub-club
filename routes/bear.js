const { Router } = require("express");
const bearController = require("../controllers/bear");

const bearRouter = new Router();

bearRouter.get("/all", bearController.findBears);

module.exports = bearRouter;
