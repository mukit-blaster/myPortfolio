import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { HiDownload, HiSparkles } from "react-icons/hi";

const ROLES = [
  "Web Developer",
  "React Specialist",
  "UI / UX Designer",
  "Frontend Engineer",
];

const SOCIALS = [
  { icon: <FaFacebook />, link: "https://www.facebook.com/mohayminul.mukit", label: "Facebook" },
  { icon: <FaWhatsapp />, link: "https://wa.me/qr/VFOSXFXNN3KBA1", label: "WhatsApp" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mohayminul-mukit", label: "LinkedIn" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/_mukit_blaster", label: "Instagram" },
  { icon: <FaGithub />, link: "https://github.com/mukit-blaster", label: "GitHub" },
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 45 : 90;

    const timeout = setTimeout(() => {
      const next = deleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);
      setText(next);

      if (!deleting && next === current) {
        setTimeout(() => setDeleting(true), 1300);
      } else if (deleting && next === "") {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[560px] flex items-center overflow-hidden bg-spotlight"
    >
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-16 w-64 h-64 bg-indigo-500/25 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-400/20 rounded-full blur-3xl animate-blob delay-300"></div>
        <div className="absolute -bottom-24 left-1/3 w-64 h-64 bg-indigo-400/15 rounded-full blur-3xl animate-blob delay-500"></div>
        <div className="absolute inset-0 bg-grid opacity-40"></div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-10 pt-10 pb-2 relative z-10 w-full">
        <div className="grid md:grid-cols-2 items-center gap-3 sm:gap-4 md:gap-7">
          {/* Left Section */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="space-y-2 sm:space-y-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-cyan-300 text-[0.65rem] sm:text-xs font-medium animate-fade-up">
                <HiSparkles className="text-cyan-400 text-[0.7rem]" />
                Available for opportunities
              </span>

              <h1
                className="font-extrabold leading-[1.05] tracking-tight animate-fade-up delay-100 text-slate-100"
                style={{ fontSize: "clamp(1.6rem, 4.6vw, 3.2rem)" }}
              >
                Hi, I'm <span className="gradient-text">Mohayminul</span>
                <br className="hidden sm:block" />
                <span className="gradient-text"> Mukit</span>
              </h1>

              <h2
                className="text-slate-300 font-medium animate-fade-up delay-200 min-h-[1.4em]"
                style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)" }}
              >
                I'm a{" "}
                <span className="text-cyan-300 font-semibold">{text}</span>
                <span className="typewriter-caret"></span>
              </h2>

              <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto md:mx-0 leading-snug animate-fade-up delay-300 hidden md:block">
                I craft modern, responsive, high-performance web experiences with a sharp eye for detail.
              </p>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-2 pt-1 animate-fade-up delay-500">
                {SOCIALS.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center
                               border border-indigo-400/40 text-indigo-300
                               rounded-full bg-indigo-500/5 text-xs sm:text-sm
                               transition-all duration-300
                               hover:scale-110 hover:-translate-y-0.5 hover:rotate-6
                               hover:bg-gradient-to-br hover:from-indigo-500 hover:to-cyan-400 hover:text-white
                               hover:shadow-[0_0_18px_rgba(99,102,241,0.7)]"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1.5 animate-fade-up delay-700">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg
                             bg-gradient-to-r from-indigo-500 to-cyan-400 text-white
                             shadow-lg shadow-indigo-500/30
                             transition-all duration-300
                             hover:shadow-[0_0_22px_rgba(99,102,241,0.7)] hover:-translate-y-0.5"
                >
                  Hire Me
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>

                <a
                  href="/Mukit-CV.pdf"
                  download="Mohayminul-Mukit-CV.pdf"
                  className="group inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg
                             bg-transparent text-cyan-300 border-2 border-cyan-400/60
                             transition-all duration-300
                             hover:bg-cyan-400/10 hover:border-cyan-400 hover:-translate-y-0.5"
                >
                  <HiDownload className="text-sm group-hover:animate-bounce-soft" />
                  Download CV
                </a>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-2 pt-2 sm:pt-3 max-w-[20rem] mx-auto md:mx-0 animate-fade-up delay-700">
                {[
                  { value: "2+", label: "Years" },
                  { value: "15+", label: "Projects" },
                  { value: "100%", label: "Dedication" },
                ].map((s, i) => (
                  <div key={i} className="text-center md:text-left">
                    <div className="text-base sm:text-lg md:text-xl font-extrabold gradient-text leading-none">
                      {s.value}
                    </div>
                    <div className="text-[0.6rem] sm:text-[0.65rem] text-slate-400 mt-0.5 uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Avatar */}
          <div className="order-1 md:order-2 flex justify-center animate-scale-in">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72">
              <div className="absolute inset-0 rounded-full glow-ring animate-spin-slow opacity-80 blur-[2px]"></div>
              <div className="absolute inset-2 rounded-full bg-[#0b1020]"></div>
              <div className="absolute inset-4 rounded-full animate-pulse-glow"></div>
              <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-indigo-400/60 animate-float-slow">
                <img
                  src="/mukit.png"
                  alt="Mohayminul Mukit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-1 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full bg-[#0b1020]/85 border border-indigo-400/50 text-cyan-300 text-[0.55rem] sm:text-[0.6rem] font-semibold shadow-lg backdrop-blur animate-float">
                React ⚛
              </div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-1 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full bg-[#0b1020]/85 border border-indigo-400/50 text-cyan-300 text-[0.55rem] sm:text-[0.6rem] font-semibold shadow-lg backdrop-blur animate-float delay-300">
                Tailwind
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 px-2 py-0.5 rounded-full bg-[#0b1020]/85 border border-indigo-400/50 text-cyan-300 text-[0.6rem] font-semibold shadow-lg backdrop-blur animate-float delay-500">
                JavaScript
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
