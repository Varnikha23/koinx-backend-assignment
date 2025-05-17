const express = require('express');
const router = express.Router();
const { getLatestStats, getDeviation } = require('../controllers/cryptoController');

router.get('/stats', getLatestStats);
router.get('/deviation', getDeviation);

module.exports = router;

