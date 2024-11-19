const express = require('express');
const router = express.Router();


const {
    getProducts,
    getProduct,
    getFeaturedProducts,
    getCategoryProducts,
    addProduct,
} = require('../controllers/productControllers.js');


router.get("/", getProducts);

router.get("/featured", getFeaturedProducts);

router.get("/category/:category", getCategoryProducts);

router.get("/:productId", getProduct);

router.post("/add", addProduct);

module.exports = router;