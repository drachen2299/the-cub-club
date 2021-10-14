const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const path = require("path");
require('./db');
const api = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use("/api", api);

app.get("/api", (req, res) => {
    res.status(200).json({letter:  "Welcome to root route!"});
})
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
})
app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));