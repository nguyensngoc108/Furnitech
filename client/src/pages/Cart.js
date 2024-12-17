// src/pages/Cart.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import api from "../services/api";

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartId, setCartId] = useState(null);

  // Fetch cart data
  useEffect(() => {
    async function fetchCart() {
      setLoading(true);
      setError(null);
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          navigate("/login");
          return;
        }

        const response = await api.get(`/carts/${userId}`);
        if (response.data.success) {
          const cartData = response.data.data;
          setCartId(cartData._id);
          const itemsWithDetails = cartData.items.map((item) => ({
            ...item,
            product: item.product_id,
            totalPrice: item.quantity * item.product_id.price, // Calculate total for clarity
          }));
          setCartItems(itemsWithDetails);
        } else {
          throw new Error("Failed to fetch cart data");
        }
      } catch (error) {
        setError(error.message || "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
    }

    fetchCart();
  }, [navigate]);

  // Calculate totals
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };
  const calculateShipping = () => 5; // Example shipping cost
  const calculateTax = () => (calculateTotal() * 0.1).toFixed(2);
  const calculateFinalTotal = () =>
    (calculateTotal() + calculateShipping() + parseFloat(calculateTax())).toFixed(2);

  // Handle quantity change
  const handleQuantityChange = async (itemId, newQuantity) => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await api.post(`/carts/modify`, {
        user_id: userId,
        product_id: itemId,
        quantity: newQuantity,
      });
      if (response.data.success) {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item._id === itemId
              ? {
                  ...item,
                  quantity: newQuantity,
                  totalPrice: newQuantity * item.product.price, // Update totalPrice
                }
              : item
          )
        );
      } else {
        alert("Failed to modify item quantity.");
      }
    } catch (error) {
      console.error("Failed to modify item quantity:", error);
    }
  };

  // Handle remove item
  const handleRemoveItem = async (itemId) => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await api.post(`/carts/remove-item`, {
        user_id: userId,
        product_id: itemId,
      });
      if (response.data.success) {
        setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
      } else {
        alert("Failed to remove item.");
      }
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error: {error}
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
          onClick={() =>
            navigate("/shipping", {
              state: {
                cartId,
                subtotal: calculateTotal().toFixed(2),
                shipping: calculateShipping(),
                tax: calculateTax(),
                total: calculateFinalTotal(),
              },
            })
          }
          variant="secondary"
          className="mt-auto"
        />
      </div>
    </div>
  );
}

export default Cart;