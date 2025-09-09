import React from "react";
import ShimmerButton from "./ShimmerButton";


export const HeroSection = () => {
    
  return (
    <div className="font-inter pr-10">
    <section className="bg-[#ff530c] text-white p-3 rounded-lg mb-10 flex items-center">
      <h1 className="text-sm font-regular">Did you know? Merging code without tests increases production bugs by 30%. Let CodeGuardianAI help you.</h1>
    </section>
    <h1 className="text-[4.5rem] font-bold w-[80%] leading-[1.1]">AUTONOMOUS CODE REVIEW ASSISTANT FOR DEVELOPERS</h1>
    <p className="text-lg py-6 text-gray-600 dark:text-gray-300 leading-relaxed mt-2 w-[60%]">
    Catch potential bugs
    before they hit production, enforce consistent coding standards, and get
    intelligent suggestions for improvements.
    </p>

    </div>
  );
};
