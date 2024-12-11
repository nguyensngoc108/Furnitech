const Order = require("../models/Orders");
const Cart = require("../models/Carts");
const User = require("../models/Users");

const checkout = async (req, res) => {
  try {
    const { cart_id, shippingAddress } = req.body;

    // Retrieve the cart details using cart_id
    const cart = await Cart.findById(cart_id).populate("items.product_id");

    if (!cart) {
      return res.status(400).json({
        success: false,
        msg: "Cart is empty!",
      });
    }

    // Retrieve user details using user_id from cart
    const user = await User.findById(cart.user_id);

    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User not found!",
      });
    }

    // Create a new order with the cart details and user information
    const newOrder = new Order({
      cart_id: cart._id,
      shippingAddress,
      orderDate: new Date(),
    });

    await newOrder.save();

    // Return the order details in the response
    res.status(200).json({
      success: true,
      data: {
        order: newOrder,
        user: {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          phone: user.phone,
        },
        cart: cart.items,
        totalPrice: cart.totalPrice,
      },
      msg: "Order placed successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      msg: "An error occurred during checkout.",
    });
  }
};

module.exports = {
  checkout,
};

