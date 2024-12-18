// src/pages/SingleProductPage.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button.js";
import api from "../services/api";

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
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = async () => {
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

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-brown-400 py-[120px] px-[120px]">
      <main className="inline-flex gap-16 container mx-auto px-8 py-8 shadow-lg bg-white rounded-3xl max-w-screen-xl ">
        <img
          src={product.image}
          alt={product.name}
          className="w-1/2 max-h-screen h-auto object-contain rounded-lg"
        />
        <div className="p-4 space-y-6 w-full">
          <p className="text-brown-900 uppercase font-semibold text-sm">
            {product.categoryId.name}
          </p>

          <h2 className="text-4xl font-bold text-heading-black">
            {product.name}
          </h2>

          <div className="w-full border-t border-brown-800" />

          <div className="space-y-4">
            <p className="text-neutral-text-gray text-xl">
              {product.description}
            </p>

            <div className="w-full border-t border-brown-800" />

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-heading-black">
                Services and Support
              </h3>
              <ul className="list-inside list-disc text-neutral-text-gray text-xl space-y-2">
                <li>24/7 customer support available to assist you anytime.</li>
                <li>Free product setup and installation assistance.</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between w-full">
            <p className="text-gray-900 font-semibold text-4xl">
              ${product.price}
            </p>
            <Button
              onClick={handleAddToCart}
              text="Add To Cart"
              className="py-2 px-7 w-fit"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default SingleProductPage;
