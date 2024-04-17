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
    <div>
      <span className="text-2xl font-semibold ">My Cart</span>
      <div className="grid grid-cols-3 mt-5 ml-5 text-gray-700">
        <div className="col-span-2 flex flex-col gap-5">
          <div className="grid grid-cols-7 gap-10">
            <span className="col-span-4">Product</span>
            <span className="col-span-1">Price</span>
            <span className="col-span-1">Quantity</span>
            <span className="col-span-1">Total</span>
          </div>
          <div className=" mt-1">
            <hr />
          </div>
          {cartItems.length > 0 &&
            cartItems.map((item) => (
              <div
                className="grid grid-cols-7 gap-10 items-center"
                key={item.id}
              >
                <div className="col-span-4 flex gap-2 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="border p-2 border-gray-300 border-solid"
                  />
                  <div className="flex flex-col gap-2 ml-2">
                    <span className="text-sm">{item.title}</span>
                    <span
                      className="text-xs underline text-red-700 cursor-pointer"
                      onClick={() => dispatch(RemoveFromCart(item))}
                    >
                      Remove
                    </span>
                  </div>
                </div>
                <span className="col-span-1">$ {item.price}</span>
                <div className="col-span-1 border border-solid p-2 border-gray-700 flex gap-2 justify-between">
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
                <span className="col-span-1">
                  {" "}
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

        <div className="col-span-1 items-center ml-10">
          <Link href="/checkout">Checkout</Link>
        </div>
      </div>
    </div>
  );
}
