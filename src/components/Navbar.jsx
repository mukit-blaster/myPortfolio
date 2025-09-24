// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(link.name);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 shadow-xl animate-fadeIn">
      <div className="container mx-auto flex justify-between items-center py-4 px-5">
        {/* Brand with animated gradient glow */}
        <div className="text-3xl md:w-1/2 md:pl-9 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 animate-gradient-text drop-shadow-lg">
          Mohayminul
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`relative font-medium transition-all duration-300 ${
                active === link.name ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
              } group`}
            >
              {link.name}
              {/* Sliding gradient underline */}
              <span
                className={`absolute left-0 -bottom-1 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 transition-all duration-300 ${
                  active === link.name ? 'w-full' : 'w-0 group-hover:w-full'
                } rounded-full`}
              ></span>
              {/* Neon glow */}
              {active === link.name && (
                <span className="absolute inset-0 rounded-full shadow-[0_0_15px_#facc15] opacity-30"></span>
              )}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-400 focus:outline-none hover:scale-110 transition-transform"
          >
            {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-sm w-full text-center overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0'
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
                ? 'text-yellow-400'
                : 'text-white hover:text-yellow-400 hover:scale-105'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes gradientText {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-text {
            background-size: 200% 200%;
            animation: gradientText 5s ease infinite;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease forwards;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
