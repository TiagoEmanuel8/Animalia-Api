// const models = require('../models/specieModel');
const Specie = require('../models/Specie');

const createSpecies = async (dataSpecie) => {
  const {
    reino, filo, classe, ordem, familia, genero, especie, nome
  } = dataSpecie;

  const checkFields = reino && filo && classe && ordem && familia && genero && especie && nome;
  if(!checkFields) {
    return { status: 400, message: 'the fields "Reino", "Filo", "Classe", "Ordem", "Familia", "Genero", "Especie", "Nome" are required.'}
  }

  const specie = await Specie.create(dataSpecie);
  return specie;
};

const addWithImage = async (id, image) => {
  const specie = await Specie.findOne({ _id: id });
    if(!specie) {
      return { status: 400, message: 'species not found' }
    }
  // const formatImage = { image }
  const addImage = await Specie.updateOne({ _id: id}, { image });
  return addImage;
};

const getAllSpecies = async () => {
  const species = await Specie.find();
  return species;
};

const getSpeciesById = async (id) => {
  const specie = await Specie.findOne({ _id: id });
    if(!specie) {
      return { status: 400, message: 'species not found' }
    }
  return specie;
};

const updateSpecies = async (id, dataSpecie) => {
  const {
    reino, filo, classe, ordem, familia, genero, especie, nome
  } = dataSpecie;

  const checkFields = reino && filo && classe && ordem && familia && genero && especie && nome;
  if(!checkFields) {
    return { status: 400, message: 'the fields "Reino", "Filo", "Classe", "Ordem", "Familia", "Genero", "Especie", "Nome" are required.'}
  }

  const findSpecie = await Specie.findOne({ _id: id });
    if(!findSpecie) {
      return { status: 400, message: 'species not found' }
    };
  
  const specie = await Specie.updateOne({ _id: id }, dataSpecie );
  return specie;
};

module.exports = {
  createSpecies,
  addWithImage,
  getAllSpecies,
  getSpeciesById,
  updateSpecies
};
