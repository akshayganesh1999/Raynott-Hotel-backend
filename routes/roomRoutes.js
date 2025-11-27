const express = require('express');
const router = express.Router();
const { getRooms, getFeaturedRooms, getRoomById } = require('../controllers/roomController');

router.get('/featured', getFeaturedRooms);

router.get('/', getRooms);

router.get('/:id', getRoomById);

module.exports = router;