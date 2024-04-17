"use client";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(params.productid);
        console.log("Data received:", data); // Log the received data
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
    <div>
      <div>Product info</div>
      <h1>{params.productid}</h1>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
    </div>
  );
}

export default Productinfo;
