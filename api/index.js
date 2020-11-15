const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRouter = require('./controllers/item');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const {
  PORT,
} = require('dotenv').config().parsed;

app.use('/api', itemRouter);

app.listen(PORT, () => console.log('Api corriendo...'));
