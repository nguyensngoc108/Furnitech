const express = require('express');
const router = express.Router();

const{
    getCartInfo,
    addToCart,
    removeFromCart,
    removeAllFromCart,
} = require('../controllers/cartControllers.js');

router.post("/add", addToCart);

router.post("/remove", removeFromCart);

router.post("/removeAll", removeAllFromCart);

router.get("/:user_id", getCartInfo);

module.exports = router;
