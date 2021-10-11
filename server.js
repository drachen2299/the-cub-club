const express = require('express');
const cors = require('cors');
const logger = require('morgan');
require('./db');
const api = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use("/", api);

app.get("/", (req,res) => {
    res.status(200).json({message:  "Welcome to root route!"});
})
app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));