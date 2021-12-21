const mongoose = require('mongoose');

const Specie = mongoose.model('Specie', {
  reino: String,
  filo: String,
  classe: String,
  ordem: String,
  subOrdem: String,
  familia: String,
  genero: String,
  especie: String,
  subEspecie: String,
  nome: String,
  nomeCientifico: String,
});

module.exports = Specie;
