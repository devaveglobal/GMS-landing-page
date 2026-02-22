"use client";

import { motion } from "framer-motion";
import { Check, X, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Growth",
    price: "99",
    description:
      "Perfect for single location studios starting their digital journey.",
    features: [
      "Up to 200 Members",
      "Automated Billing",
      "Class Scheduling",
      "Lead Management",
      "Standard Support",
      "Basic Analytics",
    ],
    notIncluded: ["White-label App", "RFID Integration", "Custom API Access"],
    popular: false,
  },
  {
    name: "Business",
    price: "199",
    description:
      "Comprehensive solution for established gyms looking to scale.",
    features: [
      "Unlimited Members",
      "Advanced Marketing Tools",
      "Trainer Commission Portal",
      "Inventory Management",
      "Priority 24/7 Support",
      "RFID & QR Access Control",
      "Branded Mobile Portal",
    ],
    notIncluded: ["Custom API Access"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for gym chains and fitness franchises.",
    features: [
      "Multi-location Support",
      "Custom API & Webhooks",
      "White-labeled Mobile App",
      "Dedicated Account Manager",
      "SLA Guarantees",
      "Custom Feature Development",
    ],
    notIncluded: [],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background relative" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <span className="text-lime font-black tracking-widest text-sm bg-lime/10 px-3 py-1 rounded-full border border-lime/20">
            INVESTMENT
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-tight">
            Simple Plans For <br />
            <span className="text-lime">Every Stage</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl font-medium mt-2 italic">
            No hidden fees. Scale as your gym grows. All plans include daily
            backups and secure cloud hosting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[40px] border flex flex-col relative overflow-hidden ${
                plan.popular
                  ? "bg-white/5 border-lime shadow-[0_0_50px_rgba(215,253,81,0.1)]"
                  : "bg-white/2 border-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-8 right-8 bg-lime text-black font-black text-[10px] px-3 py-1 rounded-full uppercase italic flex items-center gap-1">
                  <Bookmark className="w-3 h-3 fill-black" />
                  Most Popular
                </div>
              )}

              <div className="flex flex-col gap-2 mb-8">
                <h3 className="text-xl font-black text-white italic uppercase tracking-widest">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white italic tracking-tighter">
                    {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-white/40 font-bold uppercase tracking-widest text-xs">
                      / Month
                    </span>
                  )}
                </div>
                <p className="text-white/40 font-medium italic mt-2">
                  {plan.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 mb-10 grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-lime/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-lime" />
                    </div>
                    <span className="text-white/70 text-sm font-bold tracking-tight">
                      {feature}
                    </span>
                  </div>
                ))}
                {plan.notIncluded.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 opacity-30"
                  >
                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center font-bold">
                      <X className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/70 text-sm font-bold tracking-tight line-through">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full h-14 rounded-2xl font-black text-lg uppercase italic transition-all ${
                  plan.popular
                    ? "bg-lime text-black hover:bg-lime/90 scale-105"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {plan.price === "Custom"
                  ? "Contact Sales"
                  : "Start 14-Day Free Trial"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
