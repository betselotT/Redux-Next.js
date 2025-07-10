"use client";

import { Product } from "@/interfaces";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "@/store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React from "react";
import { Button } from "./elements/Button";
import QtyBtn from "./QtyBtn";

interface Props {
  product: Product;
}

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.product.id)
  );

  const dispatch = useAppDispatch();

  if (!qty)
    return (
      <div className="flex justify-center">
        <Button onClick={() => dispatch(increment(props.product))}>
          Add To Cart
        </Button>
      </div>
    );
  return (
    <div>
      <QtyBtn
        onDecrease={() => dispatch(decrement(props.product))}
        onIncrease={() => dispatch(increment(props.product))}
        qty={qty}
      />
    </div>
  );
};

export default AddToCartBtn;
