// src/pages/ProductPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import api from "../services/api";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleAddToCart = async (productId) => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        navigate("/login");
        return;
      }

      const response = await api.post("/carts/add-item", {
        user_id: userId,
        product_id: productId,
      });

      toast.success("Product added to cart successfully!");
      console.log("Product added to cart:", response.data);
    } catch (error) {
      toast.error("Error adding product to cart.");
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brown-400">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-4xl font-bold text-black">
            What are you <span className="block">looking for?</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white p-4 rounded shadow-md cursor-pointer"
                onClick={() => handleProductClick(product._id)}
              >
                <img
                  src={`./assets/Product${product._id}.svg`}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-gray-700">{product.description}</p>
                <p className="text-gray-900 font-bold">${product.price}</p>
                <p className="text-gray-600">Quantity: {product.quantity}</p>
                <p className="text-gray-600">
                  Category: {product.categoryId.name}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product._id);
                  }}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;
