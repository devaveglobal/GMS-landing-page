"use client";

import Image from "next/image";
import { Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  "MODERN FACILITIES",
  "EXPERT TEAM",
  "DIVERSE OFFERING",
  "FITNESS FOCUS",
];

const About = () => {
  return (
    <section
      className="py-24 bg-background relative overflow-hidden"
      id="about-us"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Image Mosaic */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-white/5 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            {/* Play Button Overlay */}
            <div className="absolute z-20 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform group">
              <Play className="w-8 h-8 fill-black text-black ml-1 group-hover:scale-125 transition-transform" />
            </div>

            <div className="grid grid-cols-2 gap-4 w-full h-[500px]">
              <div className="relative rounded-3xl overflow-hidden mt-12">
                <Image
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
                  alt="Gym"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-3xl overflow-hidden mb-12">
                <Image
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
                  alt="Gym"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-3xl overflow-hidden col-span-2 -mt-24 h-48 mx-12 border-8 border-background">
                <div className="absolute inset-0 bg-lime flex items-center justify-center gap-6 px-10">
                  <span className="text-7xl font-black italic">25+</span>
                  <div className="flex flex-col">
                    <span className="text-xl font-black leading-tight">
                      YEARS OF FITNESS
                    </span>
                    <span className="text-xl font-black leading-tight uppercase">
                      EXPERIENCE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-lime font-black tracking-widest text-sm bg-lime/10 self-start px-3 py-1 rounded-full border border-lime/20">
              ABOUT COMPANY
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight uppercase">
              DEDICATED TO IGNITING YOUR{" "}
              <span className="text-lime italic">FITNESS HEALTH</span>
            </h2>
          </div>

          <p className="text-white/60 text-lg leading-relaxed">
            Quam elementum nullam quas duis, natus tempus, sunt habitant sunt
            beatae! Aptent enim dolorem aliquet saepe aliquam donec. Dignissimos
            voluptatuum officia dolorem.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 group">
                <div className="w-6 h-6 rounded-full bg-lime flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Check className="w-4 h-4 text-black stroke-[4px]" />
                </div>
                <span className="font-black text-white group-hover:text-lime transition-colors">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <Button className="bg-lime text-black hover:bg-lime/90 font-black rounded-full h-14 px-10 text-lg uppercase italic self-start mt-4">
            More About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
