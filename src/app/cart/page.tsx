// CartPage.tsx
"use client";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  console.log("hi hello", cart);
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-blue-600 font-semibold mt-2">
                ${product.price}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
