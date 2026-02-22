"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Database,
  RefreshCw,
  BarChart,
  HardDrive,
  Smartphone,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Dedicated per Gym",
    description:
      "Your system is hosted separately. No shared databases, ensuring maximum performance and privacy.",
  },
  {
    icon: Database,
    title: "Daily Cloud Backups",
    description:
      "Never lose a single member record. We backup your entire system every 24 hours automatically.",
  },
  {
    icon: BarChart,
    title: "Real-time Analytics",
    description:
      "See your revenue, churn, and attendance metrics live on your dashboard from any device.",
  },
  {
    icon: RefreshCw,
    title: "Easy Migration",
    description:
      "Switching from Excel or another system? Our team handles the data migration for you for free.",
  },
  {
    icon: HardDrive,
    title: "Offline Support",
    description:
      "Keep checking in members even if the internet goes down. Data syncs as soon as you're back online.",
  },
  {
    icon: Smartphone,
    title: "Custom Branding",
    description:
      "The mobile app and web portal can be customized with your gym's logo and primary colors.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="py-24 bg-white/2 relative border-y border-white/5"
      id="why-choose-us"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <span className="text-lime font-black tracking-widest text-sm bg-lime/10 px-3 py-1 rounded-full border border-lime/20">
            DIFFERENTIATION
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-tight">
            Why Choose <span className="text-lime">FITOS</span>?
          </h2>
          <p className="text-white/40 text-lg max-w-2xl font-medium">
            We aren't just another software; we are your gym's digital backbone.
            Focused on security, scalability, and ease of use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] bg-background border border-white/5 hover:border-lime/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-lime transition-colors">
                <reason.icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-black text-white italic uppercase mb-3 tracking-tighter">
                {reason.title}
              </h3>
              <p className="text-white/40 font-medium leading-relaxed italic">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
