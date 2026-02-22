"use client";

import { motion } from "framer-motion";
import { Settings, UserPlus, Zap } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "1. Set Up Your Gym",
    description:
      "Configure your membership plans, class schedules, and branding in under 30 minutes.",
  },
  {
    icon: UserPlus,
    title: "2. Add Members & Plans",
    description:
      "Import your existing database or start fresh. Your members get instant app access.",
  },
  {
    icon: Zap,
    title: "3. Automate Everything",
    description:
      "Relax as the system handles billing, check-ins, and follow-ups on autopilot.",
  },
];

const HowItWorks = () => {
  return (
    <section
      className="py-24 bg-white/2 relative border-y border-white/5"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <span className="text-lime font-black tracking-widest text-sm bg-lime/10 px-3 py-1 rounded-full border border-lime/20">
            SIMPLE 3-STEP PROCESS
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-tight">
            How It <span className="text-lime">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-px bg-white/5 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-6 relative z-10"
            >
              <div className="w-20 h-20 rounded-full bg-background border-2 border-white/10 flex items-center justify-center group hover:border-lime transition-colors">
                <step.icon className="w-8 h-8 text-white group-hover:text-lime transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-white/40 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
