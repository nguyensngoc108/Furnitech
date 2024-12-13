// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

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

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
