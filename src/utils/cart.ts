import toast from "react-hot-toast";
import { LaptopProduct } from "../types";

// Get total number of cart items
export const getTotalCartItems = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") as string).length
  : 0;

// Save cart items to local storage
export const handleAddToCart = (item: LaptopProduct) => {
  localStorage.setItem(
    "cart",
    JSON.stringify([...JSON.parse(localStorage.getItem("cart") || "[]"), item])
  );
  toast.success("Item added to cart");
};
