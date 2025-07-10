"use client";

import { useAppSelector } from "@/store/store";
import React from "react";
import CartItemCard from "../components/CartItemCard";
import { TotalPriceSelector } from "@/store/features/cartSlice";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalPrice = useAppSelector(TotalPriceSelector);
  return (
    <div className="p-2">
      {cartItems.map((item) => (
        <CartItemCard cartItem={item} key={item.product.id} />
      ))}

      <p className="text-slate-600">
        Total Price:{" "}
        <span className="text-slate-900 font-bold">{totalPrice} birr</span>
      </p>
    </div>
  );
};

export default CartPage;
