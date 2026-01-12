"use client";
import Image from "next/image";

export default function EnvironmentalHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className="relative h-[65vh] md:scroll-mt-20 scroll-mt-78 md:h-[85vh]  min-h-150` w-full overflow-hidden"
      id="home"
    >
      {/* Background Image */}
      <Image
        src="/assets/hero1.jpg"
        alt="Industrial facility aerial view"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-1" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Partner in Environmental, ESG & Climate Compliance
            </h1>

            <p className="text-md md:text-xl text-gray-200 mb-8 leading-relaxed">
              Comprehensive environmental consulting services for industries,
              corporates, and infrastructure projects. We help organizations
              navigate regulatory compliance, sustainability goals, and climate
              resilience.
            </p>

            <div className="flex md:flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="md:px-8 md:py-3 px-4 py-2  bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition-colors duration-200"
              >
                Our Services
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="md:px-8 md:py-3 px-4 py-2  bg-transparent hover:bg-white/10 text-white font-semibold rounded border-2 border-white transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
