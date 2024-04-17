"use client";

import Link from "next/link";
import {
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Input } from "antd";
import { useSelector } from "react-redux";
import { cartState } from "@/redux/cartSlice";

import "remixicon/fonts/remixicon.css";

export default function Header() {
  const { cartItems }: cartState = useSelector((state: any) => state.cart);
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
          />
          <Link href="/cart">
            <Badge count={cartItems.length}>
              <i className="ri-shopping-cart-line ri-xl text-white text-2xl"></i>
            </Badge>
          </Link>

          <Avatar
            className="bg-white"
            icon={<UserOutlined className="text-black" />}
          />
        </div>
      </div>
    </>
  );
}
