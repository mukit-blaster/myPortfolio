import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState({ message: "", type: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setStatus({ message: "⚠️ Please fill in all fields.", type: "warning" });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus({ message: "⚠️ Please enter a valid email.", type: "warning" });
      return;
    }

    setSending(true);
    setStatus({ message: "⏳ Sending...", type: "info" });

    emailjs
      .sendForm(
        "service_6iymw4r",
        "template_ytmfxtw",
        formRef.current,
        "sm1rRzR5Jqk-cUqXp"
      )
      .then(
        () => {
          setStatus({ message: "✅ Message Sent Successfully!", type: "success" });
          setSending(false);
          form.reset();
        },
        () => {
          setStatus({ message: "❌ Failed to send. Try again.", type: "error" });
          setSending(false);
        }
      );
  };

  // Style mapping for alerts
  const alertStyles = {
    success: "bg-green-600/20 border border-green-500 text-green-400",
    error: "bg-red-600/20 border border-red-500 text-red-400",
    warning: "bg-yellow-600/20 border border-yellow-500 text-yellow-400",
    info: "bg-blue-600/20 border border-blue-500 text-blue-400",
  };

  return (
    <section id="contact" className="py-16 bg-black relative">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-10">
        Contact Me
      </h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4 bg-gray-900 p-6 md:p-8 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-gray-800 border border-yellow-400 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none transition duration-300 text-sm"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-gray-800 border border-yellow-400 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none transition duration-300 text-sm"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-3 rounded-lg bg-gray-800 border border-yellow-400 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none transition duration-300 h-24 resize-none text-sm"
        />

        <button
          type="submit"
          disabled={sending}
          className={`px-5 py-2.5 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition duration-300 ${
            sending ? "cursor-not-allowed opacity-70" : ""
          } text-sm`}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>

        {status.message && (
          <div
            className={`mt-4 text-center p-3 rounded-lg text-sm font-medium transition duration-300 ${alertStyles[status.type]}`}
          >
            {status.message}
          </div>
        )}
      </form>
    </section>
  );
}
