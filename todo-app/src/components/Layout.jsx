import React from "react";
import mobileDark from "../images/bg-mobile-dark.jpg";
import desktopDark from "../images/bg-desktop-dark.jpg";
import mobileLight from '../images/bg-mobile-light.jpg';
import desktopLight from '../images/bg-desktop-light.jpg'
import Header from "./Header";
import MainSection from "./MainSection";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
const Layout = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <main
      className={`${theme} relative h-screen px-(--space-m) py-(--space-xl)`}
    >
      <div className="absolute inset-0 -z-10">
        <picture>
          <source
            media="(min-width:768px)"
            srcSet={theme === "dark" ? desktopDark : desktopLight}
          />
          <img
            src={theme === "dark" ? mobileDark : mobileLight}
            className="w-full h-60 lg:h-76 object-cover"
            alt=""
          />
        </picture>

        <div className="bg-background h-[calc(100%-15rem)] flex items-end justify-center pb-(--space-l) md:pb-(--space-xl)">
          <h4 className="text-(--text-placeholder)">Drag and drop to reorder the list</h4>
        </div>
      </div>
      <section className="w-full max-w-2xl z-10 relative container mx-auto flex flex-col justify-start items-start min-h-full space-y-l">
        <Header />
        <MainSection />
      </section>
    </main>
  );
};

export default Layout;
