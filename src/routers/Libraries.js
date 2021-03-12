const express = require('express');
const librariesController = require('../controllers/Libraries');

const router = express.Router();

router.get('/', librariesController.getAll);

module.exports = router;