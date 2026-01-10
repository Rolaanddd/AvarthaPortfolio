"use client";

import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900  text-gray-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-green-500">AVARTHA </span>
              <span className="text-white">SOLUTIONS</span>
            </h2>
            <p className="md:text-base text-sm text-gray-400 mb-6 leading-relaxed">
              Leading environmental, climate, and ESG consulting services for
              industries, corporates, and infrastructure projects.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <div className="text-sm md:text-base">
                  <p>123 Business Park, Tech District</p>
                  <p>Bangalore, Karnataka 560001</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500 shrink-0" />
                <a
                  href="mailto:info@ecoconsult.com"
                  className="hover:text-green-500 text-sm md:text-base transition-colors"
                >
                  info@ecoconsult.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500 shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-green-500 text-sm md:text-base transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Services and Quick Links - Side by side on mobile */}
          <div className="grid grid-cols-2 md:gap-8 gap-6 lg:col-span-2 lg:grid-cols-2">
            {/* Our Services */}
            <div>
              <h3 className="text-white md:text-lg text-base font-semibold mb-4">
                OUR SERVICES
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-green-500 mr-2">-</span>
                  <span className="text-sm md:text-base">
                    Environmental Audit
                  </span>
                </li>
                <li>
                  <span className="text-green-500 mr-2">-</span>
                  <span className="text-sm md:text-base">GHG Inventory</span>
                </li>
                <li>
                  <span className="text-green-500 mr-2">-</span>
                  <span className="text-sm md:text-base">
                    CarbonSequestration
                  </span>
                </li>
                <li>
                  <span className="text-green-500 mr-2">-</span>
                  <span className="text-sm md:text-base">
                    Impact Assessment
                  </span>
                </li>
                <li>
                  <span className="text-green-500 mr-2">-</span>
                  <span className="text-sm md:text-base">
                    Biodiversity Studies
                  </span>
                </li>
                <li>
                  <span className="text-green-500 mr-2">-</span>
                  <span className="text-sm md:text-base">ESG Reporting</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white md:text-lg text-base font-semibold mb-4">
                QUICK LINKS
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-green-500 md:text-base text-sm transition-colors text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("team")}
                    className="hover:text-green-500 md:text-base text-sm transition-colors text-left"
                  >
                    Our Team
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-green-500 md:text-base text-sm transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Working Hours */}
          <div className="lg:col-span-1">
            <h3 className="text-white md:text-lg text-base font-semibold mb-4">
              WORKING HOURS
            </h3>
            <div className="space-y-3">
              <div>
                <p className="md:text-base text-sm text-white font-medium">
                  Monday – Friday:
                </p>
                <p className="md:text-base text-sm text-gray-400">
                  9:00 AM – 6:00 PM
                </p>
              </div>
              <div>
                <p className="md:text-base text-sm text-white font-medium">
                  Saturday:
                </p>
                <p className="md:text-base text-sm text-gray-400">
                  10:00 AM – 2:00 PM
                </p>
              </div>
              <div>
                <p className="md:text-base text-sm text-white font-medium">
                  Sunday:
                </p>
                <p className="md:text-base text-sm text-gray-400">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 EcoConsult. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button
                onClick={() => scrollToSection("privacy")}
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                Privacy Policy
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => scrollToSection("terms")}
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
