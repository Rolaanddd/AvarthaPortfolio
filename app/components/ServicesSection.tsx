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

export default function ServicesSection() {
  const services = [
    {
      icon: <ClipboardCheck className="w-12 h-12 text-green-600" />,
      title: "Environmental Audit and Regulatory Compliance",
      description:
        "Comprehensive audits ensuring adherence to environmental regulations and standards.",
    },
    {
      icon: <Factory className="w-12 h-12 text-green-600" />,
      title: "Corporate GHG Inventory and Net-Zero Roadmap",
      description:
        "Strategic greenhouse gas assessment and pathway to carbon neutrality.",
    },
    {
      icon: <TreePine className="w-12 h-12 text-green-600" />,
      title: "Carbon Sequestration Assessment",
      description:
        "Evaluation of industrial green belts for carbon capture potential.",
    },
    {
      icon: <FileText className="w-12 h-12 text-green-600" />,
      title: "Environmental Impact Assessment (EIA)",
      description:
        "Detailed EIA and Environmental & Social Management Plan development.",
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "Biodiversity Assessment and Action Plan",
      description:
        "Comprehensive biodiversity studies and Biodiversity Action Plan (BAP) preparation.",
    },
    {
      icon: <Thermometer className="w-12 h-12 text-green-600" />,
      title: "Climate Risk and Vulnerability Assessment",
      description:
        "TCFD-aligned climate risk evaluation and resilience planning.",
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-green-600" />,
      title: "Life Cycle Assessment (LCA)",
      description:
        "Comprehensive product and process environmental impact analysis from cradle to grave.",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: "ESG and BRSR Baseline Assessment",
      description:
        "Strategic ESG framework development and Business Responsibility reporting alignment.",
    },
    {
      icon: <Search className="w-12 h-12 text-green-600" />,
      title: "Environmental Compliance Due Diligence",
      description:
        "Thorough environmental compliance review for mergers, acquisitions, and investments.",
    },
  ];

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
    <section id="services" className="py-16 scroll-mt-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
            OUR SERVICES
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive environmental, climate, and ESG consulting
            services tailored to meet the unique needs of industries,
            corporates, and infrastructure projects.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={card}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
