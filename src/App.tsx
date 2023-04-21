import React from "react";

import { Provider, useDispatch } from "react-redux";
import store from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Router from "./tools/MyRouter";
import "./App.css";
import UserCard from "./components/UserCard";
import ProductCard from "./components/ProductCard";
import { Product } from "./types/Product";

function App() {
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
