"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export default function Education() {

  return (

    <section
      id="education"
      className="py-24 px-6 relative"
    >

      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black mb-20 text-center gradient-text"
        >
          Education
        </motion.h2>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-1 bg-cyan-500/30" />

          <div className="space-y-14">

            {portfolioData.education.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-16"
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 top-3 w-8 h-8 rounded-full bg-cyan-400 shadow-[0_0_25px_#00ffff]" />

                {/* Card */}
                <div className="glass glow p-8 rounded-3xl">

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.degree}
                  </h3>

                  <p className="text-cyan-400 text-lg mb-2">
                    {item.institution}
                  </p>

                  <p className="text-gray-300 mb-2">
                    {item.field}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-4">

                    <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                      {item.duration}
                    </span>

                    <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300">
                      {item.score}
                    </span>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}