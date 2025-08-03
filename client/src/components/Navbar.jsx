import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Projects", link: "#projects" },
    { label: "Services", link: "#services" },
    { label: "Testimonials", link: "#testimonials" },  // ✅ Added
    { label: "FAQ", link: "#faq" },                    // ✅ Added
    { label: "Contact", link: "#contact" }
  ];

  return (
    <nav className="fixed w-full bg-blue-950 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl text-blue-600 font-bold">Mary.Dev</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-white">
          {navItems.map((item) => (
            <li key={item.link}>
              <a href={item.link} className="hover:text-blue-400">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <li key={item.link}>
                <a
                  href={item.link}
                  className="block text-white hover:text-blue-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
