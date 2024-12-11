const express = require('express');
const router = express.Router();

const {
    checkout,
} = require('../controllers/orderControllers.js');

router.post("/checkout", checkout);

module.exports = router;