"use client";

import {
  ClipboardCheck,
  Factory,
  TreePine,
  FileText,
  Leaf,
  Thermometer,
  RefreshCw,
  BarChart3,
  Search,
} from "lucide-react";
import { motion, easeInOut } from "framer-motion";
import { useRef } from "react";

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: (
        <ClipboardCheck className="md:w-12 md:h-12 w-8 h-8 text-green-600" />
      ),
      title: "Environmental Audit and Regulatory Compliance",
      description:
        "Comprehensive audits ensuring adherence to environmental regulations and standards.",
    },
    {
      icon: <Factory className="md:w-12 md:h-12 w-8 h-8 text-green-600" />,
      title: "Corporate GHG Inventory and Net-Zero Roadmap",
      description:
        "Strategic greenhouse gas assessment and pathway to carbon neutrality.",
    },
    {
      icon: <TreePine className="md:w-12 md:h-12 w-8 h-8 text-green-600" />,
      title: "Carbon Sequestration Assessment",
      description:
        "Evaluation of industrial green belts for carbon capture potential.",
    },
    {
      icon: <FileText className="md:w-12 md:h-12 w-8 h-8 text-green-600" />,
      title: "Environmental Impact Assessment (EIA)",
      description:
        "Detailed EIA and Environmental & Social Management Plan development.",
    },
    {
      icon: <Leaf className="md:w-12 md:h-12 w-8 h-8 text-green-600" />,
      title: "Biodiversity Assessment and Action Plan",
      description:
        "Comprehensive biodiversity studies and Biodiversity Action Plan (BAP) preparation.",
    },
    {
      icon: <Thermometer className="md:w-12 md:h-12 w-8 h-8 text-green-600" />,
      title: "Climate Risk and Vulnerability Assessment",
      description:
        "TCFD-aligned climate risk evaluation and resilience planning.",
    },
    {
      icon: <RefreshCw className="md:w-12 md:h-12 w-8 h-8 text-green-600" />,
      title: "Life Cycle Assessment (LCA)",
      description:
        "Comprehensive product and process environmental impact analysis from cradle to grave.",
    },
    {
      icon: <BarChart3 className="md:w-12 md:h-12 w-8 h-8 text-green-600" />,
      title: "ESG and BRSR Baseline Assessment",
      description:
        "Strategic ESG framework development and Business Responsibility reporting alignment.",
    },
    {
      icon: <Search className="md:w-12 md:h-12 w-8 h-8 text-green-600" />,
      title: "Environmental Compliance Due Diligence",
      description:
        "Thorough environmental compliance review for mergers, acquisitions, and investments.",
    },
  ];

  // Group services into pairs for mobile carousel
  const servicePairs = [];
  for (let i = 0; i < services.length; i += 2) {
    servicePairs.push(services.slice(i, i + 2));
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeInOut },
    },
  };

  return (
    <section
      id="services"
      className="md:py-16 py-10 md:scroll-mt-20 scroll-mt-78 bg-gray-50"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            OUR SERVICES
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="md:text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive environmental, climate, and ESG consulting
            services tailored to meet the unique needs of industries,
            corporates, and infrastructure projects.
          </p>
        </motion.div>

        {/* Mobile Carousel - 2 cards vertical per slide */}
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
            {servicePairs.map((pair, pairIndex) => (
              <div
                key={pairIndex}
                className="shrink-0 w-[85%] snap-start flex flex-col gap-4"
              >
                {pair.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-6 shadow-md"
                  >
                    <div className="mb-3">{service.icon}</div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={card}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
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
