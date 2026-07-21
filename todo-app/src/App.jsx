import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Toaster } from "./components/ui/sonner";
const App = () => {
  const { theme } = useContext(ThemeContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />

      <Toaster
        position="top-right"
        richColors
        closeButton
        theme={theme}
        toastOptions={{
          classNames: {
            toast:
              "bg-(--surface) text-(--text-primary) border border-(--border)",
            description: "text-(--text-secondary)",
            actionButton: "bg-blue-500 text-white",
            cancelButton: "bg-red-500 text-white",
          },
        }}
      />
    </>
  );
};

export default App;
