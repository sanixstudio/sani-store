import useGetDataFromSanity from "../hooks/getDataFromSanity";
import { LaptopProduct } from "../types";

export const getProductDetails = async (id: string) => {
  const { products, isLoading, error } = useGetDataFromSanity();

  const product = products?.find(
    (product: LaptopProduct) => product._id === id
  );

  return { product, isLoading, error };
};
