"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/demo" },
    { name: "How it Works", href: "/#how-it-works" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQ", href: "/#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
        isMobileMenuOpen
          ? "bg-black py-3"
          : scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl"
            : "bg-transparent py-5",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-50">
          <div className="w-8 h-8 bg-lime rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-full" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            FITOS-
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-bold text-white/70 hover:text-lime transition-colors tracking-widest"
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 relative z-50">
          <Button
            onClick={() => router.push("/demo")}
            className="hidden sm:flex bg-lime text-black hover:bg-lime/90 font-bold rounded-full px-8"
          >
            BOOK DEMO
          </Button>

          {/* Toggle Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-black text-white hover:text-lime transition-colors tracking-tighter"
                >
                  {item.name.toUpperCase()}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4"
            >
              <Button
                onClick={() => {
                  router.push("/demo");
                  setIsMobileMenuOpen(false);
                }}
                className="bg-lime text-black hover:bg-lime/90 font-bold rounded-full px-12 py-6 text-xl"
              >
                BOOK DEMO
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
