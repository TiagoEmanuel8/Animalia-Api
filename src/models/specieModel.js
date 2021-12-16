const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createSpecies = async (dataSpecie) => {
  const {
    reino, filo, classe, ordem, subOrdem, familia, genero, especie, subEspecie, nome
  } = dataSpecie;

  const { insertedId: id } = await connection()
    .then((db) => db.collection('specie')
      .insertOne(
        { reino, filo, classe, ordem, subOrdem, familia, genero, especie, subEspecie, nome }
      ));
    
  const specieInFormat = await connection().then((db) => db.collection('specie').findOne(ObjectId(id)));
  
  return specieInFormat;
};

const addWithImage = async (id, image) => {
  await connection()
    .then((db) => db
      .collection('specie')
      .updateOne({ _id: ObjectId(id) }, { $set: { image } }));
  const specieWithImage = await connection().then((db) => db.collection('specie').findOne(ObjectId(id)));
  return specieWithImage;
};

const getAllSpecies = async () => {
  const species = await connection()
    .then((db) => db.collection('specie').find().toArray());
  return species;
};

const getSpeciesById = async (id) => {
  const specie = await connection().then((db) => db.collection('specie').findOne(ObjectId(id)));
  return specie;
};

module.exports = {
  createSpecies,
  addWithImage,
  getAllSpecies,
  getSpeciesById
};
