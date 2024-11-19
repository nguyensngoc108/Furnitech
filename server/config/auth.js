require("dotenv").config();
const jwt = require("jsonwebtoken");


const signInToken = (user) => {
    console.log(user)
  return jwt.sign(
    {
      _id: user._id,
      
      name: user.last_name,
      email: user.email,
      phone: user.phone,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "2000d",
    }
  );
};

const tokenForVerify = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    },
    process.env.JWT_SECRET_FOR_VERIFY,
    { expiresIn: "2000d" }
  );
};

const isAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  // console.log('authorization',authorization)
  try {
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send({
      message: err.message,
    });
  }
};

const isAuthCustomer = async (req, res, next) => {
  const { authorization } = req.headers;
  // console.log('authorization',authorization)
  try {
    const token = authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send({
      message: err.message,
    });
  }
};

const isAuthCustomerAny = async (req, res, next) => {
  const { authorization } = req.headers;
  // console.log('authorization',authorization)
  try {
    if (authorization) {
      const token = authorization.replace("Bearer ", "");
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      return next();
    }
    return next();
  } catch (err) {
    res.status(401).send({
      message: err.message,
    });
  }
};



module.exports = {
  signInToken,
  tokenForVerify,
  isAuth,
  isAuthCustomer,
  isAuthCustomerAny
};
