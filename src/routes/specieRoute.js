const express = require('express');
const rescue = require('express-rescue');
const controller = require('../controllers/specieController');

const router = express.Router();

router.post('/', rescue(controller.createSpecies));

module.exports = router;
