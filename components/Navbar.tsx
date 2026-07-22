"use client"
import React, { useState } from 'react';

import Image from 'next/image'; // Next.js Image ကို Import လုပ်ခြင်း
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Support', href: '#support' },
  { name: 'Career', href: '#career' },
  { name: 'Contact Us', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="  top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="shrink-0 flex items-center cursor-pointer">
            {/* Next.js Image Component ကို အသုံးပြုထားခြင်း */}
            <Image
              src="/Eastwind.svg"
              alt="EastWind Myanmar Logo"
              width={250}
              height={80}
              priority
              className="w-40 md:w-48 h-auto object-contain"
            />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item: NavItem) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
                {item.name}
              </a>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-transform transform hover:scale-105 duration-200 shadow-md">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-2"
              aria-expanded={isMobileMenuOpen}>
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}>
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3 flex flex-col">
          {navItems.map((item: NavItem) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}>
              {item.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-md transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;