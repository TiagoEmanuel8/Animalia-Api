const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  return res.status(200).send('funcionou');
});

module.exports = app;
