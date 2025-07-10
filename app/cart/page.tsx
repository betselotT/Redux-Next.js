"use client";

import { useAppSelector } from "@/store/store";
import React from "react";
import CartItemCard from "../components/CartItemCard";
import { totalPriceSelector } from "@/store/features/cartSlice";

const page = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalPrice = useAppSelector(totalPriceSelector);
  return (
    <div className="p-2">
      {cartItems.map((item) => (
        <CartItemCard cartItem={item} />
      ))}

      <p className="text-slate-600">
        Total Price:{" "}
        <span className="text-slate-900 font-bold">{totalPrice} birr</span>
      </p>
    </div>
  );
};

export default page;
