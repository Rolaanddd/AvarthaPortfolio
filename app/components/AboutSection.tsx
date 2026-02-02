"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    { name: "Mr. Vishnu H V", role: "Project Manager" },
    { name: "Ms. Madhushree V", role: "Project Manager & CoOrdinator" },
    { name: "Mr. Srinidhi U", role: "Project Manager" },
    { name: "Mrs. Harshitha C T", role: "Project Coordinator" },
    { name: "Ms. Raksha Sai Rannorey", role: "Project Coordinator" },
    { name: "Mr. Vishwas V P", role: "Project Assistant" },
    { name: "Mr. Prajwal S", role: "Project Assistant" },
  ];

  const technicalAdvisors = [
    {
      name: "Dr. Nandini N",
      role: "Technical Advisor",
      image: "/assets/nandhini.png",
    },
    {
      name: "Dr. Raghavendra M",
      role: "Technical Advisor",
      image: "/assets/raga.png",
    },
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
    <section
      id="team"
      className="md:py-20 md:pt-13 py-13 md:scroll-mt-20 scroll-mt-78 bg-gray-900"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            OUR TEAM
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        {/* Technical Advisors */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 md:gap-y-12 gap-y-9 max-w-4xl mx-auto"
          >
            {technicalAdvisors.map((advisor, index) => (
              <motion.div
                key={index}
                variants={item}
                className="text-center border-gray-50/30 py-6 rounded-sm md:py-8 px-4 flex flex-col justify-center items-center border-[0.5px]"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border-2 border-green-500/30">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 96px, 128px"
                  />
                </div>
                <h3 className="font-medium text-white mb-1">{advisor.name}</h3>
                <p className="text-sm text-gray-400">{advisor.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 my-10 md:my-16 origin-left"
        />

        {/* Core Team */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-y-12 gap-y-9"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="text-center border-gray-50/30 py-3 rounded-sm md:py-5 px-1 flex flex-col justify-center items-center border-[0.5px] "
            >
              <h3 className="font-medium text-white mb-1">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
