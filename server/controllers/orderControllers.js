const Order = require("../models/Orders");
const Cart = require("../models/Carts");
const User = require("../models/Users");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user_id");
    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (err) {
    console.log(err);
  }
};

const getOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    console.log("order", orderId);
    const order = await Order.findById(orderId)
      .populate("user_id")
      .populate({
        path: "cart_id",
        populate: {
          path: "items.product_id",
          model: "Product",
        },
      });
    if (!order) {
      return res.status(400).json({
        success: false,
        msg: "Order not found!",
      });
    }
    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};

const addOrder = async (req, res) => {
  try {
    let order = req.body;

    let cart = await Cart.findById(order.cart_id);
    if (!cart) {
      return res.status(400).json({
        success: false,
        msg: "Cart not found!",
      });
    } else if (cart.status === "Completed") {
      return res.status(400).json({
        success: false,
        msg: "Cart is already completed!",
      });
    }

    let newOrder = new Order({
      cart_id: order.cart_id,
      user_id: order.user_id,
      price: order.price,
      price_info: order.price_info,
      customer: order.customer,
    });

    // change the status of the cart to "Completed"
    cart.status = "Completed";
    await cart.save();

    await newOrder.save();
    res.status(200).json({
      success: true,
      data: newOrder,
      msg: "Order added successfully!",
    });
  } catch (err) {
    console.log(err);
  }
};

const updateOrder = async (req, res) => {
  try {
    let order = req.body;
    let orderId = req.params.orderId;
    let updatedOrder = {
      product_id: order.product_id,
      user_id: order.user_id,
      quantity: order.quantity,
      price: order.price,
      customer: order.customer,
    };
    await Order.findByIdAndUpdate(orderId, updatedOrder);
    res.status(200).json({
      success: true,
      data: updatedOrder,
      msg: "Order updated successfully!",
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findByIdAndDelete(orderId);
    if (!order) {
      return res.status(400).json({
        success: false,
        msg: "Order not found!",
      });
    }
    res.status(200).json({
      success: true,
      msg: "Order deleted successfully!",
    });
  } catch (err) {
    console.log(err);
  }
};

const getOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ user_id: userId });

    if (!orders) {
      return res.status(404).json({
        success: false,
        msg: "No orders found for this user",
      });
    }

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
}

module.exports = {
  getOrders,
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder,
  getOrdersByUser,
};
