"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Hard-coded navigation values
const NAV_LINKS = [
  { id: 80, text: "About Us", href: "/about" },
  { id: 81, text: "Our Approach", href: "/approach" },
  { id: 82, text: "How it Works", href: "/works" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add scroll listener for sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logo = { url: "https://stunning-event-ffaced628f.media.strapiapp.com/Group_1_1_0b55bfed41.svg" };
  const cta = { text: "Contact", href: "/contact" };
  const imageUrl = logo.url;

  return (
    <header
      className={`sticky bg-white top-0 w-full z-50 transition-all duration-300 border-b ${scrolled
        ? "bg-white/40 backdrop-blur-lg border-white/20 shadow-sm py-3"
        : "bg-transparent border-transparent py-5 lg:py-6"
        } px-6 lg:px-12`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href={"/"} className="relative z-10 transition-transform duration-300 hover:scale-105">
          <Image
            src={imageUrl}
            alt={"logo"}
            width={200}
            height={200}
            className="w-32 lg:w-40 object-contain drop-shadow-sm"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-[#1E1E1E] text-base font-medium tracking-wide transition-colors duration-300 hover:text-[#967BB6]`}
              >
                {link.text}
                {/* Active & Hover Underline indicator */}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#967BB6] to-[#3B719F] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        {cta && (
          <div className="hidden lg:block z-10">
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center bg-[#1E1E1E] text-white px-8 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-[#C2B280] hover:text-[#1E1E1E] hover:shadow-[0_0_20px_rgba(194,178,128,0.4)] hover:-translate-y-0.5"
            >
              {cta.text}
            </Link>
          </div>
        )}

        {/* Mobile Toggle */}
        <button
          className="block lg:hidden z-20 text-[#1E1E1E] focus:outline-none p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-full h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
          </div>
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl transition-all duration-500 ease-in-out lg:hidden overflow-hidden ${isMenuOpen ? "max-h-[400px] border-b border-[#F0F0F0]" : "max-h-0"
          }`}
      >
        <div className="flex flex-col items-center py-8 gap-6 px-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg transition-colors duration-300 ${isActive
                  ? "font-bold text-[#C2B280]"
                  : "font-medium text-[#1E1E1E] hover:text-[#967BB6]"
                  }`}
              >
                {link.text}
              </Link>
            );
          })}

          {cta && (
            <div className="w-full max-w-sm mt-4">
              <Link
                href={cta.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-full bg-[#1E1E1E] text-white py-4 rounded-xl text-lg font-medium shadow-md active:scale-95 transition-transform"
              >
                {cta.text}
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
