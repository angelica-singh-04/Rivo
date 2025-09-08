import { SidebarDemo } from "@/components/ui/SidebarDemo";
import { HeroSection } from "@/components/ui/Herosection";
import {About} from "@/components/ui/About";
import CreationSection from "./components/ui/Creationsection";
import ProcessSection from "./components/ui/ProcessSection";
export default function App() {
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
      </div>

    </div>
  );
}
