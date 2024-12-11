const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  cart_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
    default: "Pending",
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

// virtual to cart_id
OrderSchema.virtual("cart", {
  ref: "Cart",
  localField: "cart_id",
  foreignField: "_id",
  justOne: true,
});

module.exports = mongoose.model("Order", OrderSchema);
