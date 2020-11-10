const express = require('express');

const app = express();

const {
  PORT,
} = require('dotenv').config().parsed;

app.get('/api', (req, res) => res.end('Version 0.0.1'));

app.listen(PORT, () => console.log('Api corriendo...'));
