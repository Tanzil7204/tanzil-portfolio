"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export default function Skills() {

  return (

    <section
      id="skills"
      className="py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black mb-16 text-center gradient-text"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {portfolioData.skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.05 }}
              className="glass glow p-6 rounded-3xl text-center"
            >

              <h3 className="text-lg font-semibold text-cyan-300">
                {skill}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}