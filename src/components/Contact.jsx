import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

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
      setStatus({ message: "⚠️  Please fill in all fields.", type: "warning" });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus({ message: "⚠️  Please enter a valid email.", type: "warning" });
      return;
    }

    setSending(true);
    setStatus({ message: "⏳  Sending...", type: "info" });

    emailjs
      .sendForm(
        "service_6iymw4r",
        "template_ytmfxtw",
        formRef.current,
        "sm1rRzR5Jqk-cUqXp"
      )
      .then(
        () => {
          setStatus({ message: "✅  Message sent successfully!", type: "success" });
          setSending(false);
          form.reset();
        },
        () => {
          setStatus({ message: "❌  Failed to send. Please try again.", type: "error" });
          setSending(false);
        }
      );
  };

  const alertStyles = {
    success: "bg-emerald-600/15 border border-emerald-500/40 text-emerald-300",
    error:   "bg-rose-600/15 border border-rose-500/40 text-rose-300",
    warning: "bg-amber-600/15 border border-amber-500/40 text-amber-300",
    info:    "bg-cyan-600/15 border border-cyan-500/40 text-cyan-300",
  };

  const contactInfo = [
    { icon: <FaEnvelope />,     label: "Email",    value: "mohyminulmukit@gmail.com",   link: "mailto:mohyminulmukit@gmail.com" },
    { icon: <FaPhone />,        label: "WhatsApp", value: "Chat with me",           link: "https://wa.me/qr/VFOSXFXNN3KBA1" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Bangladesh",             link: null },
  ];

  return (
    <section
      id="contact"
      className="section relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0a0f22] to-[#070b1a]"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-24 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-blob delay-500"></div>
        <div className="absolute inset-0 bg-grid opacity-[0.15]"></div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center mb-4 md:mb-5" data-aos="fade-up">
          <span className="section-eyebrow">Get in touch</span>
          <h2 className="section-title gradient-text heading-underline">Let's build together</h2>
          <p className="section-sub">
            Have a project in mind, an opportunity to share, or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-4 items-stretch">
          {/* Left: info card */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="relative h-full rounded-2xl overflow-hidden border border-indigo-400/20 bg-gradient-to-br from-indigo-500/15 via-[#0d1429] to-cyan-400/10 p-4 sm:p-5">
              {/* glow accents inside card */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-indigo-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-[0.65rem] sm:text-xs font-medium">
                  <HiSparkles className="text-cyan-400 text-[0.7rem]" />
                  Open to collaborate
                </span>

                <h3 className="text-base sm:text-lg font-bold text-slate-100 mt-2 mb-1.5 leading-tight">
                  Reach out — I usually <span className="gradient-text">reply within a day</span>.
                </h3>
                <p className="text-slate-400 text-[0.78rem] mb-4 leading-snug">
                  Whether it's a freelance gig, a full-time role, or a wild idea you'd like to bring to life — let's talk.
                </p>

                <div className="space-y-2 mb-4">
                  {contactInfo.map((info, i) => (
                    <a
                      key={i}
                      href={info.link || "#"}
                      onClick={(e) => !info.link && e.preventDefault()}
                      className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] transition group"
                    >
                      <div className="w-7 h-7 flex items-center justify-center rounded-md bg-indigo-500/15 border border-indigo-400/30 text-cyan-300 text-xs group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-cyan-400 group-hover:text-white transition">
                        {info.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[0.55rem] text-slate-400 uppercase tracking-[0.2em]">
                          {info.label}
                        </div>
                        <div className="text-slate-100 text-[0.78rem] font-medium group-hover:text-cyan-300 transition truncate">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                  <span className="text-[0.6rem] text-slate-500 uppercase tracking-[0.2em] mr-0.5">Find me</span>
                  {[
                    { icon: <FaGithub />,   link: "https://github.com/mukit-blaster" },
                    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mohayminul-mukit" },
                    { icon: <FaWhatsapp />, link: "https://wa.me/qr/VFOSXFXNN3KBA1" },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-indigo-400/40 text-cyan-300 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-cyan-400 hover:text-white hover:scale-110 transition text-[0.7rem]"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-7 relative rounded-2xl border border-indigo-400/20 bg-[#0d1429]/80 backdrop-blur-sm p-4 sm:p-5 space-y-2.5"
            data-aos="fade-left"
          >
            <div className="grid sm:grid-cols-2 gap-3.5">
              <FloatingInput name="user_name" label="Your Name" type="text" />
              <FloatingInput name="user_email" label="Your Email" type="email" />
            </div>

            <FloatingInput name="subject" label="Subject (optional)" type="text" />

            <FloatingInput name="message" label="Your Message" textarea rows={5} />

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <p className="text-[0.7rem] text-slate-500">
                Feel free to message me, I&apos;ll get back to you as soon as I can.
              </p>
              <button
                type="submit"
                disabled={sending}
                className={`inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs rounded-md
                            bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-semibold
                            shadow-md shadow-indigo-500/30 transition-all duration-300
                            hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(99,102,241,0.7)]
                            disabled:cursor-not-allowed disabled:opacity-70`}
              >
                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane className="text-xs" />
                    Send Message
                  </>
                )}
              </button>
            </div>

            {status.message && (
              <div
                className={`text-center p-2.5 rounded-lg text-sm font-medium ${alertStyles[status.type]}`}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function FloatingInput({ name, label, type = "text", textarea = false, rows = 4 }) {
  const sharedClass =
    "peer w-full p-2.5 text-[0.78rem] rounded-md bg-[#0b1020]/70 border border-white/10 text-slate-100 placeholder-transparent focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/25 outline-none transition";
  const labelClass =
    "absolute left-2.5 -top-1.5 px-1 bg-[#0d1429] text-cyan-300 text-[0.62rem] font-medium peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-slate-500 peer-placeholder-shown:text-[0.78rem] peer-focus:-top-1.5 peer-focus:text-[0.62rem] peer-focus:text-cyan-300 transition-all";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          name={name}
          placeholder=" "
          rows={rows}
          className={`${sharedClass} resize-none`}
        />
      ) : (
        <input type={type} name={name} placeholder=" " className={sharedClass} />
      )}
      <label className={labelClass}>{label}</label>
    </div>
  );
}
