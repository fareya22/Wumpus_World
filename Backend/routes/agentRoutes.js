const express = require('express');
const { makeMove } = require('../controllers/agentController');
const router = express.Router();

router.post('/move', makeMove);

module.exports = router;
