const express = require('express');
const cors = require('cors');
const http = require("http");
const logger = require('morgan');
const path = require("path");
require('./db');
const { addMember, removeMember, moveMember } = require('./controllers/room');
const PORT = process.env.PORT || 3001;
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
const api = require("./routes");

app.use(express.static(path.join(__dirname, "client/build")));

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use("/api", api);

app.get("/api", (req, res) => {
    res.status(200).json({letter:  "Welcome to root route!"});
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/public", "index.html"));
})

io.on('connection', (socket) => {
    console.log("connected");
    socket.join('Overworld');
    socket.on('add member', (data) => {
        addMember(socket, data);
    })
    socket.on('move member', (data) => {
      moveMember(socket, data);
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeMember(socket);
      })
})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));