"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Hero() {
  const titles = [
    "Embedded Systems & AI Engineer",
    "Computer Vision Researcher",
    "IoT & Automation Engineer",
    "Intelligent Systems Developer",
    "AI & Embedded Innovator",
  ];

  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    if (!currentTitle) return;

    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 60);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, titleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#001014] to-black" />

      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}
        <div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cyan-400 uppercase tracking-[6px] mb-6 text-xs font-semibold"
          >
            EMBEDDED AI ENGINEER
          </motion.p>

          {/* ✅ FIXED NAME (EXACTLY 2 LINES) */}
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-white mb-6"
          >
            <span className="block">
              Mohammad Tanzil Dilawar Mestri
            </span>
          </motion.h1>

          {/* TITLE */}
          <h2 className="text-cyan-300 text-2xl md:text-4xl font-bold border-r-4 border-cyan-400 inline-block pr-3 mb-6">
            {displayText}
          </h2>

          {/* BIO */}
          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
            <p>Building intelligent embedded systems using AI + IoT.</p>
            <p>Focused on real-time automation and computer vision solutions.</p>
            <p>Passionate about next-generation engineering systems.</p>
          </div>

          {/* ICONS */}
          <div className="flex gap-6 mt-8">

            <a className="w-16 h-16 rounded-2xl border border-cyan-500/40 flex items-center justify-center hover:scale-110 transition">
              <FaGithub size={32} />
            </a>

            <a className="w-16 h-16 rounded-2xl border border-cyan-500/40 flex items-center justify-center hover:scale-110 transition">
              <FaLinkedin size={32} />
            </a>

            <a className="w-16 h-16 rounded-2xl border border-cyan-500/40 flex items-center justify-center hover:scale-110 transition">
              <MdEmail size={34} />
            </a>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-10">

            <a
              href="/resume/resume.pdf"
              className="px-7 py-4 rounded-xl bg-cyan-400 text-black font-bold hover:scale-105 transition"
            >
              Download Resume
            </a>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-[40px]" />

            <div className="relative rounded-[40px] overflow-hidden border border-cyan-500/30">

              <Image
                src="/images/profile.png"
                alt="profile"
                width={360}
                height={460}
                className="object-cover"
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}