import React from 'react';

export default function About() {
  return (
   <section
  id="about"
  className="py-24 bg-gradient-to-b from-gray-900 to-gray-800"
  data-aos="fade-right"
>
  <div className="container mx-auto px-5 flex flex-col md:flex-row items-center md:space-x-12">
    {/* Profile Image with proper circle and left spacing */}
    <div className="flex-shrink-0 mb-8 md:mb-0">
      <div className="w-64 h-64 md:ml-8 relative">
        <img
          src="/about.jpg"
          alt="About"
          className="w-full h-full rounded-full object-cover border-4 border-yellow-400 shadow-[0_0_10px_yellow]"
        />
      </div>
    </div>

    {/* Text Content */}
    <div className="text-white md:flex-1">
      <h2 className="text-5xl font-bold text-yellow-400 mb-6 tracking-wide">
        About Me
      </h2>

      <p className="text-lg leading-relaxed mb-4">
        Hi, I’m <span className="font-bold text-yellow-300">Mohayminul Mukit</span>, a passionate Web Developer who loves crafting <span className="text-yellow-400 font-semibold">modern, responsive, and interactive websites</span>. My mission is to turn complex ideas into <span className="text-yellow-400 font-semibold">clean, elegant solutions</span> that users love.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        I specialize in <span className="text-yellow-400 font-semibold">JavaScript, React, and Tailwind CSS</span>, creating dynamic web experiences that are both fast and intuitive. I thrive on solving challenges, optimizing performance, and writing scalable code that lasts.
      </p>

      <p className="text-lg leading-relaxed">
        Beyond coding, I enjoy learning new technologies, experimenting with design trends, and building projects that leave an impact. I’m driven, detail-oriented, and ready to bring ideas to life for businesses and users alike.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex space-x-4">
        <a
          href="#contact"
          className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg border-2 border-yellow-400 hover:bg-transparent hover:text-yellow-400 shadow-[0_0_10px_yellow] transition-all duration-300"
        >
          Let’s Talk
        </a>
        <a
          href="/cv.pdf"
          className="px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
  </div>
</section>



  );
}
