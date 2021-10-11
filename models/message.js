const { model, Schema } = require("mongoose");

// Messages
const messageSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = model("Message", messageSchema);
