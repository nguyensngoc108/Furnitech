const express = require('express');
const router = express.Router();

const{
    getCartInfo,
    addToCart,
    removeFromCart,
    addItem,
    removeItem,
    modifyCart

} = require('../controllers/cartControllers.js');

router.post("/add", addToCart);

router.post("/add-item", addItem);

router.post("/remove", removeFromCart);

router.get("/:userId", getCartInfo);

router.post("/remove-item", removeItem);

router.post("/modify", modifyCart);

module.exports = router;
