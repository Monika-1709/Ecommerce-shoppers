"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Input, Rate } from "antd";
import { useSelector } from "react-redux";
import { cartState } from "@/redux/cartSlice";

import "remixicon/fonts/remixicon.css";

export default function Header() {
  const { cartItems }: cartState = useSelector((state: any) => state.cart);
  const [searchText, setSearchText] = useState<string>("");
  const products = useSelector((state: any) => state.product.products);

  const filteredProducts = products.filter((product: any) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="sticky top-0 bg-primary p-5 flex justify-between items-center z-10">
        <h1 className="text-2xl font-bold text-red-500">Shoppers</h1>
        <Link href="/" className="text-white">
          Home
        </Link>
        <div className="flex gap-5 text-white items-center">
          <Input
            placeholder="Search products..."
            prefix={<SearchOutlined />}
            className="px-3 py-1 rounded-lg border-none focus:outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Link href="/cart">
            <Badge count={cartItems.length}>
              <ShoppingCartOutlined className="text-white text-2xl" />
            </Badge>
          </Link>
          <Avatar
            className="bg-white"
            icon={<UserOutlined className="text-black" />}
          />
        </div>
      </div>
      {searchText && (
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product: any) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-md shadow-md"
              >
                <Link href={`/productinfo/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="w-full h-48 object-cover mb-4 cursor-pointer"
                  />
                </Link>
                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                <p className="text-blue-600 font-semibold mt-2">
                  ${product.price}
                </p>
                <Rate value={(product.rating.rate / 5) * 5} disabled />
                <span> {product.rating.count} reviews</span>
              </div>
            ))}
          </div>
        </div>
      )}
      ;
    </>
  );
}
