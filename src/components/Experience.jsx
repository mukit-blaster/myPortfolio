import React from "react";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const items = [
  {
    type: "experience",
    title: "Frontend Developer",
    company: "Freelance",
    duration: "2024 — Present",
    description:
      "Building responsive, high-performance React applications with clean architecture and pixel-perfect UI.",
    tags: ["React", "Tailwind", "Vite", "REST APIs"],
  },
  {
    type: "education",
    title: "B.Sc. in Computer Science & Engineering",
    company: "Daffodil International University",
    duration: "2022 — 2026",
    description:
      "Studying core CS — algorithms, data structures, software engineering, and modern web technologies.",
    tags: ["CSE", "Algorithms", "Software Eng."],
  },
  {
    type: "experience",
    title: "Backend Developer",
    company: "Internship",
    duration: "2025 — 2026",
    description:
      "Designed and developed REST APIs with Node.js, Express, and MongoDB — clean code, scalable patterns.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section relative overflow-hidden bg-gradient-to-b from-[#0b1020] via-[#0d1428] to-[#0f172a]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-60 h-60 bg-indigo-500/15 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl animate-blob delay-300"></div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center mb-4 md:mb-5" data-aos="fade-up">
          <span className="section-eyebrow">My journey</span>
          <h2 className="section-title gradient-text heading-underline">
            Experience &amp; Education
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/60 via-cyan-400/40 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-3">
            {items.map((item, i) => {
              const isLeft = i % 2 === 0;
              const Icon = item.type === "experience" ? FaBriefcase : FaGraduationCap;
              return (
                <div
                  key={i}
                  className="relative md:grid md:grid-cols-2 md:gap-8 items-center"
                  data-aos={isLeft ? "fade-right" : "fade-left"}
                >
                  {/* Dot */}
                  <div className="absolute left-3 md:left-1/2 -translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 z-10">
                    <div className="relative w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-[0_0_14px_rgba(99,102,241,0.7)]">
                      <Icon className="text-[0.6rem]" />
                      <span className="absolute inset-0 rounded-full bg-cyan-400/40 animate-ping"></span>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`pl-10 md:pl-0 ${
                      isLeft ? "md:pr-8 md:text-right" : "md:col-start-2 md:pl-8"
                    }`}
                  >
                    <div className="gradient-border p-3 hover-lift">
                      <div
                        className={`flex items-center gap-1 text-cyan-300 text-[0.62rem] font-semibold uppercase tracking-wider mb-1 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        <FaCalendarAlt className="text-[0.55rem]" />
                        <span>{item.duration}</span>
                      </div>
                      <h3 className="text-[0.92rem] font-bold text-slate-100 leading-snug">
                        {item.title}
                      </h3>
                      <h4 className="text-indigo-300 font-medium mb-1.5 text-[0.72rem]">
                        {item.company}
                      </h4>
                      <p className="text-slate-300 text-[0.72rem] leading-snug mb-2">
                        {item.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-1 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-cyan-300 text-[0.62rem] font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
