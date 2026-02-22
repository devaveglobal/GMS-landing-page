"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

const trainers = [
  {
    name: "John Doe",
    role: "GYM COACH",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Jane Smith",
    role: "FITNESS COACH",
    image:
      "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Mike Tyson",
    role: "BOXING COACH",
    image:
      "https://images.unsplash.com/photo-1549476464-37392f717551?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Sarah Connor",
    role: "CROSSFIT COACH",
    image:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
  },
];

const Trainers = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <span className="text-lime font-black tracking-widest text-sm bg-lime/10 px-3 py-1 rounded-full border border-lime/20">
            OUR BEST PROFESSIONAL
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic">
            FITNESS <span className="text-lime">TRAINERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Socials on hover */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 bg-lime p-2 rounded-2xl shadow-2xl">
                  <button className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center hover:bg-black transition-colors group/icon">
                    <Facebook className="w-5 h-5 text-black group-hover/icon:text-lime" />
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center hover:bg-black transition-colors group/icon">
                    <Twitter className="w-5 h-5 text-black group-hover/icon:text-lime" />
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center hover:bg-black transition-colors group/icon">
                    <Instagram className="w-5 h-5 text-black group-hover/icon:text-lime" />
                  </button>
                </div>
              </div>

              <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-black text-white uppercase italic">
                  {trainer.name}
                </h3>
                <p className="text-lime font-bold tracking-widest text-sm uppercase">
                  {trainer.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
