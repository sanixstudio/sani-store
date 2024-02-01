import create from "zustand";
import { LaptopProduct } from "../types";

interface CartStore {
  cart: LaptopProduct[];
  addToCart: (item: LaptopProduct) => void;
  removeFromCart: (itemId: string) => void;
}

const useCartStore = create<CartStore>((set) => ({
  cart: JSON.parse(localStorage.getItem("cart") as string) || [],
  addToCart: (item) => {
    set((state) => {
      const updatedCart = [...state.cart, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    });
  },
  removeFromCart: (itemId) => {
    set((state) => {
      const updatedCart = state.cart.filter((item) => item._id !== itemId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    });
  },
}));

export default useCartStore;
