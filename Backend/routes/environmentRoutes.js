const express = require('express');
const { createRandomEnvironment } = require('../controllers/environmentController');
const router = express.Router();

router.post('/create-random', createRandomEnvironment);

module.exports = router;
