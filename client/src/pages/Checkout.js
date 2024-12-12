import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button"; // Assuming you have a Button component

function Checkout() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Navigates to the homepage, change as needed
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-brown-500">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-[804px] px-8 sm:px-16 py-12 space-y-[60px]">
        <div className="text-center space-y-2">
          <h2 className="text-display-3 text-heading-black font-bold text-center">
            Thank you!
          </h2>
          <p className="text-dm-base font-semibold text-brown-1000">
            YOUR ORDER HAS BEEN PLACED.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-display-4 font-bold">
            Order <span className="text-orange-500">Details</span>
          </h3>
          <ul className="text-dm-san text-neutral-text-gray">
            <li>
              Order Number: <span className="font-medium">123456789</span>
            </li>
            <li>
              Items: <span className="font-medium">3 Items</span>
            </li>
            <li>
              Total: <span className="font-medium">$150.00</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-display-4 font-bold">Products</h3>
          <ul className="text-dm-san text-neutral-text-gray">
            <li>
              Order Number: <span className="font-medium">123456789</span>
            </li>
            <li>
              Items: <span className="font-medium">3 Items</span>
            </li>
            <li>
              Total: <span className="font-medium">$150.00</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-display-4 font-bold">Customer Details</h3>
          <ul className="text-dm-san text-neutral-text-gray">
            <li>
              Order Number: <span className="font-medium">123456789</span>
            </li>
            <li>
              Items: <span className="font-medium">3 Items</span>
            </li>
            <li>
              Total: <span className="font-medium">$150.00</span>
            </li>
          </ul>
        </div>
        <Button text="Back to Homepage" type="button" onClick={handleGoHome} />
      </div>
    </div>
  );
}

export default Checkout;
