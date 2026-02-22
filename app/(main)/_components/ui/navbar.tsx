"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-lime rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-full" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            FITOS-
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "Features", href: "/features" },
            { name: "How it Works", href: "/#how-it-works" },
            { name: "Pricing", href: "/#pricing" },
            { name: "FAQ", href: "/#faq" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-bold text-white hover:text-lime transition-colors"
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            onClick={() => router.push("/demo")}
            className="bg-lime text-black hover:bg-lime/90 font-bold rounded-full px-8"
          >
            BOOK DEMO
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
