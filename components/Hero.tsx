"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { portfolioData } from "../data/portfolio";

import { useEffect, useState } from "react";

export default function Hero() {

  const titles = [

    "Embedded Systems & AI Engineer",

    "Computer Vision Researcher",

    "IoT & Thermal Systems Engineer",

    "Intelligent Systems Developer",

    "AI & Embedded Innovator",

  ];

  const [displayText, setDisplayText] = useState("");

  const [titleIndex, setTitleIndex] = useState(0);

  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {

    const currentTitle = titles[titleIndex];

    if (charIndex < currentTitle.length) {

      const timeout = setTimeout(() => {

        setDisplayText(
          (prev) => prev + currentTitle[charIndex]
        );

        setCharIndex(charIndex + 1);

      }, 70);

      return () => clearTimeout(timeout);

    } else {

      const timeout = setTimeout(() => {

        setDisplayText("");

        setCharIndex(0);

        setTitleIndex(
          (prev) => (prev + 1) % titles.length
        );

      }, 2000);

      return () => clearTimeout(timeout);

    }

  }, [charIndex, titleIndex]);



  return (

    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        relative
        overflow-hidden
        pt-28
      "
    >

      {/* GRID BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
          bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />



      {/* LEFT GLOW */}
      <div
        className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          bg-cyan-500/10
          blur-[120px]
          rounded-full
        "
      />



      {/* RIGHT GLOW */}
      <div
        className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[500px]
          bg-purple-500/10
          blur-[120px]
          rounded-full
        "
      />



      {/* MAIN CONTAINER */}
      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          grid
          lg:grid-cols-2
          gap-20
          items-center
          relative
          z-10
        "
      >



        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">

          {/* SMALL TAG */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              text-cyan-400
              uppercase
              tracking-[6px]
              mb-6
              text-xs
              font-semibold
            "
          >
            EMBEDDED AI ENGINEER
          </motion.p>



          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-[0.95]
              tracking-tight
              text-white
              mb-10
            "
          >

            <span className="block">
              Mohammad
            </span>

            <span className="block">
              Tanzil
            </span>

            <span className="block">
              Dilawar
            </span>

            <span className="block">
              Mestri
            </span>

          </motion.h1>



          {/* TYPING TITLE */}
          <div className="h-[70px] mb-6">

            <h2
              className="
                text-cyan-400
                text-2xl
                md:text-4xl
                font-bold
                border-r-4
                border-cyan-400
                inline-block
                pr-2
              "
            >

              {displayText}

            </h2>

          </div>



          {/* BIO */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="
              space-y-6
              text-gray-300
              text-base
              md:text-lg
              leading-relaxed
              max-w-2xl
            "
          >

            <p>
              Passionate Electronics and Communication
              Engineering student specializing in
              Embedded Systems, Artificial Intelligence,
              IoT, Computer Vision, and intelligent
              thermal management technologies.
            </p>

            <p>
              Experienced in building intelligent
              automation systems, embedded hardware
              integrations, and real-time IoT
              monitoring architectures.
            </p>

            <p>
              Focused on scalable AI-driven engineering
              solutions, thermal innovation, and
              next-generation embedded technologies.
            </p>

          </motion.div>



          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex gap-5 mt-10"
          >

            {/* GITHUB */}
            <a
              href={portfolioData.github}
              target="_blank"
              className="
                w-14
                h-14
                rounded-2xl
                border
                border-cyan-500/40
                bg-white/5
                backdrop-blur-md
                flex
                items-center
                justify-center
                hover:scale-110
                hover:bg-cyan-500/20
                transition
                duration-300
              "
            >
              <FaGithub size={26} />
            </a>



            {/* LINKEDIN */}
            <a
              href={portfolioData.linkedin}
              target="_blank"
              className="
                w-14
                h-14
                rounded-2xl
                border
                border-cyan-500/40
                bg-white/5
                backdrop-blur-md
                flex
                items-center
                justify-center
                hover:scale-110
                hover:bg-cyan-500/20
                transition
                duration-300
              "
            >
              <FaLinkedin size={26} />
            </a>



            {/* EMAIL */}
            <a
              href={`mailto:${portfolioData.email}`}
              className="
                w-14
                h-14
                rounded-2xl
                border
                border-cyan-500/40
                bg-white/5
                backdrop-blur-md
                flex
                items-center
                justify-center
                hover:scale-110
                hover:bg-cyan-500/20
                transition
                duration-300
              "
            >
              <MdEmail size={28} />
            </a>

          </motion.div>



          {/* RESUME BUTTON */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-10"
          >

            <a
              href="/resume/resume.pdf"
              target="_blank"
              className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-2xl
                bg-cyan-400
                text-black
                font-bold
                text-lg
                hover:scale-105
                transition
                duration-300
                shadow-[0_0_30px_rgba(0,255,255,0.35)]
              "
            >

              📄 Download Resume

            </a>

          </motion.div>

        </div>



        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
            flex
            justify-center
            lg:justify-end
          "
        >

          <div className="relative">

            {/* OUTER GLOW */}
            <div
              className="
                absolute
                inset-0
                bg-cyan-500/20
                blur-[80px]
                rounded-[40px]
              "
            />



            {/* IMAGE CARD */}
            <div
              className="
                relative
                rounded-[40px]
                border
                border-cyan-500/20
                bg-gradient-to-b
                from-cyan-500/10
                to-transparent
                overflow-hidden
                backdrop-blur-sm
              "
            >

              <Image
                src="/images/profile.png"
                alt="Mohammad Tanzil"
                width={300}
                height={420}
                priority
                className="
                  object-contain
                  rounded-[30px]
                  drop-shadow-[0_0_40px_rgba(0,255,255,0.35)]
                  block
                "
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}