import React from "react";

import { SidebarDemo } from "@/components/ui/SidebarDemo";
import { HeroSection } from "@/components/ui/Herosection";
import { About } from "@/components/ui/About";
import CreationSection from "@/components/ui/Creationsection";
import ProcessSection from "@/components/ui/ProcessSection";
import { TableDemo } from "@/components/ui/TableDemo";
import SlidingCarousel from "@/components/ui/SlidingCarousek";
import ResultSection from "@/components/ui/ResultSection";
import ShimmerButton from "@/components/ui/ShimmerButton";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/ui/Footer";
import KeyMetrics from "@/components/ui/KeyMetrics";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  const slides = [
    "Save over 20+ developer hours every week by letting CodeGuardianAI handle repetitive code reviews.",
    "Catch nearly 90% of common bugs before they ever reach production and impact your users.",
    "Generate complete unit tests in seconds — boosting project-wide test coverage by up to 25% instantly.",
    "Risk scoring automatically highlights the top 10% of pull requests that require urgent human review.",
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="fixed top-0 left-0 h-screen z-50">
        <SidebarDemo />
      </div>
      <div className="flex-1 ml-15 overflow-auto p-6">
        <HeroSection />
        <ShimmerButton
          icon={ArrowRight}
          iconPosition="right"
          variant="primary"
          className="mt-2"
          onClick={() => navigate("/Selection_form")}
        >
          Connect Your Repository
        </ShimmerButton>

        <ShimmerButton icon={ArrowRight} iconPosition="right" variant="outline" className="ml-2">
          Learn How It Works
        </ShimmerButton>
        <div className="p-5 w-full flex flex-col items-center justify-center bg-gray-50">
          <KeyMetrics />
        </div>

        <About />
        <CreationSection />
        <div>
          <SlidingCarousel slides={slides} />
        </div>
        <ProcessSection />
        <div className="width-1/2 py-5">
          <h1 className="text-[3.5rem] font-bold w-[80%] leading-[1.1]">
            INSIGHTS
          </h1>
          <p className="text-sm mt-5 w-[90%]">
            We transforms raw pull request data into actionable insights. Instead of digging through hundreds of lines of code, developers see a summarized snapshot: how big the change is, how complex the update might be, and whether it introduces potential risks. This data-driven approach ensures faster reviews, fewer bugs, and more confident deployments.
          </p>
        </div>
        <TableDemo />

        <ResultSection />
        <Footer />
      </div>
    </div>
  );
}