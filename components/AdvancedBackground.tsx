"use client";

import { motion } from "framer-motion";

export default function AdvancedBackground() {

  return (

    <div className="fixed inset-0 overflow-hidden -z-10 bg-black">

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(to_right,#00ffff_1px,transparent_1px),linear-gradient(to_bottom,#00ffff_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />



      {/* LEFT GLOW */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          bg-cyan-500/20
          blur-[140px]
          rounded-full
        "
      />



      {/* RIGHT GLOW */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[500px]
          bg-purple-500/20
          blur-[140px]
          rounded-full
        "
      />



      {/* CENTER LIGHT */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[300px]
          h-[300px]
          bg-cyan-400/10
          blur-[120px]
          rounded-full
        "
      />

    </div>

  );

}