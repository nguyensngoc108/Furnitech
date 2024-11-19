require("dotenv").config();

const Cart = require("../models/Carts");

const getCartInfo = async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ userId }).populate("items.productId");

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
    let { userId, productId, quantity } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      let newCart = new Cart({
        userId,
        items: [
          {
            productId,
            quantity,
            price: productId.price,
          },
        ],
        totalPrice: productId.price * quantity,
      });

      await newCart.save();

      return res.status(200).json({
        success: true,
        data: newCart,
        msg: "Product added to cart successfully!",
      });
    }

    let productIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (productIndex > -1) {
      cart.items[productIndex].quantity += quantity;
      cart.items[productIndex].price += productId.price * quantity;
    } else {
      cart.items.push({
        productId,
        quantity,
        price: productId.price * quantity,
      });
    }

    cart.totalPrice += productId.price * quantity;

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
    let { userId, productId } = req.body;

    const cart = await Cart.findOne
    ({ userId });

    if (!cart) {
        return res.status(400).json({
            success: false,
            msg: "Cart is empty!",
        });
        }

    let productIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId
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
