import create from "zustand";
import { CartItem } from "../types";

interface CartStore {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
}

const useCartStore = create<CartStore>((set) => ({
  cart: JSON.parse(localStorage.getItem("cart") as string) || [],
  addToCart: (item) => {
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem._id === item._id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += item.quantity;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      } else {
        const updatedCart = [...state.cart, item];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }
    });
  },
  removeFromCart: (itemId) => {
    set((state) => {
      const updatedCart = state.cart.filter((item) => item._id !== itemId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    });
  },
  increaseQuantity: (itemId) => {
    set((state) => {
      const updatedCart = [...state.cart];
      const itemToIncrease = updatedCart.find((item) => item._id === itemId);

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }

      return state;
    });
  },
  decreaseQuantity: (itemId) => {
    set((state) => {
      const updatedCart = [...state.cart];
      const itemToDecrease = updatedCart.find((item) => item._id === itemId);

      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }

      return state;
    });
  },
}));

export default useCartStore;
