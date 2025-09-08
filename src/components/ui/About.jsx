import React from "react";
import AboutImg from "../../assets/about.png";

export const About = () => {
    
  return (

            <div className="flex justify-center gap-3 mt-20">
        <div className="border border-gray-200 w-full max-h-min rounded-lg p-4 overflow-auto p-10 bg-white">
  <div className="grid grid-cols-2 gap-4">
    <p className="text-sm">
     In the world of software, every pull request tells a story of choices made, shortcuts taken, and risks embraced.
    </p>
    <p className="text-sm">
      Developers face a relentless stream of code, deadlines, and complexity, yet the question remains: how do we ensure our work is meaningful, maintainable, and safe?
    </p>
    <p className="text-sm">
      CodeGuardianAI doesn’t just automate reviews; it illuminates the path, highlighting risks, suggesting improvements, and generating tests that guide better decisions.
    </p>
    <p className="text-sm">
      It’s not here to replace thought, but to sharpen it, to help teams act with clarity, and to build code we can trust.
    </p>
    <p className="text-sm">
      Every insight it offers is a reminder that craftsmanship matters, that foresight matters,
      and that the way we write code today shapes the software — and the world — we deliver tomorrow.
    </p>
    <p className="text-sm">
      
    </p>
  </div>
</div>

          <div class="w-[30%] h-7rem border rounded-lg overflow-hidden">
  <img src={AboutImg} alt="Example" class="w-full h-full object-cover" />
</div>

        </div>
  );
};
