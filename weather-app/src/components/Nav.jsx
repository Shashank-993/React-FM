import React from "react";
import logo from "../assets/images/logo.svg";
import { UnitsDropdown } from "./DropDowns";
const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-(--space-s) md:px-(--space-2xl)">
      <img src={logo} alt="weather-logo" />
      <UnitsDropdown />
    </nav>
  );
};

export default Nav;
