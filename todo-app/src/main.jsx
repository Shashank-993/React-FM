import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <TodoProvider>
      <App />
    </TodoProvider>
  </ThemeProvider>,
);
