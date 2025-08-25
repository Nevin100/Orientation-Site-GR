"use client";

import GradientBlinds from "@/components/Extra/GradientBlinds/GradientBlinds";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden md:mt-12 mt-8">
      {/* Sexy Gradient Background */}
      <div className="absolute inset-0 z-0">
        <GradientBlinds
          gradientColors={["#FF9FFC", "#5227FF"]}
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="bg-white/10 text-white border border-white/20 rounded-full py-2 px-6 text-lg backdrop-blur-sm shadow-md drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            🚀 PitchPal v1.0 — AI for Hackathons
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 text-5xl sm:text-6xl md:text-7xl font-extrabold !leading-[1.2] tracking-tight 
                     bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 
                     bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]"
        >
          Your Hackathon AI Agent for Pitch-Perfect Presentations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto
                     text-gray-100 drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]"
        >
          PitchPal is a{" "}
          <span
            className="font-semibold bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-400 
                     bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]"
          >
            SaaS-powered AI
          </span>{" "}
          built for hackathons. From{" "}
          <span className="font-medium text-white/90">PPT generation</span> to{" "}
          <span className="font-medium text-white/90">summary creation</span>,
          it helps you craft investor-ready pitches in minutes — so you can
          focus on building, not stressing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-base md:text-lg"
        >
          <div className="p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md font-medium text-white shadow-lg drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            ⚡ <strong>AI-Powered Slides</strong> — Generate sleek & customized
            pitch decks instantly.
          </div>
          <div className="p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md font-medium text-white shadow-lg drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            🧠 <strong>Smart Summarizer</strong> — Condense your idea into
            clear, crisp narratives.
          </div>
          <div className="p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md font-medium text-white shadow-lg drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            🌐 <strong>SaaS for Teams</strong> — Cloud-based, collaborative &
            hackathon-friendly.
          </div>
        </motion.div>

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
            Get Started <ArrowUpRight className="!h-6 !w-6 ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
