import React from "react";

export default function ResultsSection() {
  return (
    <div className="flex items-center justify-center py-16">
    <section className="bg-black w-full text-white py-20 px-6 border rounded-2xl flex items-center justify-center">
      <div className="w-[90%] mx-auto text-center flex flex-col items-center justify-center">
{/* 
        <span className="bg-neutral-800 text-xs font-bold px-6 py-3 rounded-full uppercase tracking-wide">
          Results
        </span>
 */}

        <h2 className="text-5xl w-[80%] font-bold mt-6 uppercase leading-tight">
          Our Results Speak for Themselves
        </h2>


        <p className="text-neutral-400 mt-4 max-w-2xl mx-auto w-[50%]">
          Teams using <span className="text-orange-500">Rivo</span> ship faster,
          with fewer bugs, and save hours of manual code review every week.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 ">
          <div className="bg-neutral-900 rounded-2xl p-6 shadow-lg border border-b border-neutral-800">
            <h3 className="text-3xl font-bold text-white">35% ↑</h3>
            <p className="text-sm mt-2 text-[#ff530c]">
              Faster pull request approvals
            </p>
          </div>

                    <div className="bg-neutral-900 rounded-2xl px-4 py-6 shadow-lg border border-b border-neutral-800">
            <h3 className="text-3xl font-bold text-white">90% ↓</h3>
            <p className="text-sm mt-2 text-[#ff530c]">
              Bugs caught before production
            </p>
          </div>

                    <div className="bg-neutral-900 rounded-2xl p-6 shadow-lg border border-b border-neutral-800">
            <h3 className="text-3xl font-bold text-white">25% ↑</h3>
            <p className="text-sm mt-2 text-[#ff530c]">
              Boost in unit test coverage
            </p>
          </div>

                    <div className="bg-neutral-900 rounded-2xl p-6 shadow-lg border border-b border-neutral-800">
            <h3 className="text-3xl font-bold text-white">40% ↓</h3>
            <p className="text-sm mt-2 text-[#ff530c]">
              Reduction in regression issues
            </p>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
}
