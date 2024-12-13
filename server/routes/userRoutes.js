const {isAuthCustomerAny, isAuth, isAuthCustomer} = require('../config/auth.js');
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
    getUserData
} = require('../controllers/userControllers.js');


router.post("/register",register)

router.post("/login",loginUser)

router.get("/profile",getUsers)

router.get("/:id",getUserById)

router.get('/me', isAuthCustomer, getUserData);

module.exports = router;