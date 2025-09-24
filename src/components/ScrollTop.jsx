import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div
      className={`fixed bottom-8 right-8 cursor-pointer p-3 rounded-full bg-yellow-400 text-black shadow-lg transition-transform ${visible ? 'scale-100' : 'scale-0'}`}
      onClick={scrollToTop}
    >
      <FaArrowUp size={20} />
    </div>
  );
}
