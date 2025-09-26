// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 100;
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActive(link.name);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        {/* Brand with gradient pulse */}
        <div className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 animate-gradient-text drop-shadow-md">
          Mohayminul
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`relative font-medium tracking-wide transition-all duration-300 ${
                active === link.name
                  ? "text-yellow-400"
                  : "text-gray-200 hover:text-yellow-400"
              } group`}
            >
              {link.name}
              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 transition-all duration-500 ${
                  active === link.name ? "w-full" : "w-0 group-hover:w-full"
                } rounded-full`}
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-400 focus:outline-none hover:scale-110 transition-transform"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-sm w-full text-center overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={() => {
              setIsOpen(false);
              setActive(link.name);
            }}
            className={`block text-lg py-2 font-semibold transition-all duration-300 ${
              active === link.name
                ? "text-yellow-400"
                : "text-gray-200 hover:text-yellow-400 hover:scale-105"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Custom animations */}
      <style>
        {`
          @keyframes gradientText {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-text {
            background-size: 200% 200%;
            animation: gradientText 6s ease infinite;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
