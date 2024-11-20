const Category = require('../models/Categories');

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.status(200).json({
            success: true,
            data: categories,
        });
    } catch (err) {
        console.log(err);
    }
}

const getCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(400).json({
                success: false,
                msg: "Category not found!",
            });
        }
        res.status(200).json({
            success: true,
            data: category,
        });
    }
    catch (err) {
        console.log(err);
    }
}

const addCategory = async (req, res) => {
    try {
        let category = req.body;
        let newCategory = new Category({
            name: category.name,
            description: category.description,
        });
        await newCategory.save();
        res.status(200).json({
            success: true,
            data: newCategory,
            msg: "Category added successfully!",
        });
    }
    catch (err) {
        console.log(err);
    }
}

const updateCategory = async (req, res) => {
    try {
        let category = req.body;
        let updatedCategory = {
            name: category.name,
        };
        await Category.findByIdAndUpdate(category._id, updatedCategory);
        res.status(200).json({
            success: true,
            data: updatedCategory,
            msg: "Category updated successfully!",
        });
    }
    catch (err) {
        console.log(err);
    }
}

const deleteCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        await Category.findByIdAndDelete(categoryId);
        res.status(200).json({
            success: true,
            msg: "Category deleted successfully!",
        });
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getCategories,
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory,
}