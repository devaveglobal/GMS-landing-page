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
    <section
      className="py-24 bg-background relative overflow-hidden"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white/2 border border-white/5 rounded-[40px] p-8 md:p-12 lg:p-20 relative overflow-hidden group">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime blur-[150px] opacity-10 group-hover:opacity-20 transition-opacity" />

          {/* Left: Content & Demo Button */}
          <div className="flex flex-col gap-10 relative z-10">
            <div className="flex flex-col gap-4">
              <span className="text-lime font-black tracking-widest text-sm uppercase bg-lime/10 self-start px-3 py-1 rounded-full border border-lime/20">
                Let's Get Started
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-tight">
                Ready to Digitally <br />
                <span className="text-lime">Transform Your</span> Gym?
              </h2>
            </div>

            <p className="text-white/50 text-xl font-medium max-w-md italic">
              Stop surviving and start thriving. Book a free demonstration or
              start your 14-day trial today. Our team is ready to help you
              scale.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => router.push("/onboarding")}
                className="bg-lime text-black hover:bg-lime/90 font-black rounded-full h-16 px-10 text-xl uppercase italic group-hover:scale-105 transition-all shadow-[0_0_20px_rgba(215,253,81,0.2)]"
              >
                Try Live Demo
              </Button>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-4 group/item">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover/item:bg-lime transition-colors">
                  <Phone className="w-6 h-6 text-white group-hover/item:text-black" />
                </div>
                <span className="text-white text-lg font-bold italic">
                  +123 456 7890
                </span>
              </div>
              <div className="flex items-center gap-4 group/item">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover/item:bg-lime transition-colors">
                  <Mail className="w-6 h-6 text-white group-hover/item:text-black" />
                </div>
                <span className="text-white text-lg font-bold italic">
                  contact@fittex.com
                </span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[32px] shadow-2xl">
            <h3 className="text-2xl font-black text-white italic uppercase mb-8 tracking-tighter">
              Send us a <span className="text-lime">Message</span>
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <input
                  {...register("name")}
                  placeholder="Your Name"
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white outline-none focus:border-lime transition-all"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs font-bold uppercase ml-2">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <input
                  {...register("email")}
                  placeholder="Email Address"
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white outline-none focus:border-lime transition-all"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs font-bold uppercase ml-2">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <input
                  {...register("phone")}
                  placeholder="Phone Number"
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white outline-none focus:border-lime transition-all"
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs font-bold uppercase ml-2">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <textarea
                  {...register("message")}
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-lime transition-all resize-none"
                />
                {errors.message && (
                  <span className="text-red-500 text-xs font-bold uppercase ml-2">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <Button
                disabled={isSubmitting}
                type="submit"
                className="w-full h-16 bg-lime text-black hover:bg-lime/90 font-black rounded-2xl text-xl uppercase italic mt-2"
              >
                {isSubmitting ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus === "success" && (
                <p className="text-lime font-bold text-center uppercase tracking-widest text-sm animate-bounce mt-2">
                  Message Sent Successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 font-bold text-center uppercase tracking-widest text-sm mt-2">
                  Failed to send message. Try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
