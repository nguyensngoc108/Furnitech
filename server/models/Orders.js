const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  cart_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  //create price_info object
  price_info: {
    type: Object,
    required: true,
  },
  customer: {
    type: Object,
    required: false,
  },
  status: {
    type: String,
    enum: ["Shipped", "Delivered", "Cancelled"],
    default: "Shipped",
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
