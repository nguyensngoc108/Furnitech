const express = require('express');
const router = express.Router();

const {
    getOrders,
    getOrder,
    addOrder,
    updateOrder,
    deleteOrder,
} = require('../controllers/orderControllers.js');

router.post("/add", addOrder);

router.put("/update/:orderId", updateOrder);

router.delete("/delete/:orderId", deleteOrder);

router.get("/:orderId", getOrder);

router.get("/", getOrders);




module.exports = router;