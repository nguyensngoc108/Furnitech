import React from "react";

const Button = ({
  text,
  onClick,
  className,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-4 rounded-[40px] transition-all duration-300 ease-out text-dm-base font-DM Sans font-semibold
        ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-heading-black text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        } 
        ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
