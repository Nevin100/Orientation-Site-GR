"use client";

import {
  BadgeDollarSign,
  LayoutDashboard,
  UserRoundCheck,
  History,
  FileText,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const faq = [
  {
    icon: BadgeDollarSign,
    question: "How does payment work?",
    answer:
      "Payments are handled securely through Razorpay. You’ll receive credits after payment, which can be used across our AI tools.",
  },
  {
    icon: LayoutDashboard,
    question: "Is the UI user-friendly?",
    answer:
      "Yes, the platform has a sleek and modern UI designed to provide a seamless and smooth user experience.",
  },
  {
    icon: UserRoundCheck,
    question: "How can I use the tool?",
    answer:
      "Simply log in to your account, and you’ll get access to all AI tools with proper guidance and easy-to-use features.",
  },
  {
    icon: History,
    question: "Will my work be saved?",
    answer:
      "Yes, everything works smoothly and your history is automatically maintained so you can access past work anytime.",
  },
  {
    icon: FileText,
    question: "Do I get a summary or pitch?",
    answer:
      "Absolutely! A complete AI-generated summary and pitch will be available for every project you work on.",
  },
  {
    icon: Sparkles,
    question: "What makes this different?",
    answer:
      "The platform is fully AI-powered, extremely smooth, and easy to handle with download & export features built-in.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-screen-lg">
        {/* Heading Animation */}
        <motion.h2
          className="text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center 
          bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          className="mt-3 text-lg text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Quick answers about payments, usage, and features of our AI-powered
          platform.
        </motion.p>

        {/* FAQ Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {faq.map(({ question, answer, icon: Icon }, i) => (
            <motion.div
              key={question}
              className="border p-6 rounded-xl bg-background/40 backdrop-blur-sm 
              shadow-md hover:shadow-xl transition-all duration-300 ease-out"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-md">
                <Icon className="w-5 h-5" />
              </div>
              <div
                className="mt-5 mb-2 text-[1.35rem] font-semibold tracking-tight 
              bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent"
              >
                {question}
              </div>
              <p className="text-muted-foreground">{answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
