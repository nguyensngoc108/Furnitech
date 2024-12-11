import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/footer";
import CartItem from "../components/CartItem";
import api from "../services/api";

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock products for testing
  const sampleProducts = [
    {
      _id: "67455e58d2cbc500f75eba39",
      name: "Modern Sofa",
      price: 444.44,
      description:
        "A stylish and comfortable modern sofa perfect for any living room.",
      image:
        "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      _id: "67567344b1f555d140d1dad5",
      name: "Floor Lamp with Shade",
      price: 89.99,
      description:
        "A modern floor lamp with an adjustable neck and soft lighting shade.",
      image:
        "https://www.ikea.com/us/en/images/products/gruppspel-gaming-chair-gunnared-beige__1046699_ph180881_s5.jpg?f=xl",
      category: "Lighting",
    },
  ];

  useEffect(() => {
    const sampleCartData = {
      items: [
        {
          _id: "674c1adcea294485afc0b25b",
          productId: "67455e58d2cbc500f75eba39",
          quantity: 2,
          price: 444.44,
          totalPrice: 888.88,
        },
        {
          _id: "6756d4070dc9a3ca1a8815be",
          productId: "67567344b1f555d140d1dad5",
          quantity: 1,
          price: 89.99,
          totalPrice: 89.99,
        },
      ],
    };

    // Simulate adding product details to cart items
    const itemsWithDetails = sampleCartData.items.map((item) => {
      const product = sampleProducts.find(
        (product) => product._id === item.productId
      );
      return {
        ...item,
        product,
      };
    });

    setCartItems(itemsWithDetails);
    setLoading(false);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  const calculateShipping = () => 5;

  const calculateTax = () => (calculateTotal() * 0.1).toFixed(2);

  const calculateFinalTotal = () => {
    return (
      calculateTotal() +
      calculateShipping() +
      parseFloat(calculateTax())
    ).toFixed(2);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId
          ? {
              ...item,
              quantity: newQuantity,
              totalPrice: newQuantity * item.price,
            }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== itemId)
    );
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between min-h-screen max-h-fit bg-brown-500 px-[350px] py-[92px]">
      {/* Cart Section */}
      <div className="w-full lg:w-2/3 bg-white rounded-3xl min-h-[474px] max-h-fit shadow-md p-8 space-y-6">
        <h2 className="text-display-4 text-heading-black font-bold font-DM Sans">
          Your <span className="text-orange-500">Cart</span>
        </h2>
        {cartItems.length > 0 ? (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={handleRemoveItem}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Order Summary Section */}
      <div className="w-full lg:w-1/3 bg-heading-black rounded-3xl shadow-md p-8 lg:mt-0 lg:ml-6 space-y-6 max-h-[474px] flex flex-col justify-between">
        <h2 className="text-display-4 text-white font-semibold font-DM Sans">
          Order Summary
        </h2>
        <div className="space-y-4 text-white text-dm-base font-DM Sans flex-grow">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${calculateShipping()}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${calculateTax()}</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-800 border-t pt-4">
            <span>Total</span>
            <span>${calculateFinalTotal()}</span>
          </div>
        </div>
        <Button
          text="Proceed to Checkout"
          onClick={handleCheckout}
          variant="secondary"
          className="mt-auto"
        />
      </div>
    </div>
  );
}

export default Cart;
