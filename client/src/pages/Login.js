// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import PasswordInput from "../components/PasswordInput";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isFormValid = email && password;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/users/login", { email, password });
      const { data, token } = response.data;

      // Store user ID and token in local storage
      localStorage.setItem("userId", data._id);
      localStorage.setItem("token", token);

      // Redirect or update UI as needed
      console.log("User logged in successfully!");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-brown-500">
      <div className="flex bg-white rounded-3xl shadow-lg w-[1020px]">
        <div
          className="w-1/2 bg-cover bg-center rounded-l-lg"
          style={{ backgroundImage: "url(./assets/loginImage.png)" }}
        ></div>

        <div className="w-1/2 py-28 px-16">
          <form onSubmit={handleLogin} className="space-y-[40px]">
            <h2 className="text-display-3 text-heading-black font-bold">
              Login to your{" "}
              <span className=" text-orange-500"> Furnitech </span>
              account.
            </h2>
            <div className="space-y-4">
              <FormInput
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="border-b-2 focus:ring-0"
              />
              <PasswordInput
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="border-b-2 focus:ring-0"
              />
            </div>
            <Button
              text="Login"
              onClick={handleLogin}
              className="w-full"
              disabled={!isFormValid}
            />
            <p className="text-dm-base font-DM Sans mt-2 text-center font-semibold text-neutral-text-gray">
              Don't have an account?{" "}
              <button
                onClick={handleRegisterRedirect}
                className="text-orange-500 underline font-bold"
                type="button"
              >
                Register here
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
