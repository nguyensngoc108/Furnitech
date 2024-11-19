const mongoose = require('mongoose');
let softDelete = require('mongoosejs-soft-delete');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: false,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    isFeatured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

ProductSchema.plugin(softDelete);

module.exports = mongoose.model('Product', ProductSchema);

