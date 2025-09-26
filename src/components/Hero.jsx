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
          <div className="flex space-x-5 mt-6">
  {[
    { icon: <FaFacebook />, link: "https://www.facebook.com/mohayminul.mukit" },
    { icon: <FaWhatsapp />, link: "https://wa.me/qr/VFOSXFXNN3KBA1" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mohayminul-mukit" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/_mukit_blaster" },
    { icon: <FaGithub />, link: "https://github.com/mukit-blaster" },
  ].map((item, i) => (
    <a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="h-12 w-12 flex items-center justify-center 
                 border-2 border-yellow-400 text-yellow-400 
                 rounded-full shadow-[0_0_15px_rgba(255,255,0,0.4)] 
                 transition-all duration-300 
                 hover:scale-125 hover:rotate-6 
                 hover:bg-gradient-to-tr hover:from-yellow-300 hover:to-yellow-400 
                 hover:text-black hover:shadow-[0_0_25px_#FFD700]"
    >
      {item.icon}
    </a>
  ))}
</div>


          {/* Buttons */}
          <div className="flex space-x-6 mt-8">
      {/* Hire Me Button */}
      <a
        href="#contact"
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
  href="/Mukit-CV.pdf"
  download="Mohayminul-Mukit-CV.pdf"
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
