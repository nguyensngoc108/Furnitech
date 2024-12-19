// src/pages/UserProfile.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      navigate("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const [userResponse, cartResponse] = await Promise.all([
          api.get(`/users/${userId}`),
          api.get(`/carts/${userId}`),
        ]);
        setUser(userResponse.data.data);
        setCart(cartResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  if (!user || !cart) {
    return (
      <div>
        Please <Link to="/login">log in</Link> or{" "}
        <Link to="/signup">register</Link> to view your profile.
      </div>
    );
  }

  return (
    <div className="UserProfile">
      <header className="UserProfile-header">
        <h1>User Profile</h1>
      </header>
      <div className="UserProfile-info">
        <p>
          <strong>Name:</strong> {user.first_name} {user.last_name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
       </div>

      <div className="UserProfile-cart">
        <strong>My Cart: </strong>
        {cart.items.length > 0 ? (
          <ul>
            {cart.items.map((item) => (
              <li key={item.product_id._id}>
                <p>Product ID: {item.product_id._id}</p>
                <p>Name: {item.product_id.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </li>
            ))}
            <p>Total Price: ${cart.totalPrice}</p>
            <p>Order Status: {cart.status}</p>
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <button>Edit Profile</button>
    </div>
  );
}

export default UserProfile;
