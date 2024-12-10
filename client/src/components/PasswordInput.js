import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({
  label,
  value,
  onChange,
  placeholder,
  required,
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="space-y-2">
      <label className="text-lg text-neutral-text-gray font-DM Sans font-semibold">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full px-6 py-4 
          border border-brown-700 rounded-lg 
          text-lg text-brown-1000 focus:text-heading-black 
          focus:outline-none focus:ring-1 focus:ring-brown-900 focus:border-brown-900 
          bg-brown-300 focus:bg-brown-500 
          transition-all duration-300 ease-out 
        ${className}`}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-brown-1000 text-2xl"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
