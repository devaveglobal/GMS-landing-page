"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CreditCard,
  Users,
  Zap,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Smartphone,
  BarChart3,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const productData = {
  "membership-billing": {
    title: "Membership & Billing Automation",
    description:
      "Take the headache out of gym finances. Our automated billing system handles every aspect of the member lifecycle, from initial sign-up to failed payment recovery, ensuring your revenue stream is consistent and predictable.",
    icon: CreditCard,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2211&auto=format&fit=crop",
    features: [
      "Auto-renewals & Failed Payment Recovery",
      "Online Payments & Invoice Generation",
      "Membership Lifecycle Management",
      "Freeze & Cancellation Automation",
      "Grace Period Handling",
      "Custom Billing Cycles",
      "Tax & Compliance Reporting",
    ],
    details: [
      {
        title: "automated recovery",
        desc: "Don't lose members to expired cards. Our system automatically reaches out and retries payments before they churn.",
      },
      {
        title: "seamless payments",
        desc: "Integrated with global payment gateways to provide a frictionless checkout experience for your members.",
      },
    ],
  },
  "trainer-management": {
    title: "Trainer & Class Management",
    description:
      "Empower your staff and optimize your floorspace. Manage class schedules, track trainer commissions, and provide a seamless booking experience for your members—all in one place.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Online Booking & Capacity Limits",
      "Assign Trainers & Set Class Schedules",
      "Trainer Commission Tracking",
      "PT Session Tracking & History",
      "Attendance Management",
      "Staff Performance Analytics",
      "Resource Allocation",
    ],
    details: [
      {
        title: "Smart Scheduling",
        desc: "Prevent overbooking and optimize class times based on real-time attendance data and member preferences.",
      },
      {
        title: "Trainer Portal",
        desc: "Give your trainers the tools to manage their own schedules and track their client progress effortlessly.",
      },
    ],
  },
  "marketing-automation": {
    title: "Lead & Marketing Automation",
    description:
      "Turn strangers into loyal members. Our marketing suite automates the follow-up process, tracks every lead source, and helps you build high-converting sales funnels that work while you sleep.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Automated Lead Tracking",
      "Smarter Follow-up Reminders",
      "Email & SMS Marketing Campaigns",
      "Member Referral Programs",
      "Sales Funnel Analytics",
      "Social Media Integration",
      "Custom Landing Pages",
    ],
    details: [
      {
        title: "Lead Nurturing",
        desc: "Automatically send personalized SMS and email sequences to keep your gym top-of-mind for every prospect.",
      },
      {
        title: "Referral Engine",
        desc: "Turn your current members into your best sales team with automated referral tracking and rewards.",
      },
    ],
  },
  "access-control": {
    title: "Access Control & Check-in",
    description:
      "Secure your facility and streamline entry. From QR codes to RFID integration, our access control system ensures only active members enter your gym, providing peace of mind and valuable usage data.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=2107&auto=format&fit=crop",
    features: [
      "QR Code & RFID Integration",
      "Automatic Check-in Blocking",
      "Attendance Reporting",
      "Offline Access Support",
      "Role-based Secure Access",
      "Real-time Occupancy Tracking",
      "Tailgating Detection",
    ],
    details: [
      {
        title: "Digital Entry",
        desc: "No more lost cards. Members can check in directly using their smartphones via the FITOS mobile app.",
      },
      {
        title: "Security first",
        desc: "Instantly block entry for members with outstanding balances or expired memberships at the gate.",
      },
    ],
  },
};

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const product = productData[slug as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white italic">
            PRODUCT NOT FOUND
          </h1>
          <Button
            onClick={() => router.push("/#features")}
            className="mt-8 bg-lime text-black font-black italic rounded-full"
          >
            RETURN TO EXPLORE
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white selection:bg-lime selection:text-black">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-32 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,253,81,0.05)_0%,rgba(0,0,0,1)_80%)]" />
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover opacity-30 grayscale transition-all duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/40 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Large Centered Icon */}
            <div className="w-24 h-24 rounded-[32px] bg-lime flex items-center justify-center shadow-[0_0_60px_rgba(215,253,81,0.3)] border-4 border-black/20">
              <product.icon className="w-12 h-12 text-black" />
            </div>

            {/* Impact Title */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic uppercase tracking-tighter leading-none">
              {product.title.split(" & ").map((part, i) => (
                <span key={part}>
                  {i > 0 && <span className="text-lime"> & </span>}
                  {part}
                  <br className="md:hidden" />
                </span>
              ))}
            </h1>

            {/* Description */}
            <p className="text-white/60 text-xl md:text-2xl font-medium max-w-3xl italic">
              {product.description}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
              <Button
                onClick={() => router.push("/#features")}
                variant="outline"
                className="rounded-full border-white/20 text-white hover:bg-white/10 px-10 h-16 font-black italic uppercase text-lg group"
              >
                <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to Flow
              </Button>
              <Button className="bg-lime text-black hover:bg-lime/90 rounded-full px-16 h-16 font-black italic uppercase text-2xl shadow-2xl">
                Get Started
                <CheckCircle2 className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Highlights */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {product.details.map((detail, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[40px] group hover:border-lime/30 transition-all"
            >
              <span className="text-lime font-black tracking-[0.3em] text-xs uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                KEY ADVANTAGE 0{i + 1}
              </span>
              <h3 className="text-3xl font-black italic uppercase text-white mt-4 mb-6">
                {detail.title}
              </h3>
              <p className="text-white/40 text-lg group-hover:text-white/70 transition-colors">
                {detail.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bulleted Features */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-10">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
              A POWERFUL <br />
              <span className="text-lime">FEATURE SET</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {product.features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 bg-white/2 border border-white/5 p-6 rounded-3xl hover:bg-white/5 hover:border-lime/20 transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-lime shrink-0" />
                  <span className="text-sm font-black italic uppercase tracking-tight text-white/70 group-hover:text-white">
                    {f}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0 bg-lime/5 blur-[120px] rounded-full" />
            <div className="relative w-full h-full rounded-[60px] overflow-hidden border border-white/10">
              <Image
                src={product.image}
                alt="Feature visual"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Block */}
      <section className="max-w-7xl mx-auto px-6 mt-40">
        <div className="bg-lime/5 border border-lime/10 p-12 md:p-20 rounded-[60px] flex flex-col items-center text-center gap-10">
          <Globe className="w-16 h-16 text-lime animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter">
            Seamlessly <span className="text-lime">Integrated</span> <br />
            With Your Entire Ecosystem
          </h2>
          <p className="text-white/40 text-xl max-w-2xl font-medium">
            Every feature works in perfect harmony with our core engine. Data
            flows instantly between billing, access control, and your mobile
            app.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-4 opacity-50">
            <div className="flex items-center gap-2">
              <BarChart3 size={20} /> ANALYTICS
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={20} /> SCHEDULING
            </div>
            <div className="flex items-center gap-2">
              <Smartphone size={20} /> MOBILE APP
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="max-w-7xl mx-auto px-6 mt-40 border-t border-white/5 pt-20 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-2">
          <span className="text-white/20 font-black uppercase text-xs tracking-widest">
            WANT TO SEE MORE?
          </span>
          <h3 className="text-3xl font-black italic text-white uppercase">
            EXPLORE OTHER BLOCKS
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(productData).map(
            ([s, data]) =>
              s !== slug && (
                <Button
                  key={s}
                  onClick={() => router.push(`/features/${s}`)}
                  variant="outline"
                  className="rounded-full border-white/10 text-white/60 hover:text-lime hover:border-lime/40 h-12 px-6 font-black italic uppercase text-xs"
                >
                  {data.title.split(" & ")[0]}
                </Button>
              ),
          )}
        </div>
      </section>
    </div>
  );
}
