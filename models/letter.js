const { model, Schema } = require("mongoose");

// letter
const letterSchema = new Schema(
  {
    recipient: { type: Schema.Types.ObjectId, ref: "User", required: true },
    letter: { type: String, require: true },
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true }
  },
  { timestamps: true }
);

module.exports = model("Letter", letterSchema);
