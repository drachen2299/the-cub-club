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
    return res.status(200).json(letters);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const findLetterById = async (req, res) => {
  try {
    const { id } = req.params;
    const letter = await Letter.findById(id);
    if (!letter) {
      return res.status(404).json({ message: "Letter not found" })
    }
    return res.status(200).json(letter);
  } catch (error) {
    res.status(500).json(error);
  }
};

const findLettersByRecipient = async (req, res) => {
  try {
    const { recipient } = req.params;
    const letters = await Letter.find({ recipient }).populate("sender");
    return res.status(200).json(letters);
  } catch (error) {
    res.status(500).json(error);
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
    return res.status(201).json({message: "Letter sent!"});
  } catch (error) {
    res.status(500).json(error);
  }
};

const destroyLetter = async (req, res) => {
  try {
    const { id } = req.params;
    const letter = await Letter.findByIdAndDelete(id);
    if (!letter) {
      return res.status(404).json({ message: "Letter not found" })
    }
    return res.status(204).json(letter)
  } catch (error) {
    res.status(500).json(error);
  }
}; 

module.exports = { 
  findAllLetters, 
  sendLetter,
  findLetterById,
  findLettersByRecipient,
  destroyLetter
};
