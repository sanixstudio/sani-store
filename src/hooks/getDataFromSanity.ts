import { useEffect, useState } from "react";
import { sanityClient } from "../lib/sanity";

const useGetDataFromSanity = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      sanityClient.fetch(`*[_type == "product"]`).then((data) => {
        setProducts(data);
      });
    } catch (error) {
      console.log(error);
      setError(error as Error); // Cast error to Error type
    }
  }, []);

  return { products, error, isLoading };
};

export default useGetDataFromSanity;
