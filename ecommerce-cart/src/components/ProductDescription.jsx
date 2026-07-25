import React from "react";
import { Button } from "./ui/button";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cart from "../images/icon-cart.svg";
import { product } from "@/utils/product";
import { useCartStore } from "@/state/cartStore";
const ProductDescription = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const increase = useCartStore((state) => state.increment);
  const decrease = useCartStore((state) => state.decrement);
  const totalItems = useCartStore((state) => state.totalItems())
  return (
    <div className="grow flex flex-col gap-(--space-m) p-(--space-m) max-w-xl">
      <div className="flex flex-col items-start gap-(--space-xs)">
        <h4 className="text-(--dark-grayish-blue) font-bold text-(length:--fs--1) uppercase tracking-widest">
          {product.company}
        </h4>
        <h2 className="font-bold text-(length:--fs-3) leading-8 lg:leading-12">
          {product.title}
        </h2>
        <p className="text-(length:--fs-0) text-(--dark-grayish-blue) tracking-tight">
          {product.description}
        </p>
      </div>
      <div className="w-full flex items-center justify-between lg:flex-col lg:items-start">
        <div className="flex gap-(--space-xs) items-baseline">
          <h2 className="font-bold text-(length:--fs-3)">${product.price}</h2>
          <p className="bg-black text-white rounded-md px-(--space-xs) py-(--space-3xs)">
            50%
          </p>
        </div>
        <p className="text-(--grayish-blue)">
          <s>$250.00</s>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-(--space-s)">
        <div className="flex flex-1 justify-between items-center p-(--space-xs) rounded-md bg-(--light-grayish-blue)">
          <Button className="p-0 cursor-pointer" onClick={() => decrease(product.id)} variant="ghost">
            <img src={minus} alt="minus-icon" />
          </Button>
          <span className="text-(length:--fs-0) text-black">{totalItems}</span>
          <Button className="p-0 cursor-pointer" onClick={() => increase(product.id)} variant="ghost">
            <img src={plus} alt="plus-icon" />
          </Button>
        </div>
        <Button
          onClick={() => addToCart(product)}
          variant="ghost"
          className="cursor-pointer flex-2 flex items-center p-(--space-s) md:p-(--space-m) gap-(--space-s) bg-(--orange) shadow-xl shadow-black/15"
        >
          <img src={cart} alt="minus-icon" />
          <span className="text-black font-bold text-(length:--fs-0)">
            Add to cart
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ProductDescription;
