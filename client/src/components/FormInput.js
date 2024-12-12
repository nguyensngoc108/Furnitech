import React from "react";

const FormInput = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
  className,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-lg text-neutral-text-gray font-DM Sans font-semibold">
        {label}
      </label>
      <input
        type={type}
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
    </div>
  );
};

export default FormInput;
