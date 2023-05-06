import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./tools/MyRouter";
import "./App.css";

function App() {
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
