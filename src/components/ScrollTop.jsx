import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollTop > 300);
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
                  bg-[#0b1020]/90 backdrop-blur border border-cyan-400/40 text-cyan-300 text-xs
                  shadow-[0_0_18px_rgba(99,102,241,0.4)]
                  transition-all duration-500 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-cyan-400 hover:text-white hover:scale-110
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      {/* Progress ring */}
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="rgba(99, 102, 241, 0.18)"
          strokeWidth="2"
        />
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="url(#scrollGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.15s linear" }}
        />
        <defs>
          <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
      <FaArrowUp className="relative z-10" />
    </button>
  );
}
