require("dotenv").config();

const Cart = require("../models/Carts");

const getCartInfo = async (req, res) => {
  try {
    const { user_id } = req.params;
    const cart = await Cart.findOne({ userId }).populate("items.product_id");

    if (!cart) {
      return res.status(400).json({
        success: false,
        msg: "Cart is empty!",
      });
    }

    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (err) {
    console.log(err);
  }
};

const addToCart = async (req, res) => {
  try {
    let { user_id, product_id, quantity, price } = req.body;

    const cart = await Cart.findOne({ user_id });

    if (!cart) {
      let newCart = new Cart({
        user_id,
        items: [
          {
            product_id,
            quantity,
            price,
          },
        ],
        totalPrice: price * quantity,
      });

      await newCart.save();

      return res.status(200).json({
        success: true,
        data: newCart,
        msg: "Product added to cart successfully!",
      });
    }

    let productIndex = cart.items.findIndex(
      (item) => item.product_id.toString() === product_id
    );

    if (productIndex > -1) {
      cart.items[productIndex].quantity += quantity;
      cart.items[productIndex].price += product_id.price * quantity;
    } else {
      cart.items.push({
        product_id,
        quantity,
        price: product_id.price * quantity,
      });
    }

    cart.totalPrice += product_id.price * quantity;

    await cart.save();

    res.status(200).json({
      success: true,
      data: cart,
      msg: "Product added to cart successfully!",
    });
  } catch (err) {
    console.log(err);
  }
};


const removeFromCart = async (req, res) => {
  try {
    let { user_id, product_id } = req.body;

    const cart = await Cart.findOne
    ({ user_id });

    if (!cart) {
        return res.status(400).json({
            success: false,
            msg: "Cart is empty!",
        });
        }

    let productIndex = cart.items.findIndex(
        (item) => item.product_id.toString() === product_id
    );

    if (productIndex > -1) {
        cart.totalPrice -= cart.items[productIndex].price;
        cart.items.splice(productIndex, 1);
    }

    await cart.save();

    res.status(200).json({
        success: true,
        data: cart,
        msg: "Product removed from cart successfully!",
    });

}
catch (err) {
    console.log(err);
}
}

module.exports = {
  getCartInfo,
  addToCart,
  removeFromCart
};
