"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  CreditCard,
  MessageCircle,
  BarChart,
  CheckCircle2,
} from "lucide-react";

const MobileApp = () => {
  return (
    <section className="py-24 bg-background overflow-hidden" id="mobile-app">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left: Content */}
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-lime font-black tracking-widest text-sm bg-lime/10 self-start px-3 py-1 rounded-full border border-lime/20">
                MEMBER MOBILE PORTAL
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-tight">
                Your Members Get Their Own <br />
                <span className="text-lime">Mobile Portal</span>
              </h2>
              <p className="text-white/40 text-xl font-medium italic">
                Empower your members with a professional mobile experience where
                they can manage their fitness journey 24/7.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Calendar, text: "Book Classes & PT" },
                { icon: CreditCard, text: "Make Secure Payments" },
                { icon: BarChart, text: "Track Workout Progress" },
                { icon: MessageCircle, text: "Chat with Trainers" },
                { icon: CheckCircle2, text: "QR Check-in System" },
                { icon: CheckCircle2, text: "View Transformation Photos" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-lime transition-colors">
                    <item.icon className="w-5 h-5 text-white group-hover:text-black" />
                  </div>
                  <span className="text-white font-bold uppercase tracking-widest text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <div className="w-40 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 cursor-pointer hover:bg-white/20 transition-all font-black text-white text-xs uppercase tracking-widest italic">
                App Store
              </div>
              <div className="w-40 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 cursor-pointer hover:bg-white/20 transition-all font-black text-white text-xs uppercase tracking-widest italic">
                Google Play
              </div>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex-1 relative flex justify-center items-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime/20 blur-[150px] rounded-full z-0" />

            {/* Phone Frame */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -5 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10 w-[300px] h-[600px] bg-black border-8 border-zinc-800 rounded-[50px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-20" />
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop"
                alt="App UI"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

              {/* UI Elements Simulated */}
              <div className="absolute bottom-10 left-6 right-6 flex flex-col gap-4">
                <div className="h-10 w-full bg-lime rounded-full flex items-center justify-center font-black text-black text-xs uppercase italic">
                  Book Class
                </div>
                <div className="flex gap-2">
                  <div className="h-20 flex-1 bg-white/10 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center">
                    <span className="text-lime text-lg font-black italic">
                      14
                    </span>
                    <span className="text-[8px] text-white/40 uppercase font-black">
                      Workouts
                    </span>
                  </div>
                  <div className="h-20 flex-1 bg-white/10 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center">
                    <span className="text-lime text-lg font-black italic">
                      2.4k
                    </span>
                    <span className="text-[8px] text-white/40 uppercase font-black">
                      Calories
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] right-0 lg:-right-10 z-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-black" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">
                    Next Class
                  </span>
                  <span className="text-sm text-white font-bold italic tracking-tighter">
                    HIIT Session - 10:00 AM
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-[20%] left-0 lg:-left-10 z-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-black" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">
                    Payment
                  </span>
                  <span className="text-sm text-white font-bold italic tracking-tighter">
                    Renewal Successful
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
