"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "01",
    title: "ONLINE PERSONAL TRAINING CLASS",
    image:
      "https://images.unsplash.com/photo-1544033527-b192daee1f5b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "FUNCTIONAL FITNESS TRAINING",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "WEIGHT LOSS COACHING CLASS",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
  },
];

const Services = () => {
  return (
    <section
      className="py-24 bg-background relative overflow-hidden"
      id="programs"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-lime font-black tracking-widest text-sm bg-lime/10 self-start px-3 py-1 rounded-full border border-lime/20">
              WHY CHOOSE US
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight uppercase">
              EXPERIENCE RELIABLE <br />
              FITNESS <span className="text-lime italic">SERVICES</span>
            </h2>
            <p className="text-white/60 text-lg">
              Harum congue modous minus sapie, qui quis facere dolor scelerisque
              magna ea nec perferent, iste odio, accumsan distinctio quibusdam
              nonummy placeat habilasse.
            </p>
          </div>
          <div className="flex gap-4">
            <Button className="bg-lime text-black hover:bg-lime/90 font-black rounded-full h-14 px-8 text-sm uppercase italic">
              More Services ↗
            </Button>
            <Button
              variant="outline"
              className="border-white/10 hover:bg-white/5 text-white font-black rounded-full h-14 px-8 text-sm uppercase italic"
            >
              Contact us 📞
            </Button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

              <div className="absolute inset-x-8 bottom-8 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-black text-lime italic opacity-80">
                    {service.id}
                  </span>
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-lime group-hover:border-lime transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white leading-tight">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
