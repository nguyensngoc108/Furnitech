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
        src={item.product.image || "https://via.placeholder.com/150"}
        alt={item.product.name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex-1 px-4 space-y-3">
        <h3 className="text-xl font-semibold text-heading-black">
          {item.product.name}
        </h3>
        <div className="flex space-x-6 items-center">
          <div className="flex items-center text-xl">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="text-gray-500 px-2 py-1 "
            >
              -
            </button>
            <span className="px-4">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="text-heading-black px-2 py-1 text-bold"
            >
              +
            </button>
          </div>
          <button
            onClick={() => onRemoveItem(item._id)}
            className="text-brown-1000 text-base font-semibold"
          >
            Remove
          </button>
        </div>
      </div>
      <p className="text-xl font-semibold text-gray-800">
        ${item.totalPrice.toFixed(2)}
      </p>
    </div>
  );
}

export default CartItem;
