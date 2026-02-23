"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { name: "Billing Automation", href: "/features/membership-billing" },
        { name: "Class Scheduling", href: "/features/trainer-management" },
        { name: "Marketing Engine", href: "/features/marketing-automation" },
        { name: "Access Protocol", href: "/features/access-control" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About FITOS", href: "/#about" },
        { name: "Book Demo", href: "/demo" },
        { name: "Support Hub", href: "/#faq" },
        { name: "Security Center", href: "/#security" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Compliance", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-black border-t border-white/5 pt-32 pb-12 relative overflow-hidden">
      {/* Background Decor - Large Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none">
        <span className="text-[20vw] font-black text-white/[0.02] uppercase tracking-tighter leading-none italic">
          FITOS SYSTEM
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-lime rounded-sm flex items-center justify-center shadow-[0_0_20px_rgba(215,253,81,0.2)] group-hover:scale-110 transition-transform">
                <div className="w-5 h-5 bg-black rounded-full" />
              </div>
              <span className="text-3xl font-black tracking-tighter text-white uppercase italic">
                FITOS<span className="text-lime">-</span>
              </span>
            </Link>
            <p className="text-white/40 text-lg leading-relaxed max-w-sm italic font-medium">
              The world's most aggressive gym operating system. Automating
              thousands of facilities globally.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-lime hover:border-lime group transition-all"
                >
                  <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                </Link>
              ))}
            </div>
          </div>
          {/* Dynamic Link Columns */}
          <div className="lg:col-span-1" /> {/* Spacer */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerLinks.map((group) => (
              <div key={group.title} className="flex flex-col gap-8">
                <h4 className="text-sm font-black uppercase text-white tracking-[0.3em] opacity-40">
                  {group.title}
                </h4>
                <div className="flex flex-col gap-4">
                  {group.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-white/60 hover:text-lime transition-all font-bold italic uppercase text-sm tracking-tight hover:translate-x-1"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-[32px] bg-white/2 border border-white/5 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center">
              <MapPin size={18} className="text-lime" />
            </div>
            <span className="text-sm font-black uppercase italic text-white/60 tracking-tight">
              Karachi, Pakistan
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center">
              <Mail size={18} className="text-lime" />
            </div>
            <span className="text-sm font-black uppercase italic text-white/60 tracking-tight">
              info.devaveglobal@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center">
              <Phone size={18} className="text-lime" />
            </div>
            <span className="text-sm font-black uppercase italic text-white/60 tracking-tight">
              +1 (555) 900-FITOS
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] font-black tracking-[0.4em] uppercase">
            © {new Date().getFullYear()} CORE PROTOCOL. POWERED BY{" "}
            <span className="text-white">FITOS-</span>
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/20 text-[10px] font-black uppercase tracking-widest leading-none">
              DESIGNED BY
            </span>
            <Link
              href="https://devaveglobal.com"
              target="_blank"
              className="text-lime font-black italic hover:scale-110 transition-transform flex items-center gap-2"
            >
              DEVAVE GLOBAL <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
