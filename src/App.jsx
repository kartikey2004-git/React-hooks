import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import HooksPart1 from "./pages/HooksPart1";
import HooksPart2 from "./pages/HooksPart2";
import HooksPart3 from "./pages/HooksPart3";
import HooksPart4 from "./pages/HooksPart4";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HooksPart1 />,
      },
      {
        path: "/part2",
        element: <HooksPart2 />,
      },
      {
        path: "/part3",
        element: <HooksPart3 />,
      },
      {
        path: "/part4",
        element: <HooksPart4 />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;