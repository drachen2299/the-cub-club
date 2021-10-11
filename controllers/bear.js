const Bear = require("../models/bear");

const findBears = async (req, res) => {
    try {
        const bears = await Bear.find();
        res.status(200).json(bears);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = { findBears };