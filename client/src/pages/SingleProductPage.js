// src/pages/SingleProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import api from '../services/api';

function SingleProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${productId}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        navigate('/login');
        return;
      }

      const response = await api.post('/carts/add-item', {
        user_id: userId,
        product_id: productId,
      });

      toast.success('Product added to cart successfully!');
      console.log('Product added to cart:', response.data);
    } catch (error) {
      toast.error('Error adding product to cart.');
      console.error('Error adding product to cart:', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-brown-400">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white p-4 rounded shadow-md">
          <img
            src={`./assets/Product${product._id}.svg`}
            alt={product.name}
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-gray-900 font-bold">${product.price}</p>
          <p className="text-gray-600">Quantity: {product.quantity}</p>
          <p className="text-gray-600">Category: {product.categoryId.name}</p>
          <button
            onClick={handleAddToCart}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Add to Cart
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SingleProductPage;