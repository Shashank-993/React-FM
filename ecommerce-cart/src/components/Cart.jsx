import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "./ui/popover";
import cart from "../images/icon-cart.svg";
import deleteIcon from "../images/icon-delete.svg";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useCartStore } from "@/state/cartStore";
import { Badge } from "./ui/badge";
import t1 from "../images/image-product-1-thumbnail.jpg";
const Cart = () => {
  const items = useCartStore((state) => state.cartItems);
  const totalPrice = useCartStore((state) => state.totalPrice());
  const totalItems = useCartStore((state) => state.totalItems());
  const deleteItem = useCartStore((state) => state.removeFromCart);
  const clear = useCartStore((state) => state.clearCart);

  return (
    <Popover>
      <PopoverTrigger>
        <div className="relative p-4">
          {totalItems > 0 && (
            <Badge
              variant="ghost"
              className="absolute top-0 right-0 rounded-full bg-(--orange) text-white"
            >
              {totalItems}
            </Badge>
          )}
          <img src={cart} className="cursor-pointer" alt="cart-icon" />
        </div>
      </PopoverTrigger>

      <PopoverContent align="center" className="p-(--space-s) w-2xs md:w-sm">
        <PopoverHeader>
          <h3 className="font-bold text-(length:--fs-1)">Cart</h3>
        </PopoverHeader>
        <Separator />

        {items.length === 0 ? (
          <p className="py-6 text-center text-sm text-muted-foreground">
            Your cart is empty.
          </p>
        ) : (
          <>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-(--space-s) py-2"
              >
                <img
                  src={t1}
                  className="w-15 h-15 rounded-md"
                  alt="product-thumbnail"
                />
                <div className="flex-1">
                  <p className="text-(length:--fs--1)">{item.title}</p>
                  <p className="text-(length:--fs--1)">
                    {item.price}x {item.quantity}&nbsp;&nbsp;
                    <span className="font-bold">${totalPrice}</span>
                  </p>
                </div>
                <img
                  src={deleteIcon}
                  role="button"
                  onClick={() => deleteItem(item.id)}
                  alt="delete-icon"
                />
              </div>
            ))}

            <Separator />
            <p className="font-bold">Total: ${totalPrice}</p>

            <Button
              onClick={clear}
              variant="ghost"
              className="bg-(--orange) text-black p-(--space-s) font-bold cursor-pointer"
            >
              Checkout
            </Button>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default Cart;
