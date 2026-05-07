import React from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaServer,
  FaMobileAlt,
  FaSearch,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description: "Responsive, blazing-fast websites with React and Tailwind.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI / UX Design",
    description: "Clean, intuitive interfaces that convert visitors into users.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description: "Robust REST APIs with Node.js, Express, and MongoDB.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description: "Pixel-perfect layouts on every screen — phone to ultrawide.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    description: "Semantic markup, meta tags, Lighthouse-perfect scores.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Tuning",
    description: "Smart bundling, lazy loading, and aggressive caching.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#0b1020]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -left-16 w-56 h-56 bg-indigo-500/15 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-blob delay-500"></div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-eyebrow">What I offer</span>
          <h2 className="section-title gradient-text heading-underline">My Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group relative gradient-border p-4 hover-lift overflow-hidden text-center"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/0 group-hover:bg-indigo-500/20 rounded-full blur-3xl transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="mx-auto w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 border border-indigo-400/30 flex items-center justify-center text-cyan-300 text-base mb-2.5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-[0.95rem] font-bold text-slate-100 mb-1 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-[0.75rem] leading-snug">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
