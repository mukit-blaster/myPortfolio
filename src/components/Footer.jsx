import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-400 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-28 h-28 bg-yellow-400 opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.facebook.com/mohayminul.mukit"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-125 transition-transform duration-300"
        >
          <FaFacebook size={24} className="text-yellow-400 hover:text-white" />
        </a>
        <a
          href="https://github.com/mukit-blaster"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-125 transition-transform duration-300"
        >
          <FaGithub size={24} className="text-yellow-400 hover:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/mohayminul-mukit"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-125 transition-transform duration-300"
        >
          <FaLinkedin size={24} className="text-yellow-400 hover:text-white" />
        </a>
        <a
          href="mailto:mohyminulmukit@gmail.com"
          className="transform hover:scale-125 transition-transform duration-300"
        >
          <FaEnvelope size={24} className="text-yellow-400 hover:text-white" />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-gray-400 text-sm">
        © 2025 <span className="text-yellow-400 font-semibold">Mohayminul Mukit</span>. All Rights Reserved.
      </p>
    </footer>
  );
}
