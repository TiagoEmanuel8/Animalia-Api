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
}

module.exports = {
  createSpecies,
}
