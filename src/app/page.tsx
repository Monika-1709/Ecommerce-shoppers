"use client";
import { Modal, Rate, Button, message, Alert } from "antd";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, cartState } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";

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

async function getData(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Home() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  const dispatch = useDispatch();
  const { cartItems }: cartState = useSelector((state: any) => state.cart);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setProducts(data);

        console.log(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  // dispatch(AddProducts(products));
  const handleProduct = (product: Product) => {
    console.log(product);
    router.push("/productinfo/${product.id}");
  };

  return (
    <>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
              <Link href={`/productinfo/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="w-full h-48 object-cover mb-4 cursor-pointer"
                  onClick={() => handleProduct(product)}
                />
                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                <p className="text-blue-600 font-semibold mt-2">
                  ${product.price}
                </p>
                <Rate value={(product.rating.rate / 5) * 5} disabled />
                <span> {product.rating.count} reviews</span>
              </Link>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
                onClick={() => {
                  dispatch(
                    AddToCart({
                      ...product,
                      quantity: 1,
                    })
                  );
                  message.success("added to cart");
                }}
                disabled={cartItems.some(
                  (item: Product) => item.id === product.id
                )}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
