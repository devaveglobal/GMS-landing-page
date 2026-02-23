"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const CTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="contact">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Impactful Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-lime" />
                <span className="text-lime font-black tracking-[0.4em] text-xs uppercase">
                  UNLEASH THE POWER
                </span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-[0.85]">
                READY TO <br />
                <span className="text-lime">DOMINATE</span> <br />
                YOUR MARKET?
              </h2>
              <p className="text-white/40 text-xl font-medium max-w-lg italic border-l-4 border-white/5 pl-8 py-4 mt-4">
                FITOS isn't just software. It's the core engine of your gym's
                future. Join the elite network of owners scaling with absolute
                precision.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 bg-white/2 border border-white/5 p-6 rounded-3xl group hover:border-lime/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-lime/10 flex items-center justify-center">
                    <MapPin className="text-lime w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">
                      Global HQ
                    </span>
                    <span className="text-white font-bold italic tracking-tight">
                      Karachi, Pakistan
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/2 border border-white/5 p-6 rounded-3xl group hover:border-lime/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-lime/10 flex items-center justify-center">
                    <Mail className="text-lime w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">
                      Direct Channel
                    </span>
                    <span className="text-white font-bold italic tracking-tight text-xs sm:text-sm">
                      info.devaveglobal@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 bg-lime/5 border border-lime/10 rounded-[32px] w-fit">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-black overflow-hidden relative"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?u=fit${i}`}
                      alt="User"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-white/60 font-black italic uppercase text-[10px] tracking-widest">
                TRUSTED BY <span className="text-lime">500+</span> OPERATORS
              </p>
            </div>
          </motion.div>

          {/* Right Side: High-End Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-1 rounded-[48px] bg-linear-to-br from-white/10 to-transparent"
          >
            <div className="bg-zinc-950 p-8 md:p-12 rounded-[46px] shadow-2xl relative overflow-hidden group/form">
              {/* Glass Inner Glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-lime/30 to-transparent" />

              <div className="flex flex-col gap-2 mb-10">
                <span className="text-[10px] font-black text-lime uppercase tracking-[0.5em]">
                  DIRECT TRANSMISSION
                </span>
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">
                  ESTABLISH <span className="text-lime">CONTACT</span>
                </h3>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <input
                      {...register("name")}
                      placeholder="YOUR FULL NAME"
                      className="w-full h-16 bg-white/2 border border-white/10 rounded-2xl px-8 text-white font-black italic uppercase text-sm outline-none focus:border-lime/50 focus:bg-white/5 transition-all tracking-widest"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-[10px] font-black uppercase ml-2 tracking-widest">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <input
                      {...register("email")}
                      placeholder="EMAIL ADDRESS"
                      className="w-full h-16 bg-white/2 border border-white/10 rounded-2xl px-8 text-white font-black italic uppercase text-sm outline-none focus:border-lime/50 focus:bg-white/5 transition-all tracking-widest"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-[10px] font-black uppercase ml-2 tracking-widest">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    {...register("phone")}
                    placeholder="CONTACT NUMBER"
                    className="w-full h-16 bg-white/2 border border-white/10 rounded-2xl px-8 text-white font-black italic uppercase text-sm outline-none focus:border-lime/50 focus:bg-white/5 transition-all tracking-widest"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-[10px] font-black uppercase ml-2 tracking-widest">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <textarea
                    {...register("message")}
                    placeholder="HOW CAN THE SYSTEM HELP YOU?"
                    rows={4}
                    className="w-full bg-white/2 border border-white/10 rounded-3xl p-8 text-white font-black italic uppercase text-sm outline-none focus:border-lime/50 focus:bg-white/5 transition-all tracking-widest resize-none"
                  />
                  {errors.message && (
                    <span className="text-red-500 text-[10px] font-black uppercase ml-2 tracking-widest">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full h-20 bg-lime text-black hover:bg-lime/90 font-black rounded-3xl text-xl sm:text-2xl uppercase italic mt-4 shadow-[0_10px_40px_rgba(215,253,81,0.2)] hover:shadow-[0_15px_50px_rgba(215,253,81,0.3)] hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer group/btn"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-8 h-8 animate-spin" />
                  ) : (
                    <>
                      INITIATE TRANSMISSION
                      <Send className="ml-3 w-6 h-6 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="flex items-center justify-center gap-2 p-4 bg-lime/10 rounded-2xl animate-pulse">
                    <span className="text-lime font-black uppercase tracking-widest text-xs">
                      DATA TRANSMITTED SUCCESSFULLY
                    </span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="flex items-center justify-center gap-2 p-4 bg-red-500/10 rounded-2xl">
                    <span className="text-red-500 font-black uppercase tracking-widest text-xs">
                      TRANSMISSION FAILURE. RETRY.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
