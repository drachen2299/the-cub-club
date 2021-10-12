const Bear = require("../models/bear");

const findBears = async (req, res) => {
  try {
    const bears = await Bear.find();
    res.status(200).json(bears);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBear = async (req, res) => {
  try {
    const newBear = {
      color: req.body.color,
    };
    const bear = await Bear.create(newBear);
    res.status(201).json({ message: "New Bear created!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { findBears, createBear };
