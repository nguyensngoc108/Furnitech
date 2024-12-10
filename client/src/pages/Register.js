// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Button from "../components/Button";
import FormInput from "../components/FormInput";

function Register() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await api.post("/users/login", { email, password });
    //   const { data, token } = response.data;

    //   // Store user ID and token in local storage
    //   localStorage.setItem("userId", data._id);
    //   localStorage.setItem("token", token);

    //   // Redirect or update UI as needed
    //   console.log("User logged in successfully!");
    // } catch (error) {
    //   console.error("Error logging in:", error);
    // }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const isFormValid = firstName && lastName && email && phone && address;

  return (
    <div className="flex items-center justify-center min-h-screen bg-brown-500">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-[804px] px-8 sm:px-16 py-12">
        <form onSubmit={handleRegister} className="space-y-[40px]">
          <h2 className="text-display-3 text-heading-black font-bold text-left">
            Create a{" "}
            <span className="block">
              <span className="text-orange-500">Furnitech</span>{" "}
              <span className="text-heading-black">Account.</span>
            </span>
          </h2>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <FormInput
                label="First Name"
                type="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
                className="border-b-2 focus:ring-0"
              />
              <FormInput
                label="Last Name"
                type="lastName"
                value={lastName}
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
              placeholder="Email"
              required
              className="border-b-2 focus:ring-0"
            />
            <FormInput
              label="Phone Number"
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              required
              className="border-b-2 focus:ring-0"
            />
            <FormInput
              label="Address"
              type="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              required
              className="border-b-2 focus:ring-0"
            />
          </div>
          <Button
            text="Register"
            onClick={handleRegister}
            className="w-full"
            disabled={!isFormValid}
          />
          <p className="text-dm-base font-DM Sans mt-2 text-center font-semibold text-neutral-text-gray">
            Already have a Furnitech account?{" "}
            <button
              onClick={handleLoginRedirect}
              className="text-orange-500 underline font-bold"
              type="button"
            >
              Login now
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
