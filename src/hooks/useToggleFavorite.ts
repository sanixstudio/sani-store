import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { useAuth, useClerk } from "@clerk/clerk-react";
import { db } from "../lib/firebase";
import { LaptopProduct } from "../types";
import { toast } from "react-hot-toast";

const useToggleFavorite = (laptop: LaptopProduct) => {
  const { isSignedIn, userId } = useAuth();
  const clerk = useClerk();

  const toggleFavorite = async () => {
    try {
      if (!isSignedIn) {
        clerk.openSignIn();
        return false; // Not signed in, return false
      }

      const myCollection = collection(db, "products");

      const querySnapshot = await getDocs(
        query(
          myCollection,
          where("userId", "==", userId),
          where("_id", "==", laptop._id)
        )
      );

      if (querySnapshot.size === 0) {
        // If no matching document found, save it
        const docRef = await addDoc(myCollection, {
          ...laptop,
          userId: userId,
        });

        if (!docRef) {
          console.log("Error: no doc ref found");
          throw new Error("Error saving to wishlist");
        }

        console.log("Document written with ID: ", docRef.id);
        toast.success("Saved to wishlist");
        return true; // Saved to wishlist, return true
      } else {
        // If a matching document exists, remove it
        for (const doc of querySnapshot.docs) {
          try {
            await deleteDoc(doc.ref);
          } catch (error) {
            console.error("Error removing from favorites:", error);
            throw new Error("Error removing from wishlist");
          }
        }
        toast.error("Removed from wishlist");
        return false; // Removed from wishlist, return false
      }
    } catch (error) {
      console.error("Error adding/removing from favorites:", error);
      toast.error("An error occurred");
      return false; // Error occurred, return false
    }
  };

  return toggleFavorite;
};

export default useToggleFavorite;
