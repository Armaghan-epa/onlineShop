import React from "react";
import axios from "axios";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { User } from "./types/User";
import UserCard from "./components/UserCard";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductsPage from "./pages/Products";
import UserDetailPage from "./pages/UserDetailPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, element: <ProductsPage /> },
//       { path: "user", element: <UserDetailPage user={user}/> },
//     ],
//   },
// ]);

function App() {
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://fakestoreapi.com/users/1");
      setUser(result.data);
    };
    fetchData();
  }, []);
  // return <h1 className="text-3xl font-bold underline text-center">{user}</h1>;
  // return <RouterProvider router={router} />;
  return <UserCard user={user} />;
}

export default App;
