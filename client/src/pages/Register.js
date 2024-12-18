// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import PasswordInput from "../components/PasswordInput";

function Register() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("users/register", {
        email,
        phone,
        address,
        first_name,
        last_name,
        password,
      });
      const { data, token } = response.data;

      // Store user ID and token in local storage
      localStorage.setItem("userId", data._id);
      localStorage.setItem("token", token);

      // Redirect or update UI as needed
      navigate("/login");

      console.log("User registered successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const isStep1Valid = email && phone && address && first_name && last_name;
  const isStep2Valid = password === confirmPassword && password.length >= 8;

  return (
    <div className="flex items-center justify-center min-h-screen bg-brown-500">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-[804px] px-8 sm:px-16 py-12 mt-[80px]">
        <form onSubmit={handleRegister} className="space-y-[40px]">
          <p className="text-dm-base font-DM Sans mt-2 text-left font-semibold text-brown-900">
            STEP {currentStep} IN 2
          </p>
          <h2 className="text-display-3 text-heading-black font-bold text-left">
            Create a{" "}
            <span className="block">
              <span className="text-orange-500">Furnitech</span>{" "}
              <span className="text-heading-black">Account.</span>
            </span>
          </h2>

          {/* Step 1 */}
          {currentStep === 1 && (
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
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <PasswordInput
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="border-b-2 focus:ring-0"
              />
              <div className="space-y-2">
                <p className="text-sm font-DM Sans text-gray-500 font-semibold">
                  Make sure your password contain
                </p>
                <ul className="list-disc text-sm font-DM Sans text-gray-500 space-y-1 pl-5">
                  <li>Minimum of 8 characters</li>
                  <li>At least one UPPERCASE letter</li>
                  <li>At least one lowercase letter</li>
                  <li>At least one number or one special character</li>
                </ul>
              </div>

              <PasswordInput
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                className="border-b-2 focus:ring-0"
              />
            </div>
          )}

          {/* Buttons to move to the next step or submit */}
          {currentStep === 1 && (
            <Button
              text="Next"
              onClick={() => setCurrentStep(2)}
              className="w-full"
              disabled={!isStep1Valid}
            />
          )}

          {currentStep === 2 && (
            <Button
              text="Register"
              onClick={handleRegister}
              className="w-full"
              disabled={!isStep2Valid}
            />
          )}

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
