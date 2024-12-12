const express = require('express');
const router = express.Router();


const {
    getProducts,
    getProduct,
    getFeaturedProducts,
    getCategoryProducts,
    addProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/productControllers.js');


router.get("/", getProducts);

router.get("/featured", getFeaturedProducts);

router.get("/category/:categoryId", getCategoryProducts);

router.get("/:productId", getProduct);

router.post("/add", addProduct);

router.put("/update/:productId", updateProduct);

router.delete("/delete/:productId", deleteProduct);

module.exports = router;