const {model, Schema} = require('mongoose');

const roomSchema = new Schema(
  {
    type: {type: String, required: true, unique: true},
    members: [
      {
        name: {type: String, required: true},
        socketId: {type: String, required: true},
        connected: {type: Boolean, default: false},
      }
    ],
  },
  {timestamps: true}
)

module.exports = model('Room', roomSchema);