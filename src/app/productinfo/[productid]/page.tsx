"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, cartState } from "@/redux/cartSlice";
import { message } from "antd";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

async function getData(productid: string) {
  console.log(productid);
  const res = await fetch(`https://fakestoreapi.com/products/${productid}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log(res.json);
  return res.json();
}

function Productinfo({ params }: { params: { productid: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  const dispatch = useDispatch();
  const { cartItems }: cartState = useSelector((state: any) => state.cart);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(params.productid);
        console.log("Data received:", data);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [params.productid]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-4">
        <div className="text-3xl font-bold mb-2">Product Information</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto"
          />
        </div>
        <div className="ml-20 mt-20">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4 mt-5">{product.description}</p>
          <h1 className="text-2xl font-bold mb-2">$ {product.price}</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={() => {
              dispatch(
                AddToCart({
                  ...product,
                  quantity: 1,
                })
              );
              message.success("added to cart");
            }}
            disabled={cartItems.some((item: Product) => item.id === product.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productinfo;
