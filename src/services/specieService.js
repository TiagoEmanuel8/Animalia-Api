const models = require('../models/specieModel')

const createSpecies = async (dataSpecie) => {
  const {
    reino, filo, classe, ordem, subOrdem, familia, genero, especie, subEspecie, nome
  } = dataSpecie;

  const checkFields = reino && filo && classe && ordem && subOrdem && familia && genero && especie && nome;
  if(!checkFields) {
    return { status: 400, message: 'the fields "Reino", "Filo", "Classe", "Ordem", "SubOrdem", "Familia", "Genero", "Especie", "Nome" are required.'}
  }

  const specie = await models.createSpecies(dataSpecie);
  return specie;
}

module.exports = {
  createSpecies
};
