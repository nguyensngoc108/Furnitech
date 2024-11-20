const express = require('express');
const router = express.Router();

const {
    getOrders,
    getOrder,
    addOrder,
    updateOrder,
    deleteOrder,
} = require('../controllers/orderControllers.js');

router.get("/", getOrders);

router.get("/:orderId", getOrder);

router.post("/add", addOrder);

router.put("/update/:orderId", updateOrder);

router.delete("/delete/:orderId", deleteOrder);

module.exports = router;