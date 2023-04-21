import ErrorPage from "../pages/Error";
import ProductsPage from "../pages/Products";
import RootLayout from "../pages/Root";
import UserDetailPage from "../pages/UserDetailPage";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ProductsPage /> },
      { path: "user", element: <UserDetailPage /> },
    ],
  },
]);

export default Router;
