"use client";

import GradientBlinds from "@/components/Extra/GradientBlinds/GradientBlinds";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden mt-8">
      {/* Sexy Gradient Background */}
      <div className="absolute inset-0 z-0">
        <GradientBlinds
          gradientColors={["#FF914D", "#00C853"]} // Orange to Green
          angle={0}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      {/* Overlay for subtle contrast */}
      <div className="absolute inset-0 z-[1] bg-black/20 backdrop-blur-[1px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Main Title - GeekRoom */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight 
                     bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 
                     bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]"
        >
          Geek Room
        </motion.h1>

        {/* Subtitle - smaller */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold !leading-[1.3] tracking-tight 
                     bg-gradient-to-r from-orange-300 via-orange-400 to-green-400 
                     bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]"
        >
          One of India’s Largest Technical Communities
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto
                     text-gray-100 drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]"
        >
          Welcome to{" "}
          <span
            className="font-semibold bg-gradient-to-r from-orange-300 via-orange-400 to-green-400 
                     bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]"
          >
            GeekRoom MSIT
          </span>
          — the main hub of the GeekRoom global community. With{" "}
          <span className="font-medium text-white/90">75k+ coders</span>,{" "}
          <span className="font-medium text-white/90">20+ active chapters</span>
          , and{" "}
          <span className="font-medium text-white/90">25+ hackathons</span>{" "}
          (including Delhi’s biggest and an international one), we’re more than
          a society — we’re a movement of passionate developers, innovators, and
          tech leaders of tomorrow.
        </motion.p>

        {/* Stats Cards (same as before) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-base md:text-lg"
        >
          <div
            className="p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md 
               font-medium text-white shadow-lg transition-all duration-300 hover:scale-[1.05] 
               hover:bg-gradient-to-r from-orange-500/20 to-green-500/20"
          >
            ⚡ <strong>75k+ Coders</strong> — Building one of the largest dev
            communities in India.
          </div>
          <div
            className="p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md 
               font-medium text-white shadow-lg transition-all duration-300 hover:scale-[1.05] 
               hover:bg-gradient-to-r from-orange-500/20 to-green-500/20"
          >
            🧠 <strong>Hackathons & Events</strong> — 25+ hackathons, fests &
            workshops including international collabs.
          </div>
          <div
            className="p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md 
               font-medium text-white shadow-lg transition-all duration-300 hover:scale-[1.05] 
               hover:bg-gradient-to-r from-orange-500/20 to-green-500/20"
          >
            🌐 <strong>Global Network</strong> — 20+ chapters worldwide,
            connecting developers everywhere.
          </div>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 flex items-center justify-center gap-6"
        >
          <Button
            size="lg"
            className="rounded-full text-lg px-8 py-6 bg-transparent text-white hover:bg-gray-700 transition shadow-xl"
          >
            Explore More <ArrowUpRight className="!h-6 !w-6 ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
