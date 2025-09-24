import React from 'react';
import { FaLaptopCode, FaPaintBrush, FaServer } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode size={50} className="text-yellow-400 mb-4 animate-bounce-slow" />,
      title: "Web Development",
      description: "Building responsive and modern websites using React, TailwindCSS, and Node.js."
    },
    {
      icon: <FaPaintBrush size={50} className="text-yellow-400 mb-4 animate-bounce-slow" />,
      title: "UI/UX Design",
      description: "Designing clean and interactive interfaces for better user experience."
    },
    {
      icon: <FaServer size={50} className="text-yellow-400 mb-4 animate-bounce-slow" />,
      title: "Backend Development",
      description: "Creating robust server-side applications and RESTful APIs using Node.js."
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-800 to-gray-800" data-aos="fade-up">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300">
        My Services
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#facc15]"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">{service.title}</h3>
            <p className="text-gray-200 text-sm md:text-base">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Optional subtle animation for icons */}
      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
      `}</style>
    </section>
  );
}
