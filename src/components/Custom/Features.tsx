"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    category: "🚀 Coding & Dev",
    title: "Banega asli Developer",
    details:
      "GeekRoom join karne ka matlab hai hackathons jeetna, open-source contribute karna aur apne skills se sabko impress karna. ⚡",
    tutorialLink: "#",
  },
  {
    category: "🎤 Networking",
    title: "Connections hi Currency hai!",
    details:
      "Yaha tu 1.5Lakhs+ coders, mentors aur industry experts se milega. Collabs kar, internships crack kar aur apna LinkedIn glow-up dekh. 💼",
    tutorialLink: "#",
  },
  {
    category: "🎉 Events & Vibes",
    title: "Tech + Fun = GeekRoom Life",
    details:
      "Workshops, hackathons, coding and fun nights aur Delhi ke sabse bade fests — yaha boredom naam ki cheez exist hi nahi karti. 🔥",
    tutorialLink: "#",
  },
  {
    category: "🌐 Global Exposure",
    title: "Sirf college tak Nahi,pure nation tak Ja!",
    details:
      "20+ chapters across nation; collabs aur hackathons — Matlab GeekRoom ke through tu apna nation ka naam bana lega. 🌍",
    tutorialLink: "#",
  },
  {
    category: "💡 Skill Upgrade",
    title: "Naye tools, Nayi soch!",
    details:
      "AI, Web3, App Dev, ML — sab kuch practical projects ke through seekh. Certification se jyada, portfolio heavy banega. 📈",
    tutorialLink: "#",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-screen-lg w-full py-10 px-6">
        {/* Heading Animation */}
        <motion.h2
          className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto bg-gradient-to-r from-orange-300 via-green-400 to-cyan-400  bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          GeekRoom Join Karna = Life Upgrade 💯
        </motion.h2>

        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.category}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image / Icon Box */}
              <motion.div
                className="w-full aspect-[6/4] bg-gradient-to-r from-orange-400/30 to-green-400/30 rounded-xl border border-white/20 basis-1/2 flex items-center justify-center text-4xl text-white shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {feature.category}
              </motion.div>

              {/* Text Section */}
              <motion.div
                className="basis-1/2 shrink-0 text-left md:text-left"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.25 }}
              >
                <span className="uppercase font-semibold text-sm text-orange-400">
                  {feature.category}
                </span>
                <h4 className="my-3 text-3xl font-semibold tracking-tight text-white">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-[17px]">{feature.details}</p>
                <motion.div whileHover={{ scale: 1.08 }}>
                  <Button
                    asChild
                    className="mt-6 rounded-full min-w-40 text-[15px] bg-gradient-to-r from-orange-300 via-green-400 to-cyan-400 shadow-lg hover:scale-105 transition-all"
                  >
                    <Link href={feature.tutorialLink}>
                      Learn More <ArrowRight className="ml-1" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
