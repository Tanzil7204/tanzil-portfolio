"use client";

import { motion } from "framer-motion";

import { portfolioData } from "../data/portfolio";

import { useState } from "react";

import ProjectModal from "./ProjectModal";

export default function Projects() {

  const [selectedProject, setSelectedProject] =
    useState<any>(null);

  return (

    <section
      id="projects"
      className="py-28 px-6 max-w-7xl mx-auto"
    >

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-black mb-16 text-center"
      >
        Projects
      </motion.h2>



      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 gap-10">

        {portfolioData.projects.map(
          (project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.7 }}
              className="glass rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition cursor-pointer hover:scale-[1.02]"
              onClick={() =>
                setSelectedProject(project)
              }
            >

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {project.title}
              </h3>



              {/* DESC */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>



              {/* TECH */}
              <div className="flex flex-wrap gap-3">

                {project.tech.map(
                  (
                    tech: string,
                    techIndex: number
                  ) => (

                    <span
                      key={techIndex}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm"
                    >
                      {tech}
                    </span>

                  )
                )}

              </div>

            </motion.div>

          )
        )}

      </div>



      {/* MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
      />

    </section>

  );
}