import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Checkout() {
  const [orderDetails, setOrderDetails] = useState(null);
  const [customerDetails, setCustomerDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  useEffect(() => {
    // Mock data to simulate API response
    const mockData = {
      order: {
        cart_id: "67594f1cc2f4016ca1612161",
        shippingAddress: "Binh Duong",
        status: "Pending",
        orderDate: "2024-12-12T16:16:46.723Z",
        _id: "675b0c6e6dc7dc12393ccdb9",
      },
      user: {
        first_name: "Trinh",
        last_name: "Phuong",
        email: "trinhphuong04@gmail.com",
        phone: "0972989052",
      },
      cart: [
        {
          product_id: {
            _id: "6756d3740dc9a3ca1a8815ba",
            name: "Modern Gaming Chair",
            price: 389.55,
          },
          quantity: 3,
          price: 389.55,
        },
        {
          product_id: {
            _id: "6756d38f0dc9a3ca1a8815bc",
            name: "Oak Bookshelf",
            price: 299.99,
          },
          quantity: 2,
          price: 599.98,
        },
        {
          product_id: {
            _id: "6756d4070dc9a3ca1a8815be",
            name: "Floor Lamp with Shade",
            price: 89.99,
          },
          quantity: 3,
          price: 269.97,
        },
      ],
      totalPrice: 2038.6,
    };

    // Simulate fetching data
    setTimeout(() => {
      const { order, user, cart, totalPrice } = mockData;
      setOrderDetails(order);
      setCustomerDetails(user);
      setCartItems(cart);
      setTotalPrice(totalPrice);
    }, 500); // Simulate a network delay
  }, []);

  if (!orderDetails || !customerDetails || cartItems.length === 0) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-brown-500 pt-[114px] pb-[464px]">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-[804px] px-8 sm:px-16 py-12 space-y-[60px]">
        <div className="text-center space-y-2">
          <img
            src="./assets/orderSuccessful.png"
            alt="Order Success"
            className="mx-auto w-[140px] h-[140px]"
          />
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
          <ul className="space-y-2 text-dm-base text-heading-black">
            <li className="flex justify-between ">
              <span>Order Date</span>
              <span className="font-medium">
                {new Date(orderDetails.orderDate).toLocaleDateString()}
              </span>
            </li>
            <li className="flex justify-between">
              <span>Number of Items</span>
              <span className="font-medium">{cartItems.length}</span>
            </li>
            <li className="flex justify-between">
              <span>Shipping Address</span>
              <span className="font-medium">
                {orderDetails.shippingAddress}
              </span>
            </li>
            <li className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="font-medium">$5.00</span>
            </li>
          </ul>
          <hr className="border-brown-700 my-4" />
          <div className="flex justify-between text-dm-base text-heading-black font-bold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-display-4 font-bold">Products</h3>
          <ul className="space-y-2 space-y-2 text-dm-base text-heading-black">
            {cartItems.map((item) => (
              <li key={item.product_id._id} className="flex justify-between">
                <span>
                  {item.product_id.name} (x{item.quantity})
                </span>
                <span className="font-medium">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-display-4 font-bold">Customer Details</h3>
          <ul className="space-y-2 text-dm-base text-heading-black ">
            <li className="flex justify-between">
              <span>Customer Name</span>
              <span className="font-medium">
                {customerDetails.first_name} {customerDetails.last_name}
              </span>
            </li>
            <li className="flex justify-between ">
              <span>Email</span>
              <span className="font-medium">{customerDetails.email}</span>
            </li>
            <li className="flex justify-between">
              <span>Phone</span>
              <span className="font-medium">{customerDetails.phone}</span>
            </li>
          </ul>
        </div>

        <Button text="Back to Homepage" type="button" onClick={handleGoHome} />
      </div>
    </div>
  );
}

export default Checkout;
