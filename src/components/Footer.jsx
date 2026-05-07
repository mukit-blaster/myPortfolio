import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: <FaGithub />,    link: "https://github.com/mukit-blaster",             label: "GitHub" },
  { icon: <FaLinkedin />,  link: "https://www.linkedin.com/in/mohayminul-mukit", label: "LinkedIn" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/_mukit_blaster",     label: "Instagram" },
  { icon: <FaWhatsapp />,  link: "https://wa.me/qr/VFOSXFXNN3KBA1",              label: "WhatsApp" },
  { icon: <FaEnvelope />,  link: "mailto:mohyminulmukit@gmail.com",                  label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#06080f] border-t border-indigo-500/10">
      <div className="container mx-auto px-5 sm:px-6 py-4 relative z-10 grid grid-cols-1 sm:grid-cols-3 items-center gap-3">
        {/* Nav links — left */}
        <nav className="flex flex-wrap justify-center sm:justify-start items-center gap-4 order-2 sm:order-1">
          {navLinks.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-slate-400 text-[0.7rem] font-medium hover:text-cyan-300 transition"
            >
              {l.name}
            </a>
          ))}
        </nav>

        {/* Copyright — center */}
        <p className="text-slate-500 text-[0.7rem] text-center order-1 sm:order-2">
          ©{" "}{year}{" "}
          <span className="gradient-text font-bold">Mohayminul Mukit</span>
          <span className="text-slate-600 mx-1">·</span>
          All rights reserved.
        </p>

        {/* Socials — right */}
        <div className="flex justify-center sm:justify-end gap-1.5 order-3">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-7 h-7 flex items-center justify-center rounded-md text-slate-400 text-[0.72rem] hover:text-cyan-300 hover:bg-white/[0.04] transition"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
