"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  TrendingDown,
  Clock,
  Users,
  FileText,
  Smartphone,
} from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Manual Member Tracking",
    description:
      "Losing track of renewals, attendance, and member statuses across multiple sheets.",
  },
  {
    icon: TrendingDown,
    title: "Revenue Leakage",
    description:
      "Failed payments and missed renewals that quietly drain your gym's profitability.",
  },
  {
    icon: Clock,
    title: "Commission Confusion",
    description:
      "Spending hours manually calculating trainer sessions and payouts every month.",
  },
  {
    icon: Smartphone,
    title: "Poor Lead Follow-up",
    description:
      "Potential members slipping through the cracks because there's no system to track them.",
  },
  {
    icon: FileText,
    title: "Paperwork Nightmares",
    description:
      "Drowning in paper waivers, physical documents, and messy filing cabinets.",
  },
  {
    icon: AlertCircle,
    title: "No Real-time Insights",
    description:
      "Making business decisions based on guesswork instead of hard data and analytics.",
  },
];

const Problems = () => {
  return (
    <section className="py-24 bg-background relative" id="problems">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-lime font-black tracking-widest text-sm bg-lime/10 px-3 py-1 rounded-full border border-lime/20">
            THE PAIN POINTS
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-tight">
            Still Managing Your Gym on <br />
            <span className="text-lime">Excel & WhatsApp?</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl font-medium mt-2">
            Running a gym shouldn't feel like a second workout. Stop the manual
            chaos and start automating your growth with a system built for gym
            owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((prob, index) => (
            <motion.div
              key={prob.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[32px] bg-white/2 border border-white/5 hover:border-lime/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-lime transition-colors">
                <prob.icon className="w-7 h-7 text-white group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-black text-white italic uppercase mb-3 tracking-tighter">
                {prob.title}
              </h3>
              <p className="text-white/40 font-medium leading-relaxed">
                {prob.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
