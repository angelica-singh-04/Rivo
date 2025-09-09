import React from "react";
import features from "../../assets/features.png";

export default function FeatureMasonry() {
  return (
    <section className="dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[3.5rem] font-bold w-[80%] leading-[1.1] py-10">
          CORE FEATURES OF RIVO.COM
        </h1>

        {/* Grid - 2 Rows Only */}
        <div className="grid grid-cols-6 grid-rows-2 gap-4 h-[70vh]">
          
          {/* Box 1 - Image Tall */}
          <div className="col-span-2 row-span-3 bg-black dark:bg-neutral-800 rounded-2xl p-4 shadow flex items-center justify-center">
            <img src={features} alt="Feature" className="w-full h-full object-cover rounded-xl" />
          </div>

          {/* Box 2 - Wide About */}
          <div className="col-span-3 row-span-1 bg-[#ff530c] text-white rounded-2xl p-6 shadow flex flex-col justify-center">
            <h3 className="text-lg font-bold mb-2">WHAT IS RIVO.COM?</h3>
            <p className="text-sm">
              An AI-powered assistant that reviews pull requests, suggests fixes,
              and generates unit tests to save developer time and improve code quality.
            </p>
          </div>

          {/* Box 3 - Small Card */}
<div className="col-span-1 row-span-1 flex justify-center items-center bg-white border border-gray-200 bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-4 flex flex-col justify-center items-center">
  <h3 className="text-4xl font-bold text-black">12%</h3>
  <p className="text-xs text-gray-500 mt-1 text-center mt-4">Risk Score increase in high-risk pull requests.
</p>
</div>


          {/* Box 4 - Small Card */}
          <div className="col-span-2 border border-gray-200 row-span-1 bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-6 bg-white flex flex-col justify-center">
            <h3 className="text-sm mb-1 font-semibold">A Dashboard That Works For You</h3>
            <p className="text-sm text-gray-500 mt-4">Get a crystal-clear view of your pull requests, AI suggestions, and code health. Approve or reject fixes instantly in a clean, distraction-free UI designed for developers.</p>
          </div>

          {/* Box 5 - Medium Wide */}
<div className="col-span-2 row-span-2 border bg-white border-gray-200 bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-6 flex flex-col justify-center">
  <h3 className="text-sm mb-4 font-semibold">CI/CD Integrations</h3>
  <ul className="text-sm text-gray-500 space-y-3 list-none">
    <li className="flex items-start">
      <span className="mr-3 mt-1 text-blue-500">•</span>
      Seamless integration with GitHub Actions, GitLab CI/CD, and Bitbucket Pipelines
    </li>
    <li className="flex items-start">
      <span className="mr-3 mt-1 text-blue-500">•</span>
      Auto-reviews triggered at every pull request or merge request
    </li>
    <li className="flex items-start">
      <span className="mr-3 mt-1 text-blue-500">•</span>
      Customizable checks and thresholds
    </li>
    <li className="flex items-start">
      <span className="mr-3 mt-1 text-blue-500">•</span>
      Instant feedback to developers, preventing risky merges before production
    </li>
  </ul>
</div>



          {/* Box 6 - Small Card */}
          <div className="bg-black text-white col-span-2 row-span-1 dark:bg-neutral-800 rounded-2xl p-4 border border-gray-200 flex flex-col justify-center">
            <h3 className="text-xs font-semibold">Track your most error-prone files, monitor review trends, and discover where bugs originate</h3>
            {/* <p className="text-xs text-gray-500">Track your most error-prone files, monitor review trends, and discover where bugs originate.</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
