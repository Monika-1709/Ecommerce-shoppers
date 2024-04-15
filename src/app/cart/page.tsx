"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
}

export default function CartPage() {
  const [cartProducts, setCartProducts] = useState<Product[]>([]); // Specify the type for cartProducts

  const router = useRouter();

  useEffect(() => {
    if (router.query.cart) {
      const cartData: Product[] = JSON.parse(
        Array.isArray(router.query.cart)
          ? router.query.cart[0]
          : router.query.cart
      );

      setCartProducts(cartData);
    }
  }, [router.query.cart]);

  return (
    <div>
      <h1>Cart Page</h1>

      <ul>
        {cartProducts.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
