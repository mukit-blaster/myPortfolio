import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const timeline = [
  {
    type: "education",
    title: "B.Sc. in CSE",
    company: "Daffodil International University",
    duration: "2022 - 2026",
  },
  {
    type: "education",
    title: "HSC",
    company: "Rajshahi Govt. City College",
    duration: "2019 - 2021",
  },
  {
    type: "experience",
    title: "Frontend Developer",
    company: "Freelance",
    duration: "2023 - Present",
    description: "Building responsive web apps with React & TailwindCSS.",
  },
  {
    type: "experience",
    title: "Backend Developer",
    company: "Internship",
    duration: "2022 - 2023",
    description: "Developed REST APIs with Node.js, Express, and MongoDB.",
  },
];

export default function Experience() {
  // Pair education and experience per row
  const rows = [
    { left: timeline[0], right: timeline[2] },
    { left: timeline[1], right: timeline[3] },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300">
        Experience & Education
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-6 px-4">
        {rows.map((row, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left - Education */}
            <div className="relative bg-gray-800 p-5 rounded-xl shadow-lg border-t-4 border-yellow-400 hover:shadow-[0_0_25px_#facc15] hover:-translate-y-1 transition transform duration-300 flex flex-col justify-between">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-yellow-400 to-orange-400 text-gray-900 rounded-full shadow-xl">
                <FaGraduationCap className="text-xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-yellow-400 mt-8">
                {row.left.title}
              </h3>
              <h4 className="text-gray-300 text-sm mb-2">
                {row.left.company} {row.left.duration && `| ${row.left.duration}`}
              </h4>
            </div>

            {/* Right - Experience */}
            <div className="relative bg-gray-800 p-5 rounded-xl shadow-lg border-t-4 border-yellow-400 hover:shadow-[0_0_25px_#facc15] hover:-translate-y-1 transition transform duration-300 flex flex-col justify-between">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-yellow-400 to-orange-400 text-gray-900 rounded-full shadow-xl">
                <FaBriefcase className="text-xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-yellow-400 mt-8">
                {row.right.title}
              </h3>
              <h4 className="text-gray-300 text-sm mb-2">
                {row.right.company} {row.right.duration && `| ${row.right.duration}`}
              </h4>
              <p className="text-gray-200 text-sm">{row.right.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
