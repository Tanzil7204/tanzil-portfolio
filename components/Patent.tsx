"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export default function Patent() {

  const patent = portfolioData.patent;

  return (

    <section
      id="patent"
      className="py-24 px-6 relative overflow-hidden"
    >

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black mb-16 text-center gradient-text"
        >
          Patent Publication
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass glow rounded-[40px] p-10"
        >

          <div className="flex flex-wrap gap-4 mb-6">

            <span className="px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
              {patent.status}
            </span>

            <span className="px-5 py-2 rounded-full bg-purple-500/20 text-purple-300">
              Published: {patent.published}
            </span>

          </div>

          <h3 className="text-3xl font-black leading-tight mb-6">
            {patent.title}
          </h3>

          <p className="text-cyan-400 mb-4 text-lg">
            {patent.office}
          </p>

          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            {patent.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">

            {patent.technologies.map((tech, index) => (

              <span
                key={index}
                className="px-4 py-2 rounded-full bg-white/10 text-gray-200"
              >
                {tech}
              </span>

            ))}

          </div>

          <a
            href={patent.link}
            target="_blank"
            className="inline-block bg-cyan-500 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            View Patent
          </a>

        </motion.div>

      </div>

    </section>

  );
}