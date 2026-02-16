"use client";
import { useState, useEffect } from "react";
import Nav from "./nav";
import NavBtns from "./NavBtns";
import MobileMenu from "./mobile-menu";
import { usePathname } from "next/navigation";
import Logo from "../sections/Logo";
export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (pathName.toLowerCase() !== "/") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [pathName]);
  const textColor = scrolled
    ? "text-white"
    : isDark
      ? "text-black"
      : "text-white";

  const colorMode = scrolled ? false : isDark ? true : false;
  return (
    <nav
      className={`fixed py-3 top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black" : ""}`}
    >
      <div className="container mx-auto  flex items-center justify-between">
        <div className=" w-40">
          <Logo src={!colorMode ? "/Logo/logo-light.png" : "/Logo/logo.png"} />
        </div>

        <Nav path={pathName} textColor={textColor} />

        <MobileMenu textColor={textColor} />
        <div className="hidden lg:block">
          <NavBtns textColor={textColor} />
        </div>
      </div>
    </nav>
  );
};
