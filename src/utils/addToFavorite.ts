// import { useAuth } from "@clerk/clerk-react";
// import { toast } from "react-hot-toast";
// import { db } from "../lib/firebase";
// import {
//   collection,
//   addDoc,
//   query,
//   where,
//   getDocs,
//   deleteDoc,
// } from "firebase/firestore";
// import { LaptopProduct } from "../types";

// export const addToFavorite = async (
//   product: LaptopProduct,
// ) => {
//   const { isSignedIn, userId } = useAuth();

//   try {
//     if (!isSignedIn) {
//       return;
//     }

//     const myCollection = collection(db, "products");

//     const querySnapshot = await getDocs(
//       query(
//         myCollection,
//         where("userId", "==", userId),
//         where("zpid", "==", product._id)
//       )
//     );

//     if (querySnapshot.size === 0) {
//       const docRef = await addDoc(myCollection, {
//         ...product,
//         userId,
//       });

//       toast.success("Product saved", {
//         position: "top-center",
//         duration: 2000,
//       });

//       if (!docRef) {
//         console.log("Error: no doc ref found");
//       }

//       console.log("Document written with ID: ", docRef);
//     } else {
//       querySnapshot.forEach(async (doc) => {
//         try {
//           await deleteDoc(doc.ref);
//           toast.error("Product removed from favorites", {
//             position: "top-center",
//             duration: 2000,
//           });
//         } catch (error) {
//           console.error("Error removing from favorites:", error);
//         }
//       });
//     }
//   } catch (error) {
//     console.error("Error adding/removing from favorites:", error);
//   }
// };
