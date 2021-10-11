const { model, Schema } = require("mongoose");


// Create a bear

const bearSchema = new Schema(
    {
        
        color: {type: String, required: true},

    },
    {timestamps: true}
)

module.exports = model("Bear", bearSchema);