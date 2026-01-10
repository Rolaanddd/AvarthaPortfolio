"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-50/80 backdrop-blur-md shadow-md"
          : "bg-gray-50 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold"
          >
            <div className="flex justify-center items-center gap-2">
              {" "}
              <Image
                src="/assets/logo.png"
                alt="EcoConsult Logo"
                width={130}
                height={130}
                className="object-contain"
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-900 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-900 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-900 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-900 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded transition-colors duration-200"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium text-left"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded transition-colors duration-200 text-left"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
