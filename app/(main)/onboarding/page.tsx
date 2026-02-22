"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-lime/5 via-black to-black pt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] p-12 text-center flex flex-col gap-8 shadow-2xl my-10"
      >
        <div className="w-20 h-20 bg-lime rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(215,253,81,0.4)]">
          <CheckCircle2 className="w-10 h-10 text-black" />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter">
            Onboarding <span className="text-lime">Demo</span>
          </h1>
          <p className="text-white/50 text-xl font-medium italic">
            Welcome to the FITOS athlete onboarding portal. This is a
            demonstration of the live experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {[
            { step: "1", label: "Profile Setup" },
            { step: "2", label: "Fitness Goals" },
            { step: "3", label: "Workout Plan" },
            { step: "4", label: "Payment Info" },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white/5 border border-white/5 rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-default"
            >
              <span className="text-3xl font-black text-lime italic">
                {item.step}
              </span>
              <span className="text-white font-bold uppercase tracking-widest text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <Button
          onClick={() => router.back()}
          variant="outline"
          className="self-center border-white/20 text-white hover:bg-white/5 font-black rounded-full h-14 px-8 uppercase italic mt-4"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Landing
        </Button>
      </motion.div>
    </div>
  );
}
