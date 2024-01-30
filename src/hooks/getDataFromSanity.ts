import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "../lib/sanity";

const fetchProductsFromSanity = async () => {
  const data = await sanityClient.fetch(`*[_type == "laptop"]`);
  return data;
};

const useGetDataFromSanity = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({ queryKey: ["products"], queryFn: fetchProductsFromSanity });

  return { products, error, isLoading };
};

export default useGetDataFromSanity;
