

const Order = require("../models/Orders");

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
    }

const getOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await
        Order.findById(orderId).populate("user_id");
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
    }
    catch (err) {
        console.log(err);
    }
}

const addOrder = async (req, res) => {
    try {
        let order = req.body;
        let newOrder = new Order({
            product_id: order.product_id,
            user_id: order.user_id,
            quantity: order.quantity,
            price: order.price,
            customer: order.customer,
        });
        await newOrder.save();
        res.status(200).json({
            success: true,
            data: newOrder,
            msg: "Order added successfully!",
        });
    }
    catch (err) {
        console.log(err);
    }
}


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
    }
    catch (err) {
        console.log(err);
    }
}

const deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await
        Order.findByIdAndDelete(orderId);
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
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getOrders,
    getOrder,
    addOrder,
    updateOrder,
    deleteOrder,
};

