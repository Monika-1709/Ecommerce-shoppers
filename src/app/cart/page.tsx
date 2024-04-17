"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  EditProductInCart,
  RemoveFromCart,
  cartState,
} from "@/redux/cartSlice";
import Link from "next/link";

export default function CartPage() {
  const { cartItems }: cartState = useSelector((state: any) => state.cart);
  console.log(cartItems);

  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 ml-5 text-gray-700">
      <div className="col-span-1 sm:col-span-2 lg:col-span-2">
        <span className="text-2xl font-semibold">My Cart</span>
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-5 mt-5">
          <span className="col-span-3 sm:col-span-4">Product</span>
          <span className="col-span-1 sm:col-span-1">Price</span>
          <span className="col-span-1 sm:col-span-1">Quantity</span>
          <span className="col-span-1 sm:col-span-1">Total</span>
        </div>
        <hr />
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <div
              className="grid grid-cols-4 sm:grid-cols-7 gap-5 mt-5 items-center"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="col-span-1 sm:col-span-1 border p-2 border-gray-300 border-solid"
              />
              <div className="col-span-2 sm:col-span-3 flex flex-col gap-2">
                <span className="text-sm">{item.title}</span>
                <span
                  className="text-xs underline text-red-700 cursor-pointer"
                  onClick={() => dispatch(RemoveFromCart(item))}
                >
                  Remove
                </span>
              </div>
              <span className="col-span-1 sm:col-span-1">$ {item.price}</span>
              <div className="col-span-1 sm:col-span-1 border border-solid p-2 border-gray-700 flex gap-2 justify-between">
                <i
                  className="ri-subtract-line"
                  onClick={() => {
                    if (item.quantity !== 1) {
                      dispatch(
                        EditProductInCart({
                          ...item,
                          quantity: item.quantity - 1,
                        })
                      );
                    } else {
                      dispatch(RemoveFromCart(item));
                    }
                  }}
                ></i>
                <span>{item.quantity}</span>
                <i
                  className="ri-add-line"
                  onClick={() => {
                    dispatch(
                      EditProductInCart({
                        ...item,
                        quantity: item.quantity + 1,
                      })
                    );
                  }}
                ></i>
              </div>
              <span className="col-span-1 sm:col-span-1">
                $ {item.price * item.quantity}
              </span>
            </div>
          ))}
        <hr />
        <div className="flex justify-end">
          <h1>
            Total : $
            {cartItems.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )}
          </h1>
        </div>
      </div>
      <div className="col-span-1 sm:col-span-1 lg:col-span-1 flex justify-center mt-10">
        <Link href="/checkout">
          <h1 className="text-lg font-bold text-blue-600 hover:underline mt-9">
            Checkout
          </h1>
        </Link>
      </div>
    </div>
  );
}
