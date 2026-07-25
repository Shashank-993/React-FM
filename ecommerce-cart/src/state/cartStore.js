import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const cartStore = (set, get) => ({
  cartItems: [],
  addToCart: (product) =>
    set((state) => {
      const existing = state.cartItems.find((i) => i.id === product.id);
      if (existing) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (id) =>
    set((state) => ({ cartItems: state.cartItems.filter((i) => i.id !== id) })),
  increment: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    })),
  decrement: (id) =>
    set((state) => ({
      cartItems: state.cartItems
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0),
    })),
  clearCart: () => set({ cartItems: [] }),
  totalItems: () => get().cartItems.reduce((sum, i) => sum + i.quantity, 0),
  totalPrice: () =>
    get().cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0),
});

export const useCartStore = create(
  persist(cartStore, {
    name: "mentor-cart",
    storage: createJSONStorage(() => localStorage),
  }),
);
