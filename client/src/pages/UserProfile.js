import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../styles/UserProfile.css';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      navigate('/login');
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await api.get(`/users/${userId}`);
        console.log('User data:', response.data.data);
        setUser(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/login');
      }
    };

    const fetchUserOrders = async () => {
      try {
        const response = await api.get(`/orders/allOrder/${userId}`);
        console.log('User orders:', response.data.data);
        setOrders(response.data.data);
      } catch (error) {
        console.error('Error fetching user orders:', error);
        setError('Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
    fetchUserOrders();
  }, [navigate]);

  if (!user) {
    return (
      <div>
        Please <Link to="/login">log in</Link> or <Link to="/signup">register</Link> to view your profile.
      </div>
    );
  }

  return (
    <div className="UserProfile">
      <header className="UserProfile-header">
        <h1>User Profile</h1>
      </header>
      <div className="UserProfile-info">
        <p><strong>Name:</strong> {user.first_name + ' ' + user.last_name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
      <button>Edit Profile</button>
      <div className="UserProfile-orders">
        <h2>Your Orders</h2>
        {loading ? (
          <p>Loading orders...</p>
        ) : error ? (
          <p>{error}</p>
        ) : orders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          <div className="orders-container">
            {orders.map((order) => (
              <div key={order._id} className="order-card">
                <div className="order-info">
                  <p><strong>Order ID:</strong> {order._id}</p>
                  <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
                  <p><strong>Total Price:</strong> ${order.price.toFixed(2)}</p>
                  <div className="price-info">
                    <p><strong>Subtotal:</strong> ${order.price_info.subtotal}</p>
                    <p><strong>Shipping:</strong> ${order.price_info.shipping}</p>
                    <p><strong>Tax:</strong> ${order.price_info.tax}</p>
                    <p><strong>Total:</strong> ${order.price_info.total}</p>
                  </div>
                  <p><strong>Status:</strong> {order.status}</p>
                </div>
                <details className="order-details">
                  <summary>View Products</summary>
                  <ul>
                    {order.cart_id.items.map((item) => (
                      <li key={item._id}>
                        <p><strong>Product:</strong> {item.product_id.name}</p>
                        <p><strong>Quantity:</strong> {item.quantity}</p>
                        <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;