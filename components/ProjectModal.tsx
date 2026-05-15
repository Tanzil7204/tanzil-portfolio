"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {

  if (!project) return null;

  return (

    <AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-6"
      >

        {/* MODAL */}
        <motion.div
          initial={{ scale: 0.8, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl w-full bg-[#0a0a0a] border border-cyan-500/30 rounded-3xl p-10 relative overflow-y-auto max-h-[90vh]"
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white text-3xl hover:text-cyan-400 transition"
          >
            ×
          </button>



          {/* TITLE */}
          <h2 className="text-4xl font-black text-cyan-400 mb-6">
            {project.title}
          </h2>



          {/* SHORT DESC */}
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            {project.description}
          </p>



          {/* FULL DESCRIPTION */}
          <div className="mb-10">

            <h3 className="text-2xl font-bold mb-4 text-white">
              Project Overview
            </h3>

            <p className="text-gray-400 leading-relaxed text-lg">
              {project.fullDescription}
            </p>

          </div>



          {/* TECH STACK */}
          <div className="mb-10">

            <h3 className="text-2xl font-bold mb-5 text-white">
              Technologies Used
            </h3>

            <div className="flex flex-wrap gap-4">

              {project.tech.map(
                (tech: string, index: number) => (

                  <span
                    key={index}
                    className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                  >
                    {tech}
                  </span>

                )
              )}

            </div>

          </div>



          {/* ACHIEVEMENTS */}
          <div className="mb-10">

            <h3 className="text-2xl font-bold mb-5 text-white">
              Achievements
            </h3>

            <ul className="space-y-3">

              {project.achievements.map(
                (
                  achievement: string,
                  index: number
                ) => (

                  <li
                    key={index}
                    className="text-gray-300 flex gap-3"
                  >
                    <span className="text-cyan-400">
                      ✓
                    </span>

                    {achievement}
                  </li>

                )
              )}

            </ul>

          </div>



          {/* CHALLENGES */}
          <div className="mb-10">

            <h3 className="text-2xl font-bold mb-5 text-white">
              Engineering Challenges
            </h3>

            <ul className="space-y-3">

              {project.challenges.map(
                (
                  challenge: string,
                  index: number
                ) => (

                  <li
                    key={index}
                    className="text-gray-300 flex gap-3"
                  >
                    <span className="text-red-400">
                      →
                    </span>

                    {challenge}
                  </li>

                )
              )}

            </ul>

          </div>



          {/* BUTTON */}
          <a
            href={project.link}
            target="_blank"
            className="inline-block px-8 py-4 rounded-2xl bg-cyan-500 text-black font-bold hover:scale-105 transition"
          >
            View Project
          </a>

        </motion.div>

      </motion.div>

    </AnimatePresence>

  );
}