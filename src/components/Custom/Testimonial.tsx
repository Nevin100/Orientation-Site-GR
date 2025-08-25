"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    company: "TechCorp",
    testimonial:
      "This product has completely transformed the way we work. The efficiency and ease of use are unmatched!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sophia Lee",
    designation: "Data Analyst",
    company: "InsightTech",
    testimonial:
      "This tool has saved me hours of work! The analytics and reporting features are incredibly powerful.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "UX Designer",
    company: "DesignPro",
    testimonial:
      "An amazing tool that simplifies complex tasks. Highly recommended for professionals in the industry. " +
      "The intuitive interface makes it easy to onboard new team members, and the automation features save us countless hours every week.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Marketing Specialist",
    company: "BrandBoost",
    testimonial:
      "I've seen a significant improvement in our team's productivity since we started using this service.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Daniel Martinez",
    designation: "Full-Stack Developer",
    company: "CodeCrafters",
    testimonial:
      "The best investment we've made! The support team is also super responsive and helpful.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Jane Smith",
    designation: "Product Manager",
    company: "InnovateX",
    testimonial:
      "The user experience is top-notch! The interface is clean, intuitive, and easy to navigate.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonial = () => (
  <div className="min-h-screen flex justify-center items-center py-12 px-6 bg-background">
    <div>
      {/* Gradient + Motion Heading */}
      <motion.h2
        className="mb-14 text-5xl md:text-6xl font-bold text-center tracking-tight 
        bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600
        bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Testimonials
      </motion.h2>

      <div className="max-w-screen-xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="relative mb-8 rounded-2xl p-6 break-inside-avoid shadow-lg hover:shadow-2xl transition 
              bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-violet-500/10 
              border border-pink-500/20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Header */}
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback className="text-xl font-medium bg-gradient-to-r from-pink-500 to-violet-600 text-white">
                  {testimonial.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">
                  {testimonial.name}
                </p>
                <p className="text-sm text-purple-400">
                  {testimonial.designation}
                </p>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="mt-5 text-[17px] leading-relaxed text-gray-200">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-violet-500 bg-clip-text text-transparent font-medium">
                “
              </span>
              {testimonial.testimonial}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-violet-500 bg-clip-text text-transparent font-medium">
                ”
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Testimonial;
