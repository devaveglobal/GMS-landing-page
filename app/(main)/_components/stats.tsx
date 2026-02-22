"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "HAPPY GLOBAL CUSTOMERS", value: "850%" },
  { label: "ADVANCED GYM EQUIPMENTS", value: "920%" },
  { label: "QUALIFIED EXPERT TRAINERS", value: "990%" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-background relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group cursor-default"
            >
              <div className="flex flex-col gap-1 flex-1">
                <span className="text-xs font-black tracking-widest text-white/40 uppercase leading-tight group-hover:text-lime transition-colors">
                  {stat.label}
                </span>
                <span className="text-5xl font-black text-white italic group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </span>
              </div>
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center opacity-40">
                <div className="w-6 h-6 border-2 border-white rotate-45 group-hover:border-lime group-hover:rotate-90 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
