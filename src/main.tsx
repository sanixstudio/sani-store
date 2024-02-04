import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Theme } from "@radix-ui/themes";

import App from "./App.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import Page404 from "./pages/Page404.tsx";
import Apple from "./pages/Apple.tsx";
import Dell from "./pages/Dell.tsx";
import Hp from "./pages/Hp.tsx";
import AllProducts from "./pages/AllProducts.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import Cart from "./pages/Cart.tsx";
import WishList from "./pages/WishList.tsx";
import Search from "./pages/Search.tsx";
import { Toaster } from "react-hot-toast";
import Asus from "./pages/Asus.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/search/:query",
    element: <Search />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/wishlist",
    element: <WishList />,
  },
  {
    path: "/product-details/:id",
    element: <ProductDetails />,
  },
  {
    path: "/all-products",
    element: <AllProducts />,
  },
  {
    path: "/apple",
    element: <Apple />,
  },
  {
    path: "/dell",
    element: <Dell />,
  },
  {
    path: "/hp",
    element: <Hp />,
  },
  {
    path: "/asus",
    element: <Asus />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Theme accentColor="crimson">
        <QueryClientProvider client={queryClient}>
          <Toaster
            toastOptions={{
              style: {
                background: "#363636",
                color: "#fff",
              },
            }}
          />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Theme>
    </ClerkProvider>
  </React.StrictMode>
);
