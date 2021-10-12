const User = require("../models/user");
const Letter = require("../models/letter");
const faker = require("faker");

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
    const [user] = await User.find({ username: req.body.username });
    const userInfo = createUserInfo(res.locals.user);
    const newLetter = {
      title: req.body.title,
      recipient: user._id,
      letter: req.body.letter,
      sender: userInfo._id,
    };
    const letter = await Letter.create(newLetter);
    res.status(201).json({message: "Letter sent!"});
  } catch (error) {
    res.status(500).json({ error: error.Letter });
  }
};

module.exports = { findAllLetters, sendLetter };
