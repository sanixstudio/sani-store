import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuth } from "@clerk/clerk-react";
import { db } from "../lib/firebase";

const useIsFavorite = (itemId: string) => {
  const { isSignedIn, userId } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkFavorite = async () => {
      try {
        if (!isSignedIn) {
          setIsFavorite(false); // User is not signed in, item cannot be in favorites
          return;
        }

        const myCollection = collection(db, "products");

        const querySnapshot = await getDocs(
          query(
            myCollection,
            where("userId", "==", userId),
            where("_id", "==", itemId)
          )
        );

        setIsFavorite(querySnapshot.size > 0); // Set isFavorite to true if a matching document is found
      } catch (error) {
        console.error("Error checking if item is in favorites:", error);
        setIsFavorite(false); // Handle any errors and set isFavorite to false
      }
    };

    checkFavorite();
  }, [isSignedIn, userId, itemId]);

  return isFavorite;
};

export default useIsFavorite;
