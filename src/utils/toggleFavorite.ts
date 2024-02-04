import toast from "react-hot-toast";
import { sanityClient } from "../lib/sanity";

export const toggleFavorite = async (
  productId: string,
  isFavorite: boolean
) => {
  try {
    await sanityClient.fetch(`*[_type == "laptop" && _id == $productId][0]`, {
      productId,
    });

    await sanityClient.patch(productId).set({ isFavorite }).commit();
    toast.success(isFavorite ? "Added to Favorites" : "Removed from Favorites");

    return true;
  } catch (error) {
    console.error("Error updating favorite status:", error);
    toast.error("Failed to update favorite status", {});
    return false;
  }
};
