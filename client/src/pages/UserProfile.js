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
    <div className="flex flex-col items-center min-h-screen bg-brown-500 py-[120px] px-[350px] space-y-8">
      <div className="w-full bg-white rounded-3xl shadow-lg sm:px-16 py-12 flex justify-between items-start">
        <div className="flex flex-col space-y-4">
          <h2 className="text-display-3 text-heading-black font-bold text-left max-w-[300px]">
            User <span className="text-orange-500">Information</span>
          </h2>
          <a className="font-semibold text-base text-heading-black hover:text-orange-500 hover:underline">
            Edit Information
          </a>
        </div>

        <div className="space-y-4 text-left min-w-[400px]">
          <div className="flex gap-8">
            <div>
              <strong className="font-semibold text-heading-black text-[16px] block">
                First Name
              </strong>
              <span className="text-gray-900 text-xl">{user.first_name}</span>
            </div>
            <div>
              <strong className="font-semibold text-heading-black text-[16px] block">
                Last Name
              </strong>
              <span className="text-gray-900 text-xl">{user.last_name}</span>
            </div>
          </div>

          <div>
            <strong className="font-semibold text-heading-black text-[16px] block">
              Email
            </strong>
            <span className="text-gray-900 text-xl block">{user.email}</span>
          </div>
          <div className="flex gap-8">
            <div>
              <strong className="font-semibold text-heading-black text-[16px] block">
                Phone
              </strong>
              <span className="text-gray-900 text-xl">{user.phone}</span>
            </div>
            <div>
              <strong className="font-semibold text-heading-black text-[16px] block">
                Address
              </strong>
              <span className="text-gray-900 text-xl">{user.address}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto mt-8 rounded-3xl bg-white shadow-lg sm:px-16 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">My Cart</h2>
        {cart.items.length > 0 ? (
          <ul className="space-y-6 flex flex-col">
            {cart.items.map((item) => (
              <li
                key={item.product_id._id}
                className="flex items-center space-x-6 p-4 border-b border-gray-200"
              >
                {/* Product Image */}
                <img
                  src={item.product_id.image}
                  alt={item.product_id.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1 space-y-4">
                  <p className="text-heading-black text-xl font-bold">
                    {item.product_id.name}
                  </p>
                  <div className="space-x-4 text-sm">
                    ${item.price}{" "}
                    <strong className="font-semibold text-heading-black">
                      x
                    </strong>{" "}
                    {item.quantity}
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <p className="font-semibold text-heading-black text-xl">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </li>
            ))}

            <div className="p-4 mt-6 flex justify-end text-xl ">
              <p>
                <strong className="font-semibold text-heading-black">
                  Total Price:
                </strong>{" "}
                ${cart.totalPrice}
              </p>
            </div>
          </ul>
        ) : (
          <p className="text-heading-black">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
