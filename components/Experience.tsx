"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6 max-w-6xl mx-auto"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-black mb-16 text-center text-cyan-400"
      >
        Experience
      </motion.h2>

      {/* EXPERIENCE LIST */}
      <div className="relative border-l border-cyan-500/30 pl-6 space-y-12">

        {portfolioData?.experience?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {/* DOT */}
            <div className="absolute -left-[34px] top-2 w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />

            {/* CARD */}
            <div className="glass rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition">

              {/* ROLE */}
              <h3 className="text-2xl font-bold text-white mb-1">
                {item.role}
              </h3>

              {/* COMPANY */}
              <p className="text-cyan-400 font-semibold mb-1">
                {item.company}
              </p>

              {/* DURATION */}
              <p className="text-gray-400 mb-4 text-sm">
                {item.duration}
              </p>

              {/* DESCRIPTION */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* TECHNOLOGIES */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CERTIFICATE BUTTON (NEW) */}
              {"certificate" in item && item.certificate && (
                <a
                  href={item.certificate}
                  target="_blank"
                  className="inline-block mt-2 px-5 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
                >
                  View Certificate
                </a>
              )}

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}