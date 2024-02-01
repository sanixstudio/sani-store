import useCartStore from "../store/appStore";
import { LaptopProduct } from "../types";
import toast from "react-hot-toast";

export function useAddToCart() {
  const addToCart = useCartStore((state) => state.addToCart);

  const addToCartWithToast = (item: LaptopProduct) => {
    addToCart(item);
    toast.success("Item added to cart");
  };

  return addToCartWithToast;
}
