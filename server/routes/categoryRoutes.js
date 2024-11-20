const express = require('express');
const router = express.Router();

const {
    getCategories,
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/categoryControllers.js');

router.get("/", getCategories);

router.get("/:categoryId", getCategory);

router.post("/add", addCategory);

router.put("/update/:categoryId", updateCategory);

router.delete("/delete/:categoryId", deleteCategory);

module.exports = router;
