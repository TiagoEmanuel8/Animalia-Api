const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { resolve } = require('path');

const router = require('../routes/specieRoute');

const uploadPath = resolve(__dirname, '..', 'images');

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);

app.use('/specie', router);
app.use('/images', express.static(`${uploadPath}`));

module.exports = app;
