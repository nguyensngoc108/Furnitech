const mongoose = require('mongoose');
let softDelete = require('mongoosejs-soft-delete');

const Schema = mongoose.Schema;

const CategorySchema = new mongoose.Schema({
    name: {
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

CategorySchema.plugin(softDelete);

module.exports = mongoose.model('Category', CategorySchema);