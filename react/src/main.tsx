import Suspense from "@/components/Suspense";
import Root from "@/routes/root";
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/accordion",
    element: (
      <Suspense>
        {React.createElement(lazy(() => import("@/routes/accordion")))}
      </Suspense>
    ),
  },
  {
    path: "/clock",
    element: (
      <Suspense>
        {React.createElement(lazy(() => import("@/routes/clock")))}
      </Suspense>
    ),
  },
  {
    path: "/like-button",
    element: (
      <Suspense>
        {React.createElement(lazy(() => import("@/routes/like-button")))}
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
