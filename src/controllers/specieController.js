const service = require('../services/specieService');

const createSpecies = async (req, res) => {
  const dataSpecie = req.body;
  const create = await service.createSpecies(dataSpecie);
    if(create.message) {
      return res.status(create.status).json({ message: create.message });
    }
  return res.status(201).json(create);
};

const addWithImage = async (req, res) => {
  const { id } = req.params;
  const { filename } = req.file;
  const image = `http://localhost:3001/images/${filename}`;
  const addImage = await service.addWithImage(id, image);
  return res.status(201).json(addImage);
};

const getAllSpecies = async (_req, res) => {
  const species = await service.getAllSpecies();
  return res.status(200).json(species);
};

const getSpeciesById = async () => {};

const getSpeciesByName = async () => {};

const getSpeciesByClass = async () => {};

const getSpeciesByFamily = async () => {};

const getSpeciesByGender = async () => {};

module.exports = {
  createSpecies,
  addWithImage,
  getAllSpecies,
  getSpeciesById,
  getSpeciesByName,
  getSpeciesByClass,
  getSpeciesByFamily,
  getSpeciesByGender
};
