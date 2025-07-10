"use client";

import { dummyProducts } from "@/dummydata";
import React from "react";
import ProductCard from "./components/ProductCard";

const page = () => {
  return (
    <div className="p-4 flex flex-wrap gap-4">
      {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default page;
