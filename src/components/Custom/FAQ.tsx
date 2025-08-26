"use client";

import {
  Users,
  CalendarDays,
  GraduationCap,
  Sparkles,
  Code2,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const faq = [
  {
    icon: Users,
    question: "GeekRoom Orientation kya hai?",
    answer:
      "GeekRoom Orientation ek introductory event hai jahan naye members ko community, projects aur events ke baare me bataya jata hai. Yahaan tum apne seniors aur peers se directly connect kar sakte ho. 🎉",
  },
  {
    icon: CalendarDays,
    question: "Events kitne hote hain?",
    answer:
      "Har semester me bahut events hote hain — hackathons, workshops, coding contests aur fun meets. Isme tumhe hands-on experience aur networking dono milta hai. 📅",
  },
  {
    icon: GraduationCap,
    question: "Kya beginners bhi join kar sakte hain?",
    answer:
      "Bilkul! GeekRoom beginners-friendly hai. Hum mentorship aur guidance dete hain taaki tum basics se leke advanced development tak grow kar sako. 🚀",
  },
  {
    icon: Code2,
    question: "Hackathons me kya seekhne ko milta hai?",
    answer:
      "Hackathons tumhe real-world problem solving sikhaate hain. Teamwork, coding, pitching aur quick prototyping ka solid experience milta hai. 💻",
  },
  {
    icon: Globe,
    question: "Kya GeekRoom ek global community hai?",
    answer:
      "Haan! GeekRoom ke 20+ active chapters worldwide hain. Tumhe international collabs, exposure aur networking ka chance milta hai. 🌍",
  },
  {
    icon: Sparkles,
    question: "GeekRoom unique kyun hai?",
    answer:
      "GeekRoom sirf ek society nahi, ek movement hai — coding + innovation + networking ka combo. Yahan tum seekhte ho, create karte ho aur apna best showcase karte ho. ✨",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 bg-black">
      <div className="max-w-screen-lg">
        {/* Heading Animation */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight text-center 
          bg-gradient-to-r from-orange-300 via-green-400 to-cyan-400  bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          className="mt-3 text-lg text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          GeekRoom ke orientation, events, hackathons aur membership se related
          sabhi sawaalon ke quick answers.
        </motion.p>

        {/* FAQ Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {faq.map(({ question, answer, icon: Icon }, i) => (
            <motion.div
              key={question}
              className="border border-white/10 p-6 rounded-xl bg-white/5 backdrop-blur-sm 
              shadow-md hover:shadow-xl transition-all duration-300 ease-out"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="h-10 w-10 flex items-center justify-center rounded-full 
              bg-gradient-to-r from-orange-300 via-green-400 to-cyan-400  text-white shadow-md"
              >
                <Icon className="w-5 h-5" />
              </div>
              <div
                className="mt-5 mb-2 text-[1.35rem] font-semibold tracking-tight 
              bg-gradient-to-r ffrom-orange-300 via-green-400 to-cyan-400 bg-clip-text text-transparent"
              >
                {question}
              </div>
              <p className="text-gray-300">{answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
