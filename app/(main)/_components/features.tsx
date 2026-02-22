"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CreditCard,
  Users,
  BarChart3,
  Zap,
  Smartphone,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const featureGroups = [
  {
    icon: CreditCard,
    title: "Membership & Billing Automation",
    features: [
      "Auto-renewals & Failed Payment Recovery",
      "Online Payments & Invoice Generation",
      "Membership Lifecycle Management",
      "Freeze & Cancellation Automation",
      "Grace Period Handling",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2211&auto=format&fit=crop",
    color: "lime",
  },
  {
    icon: Users,
    title: "Trainer & Class Management",
    features: [
      "Online Booking & Capacity Limits",
      "Assign Trainers & Set Class Schedules",
      "Trainer Commission Tracking",
      "PT Session Tracking & History",
      "Attendance Management",
    ],
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Lead & Marketing Automation",
    features: [
      "Automated Lead Tracking",
      "Smarter Follow-up Reminders",
      "Email & SMS Marketing Campaigns",
      "Member Referral Programs",
      "Sales Funnel Analytics",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    color: "purple",
  },
  {
    icon: ShieldCheck,
    title: "Access Control & Check-in",
    features: [
      "QR Code & RFID Integration",
      "Automatic Check-in Blocking",
      "Attendance Reporting",
      "Offline Access Support",
      "Role-based Secure Access",
    ],
    image:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=2107&auto=format&fit=crop",
    color: "orange",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background relative" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <span className="text-lime font-black tracking-widest text-sm bg-lime/10 px-3 py-1 rounded-full border border-lime/20">
            CORE SELLING BLOCK
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-tight">
            Everything Your Gym Needs — <br />
            <span className="text-lime text-5xl md:text-8xl">
              In One System
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl font-medium">
            FITOS provides a complete suite of tools to automate your
            back-office, engage your members, and scale your revenue without the
            headache.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {featureGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-16 lg:gap-24",
                index % 2 !== 0 && "lg:flex-row-reverse",
              )}
            >
              {/* Image Side */}
              <div className="flex-1 relative group h-[400px] md:h-[500px] w-full">
                <div className="absolute -inset-4 bg-lime/10 blur-[100px] rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-white/10">
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                    <group.icon className="w-8 h-8 text-lime" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter">
                    {group.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {group.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="w-2 h-2 rounded-full bg-lime group-hover/item:scale-150 transition-transform" />
                      <span className="text-white/60 text-lg font-bold group-hover/item:text-white transition-colors tracking-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-lime font-black uppercase italic tracking-widest text-sm hover:translate-x-2 transition-transform self-start mt-4">
                  Learn More About This <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
