const express = require('express');
const bodyParser = require('body-parser');
const itemRouter = require('./items');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const {
  PORT,
} = require('dotenv').config().parsed;

app.use('/api', itemRouter);

app.listen(PORT, () => console.log('Api corriendo...'));
