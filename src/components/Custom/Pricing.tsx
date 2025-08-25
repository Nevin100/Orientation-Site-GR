"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CircleCheck, CircleHelp } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const tooltipContent = {
  pitches: "AI-generated startup pitch decks for investors.",
  credits: "Each credit allows you to generate one full pitch deck.",
  templates: "Access to premium pitch templates & frameworks.",
  priority: "Faster generation speed with priority access.",
};

const YEARLY_DISCOUNT = 15;

const plans = [
  {
    name: "Starter",
    price: 199,
    description: "Perfect for students & early founders validating ideas.",
    features: [
      {
        title: "Generate 5 pitch decks/month",
        tooltip: tooltipContent.pitches,
      },
      { title: "5 credits included", tooltip: tooltipContent.credits },
      { title: "Basic templates" },
      { title: "Community support" },
    ],
  },
  {
    name: "Growth",
    price: 399,
    description: "Best for growing startups looking to impress investors.",
    features: [
      {
        title: "Generate 15 pitch decks/month",
        tooltip: tooltipContent.pitches,
      },
      { title: "15 credits included", tooltip: tooltipContent.credits },
      {
        title: "Access to 10 premium templates",
        tooltip: tooltipContent.templates,
      },
      { title: "Priority support", tooltip: tooltipContent.priority },
    ],
    isPopular: true,
  },
  {
    name: "Pro",
    price: 599,
    description: "For founders & agencies creating decks at scale.",
    features: [
      { title: "Unlimited pitch decks", tooltip: tooltipContent.pitches },
      { title: "50 credits included", tooltip: tooltipContent.credits },
      { title: "All premium templates", tooltip: tooltipContent.templates },
      { title: "1-on-1 strategy consultation" },
      { title: "Priority access & early features" },
    ],
  },
];

const Pricing = () => {
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState("monthly");

  return (
    <div className="relative flex flex-col items-center justify-center py-16 px-6">
      {/* Gradient Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold text-center tracking-tight 
        bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 
        bg-clip-text text-transparent py-4 md:py-6"
      >
        Pricing Plans
      </motion.h1>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Tabs
          value={selectedBillingPeriod}
          onValueChange={setSelectedBillingPeriod}
          className="mt-8"
        >
          <TabsList className="h-11 border px-1.5 rounded-full bg-background/20 backdrop-blur-md">
            <TabsTrigger
              value="monthly"
              className="px-5 py-1.5 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-violet-600 data-[state=active]:text-white"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="px-5 py-1.5 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-violet-600 data-[state=active]:text-white"
            >
              Yearly (Save {YEARLY_DISCOUNT}%)
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </motion.div>

      {/* Pricing Cards */}
      <div className="mt-12 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={cn(
              "relative p-6 rounded-2xl border transition-all duration-300 backdrop-blur-md bg-background/10 hover:bg-background/20 hover:shadow-[0px_6px_30px_rgba(236,72,153,0.25)]"
            )}
          >
            {plan.isPopular && (
              <Badge
                className="absolute top-6 right-6 rotate-[45deg] rounded-none px-8 uppercase translate-x-1/2 -translate-y-1/2
                bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-md"
              >
                Most Popular
              </Badge>
            )}

            <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">
              {plan.name}
            </h3>

            <p className="mt-2 text-4xl font-bold text-white">
              ₹
              {selectedBillingPeriod === "monthly"
                ? plan.price
                : plan.price * ((100 - YEARLY_DISCOUNT) / 100)}
              <span className="ml-1.5 text-sm text-gray-400 font-normal">
                /month
              </span>
            </p>

            <p className="mt-4 text-gray-300">{plan.description}</p>

            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className={cn(
                "w-full mt-6 rounded-full text-base transition",
                plan.isPopular
                  ? "bg-gradient-to-r from-pink-500 to-violet-600 text-white hover:opacity-90"
                  : "border-pink-400 text-pink-400 hover:bg-pink-500/10"
              )}
            >
              Get Started <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>

            <Separator className="my-8 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-violet-600/30" />

            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature.title}
                  className="flex items-start gap-2 text-gray-200"
                >
                  <CircleCheck className="h-4 w-4 mt-1 text-pink-400" />
                  {feature.title}
                  {feature.tooltip && (
                    <Tooltip>
                      <TooltipTrigger className="cursor-help">
                        <CircleHelp className="h-4 w-4 mt-1 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>{feature.tooltip}</TooltipContent>
                    </Tooltip>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
