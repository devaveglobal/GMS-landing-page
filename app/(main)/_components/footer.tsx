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
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-lime rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                FITTEX-
              </span>
            </Link>
            <p className="text-white/50 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <div className="flex items-center gap-4">
              {[
                Websites.Facebook,
                Websites.Twitter,
                Websites.Instagram,
                Websites.Youtube,
              ].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-lime hover:border-lime transition-all cursor-pointer"
                >
                  {Icon === Websites.Facebook && (
                    <Facebook className="w-5 h-5" />
                  )}
                  {Icon === Websites.Twitter && <Twitter className="w-5 h-5" />}
                  {Icon === Websites.Instagram && (
                    <Instagram className="w-5 h-5" />
                  )}
                  {Icon === Websites.Youtube && <Youtube className="w-5 h-5" />}
                </div>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-black uppercase text-white italic">
              Useful Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                "About Our Gym",
                "Classes Schedule",
                "Appointment",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-white/50 hover:text-lime transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-black uppercase text-white italic">
              Contact Info
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-lime transition-colors">
                  <MapPin className="w-5 h-5 text-white group-hover:text-black" />
                </div>
                <span className="text-white/50">123 Street, New York, USA</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-lime transition-colors">
                  <Phone className="w-5 h-5 text-white group-hover:text-black" />
                </div>
                <span className="text-white/50">+123 456 7890</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-lime transition-colors">
                  <Mail className="w-5 h-5 text-white group-hover:text-black" />
                </div>
                <span className="text-white/50">contact@fittex.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-black uppercase text-white italic">
              Newsletter
            </h4>
            <p className="text-white/50">
              Subscribe for the latest gym news and updates!
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-full px-6 text-white outline-none focus:border-lime transition-colors"
              />
              <button className="absolute right-2 top-2 h-10 w-10 bg-lime rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <ArrowUpRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-lime">FITTEX</span>. All rights reserved.
          </p>
          <p className="text-white/30 text-sm flex items-center gap-2">
            Design by{" "}
            <Link
              href="https://devaveglobal.com"
              target="_blank"
              className="text-white font-bold italic hover:text-lime transition-colors"
            >
              devave Global
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

const Websites = {
  Facebook: "Facebook",
  Twitter: "Twitter",
  Instagram: "Instagram",
  Youtube: "Youtube",
};

import { ArrowUpRight } from "lucide-react";

export default Footer;
