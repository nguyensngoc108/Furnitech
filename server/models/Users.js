const mongoose = require('mongoose');
let softDelete = require('mongoosejs-soft-delete');


const userSchema = new mongoose.Schema
(
    {
        name: { type: String, required: false },
        first_name: { type: String, required: false },   
        last_name: { type: String, required: false },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        address: { type: String, required: false },
        phone: { type: String, required: false },
    },
    {
        timestamps: true,
    }
);

userSchema.plugin(softDelete);

module.exports = mongoose.model('User', userSchema);