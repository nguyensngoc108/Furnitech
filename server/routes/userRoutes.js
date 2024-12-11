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

router.get("/profile",getUsers)

router.get("/profile/:id",getUserById)

module.exports = router;