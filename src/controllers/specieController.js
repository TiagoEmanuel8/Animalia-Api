const service = require('../services/specieService');

const createSpecies = (req, res) => {
  return res.status(200).json({ message: 'deu certo' })
};

module.exports = {
  createSpecies
};
