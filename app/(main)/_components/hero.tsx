"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background with subtle tech mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,253,81,0.05)_0%,rgba(0,0,0,1)_70%)]" />
        <Image
          src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop"
          alt="Gym Management Dashboard"
          fill
          className="object-cover opacity-30 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 text-left"
        >
          <div className="flex flex-col gap-4">
            <span className="text-lime font-black tracking-widest text-sm uppercase bg-lime/10 self-start px-3 py-1 rounded-full border border-lime/20">
              Complete Gym Operating System
            </span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter text-white uppercase italic">
              Run Your Entire <span className="text-lime">Gym</span> From One
              Powerful System
            </h1>
            <p className="text-white/60 text-xl font-medium max-w-xl">
              Manage members, billing, trainers, classes, and revenue — all in
              one centralized platform designed to help you grow your fitness
              business.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => router.push("/demo")}
              className="bg-lime text-black hover:bg-lime/90 font-black rounded-full h-16 px-10 text-xl uppercase italic group transition-all"
            >
              Book a Free Demo
              <Play className="ml-2 w-5 h-5 fill-current" />
            </Button>
            <Button
              onClick={() => router.push("/features")}
              variant="outline"
              className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-black rounded-full h-16 px-10 text-xl uppercase italic border-2"
            >
              See How It Works
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-zinc-800"
                >
                  <Image
                    src={`https://i.pravatar.cc/100?u=owner${i}`}
                    alt="Owner"
                    width={40}
                    height={40}
                  />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-white/40 uppercase tracking-widest">
              Trusted by <span className="text-white">500+</span> Gym Owners
              Worldwide
            </p>
          </div>
        </motion.div>

        {/* Right Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-lime/20 blur-[100px] rounded-full z-0" />
          <div className="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[32px] p-2 shadow-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
              alt="Dashboard Mockup"
              width={800}
              height={500}
              className="rounded-[28px] opacity-80"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

            {/* Floating Stat Widget */}
            <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                  Monthly Revenue
                </span>
                <span className="text-2xl font-black text-white">
                  $42,850.00
                </span>
              </div>
              <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-b-15 border-b-black" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
