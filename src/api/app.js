require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { resolve } = require('path');
const PORT = 3001;
const router = require('../routes/specieRoute');

const uploadPath = resolve(__dirname, '..', 'images');

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  }),
);

app.get('/', (_req, res) => {
  return res.status(200).json({ message: 'Acesse https://github.com/TiagoEmanuel8/species-Api para mais detalhes de funcionamento dessa API' });
});

app.use('/specie', router);
app.use('/images', express.static(`${uploadPath}`));

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apianimalia.ckrpd.mongodb.net/species?retryWrites=true&w=majority`)
  .then(() => {
    console.log('conectamos ao mongodb');
    app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
  })
  .catch((err) => console.log(err));
