// src/components/CartItem.js
import React from "react";

function CartItem({ item, onQuantityChange, onRemoveItem }) {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      onQuantityChange(item._id, newQuantity);
    }
  };

  return (
    <div className="flex items-center justify-between border-b border-brown-700 pb-4 mb-4">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex-1 px-4">
        <h3 className="text-lg font-semibold text-gray-700">
          {item.product.name}
        </h3>
        <p className="text-gray-400 text-sm">{item.product.description}</p>
        <div className="flex space-x-6">
          <div className="flex items-center">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="text-gray-500 px-2 py-1"
            >
              -
            </button>
            <span className="px-4">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="text-gray-500 px-2 py-1"
            >
              +
            </button>
          </div>
          <button
            onClick={() => onRemoveItem(item._id)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      </div>
      <p className="text-lg font-bold text-gray-800">
        ${item.totalPrice.toFixed(2)}
      </p>
    </div>
  );
}

export default CartItem;
