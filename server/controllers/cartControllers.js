require("dotenv").config();

const Cart = require("../models/Carts");
const Product = require("../models/Products");

const getCartInfo = async (req, res) => {
  try {
    const { user_id } = req.params;
    const cart = await Cart.find({ user_id }).populate("items.product_id");

    if (!cart) {
      return res.status(400).json({
        success: false,
        msg: "Cart is empty!",
      });
    }

    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (err) {
    console.log(err);
  }
};

const addToCart = async (req, res) => {
  try {
    const { user_id, products } = req.body; // products is an array of { product_id, quantity, price }

    let cart = await Cart.findOne({ user_id });

    if (!cart) {
      let newCart = new Cart({
        user_id,
        items: products.map(product => ({
          product_id: product.product_id,
          quantity: product.quantity,
          price: product.price,
        })),
        totalPrice: products.reduce((total, product) => total + product.price * product.quantity, 0),
      });

      await newCart.save();

      // Update product quantities
      for (const product of products) {
        await Product.findByIdAndUpdate(product.product_id, {
          $inc: { quantity: -product.quantity }
        });
      }

      return res.status(200).json({
        success: true,
        data: newCart,
        msg: "Products added to cart successfully!",
      });
    }

    products.forEach(product => {
      let productIndex = cart.items.findIndex(
        (item) => item.product_id.toString() === product.product_id
      );

      if (productIndex > -1) {
        cart.items[productIndex].quantity += product.quantity;
        cart.items[productIndex].price += product.price * product.quantity;
      } else {
        cart.items.push({
          product_id: product.product_id,
          quantity: product.quantity,
          price: product.price * product.quantity,
        });
      }

      cart.totalPrice += product.price * product.quantity;
    });

    await cart.save();

    // Update product quantities
    for (const product of products) {
      await Product.findByIdAndUpdate(product.product_id, {
        $inc: { quantity: -product.quantity }
      });
    }

    res.status(200).json({
      success: true,
      data: cart,
      msg: "Products added to cart successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      msg: "An error occurred while adding products to the cart.",
    });
  }
};


const removeFromCart = async (req, res) => {
  try {
    let { user_id, product_id } = req.body;

    const cart = await Cart.findOne
    ({ user_id });

    if (!cart) {
        return res.status(400).json({
            success: false,
            msg: "Cart is empty!",
        });
        }

    let productIndex = cart.items.findIndex(
        (item) => item.product_id.toString() === product_id
    );

    if (productIndex > -1) {
      const productQuantity = cart.items[productIndex].quantity;
      const productPrice = cart.items[productIndex].price;

      cart.totalPrice -= productPrice * productQuantity;
      cart.items.splice(productIndex, 1);

      // Update product quantity
      await Product.findByIdAndUpdate(product_id, {
        $inc: { quantity: productQuantity }
      });
    }

    await cart.save();

    res.status(200).json({
        success: true,
        data: cart,
        msg: "Product removed from cart successfully!",
    });

}
catch (err) {
    console.log(err);
}
};

const removeAllFromCart = async (req, res) => {
  try {
    const { user_id } = req.body;

    const cart = await Cart.findOne({ user_id });

    if (!cart) {
      return res.status(400).json({
        success: false,
        msg: "Cart is empty!",
      });
    }

    // Update product quantities
    for (const item of cart.items) {
      await Product.findByIdAndUpdate(item.product_id, {
        $inc: { quantity: item.quantity }
      });
    }

    // Remove the cart
    await Cart.deleteOne({ user_id });

    res.status(200).json({
      success: true,
      msg: "All products removed and cart deleted successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      msg: "An error occurred while removing all products from the cart.",
    });
  }
};

module.exports = {
  getCartInfo,
  addToCart,
  removeFromCart,
  removeAllFromCart
};
