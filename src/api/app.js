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

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Acesse https://github.com/TiagoEmanuel8/species-Api para mais detalhes de funcionamento dessa API' });
});

app.use('/specie', router);
app.use('/images', express.static(`${uploadPath}`));

module.exports = app;
