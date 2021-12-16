const express = require('express');
const rescue = require('express-rescue');
const controller = require('../controllers/specieController');
const multer = require('../utils/imageUpload')

const router = express.Router();

router.post('/', rescue(controller.createSpecies));
router.put('/:id/image', multer.imageUpload(), rescue(controller.addWithImage));
router.get('/:id/image', multer.imageUpload());
router.get('/', controller.getAllSpecies);
router.get('/:id', controller.getSpeciesById);
router.get('/:nome', controller.getSpeciesByName);
router.get('/:classe', controller.getSpeciesByClass);
router.get('/:familia', controller.getSpeciesByFamily);
router.get('/:genero', controller.getSpeciesByGender);

module.exports = router;
