import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import Layout from "./Layout.jsx";
import { notFound } from "./index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="*" element={<notFound />} /> {/* 404 Route */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>
);
