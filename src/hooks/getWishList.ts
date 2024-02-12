import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useAuth } from "@clerk/clerk-react";
import { db } from "../lib/firebase";
import { LaptopProduct } from "../types";

const useGetWishlist = () => {
  const [products, setProducts] = useState<LaptopProduct[]>([]); // Specify the type of 'products'
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      const unsubscribe = onSnapshot(
        query(collection(db, "products"), where("userId", "==", userId)),
        (snapshot) => {
          const productList: LaptopProduct[] = [];
          snapshot.forEach((doc) => {
            // Assuming 'doc.data()' has the same structure as 'LaptopProduct'
            productList.push(doc.data() as LaptopProduct);
          });
          setProducts(productList);
        }
      );

      return () => unsubscribe();
    }
  }, [userId]);

  return { products, productsCount: products.length || 0 };
};

export default useGetWishlist;
