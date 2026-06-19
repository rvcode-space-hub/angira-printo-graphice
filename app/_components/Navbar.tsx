"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4">
        <nav
          className={`max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl shadow-xl"
              : "bg-white shadow-md"
          }`}
        >
          {/* Logo */}
          <Image
            src="/APG_LOGO-01.png"
            width={140}
            height={50}
            alt="APG Logo"
            priority
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-[16px] font-semibold text-gray-700">
            <li className="cursor-pointer hover:text-blue-600 transition-all">
              Home
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition-all">
              Services
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition-all">
              About
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition-all">
              Contact
            </li>
          </ul>

          {/* Desktop Button */}
          <button className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
          >
            <Menu size={30} />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-3 right-3 h-[calc(100vh-24px)] w-[300px] bg-white z-50 rounded-l-[40px] rounded-r-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-[110%]"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
         
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <X size={26} />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul className="flex flex-col gap-2 px-4 py-6">
          <li className="px-5 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition">
            Home
          </li>

          <li className="px-5 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition">
            Services
          </li>

          <li className="px-5 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition">
            About
          </li>

          <li className="px-5 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition">
            Contact
          </li>
        </ul>

        {/* CTA */}
        <div className="absolute bottom-8 left-0 w-full px-6">
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-2xl font-semibold shadow-lg hover:scale-[1.02] transition-all">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}