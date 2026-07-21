
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {

  /* Theme logic */
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
