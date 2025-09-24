import React from "react"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa"

export default function Hero() {
  return (
    <section id="home" className="container mx-auto flex flex-col md:flex-row items-center py-20 px-6">
      {/* Left Section */}
      <div className="w-full md:w-1/2 md:pl-9">
        <div className="space-y-4">
          <span className="text-yellow-500 font-semibold text-lg">Welcome To My Profile</span>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Mohayminul <span className="text-yellow-500">Mukit</span>
          </h1>
          <h2 className="text-xl text-gray-300">- I'm a Product Designer & Web Developer.</h2>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="h-12 w-12 flex items-center justify-center border-2 border-yellow-400 text-yellow-400 rounded-full hover:scale-110 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="h-12 w-12 flex items-center justify-center border-2 border-yellow-400 text-yellow-400 rounded-full hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              className="h-12 w-12 flex items-center justify-center border-2 border-yellow-400 text-yellow-400 rounded-full hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="h-12 w-12 flex items-center justify-center border-2 border-yellow-400 text-yellow-400 rounded-full hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="h-12 w-12 flex items-center justify-center border-2 border-yellow-400 text-yellow-400 rounded-full hover:scale-110 transition"
            >
              <FaGithub />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex space-x-6 mt-8">
      {/* Hire Me Button */}
      <a
        href="#"
        className="inline-block px-6 py-3 font-semibold rounded-lg 
                   bg-black text-yellow-300 border-2 border-gray-900
                   transition duration-300 
                   hover:bg-transparent hover:text-white 
                   hover:shadow-[0_0_15px_#ffff00]"
      >
        Hire Me
      </a>

      {/* Download CV Button */}
      <a
        href="#"
        className="inline-block px-6 py-3 font-semibold rounded-lg 
                   bg-transparent text-white border-2 border-gray-900
                   transition duration-300 
                   hover:bg-black hover:text-yellow-400 
                   hover:shadow-[0_0_15px_#ffffff]"
      >
        Download CV
      </a>
    </div>
        </div>
      </div>

      {/* Right Section (Image placeholder) */}
     <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
  <div className="relative w-full max-w-md rounded-lg shadow-[0_0_20px_yellow] overflow-hidden">
    <img
      src="/mukit.png"
      alt="Hero"
      className="w-full h-auto max-h-[85%] md:max-h-[85vh] object-cover"
    />
  </div>
</div>

    </section>
  )
}
