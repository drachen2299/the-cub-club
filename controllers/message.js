const User = require("../models/user");
const Message = require("../models/message");
const faker = require("faker");

const findAllMessages = async (req, res) => {
    try {
        const messages = await Message.find().populate("author");
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {findAllMessages};