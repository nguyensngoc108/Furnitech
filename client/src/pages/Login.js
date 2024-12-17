// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import FormInput from "../components/FormInput";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/users/login", { email, password });
      const { data, token } = response.data;

      console.log(response.data);

      // Store user ID and token in local storage
      localStorage.setItem("userId", data._id);
      localStorage.setItem("token", token);
      localStorage.setItem("userName", data.first_name + " " + data.last_name);

      // Set user state and redirect to homepage
      onLogin({ _id: data._id, name: data.first_name + " " + data.last_name });
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-brown-500">
      <div className="flex bg-white rounded-3xl shadow-lg w-[1020px] mt-[80px]">
        <div
          className="w-1/2 bg-cover bg-center rounded-l-lg"
          style={{ backgroundImage: "url(./assets/loginImage.png)" }}
        ></div>
        <div className="w-1/2 py-28 px-16">
          <form className="space-y-[40px]" onSubmit={handleLogin}>
            <h2 className="text-display-3 text-heading-black font-bold">
              Login to your{" "}
              <span className=" text-orange-500"> Furnitech </span>
              account.
            </h2>
            <div className="space-y-4">
              <FormInput
                type="email"
                id="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="border-b-2 focus:ring-0"
              />
              <PasswordInput
                type="password"
                id="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="border-b-2 focus:ring-0"
              />
            </div>
            <Button
              type="submit"
              text="Login"
              onClick={handleLogin}
              className="w-full"
            >
              Login
            </Button>
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
