"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const advisorDetails = {
  "Dr. Nandini N": {
    fullName: "Prof. Dr. Nandini N",
    credentials: "M.Sc., Ph.D.",
    bio: "A distinguished Retired Professor and Principal Investigator from the Department of Environmental Science, Bangalore University, Bengaluru, with an exemplary 36-year career in teaching, research, and environmental consultancy.",
    highlights: [
      "Board Member, Karnataka State Council of Higher Education",
      "Member, Biodiversity Management Committee, Govt. of Karnataka",
      "President of India Nominee at Central University of Karnataka & Central Tribal University of AP",
      "Guided 20 Ph.D. scholars & 6 M.Phil. students",
      "Published ~100 research papers and 13 books",
      "Supervised 16 major research projects (TOYOTA, BMRCL, COCA-COLA, UGC, CPCB & more)",
    ],
    expertise: [
      "Environmental Science",
      "Environmental Impact Assessment",
      "Air & Water Quality Monitoring",
      "Waste Management",
      "Limnology",
      "Biodiversity Management",
      "Climate Change",
    ],
    awards: [
      "Best Scientist Award",
      "Dr. APJ Abdul Kalam Award for Teaching & Scientific Research Excellence",
      "Woman Researcher Award",
      "Top-3 shortlisted candidate for Vice-Chancellor, Bengaluru City University (2021)",
    ],
  },
  "Dr. Raghavendra M": {
    fullName: "Dr. M. Raghavendra",
    credentials: "M.Sc., Ph.D.",
    bio: "A highly accomplished Environmental Monitoring Specialist with over 15 years of specialized expertise in comprehensive environmental assessment encompassing air, water, soil, and noise monitoring, coupled with extensive biodiversity assessment and ecological studies.",
    highlights: [
      "Teaching faculty at Bangalore University",
      "Led Assessment Derived Conservation Strategies for Major Lakes of Karnataka (EMPRI GOK)",
      "Implemented National Ambient Air Quality Monitoring (NAMP) for CPCB GOI",
      "Environmental Monitoring for Bangalore Metro Phase-II (BMRCL)",
      "Ecological monitoring of Yettinahole River Basin in collaboration with IISc",
      "Carbon Sequestration & Biodiversity Assessment for Toyota Kirloskar Motor",
    ],
    expertise: [
      "Air Quality Monitoring",
      "Water & Soil Assessment",
      "Noise Monitoring",
      "Biodiversity Assessment",
      "Ecological Studies",
      "Environmental Compliance",
      "Sustainable Development",
    ],
    awards: [
      "15+ years of specialized environmental expertise",
      "Multi-sector project leadership across CPCB, BMRCL, DABUR, CREDAI",
      "Collaboration with IISc on aquatic biodiversity research",
    ],
  },
};

type AdvisorKey = keyof typeof advisorDetails;

export default function TeamSection() {
  const [selectedAdvisor, setSelectedAdvisor] = useState<{
    name: string;
    image: string;
    role: string;
  } | null>(null);

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

  const details =
    selectedAdvisor && advisorDetails[selectedAdvisor.name as AdvisorKey];

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
                onClick={() => setSelectedAdvisor(advisor)}
                className="group relative text-center border-gray-50/30 py-6 rounded-sm md:py-8 px-4 flex flex-col justify-center items-center border-[0.5px] cursor-pointer transition-all duration-300 hover:border-green-500/60 hover:bg-white/5"
              >
                {/* Hover hint */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-[10px] text-green-400 tracking-widest uppercase">
                    View Profile
                  </span>
                </div>

                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border-2 border-green-500/30 transition-all duration-300 group-hover:border-green-500/80 group-hover:scale-105">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 96px, 128px"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="font-medium text-white mb-1 group-hover:text-green-400 transition-colors duration-200">
                  {advisor.name}
                </h3>
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
              className="text-center border-gray-50/30 py-3 rounded-sm md:py-5 px-1 flex flex-col justify-center items-center border-[0.5px]"
            >
              <h3 className="font-medium text-white mb-1">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedAdvisor && details && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedAdvisor(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            {/* Modal Panel */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
            >
              <div className="pointer-events-auto bg-gray-900 border border-gray-700 rounded-sm w-full max-w-2xl max-h-[90vh] overflow-y-auto relative [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {/* Close button */}
                <button
                  onClick={() => setSelectedAdvisor(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                >
                  <X size={20} />
                </button>

                {/* Modal Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 md:p-8 border-b border-gray-700/60">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full overflow-hidden border-2 border-green-500/50">
                    <Image
                      src={selectedAdvisor.image}
                      alt={selectedAdvisor.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-green-500 text-xs tracking-widest uppercase mb-1">
                      {selectedAdvisor.role}
                    </p>
                    <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">
                      {details.fullName}
                    </h3>
                    <p className="text-gray-400 text-sm mt-0.5">
                      {details.credentials}
                    </p>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Bio */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {details.bio}
                  </p>

                  {/* Key Contributions */}
                  <div>
                    <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-green-500 inline-block"></span>
                      Key Contributions
                    </h4>
                    <ul className="space-y-1.5">
                      {details.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-400 text-sm"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500/60 shrink-0"></span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expertise Tags */}
                  <div>
                    <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-green-500 inline-block"></span>
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {details.expertise.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs text-green-400 border border-green-500/30 bg-green-500/5 px-3 py-1 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recognition */}
                  <div>
                    <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-green-500 inline-block"></span>
                      Recognition
                    </h4>
                    <ul className="space-y-1.5">
                      {details.awards.map((a, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-400 text-sm"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500/60 shrink-0"></span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
