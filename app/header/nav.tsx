"use client";
import React from "react";
import Link from "next/link";

const Nav = ({ path, textColor }: { path: string; textColor: string }) => {
  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Careers", href: "#" },
  ];
  return (
    <div>
      <div className="hidden uppercase md:flex items-center space-x-8 text-sm">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className={`hover:text-yellow-400 transition ${textColor} ${path.toLowerCase() === link.href.toLowerCase() ? "underline" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
