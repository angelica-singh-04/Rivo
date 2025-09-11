import React, { useState, useEffect } from "react";
import { Github, GitPullRequest, Bot, AlertTriangle, CheckCircle } from "lucide-react";
import logo from "@/assets/logo_transparent.png";
import ReviewPage from "@/apps/ReviewPage/ReviewPage.jsx";

export default function WelcomeScreen() {
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOutput(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    { icon: Github, title: "Connect Repository", desc: "Securely link your GitHub or GitLab repo with one click." },
    { icon: GitPullRequest, title: "Select Pull Request", desc: "Choose the PR or branch you want the AI to review." },
    { icon: Bot, title: "AI Review & Suggestions", desc: "Rivo highlights bugs, anti-patterns, and improvements.", active: true },
    { icon: AlertTriangle, title: "Risk Scoring", desc: "Each PR is analyzed and flagged as Low, Medium, or High risk." },
    { icon: CheckCircle, title: "Merge Confidently", desc: "Approve fixes, generate tests, and merge safer, cleaner code." },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-[35%] bg-white flex flex-col text-start p-6">
        <div>
          <h1 className="text-xl font-bold mb-2 flex items-center gap-2">
            <img alt="logo" src={logo} className="w-12 h-12" />
            Rivo
          </h1>

          <div className="mb-6">
            <hr className="border-t border-gray-300" />
            <h2 className="text-md text-sm font-bold uppercase mt-5">Welcome to Rivo.</h2>
            <p className="text-gray-500 text-xs">We’re happy to have you here!</p>
          </div>

          <div className="space-y-3">
            {menuItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-2 px-4 py-2 rounded-lg cursor-pointer ${
                    item.active ? "bg-orange-50 border border-orange-300" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-white border border-gray-200 text-gray-600">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-400 font-medium">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
          <span className="mb-0">Terms & Conditions</span>
        </div>
      </div>

      <div className="w-2/3 flex items-center justify-center bg-neutral-50 p-6">
        {!showOutput ? (
          <div className="flex flex-col items-center space-y-3">
     <div className="w-8 h-8 border-4 border-t-orange-500 border-gray-200 rounded-full animate-spin"></div>
    <span className="text-sm text-gray-600">Running AI Review...</span>
          </div>
        ) : (
          <div>
            <ReviewPage />
          </div>
        )}
      </div>
    </div>
  );
}
