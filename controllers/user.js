const User = require("../models/user");
const faker = require("faker");

const findAllUsers = async (req, res) => {
    try {
        const users = await User.find().populate("bear");
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.letter});
    }
}

module.exports = {findAllUsers};