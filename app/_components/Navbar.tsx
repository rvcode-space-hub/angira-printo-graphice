"use client";

import {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {Menu, X} from "lucide-react";

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
      <header className="fixed top-0 left-0 w-full z-50">
        <nav
          className={`w-full transition-all duration-300 ${
            scrolled
              ? "bg-black/20 backdrop-blur-xl shadow-xl"
              : "bg-white shadow-md"
          }`}
        >
          <div className="w-full flex items-center justify-between px-6 md:px-16 py-4">
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
                <Link href="/" className="hover:text-blue-600 transition-all">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-600 transition-all"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-600 transition-all"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-600 transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all"
            >
              Get Started
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className=" top-20 md:hidden flex items-center justify-center
                h-10 w-10 rounded-lg hover:bg-gray-100 transition"
            >
              <Menu size={26} />
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[85%] max-w-[320px] bg-white z-50 shadow-2xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <Image
            src="/APG_LOGO-01.png"
            width={110}
            height={40}
            alt="APG Logo"
          />

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul className="flex flex-col p-6 gap-2">
          {[
            {label: "Home", href: "/"},
            {label: "Services", href: "/services"},
            {label: "About", href: "/about"},
            {label: "Contact", href: "/contact"},
          ].map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 rounded-xl text-lg font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="absolute  left-0 w-full px-6">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-semibold shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </aside>
    </>
  );
}
