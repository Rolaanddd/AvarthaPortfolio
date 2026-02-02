"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function OurClients() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    {
      name: "BMRCL",
      logo: "/assets/bmrcl.png",
    },
    {
      name: "Dabur",
      logo: "/assets/dabur.svg",
    },
    {
      name: "Toyota Kirloskar Motors Pvt Ltd",
      logo: "/assets/Toyota.svg",
    },
    {
      name: "Bridge Groups",
      logo: "/assets/bridge.jpg",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="clients" className="py-12 pb-3 md:py-12 md:pb-2 bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            OUR CLIENTS
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        {/* Mobile Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:hidden"
        >
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="shrink-0 w-[75%] snap-start"
              >
                <div className="flex items-center justify-center p-6 rounded-lg h-32 bg-gray-800/30">
                  <div className="relative w-full h-16">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain filter brightness-0 invert opacity-70"
                      sizes="75vw"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="flex items-center justify-center p-6 md:p-8 rounded-lg hover:border-green-500/50 transition-colors duration-300"
            >
              <div className="relative w-full h-16 md:h-20">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                  sizes="25vw"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Border with gaps at edges */}
        <div className="border-b border-white/30 mt-12 md:mt-12 mx-4 md:mx-0"></div>
      </div>

      {/* Hide scrollbar globally for this carousel */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
