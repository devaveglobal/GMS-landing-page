"use client";

import { motion } from "framer-motion";
import {
  Users,
  CreditCard,
  Calendar,
  Smartphone,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Zap,
  Bell,
  CheckCircle2,
  LineChart,
  UserCheck,
} from "lucide-react";
import Image from "next/image";

const systemFlow = [
  {
    stage: "ACQUISITION",
    icon: Zap,
    title: "Marketing & Leads",
    features: [
      "Social Lead Capture",
      "Automated SMS Follow-up",
      "Referral Management",
      "Sales Pipeline",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    stage: "ONBOARDING",
    icon: UserCheck,
    title: "Member Entrance",
    features: [
      "Digital Contracts",
      "Auto-Billing Setup",
      "Fitness Assessment",
      "App Credentialing",
    ],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  },
  {
    stage: "DAILY OPERATIONS",
    icon: Calendar,
    title: "Booking & Access",
    features: [
      "QR Check-in System",
      "Class Capacity Management",
      "Trainer Scheduling",
      "PT Session Logs",
    ],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
  },
  {
    stage: "ENGAGEMENT",
    icon: Smartphone,
    title: "Member Mobile Portal",
    features: [
      "Workout Tracking",
      "Nutrition Logging",
      "Trainer Chat",
      "Progress Photos",
    ],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
  },
  {
    stage: "RETENTION",
    icon: BarChart3,
    title: "Analytics & Growth",
    features: [
      "Churn Predictor",
      "Revenue Insights",
      "Attendance Heatmaps",
      "Automated Renewals",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-lime selection:text-black pt-24 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center flex flex-col items-center gap-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lime font-black tracking-widest text-sm uppercase bg-lime/10 px-3 py-1 rounded-full border border-lime/20"
        >
          THE FITOS ECOSYSTEM
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none"
        >
          FLOW <span className="text-lime">OF</span> POWER
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-xl font-medium max-w-3xl italic"
        >
          See how FITOS seamlessly connects every aspect of your gym, from the
          first lead interaction to lifetime member retention.
        </motion.p>
      </section>

      {/* Feature Flow Map */}
      <section className="max-w-7xl mx-auto px-6 relative">
        {/* Central Vertical Line for Desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-lime/50 via-lime/10 to-transparent -translate-x-1/2" />

        <div className="flex flex-col gap-20">
          {systemFlow.map((step, index) => (
            <motion.div
              key={step.stage}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Side */}
              <div className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
                <span className="text-[10px] font-black text-lime uppercase tracking-widest bg-lime/5 border border-lime/20 px-2 py-1 rounded">
                  STEP {index + 1}: {step.stage}
                </span>
                <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">
                  {step.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {step.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-3 bg-white/2 border border-white/5 p-4 rounded-2xl hover:border-lime/30 transition-all group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-lime" />
                      <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Icon / Marker Side */}
              <div className="hidden lg:flex w-24 h-24 rounded-full bg-background border-4 border-white/10 items-center justify-center relative z-10 shadow-[0_0_50px_rgba(215,253,81,0.1)]">
                <div className="absolute inset-0 bg-lime/10 rounded-full animate-ping" />
                <step.icon className="w-10 h-10 text-lime" />
              </div>

              {/* Stats/Mock Preview Side */}
              <div className="flex-1 w-full flex items-center justify-center lg:justify-start">
                <div className="w-full h-48 rounded-[32px] bg-white/5 border border-white/10 overflow-hidden relative group">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-lime/20 to-transparent opacity-40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-black text-lime uppercase tracking-[0.5em] mt-4">
                      FITOS V4.0 // LIVE DATA
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Grid Highlights */}
      <section className="max-w-7xl mx-auto px-6 mt-40">
        <div className="text-center mb-20 flex flex-col items-center gap-4">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
            BEYOND THE <span className="text-lime">FLOW</span>
          </h2>
          <p className="text-white/40 font-bold uppercase tracking-widest text-sm italic">
            Core Infrastructure Attributes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: "256-bit Security", icon: ShieldCheck },
            { title: "99.9% Uptime", icon: LineChart },
            { title: "Real-time Sync", icon: Bell },
            { title: "Global Cloud", icon: Zap },
          ].map((attr, i) => (
            <div
              key={i}
              className="bg-white/2 border border-white/5 p-8 rounded-[32px] flex flex-col items-center gap-4 hover:bg-white/5 transition-all text-center"
            >
              <attr.icon className="w-8 h-8 text-lime" />
              <span className="text-lg font-black italic uppercase tracking-tighter text-white">
                {attr.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 mt-40">
        <div className="bg-lime p-12 md:p-20 rounded-[48px] text-center flex flex-col items-center gap-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 blur-[100px] rounded-full" />
          <h2 className="text-5xl md:text-7xl font-black text-black italic uppercase tracking-tighter leading-tight relative z-10">
            READY TO UNLEASH <br /> THE SYSTEM?
          </h2>
          <button className="h-16 bg-black text-white hover:bg-zinc-900 font-black rounded-full px-12 text-xl uppercase italic shadow-2xl transition-all hover:scale-105 active:scale-95 group relative z-10">
            Book My Free Demo
            <ArrowRight className="inline-block ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
