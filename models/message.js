const { model, Schema } = require("mongoose");

// Messages
const messageSchema = new Schema(
  {
    title: { type: String, required: true },
    recipient: { type: Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, require: true },
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true }
  },
  { timestamps: true }
);

module.exports = model("Message", messageSchema);
