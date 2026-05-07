import React, { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaBrain,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiExpress } from "react-icons/si";

const technicalSkills = [
  { name: "React",        icon: <FaReact className="text-sky-400" />,         level: 90 },
  { name: "JavaScript",   icon: <FaJsSquare className="text-yellow-400" />,   level: 95 },
  { name: "Node.js",      icon: <FaNodeJs className="text-emerald-400" />,    level: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />,  level: 92 },
  { name: "HTML / CSS",   icon: <FaHtml5 className="text-orange-400" />,      level: 95 },
  { name: "Git / GitHub", icon: <FaGitAlt className="text-rose-400" />,       level: 85 },
];

const softSkills = [
  { name: "Communication",     icon: <FaComments />,  level: 90 },
  { name: "Teamwork",          icon: <FaUsers />,     level: 92 },
  { name: "Problem Solving",   icon: <FaLightbulb />, level: 95 },
  { name: "Critical Thinking", icon: <FaBrain />,     level: 95 },
];

const techStack = [
  { name: "React",      icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js",    icon: <FaNodeJs /> },
  { name: "Express",    icon: <SiExpress /> },
  { name: "MongoDB",    icon: <SiMongodb /> },
  { name: "Tailwind",   icon: <SiTailwindcss /> },
  { name: "HTML5",      icon: <FaHtml5 /> },
  { name: "CSS3",       icon: <FaCss3Alt /> },
  { name: "Figma",      icon: <FaFigma /> },
  { name: "Git",        icon: <FaGitAlt /> },
  { name: "SQL",        icon: <FaDatabase /> },
];

function SkillBar({ name, icon, level, accent = "from-indigo-500 to-cyan-400" }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setAnimate(true);
            observer.unobserve(node);
          }
        }),
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="glass p-2.5 rounded-lg hover-lift group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-sm">{icon}</span>
          <h4 className="font-semibold text-slate-100 text-[0.78rem]">{name}</h4>
        </div>
        <span className="text-cyan-300 text-[0.7rem] font-bold">{level}%</span>
      </div>
      <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${accent} transition-[width] duration-[1500ms] ease-out shimmer`}
          style={{ width: animate ? `${level}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#0b1020]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl animate-blob delay-300"></div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center mb-4 md:mb-5" data-aos="fade-up">
          <span className="section-eyebrow">What I'm good at</span>
          <h2 className="section-title gradient-text heading-underline">My Skills</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-5 max-w-6xl mx-auto">
          <div data-aos="fade-right">
            <h3 className="text-sm font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400"></span>
              Technical Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {technicalSkills.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div data-aos="fade-left">
            <h3 className="text-sm font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500"></span>
              Soft Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {softSkills.map((s) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  icon={<span className="text-cyan-300">{s.icon}</span>}
                  level={s.level}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tech marquee */}
        <div className="mt-5 md:mt-6" data-aos="fade-up">
          <p className="text-center text-slate-500 text-[0.62rem] uppercase tracking-[0.28em] mb-3">
            Tools & Technologies
          </p>
          <div className="relative overflow-hidden mask-fade">
            <div className="marquee-track gap-4 sm:gap-5 py-1">
              {[...techStack, ...techStack].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-indigo-400/20 text-slate-200 hover:text-cyan-300 hover:border-cyan-400/60 hover:shadow-[0_0_18px_rgba(34,211,238,0.25)] transition shrink-0 text-[0.72rem]"
                >
                  <span className="text-sm text-cyan-300">{t.icon}</span>
                  <span className="font-medium">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mask-fade {
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
      `}</style>
    </section>
  );
}
