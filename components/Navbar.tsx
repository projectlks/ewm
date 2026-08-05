"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
}

// 💡 Menu (၃) ခု အချိုးကျညီညာစွာ ပါဝင်ပါမည်
const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 w-full z-[10000] transition-all duration-300 ${
        scrolled
          ? "bg-white md:bg-white/95 backdrop-blur-xl "
          : "bg-white md:bg-transparent"
      }`}>
      <div className="container mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="shrink-0 flex items-center group">
            <Image
              src="/l.png"
              alt="EastWind Myanmar Logo"
              width={200}
              height={40}
              priority
              className="w-auto h-10 md:h-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center space-x-2 lg:space-x-6 relative mt-1">
            {navItems.map((item) => {
              const isActive = item.href === pathname;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2 py-2 text-xs font-bold tracking-widest uppercase transition-colors border-b-2 ${
                    isActive
                      ? "border-gray-900 text-gray-900"
                      : "border-transparent text-gray-400 hover:text-gray-600"
                  }`}>
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* 💡 Desktop CTA Button (Let's Talk အဖြစ် ပြင်ဆင်ထားပါသည်) */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300 shadow-sm">
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2 -mr-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-expanded={isMobileMenuOpen}>
              <span className="sr-only">Toggle menu</span>
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}>
                    <XMarkIcon className="h-7 w-7" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}>
                    <Bars3Icon className="h-7 w-7" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden absolute top-full left-0 w-full h-screen bg-black/60 z-40 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden z-50 overflow-hidden bg-white backdrop-blur-xl border-b border-gray-200 absolute top-full left-0 w-full shadow-sm">
              <div className="px-4 pt-4 pb-8 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors duration-200 border-l-2 ${
                        pathname === item.href
                          ? "border-gray-900 text-gray-900 bg-gray-50/80"
                          : "border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50/50"
                      }`}>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* 💡 Mobile CTA Button (Let's Talk အဖြစ် ပြင်ဆင်ထားပါသည်) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-6">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex w-full justify-center px-6 py-3.5 bg-gray-900 text-white text-xs tracking-widest uppercase font-bold rounded-2xl hover:bg-gray-800 transition-colors shadow-lg">
                    Let&apos;s Talk
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
