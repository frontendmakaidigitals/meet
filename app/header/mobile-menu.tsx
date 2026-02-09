"use client";

import { useEffect, useState } from "react";
import { Menu, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

const MobileMenu = ({ textColor }: { textColor: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<"menu" | "products">("menu");

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Careers", href: "#" },
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="block lg:hidden">
      <button onClick={() => setIsOpen(true)}>
        <Menu className={textColor} />
      </button>

      {isOpen && (
        <div
          onClick={() => {
            setIsOpen(false);
            setView("menu");
          }}
          className="fixed inset-0 z-10 bg-black/60 backdrop-blur-lg flex items-end"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-black border-t border-white/20 rounded-t-3xl py-10 container min-h-[55vh]"
          >
            {/* MAIN MENU */}
            {view === "menu" && (
              <ul className="text-center space-y-8 text-white text-2xl">
                {links.map((link, idx) => {
                  if (link.label === "Products") {
                    return (
                      <li key={idx}>
                        <button
                          onClick={() => setView("products")}
                          className="w-full flex justify-center items-center gap-2"
                        >
                          Products
                          <ChevronRight />
                        </button>
                      </li>
                    );
                  }

                  return (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* PRODUCTS STEP */}
            {view === "products" && (
              <div className="text-white">
                {/* Back */}
                <button
                  onClick={() => setView("menu")}
                  className="flex items-center gap-2 mb-8 text-gray-300"
                >
                  <ChevronLeft />
                  Back
                </button>

                <ul className="space-y-6 text-xl text-center">
                  {productLinks.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          setIsOpen(false);
                          setView("menu");
                        }}
                        className="block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex justify-center mt-10">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <button className="px-6 py-3 bg-yellow-500 text-black text-lg rounded-full">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
