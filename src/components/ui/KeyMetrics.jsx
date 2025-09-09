import React from "react";
import NumberTicker from "./NumberTicker"; // import your number ticker component

const metrics = [
  { value: 220, title: "Pull Requests Reviewed", description: "AI analyzed PRs to help teams catch issues much faster." },
  { value: 356, title: "Faster Merges", description: "Teams shipped code quicker with smart AI feedback." },
  { value: 254, title: "Repositories Connected", description: "Developers linked projects for better AI insights across repos." },
  { value: 500, title: "User Rating", description: "Early users reported smoother collaboration and far fewer errors." },
];

export default function KeyMetrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
      {metrics.map((metric, index) => (
        <div key={index} className="flex flex-col items-start">
          {/* Number ticker */}
          <NumberTicker value={metric.value} className="text-5xl font-bold text-[#ff530c]" />
          

          {/* Title */}
          <p className="mt-2 text-black text-md font-semibold mt-5">{metric.title}</p>

          {/* Description */}
          <p className="mt-1 text-gray-400 text-xs">{metric.description}</p>
        </div>
      ))}
    </div>
  );
}
