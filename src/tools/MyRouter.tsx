import React from "react";
import ErrorPage from "../pages/Error";
import ProductsPage from "../pages/Products";
import RootLayout from "../pages/Root";
import UserDetailPage from "../pages/UserDetailPage";
import { createBrowserRouter } from "react-router-dom";
import CartPage from "../pages/Cart";

const Router = createBrowserRouter([
  {
    path: "/onlineShop",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ProductsPage /> },
      { path: "user", element: <UserDetailPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
]);

export default Router;
