const express = require('express');
const router = express.Router();

const{
    getCartInfo,
    addToCart,
    removeFromCart,
} = require('../controllers/cartControllers.js');

router.post("/add", addToCart);

router.post("/remove", removeFromCart);

router.get("/:userId", getCartInfo);

module.exports = router;
