"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export default function Certifications() {

  return (

    <section
      id="certifications"
      className="py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black mb-16 text-center gradient-text"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {portfolioData.certifications.map((cert, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              transition={{ delay: index * 0.1 }}
              className="glass glow rounded-3xl p-8"
            >

              <h3 className="text-2xl font-bold text-white mb-4">
                {cert.title}
              </h3>

              <p className="text-cyan-400 mb-3">
                {cert.issuer}
              </p>

              <p className="text-gray-400 mb-6">
                {cert.date}
              </p>

              <a
                href={cert.link}
                target="_blank"
                className="inline-block px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
              >
                Verify
              </a>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}