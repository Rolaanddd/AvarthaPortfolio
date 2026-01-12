"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `Name: ${formData.name}
Email: ${formData.email}
Phone Number: ${formData.phone}
Company Name: ${formData.company}
Service Interested In: ${formData.service}
Message: ${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp API URL with phone number
    const whatsappURL = `https://wa.me/918553726968?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="md:py-16 py-10 md:scroll-mt-20 scroll-mt-78 bg-gray-50"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center md:mb-12 mb-9">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            GET IN TOUCH
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="md:text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your sustainability journey? Contact us today to
            discuss how we can help your organization achieve its environmental
            and ESG goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-9">
          {/* Contact Information */}
          <div>
            <h3 className="md:text-2xl text-xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#e3ffe6] border border-green-200 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Our Office
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    123 Business Park, Tech District
                  </p>
                  <p className=" text-sm md:text-base text-gray-600">
                    Bangalore, Karnataka 560001
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#e3ffe6] border border-green-200 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <a
                    href="mailto:info@ecoconsult.com"
                    className="text-green-600 text-sm md:text-base hover:text-green-700"
                  >
                    info@ecoconsult.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#e3ffe6] border border-green-200 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                  <a
                    href="tel:+918553726968"
                    className="text-green-600 text-sm md:text-base hover:text-green-700"
                  >
                    +91 85537 26968
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#e3ffe6] border border-green-200 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Working Hours
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100/50 border border-gray-200 rounded-sm px-5 py-4">
            <h3 className="md:text-2xl text-xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white placeholder:text-gray-500 text-gray-700 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white placeholder:text-gray-500 text-gray-700 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    placeholder="Your Email Address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white text-gray-700 placeholder:text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full bg-white text-gray-700 px-4 placeholder:text-gray-500 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-white px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                >
                  <option className="text-gray-800" value="">
                    Select a service
                  </option>
                  <option className="text-gray-800" value="Environmental-Audit">
                    Environmental Audit
                  </option>
                  <option className="text-gray-800" value="GHG-Inventory">
                    GHG Inventory
                  </option>
                  <option
                    className="text-gray-800"
                    value="Carbon-Sequestration"
                  >
                    Carbon Sequestration
                  </option>
                  <option
                    className="text-gray-800"
                    value="Environmental-Impact-Assessment"
                  >
                    Environmental Impact Assessment
                  </option>
                  <option
                    className="text-gray-800"
                    value="Biodiversity-Assessment"
                  >
                    Biodiversity Assessment
                  </option>
                  <option
                    className="text-gray-800"
                    value="Climate-Risk-Assessment"
                  >
                    Climate Risk Assessment
                  </option>
                  <option
                    className="text-gray-800"
                    value="Life-Cycle-Assessment"
                  >
                    Life Cycle Assessment
                  </option>
                  <option className="text-gray-800" value="ESG and BRSR">
                    ESG and BRSR
                  </option>
                  <option className="text-gray-800" value="Due-Diligence">
                    Due Diligence
                  </option>
                  <option className="text-gray-800" value="Other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white text-gray-700 placeholder:text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your project or requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
