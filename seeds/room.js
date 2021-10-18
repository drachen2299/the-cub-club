const db = require('../db')
const Room = require('../models/room')

const main = async () => {
    const room = [{
      type: "Overworld",
      members: [
      ]
    }]
    await Room.deleteMany();
    await Room.insertMany(room)
}
const run = async () => {
    await main()
    db.close()
}

run()