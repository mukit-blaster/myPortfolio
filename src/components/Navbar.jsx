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
          ? "bg-[#0b1020]/85 backdrop-blur-md shadow-lg shadow-indigo-500/10 border-b border-indigo-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-2.5 px-5 md:px-8">
        {/* Brand */}
        <a
          href="#home"
          className="group text-base md:text-lg font-extrabold flex items-center gap-1 tracking-tight"
        >
          <span className="gradient-text">Mohayminul</span>
          <span className="text-cyan-400 group-hover:rotate-180 transition-transform duration-700"></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`relative text-xs font-medium tracking-wide transition-all duration-300 ${
                active === link.name
                  ? "text-cyan-300"
                  : "text-slate-300 hover:text-cyan-300"
              } group`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[1.5px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-400 transition-all duration-500 ${
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
            className="text-cyan-300 focus:outline-none hover:scale-110 transition-transform"
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0b1020]/95 backdrop-blur-sm w-full text-center overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 py-2" : "max-h-0"
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
            className={`block text-sm py-1.5 font-medium transition-all duration-300 ${
              active === link.name
                ? "text-cyan-300"
                : "text-slate-300 hover:text-cyan-300"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
