import React from "react";

const Button = ({
  text,
  onClick,
  className,
  type = "button",
  disabled = false,
  variant = "primary",
}) => {
  const baseStyles =
    "w-full py-4 rounded-[40px] transition-all duration-300 ease-out text-dm-base font-DM Sans font-semibold";
  const primaryStyles =
    "bg-heading-black text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-blue-500";
  const secondaryStyles =
    "bg-white text-heading-black hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500";

  const disabledStyles = "bg-brown-700 cursor-not-allowed text-white";

  const appliedStyles = disabled
    ? disabledStyles
    : variant === "secondary"
    ? secondaryStyles
    : primaryStyles;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${appliedStyles} ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
