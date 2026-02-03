"use client";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Products", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Careers", href: "#" },
  ];
  useEffect(() => {
    const original = document.body.style.overflow;

    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setIsOpen(true)} className="">
        <Menu className="text-white" />
      </button>

      {isOpen ? (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed w-screen flex items-end z-10 bg-black/60 backdrop-blur-lg left-0 top-0 h-screen"
        >
          <div className="bg-black border-t border-slate-50/60 rounded-t-3xl py-14  space-y-10 container min-h-[calc(100vh/2)]">
            <ul className="   text-center space-y-10 text-white text-2xl w-full ">
              {links.map((link, idx) => (
                <li key={idx} className="w-full">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center w-full">
              <button className="w-fit px-5 py-2 bg-yellow-500 text-lg rounded-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MobileMenu;
