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
    path: "*",
    element: <Page404 />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme accentColor="crimson">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Theme>
  </React.StrictMode>
);
