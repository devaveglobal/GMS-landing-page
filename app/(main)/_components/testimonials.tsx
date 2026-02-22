"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Owner, Iron Peak Fitness",
    quote:
      "Switching to FITOS was the best business decision I've made. We reduced our member churn by 14% in the first three months just by using the automated renewal reminders.",
    stat: "14% Churn Reduction",
  },
  {
    name: "Sarah Miller",
    role: "Proprietor, Zenith Yoga Studio",
    quote:
      "The class booking system is flawless. My members love the mobile portal, and I love that I don't have to manually track commissions for my trainers anymore.",
    stat: "80% Less Admin Work",
  },
];

const Testimonials = () => {
  return (
    <section
      className="py-24 bg-white/2 relative border-y border-white/5"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <span className="text-lime font-black tracking-widest text-sm bg-lime/10 px-3 py-1 rounded-full border border-lime/20">
            SOCIAL PROOF
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-tight">
            Trusted by <span className="text-lime">Industry Leaders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-10 md:p-16 rounded-[40px] bg-background border border-white/5 relative group hover:border-lime/20 transition-all shadow-2xl"
            >
              <Quote className="w-16 h-16 text-lime/10 absolute top-10 right-10 group-hover:text-lime/20 transition-colors" />

              <div className="flex flex-col gap-8">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-lime text-lime" />
                  ))}
                </div>

                <p className="text-2xl md:text-3xl font-bold text-white italic leading-tight tracking-tight">
                  "{t.quote}"
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-8 mt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800 border border-white/10">
                      <Image
                        src={`https://i.pravatar.cc/100?u=test${i}`}
                        alt={t.name}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-black uppercase italic tracking-tighter">
                        {t.name}
                      </span>
                      <span className="text-white/40 text-xs font-bold uppercase tracking-widest">
                        {t.role}
                      </span>
                    </div>
                  </div>
                  <div className="bg-lime/10 border border-lime/20 rounded-full px-4 py-1">
                    <span className="text-lime text-[10px] font-black uppercase tracking-widest">
                      {t.stat}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
