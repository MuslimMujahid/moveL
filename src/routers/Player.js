const express = require('express');
const playerController = require('../controllers/Player');

const router = express.Router();

router.post('/', playerController.play);

module.exports = router;
