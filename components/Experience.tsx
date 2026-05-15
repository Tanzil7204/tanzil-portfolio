"use client";

import { motion } from "framer-motion";

import { portfolioData } from "../data/portfolio";

export default function Experience() {

  return (

    <section
      id="experience"
      className="py-28 px-6 max-w-7xl mx-auto"
    >

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-black mb-16 text-center"
      >
        Experience
      </motion.h2>



      {/* EXPERIENCE CARDS */}
      <div className="space-y-10">

        {portfolioData.experience.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition"
          >

            {/* ROLE */}
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">
              {item.role}
            </h3>



            {/* COMPANY */}
            <p className="text-xl font-semibold text-white mb-2">
              {item.company}
            </p>



            {/* DURATION */}
            <p className="text-gray-400 mb-6">
              {item.duration}
            </p>



            {/* DESCRIPTION */}
            <p className="text-gray-300 leading-relaxed mb-6">
              {item.description}
            </p>



            {/* TECHNOLOGIES */}
            <div className="flex flex-wrap gap-3">

              {item.technologies.map((tech, techIndex) => (

                <span
                  key={techIndex}
                  className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm"
                >
                  {tech}
                </span>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );
}