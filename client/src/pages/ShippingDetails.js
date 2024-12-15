import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Button from "../components/Button";
import FormInput from "../components/FormInput";

function ShippingDetails() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (token && userId) {
        try {
          const response = await api.get(
            `http://localhost:8000/api/users/profile/${userId}`
          );
          const userData = response.data;

          setFirstName(userData.data.first_name);
          setLastName(userData.data.last_name);
          setEmail(userData.data.email);
          setPhone(userData.data.phone);
          setAddress(userData.data.address);

          setIsLoggedIn(true);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  const isValid = email && phone && address && first_name && last_name;

  const handleShippingInfo = async (e) => {
    e.preventDefault();

    if (!isValid) return;

    try {
      //   console.log("Submitting data:", formData);
      //   await api.post("/api/shipping-details", formData);
      navigate("/checkout");
    } catch (err) {
      console.error("Error submitting shipping details:", err);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-brown-500">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-[804px] px-8 sm:px-16 py-12">
        <form onSubmit={handleShippingInfo} className="space-y-[40px]">
          <h2 className="text-display-3 text-heading-black font-bold text-left">
            {isLoggedIn ? (
              <>
                Please confirm your{" "}
                <span className="block">
                  <span className="text-orange-500">Shipping</span>{" "}
                  <span className="text-heading-black">Information.</span>
                </span>
              </>
            ) : (
              <>
                Enter your{" "}
                <span className="block">
                  <span className="text-orange-500">Shipping</span>{" "}
                  <span className="text-heading-black">Information.</span>
                </span>
              </>
            )}
          </h2>

          <div className="space-y-4">
            <div className="flex space-x-4">
              <FormInput
                label="First Name"
                type="firstName"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
                className="border-b-2 focus:ring-0"
              />
              <FormInput
                label="Last Name"
                type="lastName"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
                className="border-b-2 focus:ring-0"
              />
            </div>
            <FormInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="border-b-2 focus:ring-0"
            />
            <FormInput
              label="Phone Number"
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
              className="border-b-2 focus:ring-0"
            />
            <FormInput
              label="Address"
              type="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              required
              className="border-b-2 focus:ring-0"
            />
          </div>

          <Button
            text="Confirm Order"
            type="submit"
            className="w-full"
            disabled={!isValid}
          />

          <p className="text-center">
            {!isLoggedIn && (
              <>
                Already have an account?{" "}
                <button
                  onClick={handleLoginRedirect}
                  className="text-orange-500 underline"
                  type="button"
                >
                  Login now
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}

export default ShippingDetails;
