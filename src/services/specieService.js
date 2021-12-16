const models = require('../models/specieModel')

const createSpecies = async (dataSpecie) => {
  const {
    reino, filo, classe, ordem, familia, genero, especie, nome
  } = dataSpecie;

  const checkFields = reino && filo && classe && ordem && familia && genero && especie && nome;
  if(!checkFields) {
    return { status: 400, message: 'the fields "Reino", "Filo", "Classe", "Ordem", "Familia", "Genero", "Especie", "Nome" are required.'}
  }

  const specie = await models.createSpecies(dataSpecie);
  return specie;
};

const addWithImage = async (id, image) => {
  const addImage = await models.addWithImage(id, image);
  return addImage;
};

const getAllSpecies = async () => {
  const species = await models.getAllSpecies();
  return species;
};

const getSpeciesById = async (id) => {
  const specie = await models.getSpeciesById(id);
  if(!specie) {
    return { status: 400, message: 'species not found' }
  }
  return specie;
};

module.exports = {
  createSpecies,
  addWithImage,
  getAllSpecies,
  getSpeciesById
};
