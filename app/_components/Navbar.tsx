"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
      <header className="fixed top-0 left-0 w-full z-10 px-4 md:px-4">
        <nav
          className={`max-w-9xl mx-auto flex items-center justify-between px-6 md:px-10 py-4 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-black/20 backdrop-blur-xl shadow-xl"
              : "bg-white shadow-md"
          }`}
        >
          {/* Logo */}
          <Link href="/">
            <Image
              src="/APG_LOGO-01.png"
              width={140}
              height={50}
              alt="APG Logo"
              priority
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-[16px] font-semibold text-gray-700">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition-all cursor-pointer"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="hover:text-blue-600 transition-all cursor-pointer"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-blue-600 transition-all cursor-pointer"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-blue-600 transition-all cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop Button */}
          <Link
            href="/contact"
            className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all cursor-pointer"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
          >
            <Menu size={30} />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
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
            className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
          >
            <X size={26} />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul className="flex flex-col gap-2 px-4 py-6">
          <li>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-5 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 hover:text-blue-600 transition cursor-pointer"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="block px-5 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 hover:text-blue-600 transition cursor-pointer"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-5 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 hover:text-blue-600 transition cursor-pointer"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-5 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 hover:text-blue-600 transition cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="absolute bottom-8 left-0 w-full px-6 z-50">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-2xl font-semibold shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}