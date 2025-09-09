"use client";

import React from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "CONNECT YOUR REPOSITORY",
      description:
        "Easily link your GitHub or GitLab account to start analyzing your pull requests automatically. The setup is secure, fast, and ensures your projects are always ready for review.",
    },
    {
      title: "AI REVIEWS YOUR CODE",
      description:
        "Our AI scans every pull request for potential issues, code quality improvements, and adherence to best practices. Save time and catch problems before they reach production.",
    },
    {
      title: "VIEW SUGGESTIONS & RISK SCORES",
      description:
        "Receive actionable recommendations alongside a risk score for each change. Quickly understand potential issues, prioritize fixes, and reduce the likelihood of bugs in your codebase.",
    },
    {
      title: "MERGE WITH CONFIDENCE",
      description:
        "Make well-informed decisions and merge your pull requests knowing your code is optimized, secure, and ready for production. Confidence in your workflow, every time.",
    },
  ];

  return (
    <section className="px-6 py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="flex items-start w-[30%]">
          <h2 className="text-[3.5rem] font-bold leading-[1.1]">HOW RIVO WORKS?</h2>
        </div>

        <div className="md:w-2/3 flex flex-col gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 transition-all flex items-center justify-center duration-300 ease-in-out hover:scale-105 hover:w-full cursor-pointer flex gap-4"
            >
              {/* Number Circle */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-600 hover:bg-black text-white flex items-center justify-center text-lg font-bold">
                  {idx + 1}
                </div>
              </div>

              {/* Text Section */}
              <div>
                <h3 className="text-md font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
