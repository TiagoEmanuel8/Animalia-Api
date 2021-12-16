const express = require('express');
const rescue = require('express-rescue');
const controller = require('../controllers/specieController');
const multer = require('../utils/imageUpload')

const router = express.Router();

router.post('/', rescue(controller.createSpecies));
router.put('/:id/image', multer.imageUpload(), rescue(controller.addWithImage))

module.exports = router;
