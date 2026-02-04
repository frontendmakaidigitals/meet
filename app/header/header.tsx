"use client";
import { useState, useEffect } from "react";
import Nav from "./nav";
import NavBtns from "./NavBtns";
import MobileMenu from "./mobile-menu";
import { usePathname } from "next/navigation";
export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 4) {
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
  return (
    <nav
      className={`fixed py-2 top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black" : ""}`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white w-40">Meet</div>

        <Nav path={pathName} textColor={textColor} />

        <MobileMenu />
        <div className="hidden lg:block">
          <NavBtns textColor={textColor} />
        </div>
      </div>
    </nav>
  );
};
