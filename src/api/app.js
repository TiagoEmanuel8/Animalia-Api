const express = require('express');
const bodyParser = require('body-parser');
const router = require('../routes/specieRoute')

const app = express();
app.use(bodyParser.json());

app.get('/specie', router);

module.exports = app;
