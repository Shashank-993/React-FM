import React from "react";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { Button } from "./ui/button";
const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="w-full flex items-center justify-between">
      <h1 className="text-white font-medium text-(length:--fs-4) tracking-[13px]">
        TODO
      </h1>
      <Button
        size="icon"
        variant="ghost"
        onClick={toggleTheme}
        className="bg-transparent cursor-pointer hover:bg-transparent"
      >
        <img
          src={theme === "dark" ? sun : moon}
          alt={theme === "dark" ? "sun-icon" : "moon-icon"}
        />
      </Button>
    </div>
  );
};

export default Header;
