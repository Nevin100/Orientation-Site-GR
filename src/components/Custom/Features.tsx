"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CreditCard,
  Cpu,
  LineChart,
  Workflow,
  Save,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: CreditCard,
    title: "Seamless Payments",
    description:
      "Credits are added instantly after Razorpay payment. Use them across all our AI tools without interruptions.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Tools",
    description:
      "Access powerful AI tools built for smooth workflows — from content generation to smart automation.",
  },
  {
    icon: LineChart,
    title: "Smart Insights",
    description:
      "Get AI-driven analytics, summaries, and instant feedback to guide better decision-making effortlessly.",
  },
  {
    icon: Workflow,
    title: "Streamlined Workflow",
    description:
      "Save time with automation and well-integrated tools, making your daily tasks easy to manage.",
  },
  {
    icon: Save,
    title: "Auto Save & History",
    description:
      "Your work is automatically saved and maintained, so you can revisit and continue anytime without losing progress.",
  },
  {
    icon: Sparkles,
    title: "Export & Share",
    description:
      "Download, export, and share results instantly with built-in export features for complete flexibility.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-12 px-6">
        {/* Heading with animation */}
        <motion.h2
          className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-lg 
          bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Power Up with Smart AI Features
        </motion.h2>

        <div className="mt-6 md:mt-8 w-full mx-auto grid md:grid-cols-2 gap-12">
          {/* Accordion Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            <Accordion defaultValue="item-0" type="single" className="w-full">
              {features.map(({ title, description, icon: Icon }, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="data-[state=open]:border-b-2 data-[state=open]:border-primary"
                  >
                    <AccordionTrigger className="text-lg [&>svg]:hidden">
                      <div className="flex items-center gap-4">
                        <Icon className="text-violet-500" />
                        <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                          {title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-[17px] leading-relaxed text-muted-foreground">
                      {description}
                      <div className="mt-6 mb-2 md:hidden aspect-video w-full bg-muted rounded-xl" />
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Media Section with fade-in */}
          <motion.div
            className="hidden md:block w-full h-full bg-muted rounded-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={"https://edure.in/wp-content/uploads/2025/02/ai-tools.webp"}
              alt="image"
              height={300}
              width={300}
              className="w-full h-full object-cover rounded-xl  "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
