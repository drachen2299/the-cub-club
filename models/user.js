const { model, Schema } = require("mongoose");

// User
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    //password Auth
    bear:
    {
        color: { type: String, required: true }
    }
},
    { timestamps: true });


module.exports = model("User", userSchema);