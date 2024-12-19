const express = require("express");
const router = express.Router();

const {
  addOrder,
  updateOrder,
  deleteOrder,
  getOrder,
  getOrders,
  getOrdersByUser,
} = require("../controllers/orderControllers.js");

router.post("/add", addOrder);

router.put("/update/:orderId", updateOrder);

router.delete("/delete/:orderId", deleteOrder);

router.get("/:orderId", getOrder);

router.get("/allOrder/:userId", getOrders);

router.get("/user/:userId", getOrdersByUser);

module.exports = router;
