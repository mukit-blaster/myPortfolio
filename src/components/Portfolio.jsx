import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Portfolio() {
  const projects = [
    {
      img: "/reflex.png",
      title: "Reflex",
      github: "https://github.com/mukit-blaster/Reflex",
      live: "https://reflexx-sigma.vercel.app",
    },
    {
      img: "/weather.png",
      title: "WeatherBuzz",
      github: "https://github.com/mukit-blaster/WeatherBuzz",
      live: "https://mukit-blaster.github.io/WeatherBuzz/",
    },
    {
      img: "/realstate.png",
      title: "Real Estate Website",
      github: "https://github.com/mukit-blaster/real-state-website",
      live: "https://mukit-blaster.github.io/real-state-website/",
    },
    {
      img: "/food.png",
      title: "Food Website",
      github: "https://github.com/mukit-blaster/food-website",
      live: "https://mukit-blaster.github.io/food-website/",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="portfolio" className="py-24 bg-gray-900 relative">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400">
          My Projects
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Custom Arrows */}
        <div
          ref={prevRef}
          className="absolute top-1/2 -translate-y-1/2 left-1 sm:-left-10 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 text-yellow-400 flex items-center justify-center cursor-pointer hover:bg-gray-700 hover:scale-110 transition shadow-lg"
        >
          <FaArrowLeft />
        </div>
        <div
          ref={nextRef}
          className="absolute top-1/2 -translate-y-1/2 right-1 sm:-right-10 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 text-yellow-400 flex items-center justify-center cursor-pointer hover:bg-gray-700 hover:scale-110 transition shadow-lg"
        >
          <FaArrowRight />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="relative w-full sm:w-80 md:w-96 h-72 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-yellow-400 transition duration-300 bg-gray-800 group hover:shadow-[0_0_30px_#facc15] hover:scale-105 ml-2 sm:ml-4 md:ml-20">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 sm:p-6 rounded-2xl">
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-3 text-center">
                    {project.title}
                  </h3>
                  <div className="flex justify-center gap-2 sm:gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 sm:px-4 sm:py-1.5 bg-yellow-400 text-black font-medium rounded hover:bg-yellow-300 transition transform hover:-translate-y-1 hover:shadow-[0_0_12px_#facc15]"
                    >
                      <FaExternalLinkAlt className="inline mr-1" /> Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 sm:px-4 sm:py-1.5 bg-gray-900 text-yellow-400 font-medium rounded hover:bg-gray-800 transition transform hover:-translate-y-1 hover:shadow-[0_0_12px_#facc15]"
                    >
                      <FaGithub className="inline mr-1" /> GitHub
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-0 group-hover:opacity-40 transition duration-500 pointer-events-none"></div>
              </div>
            </SwiperSlide>
          ))}

          {/* Pagination */}
          <div className="custom-pagination flex justify-center mt-6"></div>
        </Swiper>
      </div>
    </section>
  );
}
