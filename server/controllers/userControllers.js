require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ucfirst = require("ucfirst");

const User = require("../models/Users");

const { signInToken, tokenForVerify } = require("../config/auth");

const register = async (req, res, next) => {
  try {
    let user = req.body;

    user.first_name = ucfirst(user.first_name);
    user.last_name = ucfirst(user.last_name);

    const verifyEmail = await User.findOne({ email: user.email });
    if(verifyEmail){
        return res.status(400).json({
            success: false,
            msg: "Email already exists!",
        });
    }

    const password = (user.password = await bcrypt.hashSync(user.password, 10));

    const token = signInToken(user);
    console.log(token);

    let newUser = new User({
      first_name: user?.first_name,
      last_name: user?.last_name,
      email: user?.email,
      password: password,
      token: token,
      phone: user.phone,
      address : user?.address,
    });

    await newUser.save();

    res.status(200).json({
      success: true,
      data: newUser,
      token: token,
      msg: "User registered successfully!",
    });
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    let user = req.body;

    const userData = await User.findOne({ email: user.email });
    if (!userData) {
      return res.status(400).json({
        success: false,
        msg: "User not found!",
      });
    }

    const isMatch = await bcrypt.compare(user.password, userData.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        msg: "Password incorrect!",
      });
    }

    const token = signInToken(userData);
    console.log("user data", userData);

    res.status(200).json({
      success: true,
      data: userData,
      token: token,
      msg: "User logged in successfully!",
    });
  } catch (err) {
    console.log(err);
  }
};

const editProfile = async (req, res) => {
  try {
    let user = req.body;
    user.first_name = ucfirst(user.first_name);
    user.last_name = ucfirst(user.last_name);

    const updatedUser =
      await User.findByIdAndUpdate(req
        .params.id, user, { new: true });

    res.status(200).json({
      success: true,
      data: updatedUser,
      msg: "User updated successfully!",
    });
  }
  catch (err) {
    console.log(err);
  }
}


const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};

// create an api to verify the token users/me

const getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  register,
  loginUser,
  getUsers,
  editProfile,
  getUserData,
  getUserById,
};
