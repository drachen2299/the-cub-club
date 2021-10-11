const express = require('express');
const cors = require('cors');
const logger = require('morgan');
require('./db');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.listen(PORT, () => console.log(`Server is running on port PORT!`))