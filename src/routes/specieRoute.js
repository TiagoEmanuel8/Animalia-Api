const express = require('express');
const rescue = require('express-rescue');
const controller = require('../controllers/specieController');
const multer = require('../utils/imageUpload')

const router = express.Router();

router.post('/', rescue(controller.createSpecies));
router.put('/:id/image', multer.imageUpload(), rescue(controller.addWithImage));
router.get('/:id/image', multer.imageUpload());
router.get('/', rescue(controller.getAllSpecies));
router.get('/:id', rescue(controller.getSpeciesById));
router.get('/:nome', rescue(controller.getSpeciesByName));

module.exports = router;
