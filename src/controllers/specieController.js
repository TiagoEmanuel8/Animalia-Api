const service = require('../services/specieService');

const createSpecies = async (req, res) => {
  const dataSpecie = req.body;
  const create = await service.createSpecies(dataSpecie);
    if(create.message) {
      return res.status(create.status).json({ message: create.message });
    }
  return res.status(201).json(create)
};

module.exports = {
  createSpecies
};
