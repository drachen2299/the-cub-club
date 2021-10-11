const User = require("../models/user");
const letter = require("../models/letter");
const faker = require("faker");

const findAllLetters = async (req, res) => {
    try {
        const letters = await letter.find().populate("sender").populate("recipient");
        res.status(200).json(letters);
    } catch (error) {
        res.status(500).json({error: error.letter});
    }
}

module.exports = {findAllLetters};