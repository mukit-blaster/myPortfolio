import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Portfolio() {
  const projects = [
    { img: "/reflex.png", title: "Reflex", github: "https://github.com/mukit-blaster/Reflex", live: "https://reflexx-sigma.vercel.app" },
    { img: "/weather.png", title: "WeatherBuzz", github: "https://github.com/mukit-blaster/WeatherBuzz", live: "https://mukit-blaster.github.io/WeatherBuzz/" },
    { img: "/realstate.png", title: "Real Estate Website", github: "https://github.com/mukit-blaster/real-state-website", live: "https://mukit-blaster.github.io/real-state-website/" },
    { img: "/food.png", title: "Food Website", github: "https://github.com/mukit-blaster/food-website", live: "https://mukit-blaster.github.io/food-website/" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300">
        My Projects
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-xl transition-all duration-500 border-2 border-transparent hover:border-yellow-400 aspect-[4/3] transform hover:scale-105"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Glassmorphic Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-4 pointer-events-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-2xl p-6 flex flex-col gap-4 shadow-lg hover:shadow-[0_0_25px_#facc15] transition duration-500">
                <h3 className="text-lg md:text-xl font-bold text-yellow-400">{project.title}</h3>
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition transform hover:-translate-y-1 hover:shadow-[0_0_12px_#facc15] pointer-events-auto"
                  >
                    <FaExternalLinkAlt className="inline mr-2" /> Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-yellow-400 font-semibold rounded-lg hover:bg-gray-700 transition transform hover:-translate-y-1 hover:shadow-[0_0_12px_#facc15] pointer-events-auto"
                  >
                    <FaGithub className="inline mr-2" /> GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Neon Gradient Border Glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400 opacity-0 group-hover:opacity-100 animate-pulse transition-all duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
