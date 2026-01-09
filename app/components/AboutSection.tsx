"use client";

import { motion } from "framer-motion";

export default function TeamSection() {
  const teamMembers = [
    { name: "Mr. Vishnu H V", role: "Environmental Consultant" },
    { name: "Ms. Madhushree V", role: "Senior Consultant" },
    { name: "Mr. Srinidhi U", role: "Climate Specialist" },
    { name: "Mrs. Harshitha C T", role: "ESG Analyst" },
    { name: "Mr. Vishwas V P", role: "Sustainability Lead" },
    { name: "Mr. Prajwal S", role: "Project Manager" },
  ];

  const technicalAdvisors = [
    { name: "Dr. Nandini N", role: "Environmental Science" },
    { name: "Dr. Raghavendra M", role: "Climate Policy" },
    { name: "Dr. Kumar M", role: "Biodiversity" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="team" className="py-20 scroll-mt-20 bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            OUR TEAM
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        {/* Core Team */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={item} className="text-center">
              <h3 className="text-lg font-medium text-white mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 my-16 origin-left"
        />

        {/* Technical Advisors */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-green-500 text-sm font-semibold mb-12 tracking-widest">
            TECHNICAL ADVISORS
          </h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          >
            {technicalAdvisors.map((advisor, index) => (
              <motion.div key={index} variants={item} className="text-center">
                <h3 className="text-lg font-medium text-white mb-1">
                  {advisor.name}
                </h3>
                <p className="text-sm text-gray-400">{advisor.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
