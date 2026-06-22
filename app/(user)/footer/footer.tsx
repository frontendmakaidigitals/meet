import Link from "next/link";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { Phone, Mail, MapPin } from "lucide-react";

import Logo from "../sections/Logo";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand / About */}
          <div>
            <Logo src={"/Logo/logo-light.png"} className="mb-5" />

            <p className="text-sm leading-relaxed mb-6">
              Middle East Engineering Technologies is a United Arab Emirates based B2B Commercial Distribution and Trading company.
              <br />
              We serve businesses globally with curated products to cater to the
              targeted segments with primary focus on reliability, durability,
              performance and quality.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-gray-300">
              <a
                href="https://www.facebook.com/people/MEET-Trading/61585042645441/"
                className="hover:text-yellow-500 transition"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/meet.trading"
                className="hover:text-yellow-500 transition"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.tiktok.com/notfound"
                className="hover:text-yellow-500 transition"
              >
                <img
                  src={"/tik-tok.png"}
                  className="size-4 invert"
                  alt="tiktok"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/tradingmeet/?viewAsMember=true"
                className="hover:text-yellow-500 transition"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary text-xs tracking-widest mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-3 grid grid-cols-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/#products" },
                { label: "Sustainability", href: "/sustainability" },
                { label: "Blogs", href: "/blogs" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-yellow-500 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}

          {/* Contact / Offices */}
          <div className="text-sm space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-primary" />
              <span>+971 50 9709496</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-primary" />
              <a
                href="mailto:support@tradingmeet.com"
                className="hover:text-yellow-500 transition"
              >
                support@tradingmeet.com
              </a>
            </div>

            {/* Head Office */}
            <div className="flex items-start gap-3">
              <div>
                <MapPin size={16} className="text-primary mt-1" />
              </div>
              <p className="leading-relaxed">
                Office 7, Bel Resheed Building 2, Nad Al Hamar, Deira Dubai,
                United Arab Emirates
              </p>
            </div>

            {/* APAC Office */}
            <div className="flex items-start gap-3">
              <div>
                <MapPin size={16} className="text-primary mt-1" />
              </div>
              <p className="leading-relaxed">
                Ground Floor, Network Bldg, Road No 9, Jubilee Hills, Hyderabad
                500 033, Telangana, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 MEET. ALL RIGHTS RESERVED</p>
          <p className="mt-2 md:mt-0">
            Designed & Developed By{" "}
            <a href={"https://www.spok.digital"} className="text-yellow-500">
              Spok Digital
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
