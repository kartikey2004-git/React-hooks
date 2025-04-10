import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import HooksPart1 from "./pages/HooksPart1";
import HooksPart2 from "./pages/HooksPart2";
import HooksPart3 from "./pages/HooksPart3";
import HooksPart4 from "./pages/HooksPart4";
import HooksPart5 from "./pages/HooksPart5";
import HooksPart6 from "./pages/HooksPart6";
import HooksPart7 from "./pages/HooksPart7";
import HooksPart8 from "./pages/HooksPart8";
import HooksPart9 from "./pages/HooksPart9";

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
      {
        path: "/part5",
        element: <HooksPart5 />,
      },
      {
        path: "/part6",
        element: <HooksPart6 />,
      },
      {
        path: "/part7",
        element: <HooksPart7 />,
      },
      {
        path: "/part8",
        element: <HooksPart8 />,
      },
      {
        path: "/part9",
        element: <HooksPart9 />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;