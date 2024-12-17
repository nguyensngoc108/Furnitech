require("dotenv").config();

const Cart = require("../models/Carts");
const Product = require("../models/Products");

const getCartInfo = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(userId);

    // Find all carts for the user
    const carts = await Cart.find({ user_id: userId }).populate(
      "items.product_id"
    );

    // Check if there is any cart with status "Pending"
    let pendingCart = carts.find((cart) => cart.status === "Pending");

    if (pendingCart) {
      // If there is a pending cart, return it
      return res.status(200).json({
        success: true,
        data: pendingCart,
      });
    }

    // If all carts are completed, create a new one
    let newCart = new Cart({
      user_id: userId,
      items: [],
      totalPrice: 0,
    });

    await newCart.save();

    return res.status(200).json({
      success: true,
      data: newCart,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};

const addItem = async (req, res) => {
  try {
    let { user_id, product_id } = req.body;

    const product = await Product.findById(product_id);

    if (!product) {
      return res.status(400).json({
        success: false,
        msg: "Product not found!",
      });
    }

    const cart = await Cart.findOne({ user_id });

    if (!cart) {
      let newCart = new Cart({
        user_id,
        items: [
          {
            product_id: product_id,
            quantity: 1,
            price: product.price,
          },
        ],
        totalPrice: product.price,
      });

      await newCart.save();

      return res.status(200).json({
        success: true,
        data: newCart,
        msg: "Product added to cart successfully!",
      });
    }

    // if user already has a cart
    let productIndex = cart.items.findIndex(
      (item) => item.product_id.toString() === product_id
    );

    if (productIndex > -1) {
      cart.items[productIndex].quantity += 1;
      cart.items[productIndex].price += product.price;
    } else {
      cart.items.push({
        product_id: product_id,
        quantity: 1,
        price: product.price,
      });
    }

    cart.totalPrice += product.price;

    await cart.save();

    res.status(200).json({
      success: true,
      data: cart,
      msg: "Product added to cart successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};

const addToCart = async (req, res) => {
  try {
    let { user_id, product_id, quantity, price } = req.body;

    const cart = await Cart.findOne({ user_id });

    if (!cart) {
      let newCart = new Cart({
        user_id,
        items: [
          {
            product_id,
            quantity,
            price,
          },
        ],
        totalPrice: price * quantity,
      });

      await newCart.save();

      return res.status(200).json({
        success: true,
        data: newCart,
        msg: "Product added to cart successfully!",
      });
    }

    let productIndex = cart.items.findIndex(
      (item) => item.product_id.toString() === product_id
    );

    if (productIndex > -1) {
      cart.items[productIndex].quantity += quantity;
      cart.items[productIndex].price += product_id.price * quantity;
    } else {
      cart.items.push({
        product_id,
        quantity,
        price: product_id.price * quantity,
      });
    }

    cart.totalPrice += product_id.price * quantity;

    await cart.save();

    res.status(200).json({
      success: true,
      data: cart,
      msg: "Product added to cart successfully!",
    });
  } catch (err) {
    console.log(err);
  }
};

const removeFromCart = async (req, res) => {
  try {
    let { user_id, product_id } = req.body;

    const cart = await Cart.findOne({ user_id });

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
      cart.totalPrice -= cart.items[productIndex].price;
      cart.items.splice(productIndex, 1);
    }

    await cart.save();

    res.status(200).json({
      success: true,
      data: cart,
      msg: "Product removed from cart successfully!",
    });
  } catch (err) {
    console.log(err);
  }
};

const removeItem = async (req, res) => {
  try {
    const { user_id, product_id } = req.body;
    console.log("user_id", user_id);
    console.log("product_id", product_id);

    const cart = await Cart.findOne({ user_id });

    if (!cart) {
      return res.status(400).json({
        success: false,
        msg: "Cart not found!",
      });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item._id.toString() === product_id
    );

    if (itemIndex === -1) {
      return res.status(400).json({
        success: false,
        msg: "Item not found in cart!",
      });
    }

    const item = cart.items[itemIndex];
    cart.totalPrice -= item.price;
    cart.items.splice(itemIndex, 1);

    await cart.save();

    res.status(200).json({
      success: true,
      data: cart,
      msg: "Item removed from cart successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};

const modifyCart = async (req, res) => {
  try {
    const { user_id, product_id, quantity } = req.body;

    console.log("user_id", user_id);
    console.log("product_id", product_id);
    console.log("quantity", quantity);

    // Check for valid quantity
    if (quantity <= 0) {
      return res.status(400).json({
        success: false,
        msg: "Quantity must be greater than zero",
      });
    }

    // Fetch cart with populated product details
    const cart = await Cart.findOne({ user_id }).populate("items.product_id");

    if (!cart) {
      return res.status(400).json({
        success: false,
        msg: "Cart not found!",
      });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item._id.toString() === product_id
    );

    if (itemIndex === -1) {
      return res.status(400).json({
        success: false,
        msg: "Item not found in cart!",
      });
    }

    const item = cart.items[itemIndex];

    // Validate that product_id exists and has a price
    if (!item.product_id || !item.product_id.price) {
      return res.status(400).json({
        success: false,
        msg: "Product information is missing or incomplete!",
      });
    }

    // Update cart totals
    cart.totalPrice -= item.price; // Subtract old price
    item.quantity = quantity;
    item.price = item.product_id.price * quantity; // Recalculate price

    if (isNaN(item.price)) {
      return res.status(400).json({
        success: false,
        msg: "Invalid price calculation",
      });
    }

    cart.totalPrice += item.price; // Add updated price

    await cart.save();

    res.status(200).json({
      success: true,
      data: cart,
      msg: "Cart updated successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};

module.exports = {
  getCartInfo,
  addToCart,
  removeFromCart,
  addItem,
  removeItem,
  modifyCart,
};
