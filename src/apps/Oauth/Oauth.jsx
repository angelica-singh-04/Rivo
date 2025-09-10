import React from "react";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import ShimmerButton from "@/components/ui/ShimmerButton";


export default function DefineGitHubProduct() {
      const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-md">
        {/* Icon */}
        <div className="mb-4 flex justify-start"> {/* Changed to justify-start */}
          <div className="bg-gradient-to-br from-orange-400 to-red-400 p-4 rounded-xl shadow-md">
            <FaGithub className="text-white text-3xl" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-2 text-gray-900 text-left uppercase">
          Connect your Github
        </h1>

        {/* Small Description */}
        <p className="text-gray-600 mb-4 text-left text-sm">
Securely connect your GitHub account to enable advanced code review and AI-powered suggestions for your projects.        </p>

        {/* Card */}
        <div className="bg-white rounded-xl border border-b border-neutral-200 shadow-lg w-full p-5 mb-4">
          {/* Card Header */}
          <p className="text-xs font-semibold text-orange-500 uppercase mb-2">
            Define Your GitHub Product
          </p>

          {/* Card Content */}
          <h2 className="font-medium text-gray-900 mb-1">Review Pull Requests with AI</h2>
          <p className="text-xs text-gray-500">
Gain insights and speed up your workflow. Our AI will analyze your pull requests and suggest changes.          </p>
        </div>

        {/* Button */}
        {/* <div className="flex justify-start">
          <button className="bg-gradient-to-br from-orange-400 to-red-400 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition">
            Connect
          </button>
        </div> */}
        <ShimmerButton
          icon={ArrowRight}
          iconPosition="right"
          variant="primary"
          className="mt-2"
          onClick={() => navigate("/oauth")}
        >
          Connect with Github
        </ShimmerButton>
      </div>
    </div>
  );
}