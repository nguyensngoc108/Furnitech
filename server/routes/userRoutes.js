const {isAuthCustomerAny, isAuth} = require('../config/auth.js');
const express = require('express');
const router = express.Router();


const {
    register,
    loginUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
} = require('../controllers/userControllers.js');


router.post("/register",register)

router.post("/login",loginUser)

module.exports = router;