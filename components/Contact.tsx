"use client";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { portfolioData } from "../data/portfolio";

export default function Contact() {

  const form = useRef<HTMLFormElement>(null);

  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {

    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_qx4lczb",
        "template_a5clwn1",
        form.current,
        "3qRrc-AVO9TbDIOjt"
      )
      .then(
        () => {

          setSuccess(true);

          setLoading(false);

          form.current?.reset();

        },
        (error) => {

          console.log(error.text);

          setLoading(false);

        }
      );

  };

  return (

    <section
      id="contact"
      className="py-28 px-6 relative overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black mb-20 text-center"
        >

          <span className="text-white">
            Contact
          </span>

          <span className="text-cyan-400">
            {" "}Me
          </span>

        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass glow rounded-[35px] p-10 border border-cyan-500/20"
          >

            <h3 className="text-4xl font-bold mb-8">
              Let's Build Something Amazing 🚀
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Interested in collaborating, hiring, or discussing
              Embedded AI, IoT, Computer Vision, or Intelligent
              Thermal Systems projects?
              Feel free to connect with me.
            </p>

            <div className="space-y-8">

              {/* EMAIL */}
              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>

                  <p className="text-lg font-semibold">
                    {portfolioData.email}
                  </p>
                </div>

              </div>

              {/* PHONE */}
              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Phone
                  </p>

                  <p className="text-lg font-semibold">
                    9483375638
                  </p>
                </div>

              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Location
                  </p>

                  <p className="text-lg font-semibold">
                    {portfolioData.location}
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT CONTACT FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass glow rounded-[35px] p-10 border border-cyan-500/20 space-y-6"
          >

            {/* NAME */}
            <div>

              <label className="block mb-2 text-gray-300">
                Your Name
              </label>

              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="w-full bg-black/40 border border-cyan-500/20 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />

            </div>

            {/* EMAIL */}
            <div>

              <label className="block mb-2 text-gray-300">
                Your Email
              </label>

              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="w-full bg-black/40 border border-cyan-500/20 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />

            </div>

            {/* MESSAGE */}
            <div>

              <label className="block mb-2 text-gray-300">
                Message
              </label>

              <textarea
                rows={6}
                name="message"
                required
                placeholder="Write your message..."
                className="w-full bg-black/40 border border-cyan-500/20 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-cyan-400 text-black py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:bg-cyan-300 transition duration-300"
            >

              {loading ? "Sending..." : "Send Message"}

            </button>

            {/* SUCCESS */}
            {success && (

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-center font-semibold text-lg"
              >
                Message Sent Successfully 🚀
              </motion.p>

            )}

          </motion.form>

        </div>

      </div>

    </section>

  );

}