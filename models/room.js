const {model, Schema} = require('mongoose');

const roomSchema = new Schema(
  {
    type: {type: String, required: true, unique: true},
    members: [
      {
        username: {type: String, required: true},
        bear: {type: String, required: true},
        location: {
          x: {type: Number, required: true, default: 11},
          y: {type: Number, required: true, default: 3},
        },
        socketId: {type: String, required: true},
        connected: {type: Boolean, default: false},
      }
    ],
  },
  {timestamps: true}
)

module.exports = model('Room', roomSchema);