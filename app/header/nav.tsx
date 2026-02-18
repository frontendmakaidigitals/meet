"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Nav = ({ path, textColor }: { path: string; textColor: string }) => {
  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "#" },
    { label: "Sustainability", href: "/sustainability" },
  ];

  const productLinks = [
    { label: "Apparel", href: "/apparel" },
    { label: "Home Appliances", href: "/home-appliance" },
    { label: "Batteries", href: "/batteries" },
    { label: "Matress", href: "/matress" },
    { label: "Personal Electronics", href: "/personal-electorincs" },
    { label: "Electric Vehicle", href: "/electric-vehicle" },
    { label: "Travel & Bags", href: "/travel-bags" },
  ];

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 🔹 Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="hidden uppercase md:flex items-center space-x-8 text-sm">
      {links.map((link, idx) => {
        if (link.label === "Products") {
          return (
            <div
              key={idx}
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              {/* Trigger */}
              <span
                className={`cursor-pointer flex items-center gap-1 hover:text-primary transition ${textColor}`}
              >
                Products
                <ChevronDown
                  className={`size-5 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </span>

              {/* Dropdown */}
              <div
                className={`absolute left-0 top-full mt-3 w-56 transition-all duration-200 ${
                  open
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1"
                }`}
              >
                <div className="bg-white shadow-lg rounded-md py-3">
                  {productLinks.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block px-5 py-2 text-gray-700 hover:bg-[#f8e39f] hover:text-primary transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return (
          <Link
            key={idx}
            href={link.href}
            className={`hover:text-primary transition ${textColor} ${
              path.toLowerCase() === link.href.toLowerCase() ? "underline" : ""
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
