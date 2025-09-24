import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#"><FaFacebook size={28} className="text-yellow-400 hover:text-white transition" /></a>
        <a href="#"><FaGithub size={28} className="text-yellow-400 hover:text-white transition" /></a>
        <a href="#"><FaLinkedin size={28} className="text-yellow-400 hover:text-white transition" /></a>
      </div>
      <p className="text-gray-400">© 2025 Mohayminul Mukit. All Rights Reserved.</p>
    </footer>
  );
}
