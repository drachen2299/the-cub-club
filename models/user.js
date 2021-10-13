const { model, Schema } = require("mongoose");

// User
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    //password Auth
    bear:
    {
        fur: { type: String, required: false }
    }
},
    { timestamps: true });


module.exports = model("User", userSchema);