"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is the system cloud-based?",
    answer:
      "Yes, FITOS is 100% cloud-based. You can access your management dashboard from any laptop, tablet, or smartphone globally.",
  },
  {
    question: "Can I migrate my existing member data?",
    answer:
      "Absolutely. Our technical team provides free white-glove migration services to move your member records from Excel, Sheets, or other software.",
  },
  {
    question: "Do you support integrated payment gateways?",
    answer:
      "Yes, we support major gateways like Stripe, Razorpay, and PayPal, allowing you to collect automated recurring payments seamlessly.",
  },
  {
    question: "Is staff training provided?",
    answer:
      "We provide comprehensive onboarding training for you and your staff, along with a dedicated account manager for your first 30 days.",
  },
  {
    question: "What hardware is required for check-in?",
    answer:
      "For QR check-ins, a simple tablet or smartphone at your front desk is enough. For RFID, we support standard card readers that plug into any PC.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-lime font-black tracking-widest text-sm bg-lime/10 px-3 py-1 rounded-full border border-lime/20">
            COMMON QUESTIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic leading-tight">
            Frequently Asked <span className="text-lime">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/5 rounded-3xl bg-white/2 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-black text-white italic uppercase tracking-tight">
                  {faq.question}
                </span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-lime" />
                  ) : (
                    <Plus className="w-4 h-4 text-white" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-white/40 font-medium leading-relaxed italic border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
