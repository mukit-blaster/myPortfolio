import React, { useEffect, useRef, useState } from "react";
import { FaCode, FaLayerGroup, FaUserTie, FaCheckCircle } from "react-icons/fa";

function CountUp({ end, suffix = "", duration = 1600 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const startTime = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(end * eased));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const STATS = [
  { icon: <FaCode />, value: 15, suffix: "+", label: "Projects Built" },
  { icon: <FaLayerGroup />, value: 20, suffix: "+", label: "Technologies" },
  { icon: <FaUserTie />, value: 10, suffix: "+", label: "Happy Clients" },
  { icon: <FaCheckCircle />, value: 100, suffix: "%", label: "Commitment" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section relative overflow-hidden bg-gradient-to-b from-[#0b1020] via-[#0d1428] to-[#0f172a]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-blob delay-500"></div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center mb-4 md:mb-5" data-aos="fade-up">
          <span className="section-eyebrow">Get to know me</span>
          <h2 className="section-title gradient-text heading-underline">About Me</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0" data-aos="fade-right">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52">
              <div className="absolute inset-0 rounded-full glow-ring animate-spin-slow opacity-80 blur-[2px]"></div>
              <div className="absolute inset-2 rounded-full bg-[#0b1020]"></div>
              <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-indigo-400/60 shadow-[0_0_30px_rgba(99,102,241,0.45)]">
                <img
                  src="/about.jpg"
                  alt="About Mohayminul Mukit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-1 px-2 py-1 rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-bold text-[0.65rem] shadow-lg shadow-indigo-500/40 animate-float">
                2+ yrs Experience
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-slate-100 md:flex-1 text-center md:text-left" data-aos="fade-left">
            <h3 className="text-base sm:text-lg font-bold mb-2">
              A passionate{" "}
              <span className="gradient-text">Web Developer</span>{" "}
              based in Bangladesh
            </h3>

            <p className="text-slate-300 text-[0.78rem] leading-snug mb-2">
              I'm <span className="font-semibold text-cyan-300">Mohayminul Mukit</span> — I craft{" "}
              <span className="text-indigo-300 font-semibold">modern, responsive websites</span>{" "}
              that turn complex ideas into{" "}
              <span className="text-indigo-300 font-semibold">clean, elegant solutions</span>.
            </p>

            <p className="text-slate-300 text-[0.78rem] leading-snug mb-3">
              I specialize in{" "}
              <span className="text-indigo-300 font-semibold">JavaScript, React, and Tailwind CSS</span>,
              building dynamic experiences that are fast, intuitive, and built to scale.
            </p>

            {/* Quick info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mb-4 text-[0.72rem]">
              {[
                ["Name", "Mohayminul Mukit"],
                ["Email", "mohyminulmukit@gmail.com"],
                ["From", "Bangladesh"],
                ["Freelance", "Available"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center gap-1.5 justify-center md:justify-start">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]"></span>
                  <span className="text-slate-400">{k}:</span>
                  <span className="text-slate-100 font-medium">{v}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <a
                href="#contact"
                className="px-4 py-1.5 text-xs bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-semibold rounded-md
                           shadow-md shadow-indigo-500/30 transition-all duration-300
                           hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]"
              >
                Let's Talk
              </a>
              <a
                href="/Mukit-CV.pdf"
                download="Mohayminul-Mukit-CV.pdf"
                className="px-4 py-1.5 text-xs bg-transparent text-cyan-300 font-semibold rounded-md
                           border border-cyan-400/60 transition-all duration-300
                           hover:bg-cyan-400/10 hover:border-cyan-400 hover:-translate-y-0.5"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5 md:mt-6"
          data-aos="fade-up"
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className="gradient-border p-2.5 text-center hover-lift"
            >
              <div className="text-sm text-cyan-400 mb-0.5 flex justify-center">
                {s.icon}
              </div>
              <div className="text-base sm:text-lg font-extrabold gradient-text leading-none">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="text-slate-400 text-[0.6rem] mt-0.5 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
