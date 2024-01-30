import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "../lib/sanity";

const fetchProductDetailsFromSanity = async (id: string) => {
  const data = await sanityClient.fetch(
    `*[_type == "laptop" && _id == $id][0]`,
    {
      id,
    }
  );
  return data;
};

export const useGetProductDetails = (id: string) => {
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetailsFromSanity(id),
  });

  return { product, error, isLoading, id };
};
