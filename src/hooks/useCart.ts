import useCartStore from "../store/appStore";
import { CartItem } from "../types";
import toast from "react-hot-toast";

export function useHandleCart() {
  const addToCart = useCartStore((state) => state.addToCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const addToCartWithToast = (item: CartItem) => {
    addToCart(item);
    toast.success("Item added to cart");
  };

  const increaseItemQuantity = (itemId: string) => {
    increaseQuantity(itemId);
    toast.success("Item quantity increased");
  };

  const decreaseItemQuantity = (itemId: string) => {
    decreaseQuantity(itemId);
    toast.success("Item quantity decreased");
  };

  return { addToCartWithToast, increaseItemQuantity, decreaseItemQuantity };
}
