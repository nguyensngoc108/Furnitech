const Products = require("../models/Products");

const getProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (err) {
    console.log(err);
  }
};

const getProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Products.findById(productId);
    if (!product) {
      return res.status(400).json({
        success: false,
        msg: "Product not found!",
      });
    }
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    console.log(err);
  }
};

const getFeaturedProducts = async (req, res) => {
  try {
    const products = await Products.find({ isFeatured: true });
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (err) {
    console.log(err);
  }
};

const getCategoryProducts = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Products.find({ category: category });

    if (!products) {
      return res.status(400).json({
        success: false,
        msg: "No products found!",
      });
    }

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (err) {
    console.log(err);
  }
};

const addProduct = async (req, res) => {
  try {
    let product = req.body;
    let newProduct = new Products({
    name: product.name,
      description: product.description,
      quantity: product.quantity,
      price: product.price,
      category: product.category,
      image: product.image,
      isFeatured: product.isFeatured,
    });
    await newProduct.save();
    res.status(200).json({
      success: true,
      data: newProduct,
      msg: "Product added successfully!",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getProducts,
  getProduct,
  getFeaturedProducts,
  getCategoryProducts,
  addProduct,
};
