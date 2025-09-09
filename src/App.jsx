import { SidebarDemo } from "@/components/ui/SidebarDemo";
import { HeroSection } from "@/components/ui/Herosection";
import {About} from "@/components/ui/About";
import CreationSection from "./components/ui/Creationsection";
import ProcessSection from "./components/ui/ProcessSection";
import { TableDemo } from "./components/ui/TableDemo";
import SlidingCarousel from "./components/ui/SlidingCarousek";
import ResultSection from "./components/ui/ResultSection";


export default function App() {

  const slides = [
    "Save over 20+ developer hours every week by letting CodeGuardianAI handle repetitive code reviews.",
    "Box 2: Latest Updates",
    "Box 3: Join Us Today",
    "Box 4: Contact Info",
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-64 fixed top-0 left-0 h-screen">
        <SidebarDemo />
      </div>
      <div className="flex-1 ml-15 overflow-auto p-6">
        <HeroSection />
        <About />
        <CreationSection />
        <ProcessSection />
        <div className="width-1/2 py-5">
          <h1 className="text-[3.5rem] font-bold w-[80%] leading-[1.1]">INSIGHTS</h1>
         <p className="text-sm mt-5 w-[90%]">We transforms raw pull request data into actionable insights. Instead of digging through hundreds of lines of code, developers see a summarized snapshot: how big the change is, how complex the update might be, and whether it introduces potential risks. This data-driven approach ensures faster reviews, fewer bugs, and more confident deployments.</p>
        </div>
        <TableDemo />

    <div>
      <h1 style={{ textAlign: "center" }}>Sliding Box Carousel</h1>
      <SlidingCarousel slides={slides} />
    </div>

    <ResultSection />
      </div>

    </div>
  );
}
