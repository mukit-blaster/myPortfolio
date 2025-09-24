import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24" data-aos="fade-left">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Contact Me</h2>
      <form className="max-w-2xl mx-auto flex flex-col gap-6">
        <input type="text" placeholder="Your Name" className="p-4 rounded-lg bg-gray-800 border border-yellow-400 text-white"/>
        <input type="email" placeholder="Your Email" className="p-4 rounded-lg bg-gray-800 border border-yellow-400 text-white"/>
        <textarea placeholder="Your Message" className="p-4 rounded-lg bg-gray-800 border border-yellow-400 text-white h-32"/>
        <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition">Send Message</button>
      </form>
    </section>
  );
}
