const Products = require("../models/Products");

const getProducts = async (req, res) => {
  try {
    const products = await Products.find({}).populate("categoryId" , "name isFeatured");
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
    const { categoryId } = req.params;
    const products = await Products.find({ categoryId: categoryId });

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
      image: product.image,
      categoryId: product.categoryId,
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

const updateProduct = async (req, res) => {
  try {
    let product = req.body;
    let productId = req.params.productId;
    let categoryId = req.params.categoryId;
    let updatedProduct = {
      name: product.name,
      description: product.description,
      quantity: product.quantity,
      price: product.price,
      categoryId: product.categoryId,
      image: product.image,
      isFeatured: product.isFeatured,
    };
    await Products.findByIdAndUpdate(productId, updatedProduct);
    res.status(200).json({
      success: true,
      data: updatedProduct,
      msg: "Product updated successfully!",
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    await Products.findByIdAndDelete(productId);
    res.status(200).json({
      success: true,
      msg: "Product deleted successfully!",
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
  updateProduct,
  deleteProduct,
};
