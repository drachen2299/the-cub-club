const Room = require('../models/room');

const addMember = async (socket, data) => {
  const room = await Room.find({type: "Overworld"});
  if (room) {
    console.log(data.user);
    room[0].members.push({
      username: data.username,
      bear: data.bear.fur,
      connected: true,
      socketId: socket.id,
    })
    Room.findOneAndUpdate({type: "Overworld"}, {members: room[0].members}, {new: true}, (err, updatedRoom) => {
      if (err) {
        socket.emit('error', err);
      } else {
        socket.emit('member added', updatedRoom);
        socket.to('Overworld').emit('room updated', updatedRoom);
        socket.join('Overworld');
      }
    })
  } else {
    console.log("what?");
    return;
  }
};

const removeMember = async (socket) => {
  const room = await Room.find({type: "Overworld"});
  const newMembers = room[0].members.filter((mem) => (mem.socketId !== socket.id));
  Room.findOneAndUpdate({ type: "Overworld" }, { members: newMembers }, { new: true }, (err, newRoom) => {
    if (err) {
      socket.emit('server error', {
        error: err.message,
      });
      return;
    } else {
      socket.to('Overworld').emit('room updated', newRoom);
    }
  })
}


module.exports = {
  addMember,
  removeMember,
}