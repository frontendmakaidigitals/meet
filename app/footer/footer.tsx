import Link from "next/link";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import Logo from "../sections/Logo";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand / About */}
          <div>
            <Logo src={"/Logo/logo-light.png"} className="mb-5" />

            <p className="text-sm leading-relaxed mb-6">
              Middle East Engineering Technologies (MEET) is a Dubai-based B2B
              trading and solutions company and a subsidiary of ME Universal.
              <br />
              <br />
              We serve businesses across globally with products focused on
              performance and responsible growth.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-gray-300">
              <a href="#" className="hover:text-yellow-500 transition">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                <Instagram size={16} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                <X size={16} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-500 text-xs tracking-widest mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About Us", "Products", "Sustainability"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-yellow-500 transition">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-yellow-500 text-xs tracking-widest mb-6">
              LEGAL LINKS
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-yellow-500 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Offices */}
          <div className="text-sm space-y-6">
            <div>
              <p className="text-yellow-500 mb-1">T:</p>
              <p>+971 50 1483346</p>

              <p className="text-yellow-500 mt-4 mb-1">E:</p>
              <a
                href="mailto:info@meuniversal.com"
                className="hover:text-yellow-500 transition"
              >
                info@meuniversal.com
              </a>
            </div>

            <div>
              <p className="text-yellow-500 mb-1">Head Office</p>
              <p className="leading-relaxed">
                Office 7, Bel Resheed Building 2 Nad Al Hamar, Deira Dubai,
                United Arab Emirates
              </p>
            </div>

            <div>
              <p className="text-yellow-500 mb-1">APAC Office</p>
              <p className="leading-relaxed">
                Ground Floor, Network Bldg, Road No 9 Jubilee Hills, Hyderabad
                500 033 Telangana, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 MEET. ALL RIGHTS RESERVED</p>
          <p className="mt-2 md:mt-0">CREATED BY SPOK DIGITAL</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
