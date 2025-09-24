import React from "react";
import { FaReact, FaNodeJs, FaJsSquare, FaCss3Alt, FaUsers, FaComments, FaLightbulb, FaBrain } from "react-icons/fa";

const technicalSkills = [
  { name: "React", icon: <FaReact className="text-blue-400 text-xl md:text-2xl" />, level: "90%" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-xl md:text-2xl" />, level: "85%" },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-xl md:text-2xl" />, level: "95%" },
  { name: "CSS/Tailwind", icon: <FaCss3Alt className="text-blue-600 text-xl md:text-2xl" />, level: "90%" },
];

const softSkills = [
  { name: "Communication", icon: <FaComments className="text-yellow-400 text-xl md:text-2xl" />, level: "95%" },
  { name: "Teamwork", icon: <FaUsers className="text-yellow-400 text-xl md:text-2xl" />, level: "90%" },
  { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-400 text-xl md:text-2xl" />, level: "90%" },
  { name: "Critical Thinking", icon: <FaBrain className="text-yellow-400 text-xl md:text-2xl" />, level: "85%" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12 tracking-wide">
        My Skills
      </h2>

      {/* Technical Skills */}
      <div className="max-w-5xl mx-auto mb-12 px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center md:text-left">
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {technicalSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-800 p-3 rounded-lg shadow-md hover:scale-105 transform transition duration-300 group"
            >
              <div className="flex items-center space-x-2 mb-2">
                {skill.icon}
                <h4 className="text-sm md:text-md font-semibold text-yellow-400">{skill.name}</h4>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 transition-all duration-1000 group-hover:h-3"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <p className="mt-1 text-gray-300 text-xs">{skill.level} proficiency</p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center md:text-left">
          Soft Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {softSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-800 p-3 rounded-lg shadow-md hover:scale-105 transform transition duration-300 group"
            >
              <div className="flex items-center space-x-2 mb-2">
                {skill.icon}
                <h4 className="text-sm md:text-md font-semibold text-yellow-400">{skill.name}</h4>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 transition-all duration-1000 group-hover:h-3"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <p className="mt-1 text-gray-300 text-xs">{skill.level} proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
