import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    img: "/reflex.png",
    title: "Reflex",
    description: "Reaction-time game with smooth UI and instant feedback.",
    stack: ["React", "Tailwind"],
    github: "https://github.com/mukit-blaster/Reflex",
    live: "https://reflexx-sigma.vercel.app",
  },
  {
    img: "/weather.png",
    title: "WeatherBuzz",
    description: "Live weather app with location search and forecasts.",
    stack: ["JavaScript", "API"],
    github: "https://github.com/mukit-blaster/WeatherBuzz",
    live: "https://mukit-blaster.github.io/WeatherBuzz/",
  },
  {
    img: "/realstate.png",
    title: "Real Estate",
    description: "Modern real-estate landing page with listings and search.",
    stack: ["HTML", "CSS", "JS"],
    github: "https://github.com/mukit-blaster/real-state-website",
    live: "https://mukit-blaster.github.io/real-state-website/",
  },
  {
    img: "/food.png",
    title: "Food Website",
    description: "Vibrant food delivery landing page with CTA flow.",
    stack: ["HTML", "CSS", "JS"],
    github: "https://github.com/mukit-blaster/food-website",
    live: "https://mukit-blaster.github.io/food-website/",
  },
];

export default function Portfolio() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="portfolio"
      className="section relative overflow-hidden bg-gradient-to-b from-[#0b1020] via-[#0d1428] to-[#0f172a]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-blob delay-300"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-4 md:mb-5 px-4" data-aos="fade-up">
          <span className="section-eyebrow">Featured Work</span>
          <h2 className="section-title gradient-text heading-underline">My Projects</h2>
          <p className="section-sub">
            A handful of projects that show how I think — clean code, tight UI, real polish.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <button
            ref={prevRef}
            aria-label="Previous project"
            className="absolute top-[42%] -translate-y-1/2 left-0 sm:-left-1 z-30 w-9 h-9 rounded-full bg-[#0b1020]/85 backdrop-blur border border-indigo-400/40 text-cyan-300 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-indigo-500 hover:to-cyan-400 hover:text-white hover:scale-105 transition shadow-lg"
          >
            <FaArrowLeft className="text-[0.7rem]" />
          </button>
          <button
            ref={nextRef}
            aria-label="Next project"
            className="absolute top-[42%] -translate-y-1/2 right-0 sm:-right-1 z-30 w-9 h-9 rounded-full bg-[#0b1020]/85 backdrop-blur border border-indigo-400/40 text-cyan-300 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-indigo-500 hover:to-cyan-400 hover:text-white hover:scale-105 transition shadow-lg"
          >
            <FaArrowRight className="text-[0.7rem]" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, Keyboard]}
            grabCursor
            keyboard={{ enabled: true }}
            loop
            speed={1100}
            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              waitForTransition: true,
            }}
            pagination={{ clickable: true, el: ".project-pagination" }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              0:    { slidesPerView: 1.1, spaceBetween: 14 },
              640:  { slidesPerView: 1.8, spaceBetween: 16 },
              768:  { slidesPerView: 2.4, spaceBetween: 18 },
              1024: { slidesPerView: 3,   spaceBetween: 20 },
              1280: { slidesPerView: 3.2, spaceBetween: 22 },
            }}
            className="!py-3 !px-2 project-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <article className="group relative h-full rounded-xl overflow-hidden bg-[#0f1830] border border-white/5 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_18px_40px_-15px_rgba(99,102,241,0.55)] hover:-translate-y-1">
                  {/* Top gradient line — animated on hover */}
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></span>

                  {/* Project number */}
                  <span className="absolute top-2 right-2 z-10 text-[0.6rem] font-bold tracking-[0.15em] text-cyan-200/90 bg-[#0b1020]/85 backdrop-blur border border-cyan-400/30 rounded-full px-2 py-0.5">
                    {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>

                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1830] via-[#0f1830]/40 to-transparent"></div>

                    {/* Stack tags overlay (always visible at bottom of image) */}
                    <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="px-1.5 py-0.5 rounded bg-[#0b1020]/85 backdrop-blur border border-cyan-400/30 text-cyan-200 text-[0.55rem] font-semibold tracking-wide"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer info */}
                  <div className="p-3">
                    <h3 className="text-[0.88rem] font-bold text-slate-100 group-hover:text-cyan-300 transition-colors leading-tight mb-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-[0.68rem] leading-snug line-clamp-2 mb-2.5">
                      {project.description}
                    </p>

                    <div className="flex gap-1.5">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-1.5 text-[0.68rem] rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-semibold shadow-md shadow-indigo-500/30 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition"
                      >
                        <FaExternalLinkAlt className="text-[0.55rem]" /> Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        className="inline-flex items-center justify-center gap-1.5 w-9 py-1.5 text-[0.78rem] rounded-md bg-[#0b1020] text-cyan-300 border border-cyan-400/40 font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 hover:-translate-y-0.5 transition"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="project-pagination flex justify-center mt-3 gap-2"></div>
        </div>

        <div className="text-center mt-4" data-aos="fade-up">
          <a
            href="https://github.com/mukit-blaster"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[0.72rem] rounded-md border border-cyan-400/60 text-cyan-300 font-semibold transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:-translate-y-0.5"
          >
            <FaGithub className="text-xs" /> View More on GitHub
          </a>
        </div>
      </div>

      <style>{`
        .project-pagination .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #22d3ee;
          opacity: 0.35;
          transition: all 0.35s;
        }
        .project-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          width: 18px;
          border-radius: 4px;
          background: linear-gradient(90deg, #6366f1, #22d3ee);
        }
        /* Ensure smooth, continuous flow */
        .project-swiper .swiper-wrapper {
          transition-timing-function: linear;
        }
      `}</style>
    </section>
  );
}
