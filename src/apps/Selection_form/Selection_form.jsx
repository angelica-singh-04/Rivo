import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Github, GitPullRequest, Bot, AlertTriangle, CheckCircle } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import ShimmerButton from "@/components/ui/ShimmerButton";
import logo from "@/assets/logo_transparent.png";

export default function WelcomeScreen() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Github, title: "Connect Repository", desc: "Securely link your GitHub or GitLab repo with one click.", active: true },
    { icon: GitPullRequest, title: "Select Pull Request", desc: "Choose the PR or branch you want the AI to review." },
    { icon: Bot, title: "AI Review & Suggestions", desc: "Rivo highlights bugs, anti-patterns, and improvements." },
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
            <p className="text-gray-500 text-xs">
              We’re happy to have you here!
            </p>
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

      <div className="w-2/3 flex flex-col relative p-6">
        <div className="min-h-screen flex flex-col items-start justify-center ml-15 bg-neutral-50 px-4">
          <div className="w-full max-w-md">
            <div className="mb-4 flex justify-start">
              <div className="bg-gradient-to-br from-orange-400 to-red-400 p-4 rounded-xl shadow-md">
                <Github className="text-white w-8 h-8" strokeWidth={1.5} />
              </div>
            </div>

            <h1 className="text-2xl font-bold mb-2 text-gray-900 text-left uppercase">
              Connect your GitHub
            </h1>

            <p className="text-gray-600 mb-4 text-left text-sm">
              Securely connect your GitHub account to enable advanced code review and AI-powered suggestions for your projects.
            </p>

            <div className="bg-white rounded-xl border border-b border-neutral-200 w-full p-5 mb-1">
              <p className="text-xs font-semibold text-orange-500 uppercase mb-2">
                Define Your GitHub Product
              </p>

              <h2 className="font-medium text-gray-900 mb-1">Review Pull Requests with AI</h2>
              <p className="text-xs text-gray-500">
                Gain insights and speed up your workflow. Our AI will analyze your pull requests and suggest changes.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-2">
              <div className="flex items-start gap-3">
                <Checkbox id="terms-2" className="mt-1" defaultChecked />
                <div className="grid gap-0">
                  <span htmlFor="terms-2" className="text-sm font-semibold">
                    Accept terms and conditions
                  </span>
                </div>
              </div>
            </div>

            <ShimmerButton
              icon={ArrowRight}
              iconPosition="right"
              variant="primary"
              className="mt-6"
              onClick={() => navigate("/Branch_Selection")}
            >
              Connect with Github
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
}
