import React from "react";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"
import ShimmerButton from "@/components/ui/ShimmerButton";


export default function DefineGitHubProduct() {
      
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-md">
        <div className="mb-4 flex justify-start">
          <div className="bg-gradient-to-br from-orange-400 to-red-400 p-4 rounded-xl shadow-md">
            <FaGithub className="text-white text-3xl" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2 text-gray-900 text-left uppercase">
          Connect your Github
        </h1>

        <p className="text-gray-600 mb-4 text-left text-sm">
Securely connect your GitHub account to enable advanced code review and AI-powered suggestions for your projects.        </p>

        <div className="bg-white rounded-xl border border-b border-neutral-200 w-full p-5 mb-1">
          <p className="text-xs font-semibold text-orange-500 uppercase mb-2">
            Define Your GitHub Product
          </p>

          <h2 className="font-medium text-gray-900 mb-1">Review Pull Requests with AI</h2>
          <p className="text-xs text-gray-500">
Gain insights and speed up your workflow. Our AI will analyze your pull requests and suggest changes.          </p>
        </div>

        <div className="flex flex-col gap-6 mt-2">

      <div className="flex items-start gap-3">
        <Checkbox id="terms-2" className="mt-1" defaultChecked />
        <div className="grid gap-0">
          <span htmlFor="terms-2 t" className="text-sm font-semibold">Accept terms and conditions</span>
          {/* <p className="text-muted-foreground text-xs">
            By clicking this checkbox, you agree to the terms and conditions.
          </p> */}
        </div>
      </div>
    </div>

    
        <ShimmerButton
          icon={ArrowRight}
          iconPosition="right"
          variant="primary"
          className="mt-6"
          onClick={() => alert("successful")}
        >
          Connect with Github
        </ShimmerButton>


      </div>
    </div>
  );
}