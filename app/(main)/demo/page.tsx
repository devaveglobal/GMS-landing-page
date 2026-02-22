"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Monitor,
  Play,
  Smartphone,
  Zap,
  ChevronRight,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function DemoPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-white selection:bg-lime selection:text-black pt-20">
      <main className="max-w-7xl mx-auto px-6 py-20 relative overflow-hidden">
        {/* Decorative Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/10 blur-[150px] rounded-full -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-lime/10 border border-lime/20 rounded-full text-[10px] font-black text-lime uppercase tracking-widest">
                  Personalized Walkthrough
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-tight">
                See <span className="text-lime font-black">FITOS</span> In
                Action
              </h1>
              <p className="text-white/50 text-xl font-medium leading-relaxed italic max-w-xl">
                Experience how FITOS can automate your daily operations, boost
                member retention, and maximize your gym's revenue.
              </p>
            </motion.div>

            <div className="flex flex-col gap-6">
              {[
                "Instant Dashboard Analytics",
                "Automated Billing Demo",
                "Mobile App Preview",
                "Trainer Commission Workflow",
              ].map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-lime transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-lime group-hover:text-black" />
                  </div>
                  <span className="text-lg font-bold italic text-white/80 group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-4">
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-lime text-lime" />
                  ))}
                </div>
                <p className="text-sm font-black text-white/30 uppercase tracking-widest">
                  Rated 4.9/5 by Gym Owners
                </p>
              </div>
            </div>
          </div>

          {/* Right: Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[48px] p-8 md:p-12 shadow-2xl relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-lime/20 blur-3xl rounded-full" />

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter">
                  Book Your <span className="text-lime">Free Demo</span>
                </h2>
                <p className="text-white/40 text-sm font-bold uppercase tracking-widest">
                  No credit card required • 30 minute session
                </p>
              </div>

              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white outline-none focus:border-lime transition-all font-bold italic"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">
                      Gym Name
                    </label>
                    <input
                      type="text"
                      placeholder="Elite Fitness Center"
                      className="h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white outline-none focus:border-lime transition-all font-bold italic"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@yourgym.com"
                    className="h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white outline-none focus:border-lime transition-all font-bold italic"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <input
                      type="datetime-local"
                      className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white outline-none focus:border-lime transition-all font-bold italic appearance-none"
                    />
                    <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                  </div>
                </div>

                <Button className="h-16 bg-lime text-black hover:bg-lime/90 font-black text-xl uppercase italic rounded-2xl mt-4 group">
                  Confirm Demo Request
                  <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-center text-[10px] text-white/30 font-black uppercase tracking-widest mt-2">
                  By clicking, you agree to our Terms and Privacy Policy.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Feature Highlights Section */}
        <section className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Monitor,
              title: "All-in-One Dashboard",
              desc: "Manage everything from memberships to inventory in one unified viewport.",
            },
            {
              icon: Smartphone,
              title: "Branded Member App",
              desc: "Your members get high-fidelity iOS/Android portals with your logo.",
            },
            {
              icon: ShieldCheck,
              title: "Enterprise Security",
              desc: "Role-based access control and bank-grade data encryption as standard.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
              className="p-8 rounded-[32px] bg-white/2 border border-white/5 hover:border-lime/30 transition-all text-center flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-lime" />
              </div>
              <h3 className="text-xl font-black uppercase italic tracking-tighter">
                {item.title}
              </h3>
              <p className="text-white/40 font-medium italic leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
}
