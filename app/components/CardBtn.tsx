"use client";

import { totalCartItemSelector } from "@/store/features/cartSlice";
import { useAppSelector } from "@/store/store";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";

interface Props {
  className?: string;
}

const CardBtn = (props: Props) => {
  const totalItems = useAppSelector(totalCartItemSelector);
  return (
    <div className={`${props.className} relative`}>
      <ShoppingCartIcon className="w-9 text-slate-600" />
      {!!totalItems && (
        <div
          key={totalItems}
          className="bg-red-500 flex justify-center items-center rounded-full w-6 absolute -top-2 -right-2 text-white animate-pingOnce"
        >
          {totalItems}
        </div>
      )}
    </div>
  );
};

export default CardBtn;
