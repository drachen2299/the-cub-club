const User = require("../models/user");
const Letter = require("../models/letter");
const faker = require("faker");
const {
  createUserInfo
} = require('../utils');

const findAllLetters = async (req, res) => {
  try {
    const letters = await Letter
      .find()
      .populate("sender")
      .populate("recipient");
    res.status(200).json(letters);
  } catch (error) {
    res.status(500).json({ error: error.Letter });
  }
};

const sendLetter = async (req, res) => {
  try {
    const [sender] = await User.find({username: req.body.sender.username})
    const [recipient] = await User.find({ username: req.body.recipient.username });
    const newLetter = {
      recipient: recipient._id,
      letter: req.body.letter,
      sender: sender._id,
    };
    const letter = new Letter(newLetter);
    await letter.save();
    res.status(201).json({message: "Letter sent!"});
  } catch (error) {
    res.status(500).json({ error: error.Letter });
  }
};

module.exports = { findAllLetters, sendLetter };
