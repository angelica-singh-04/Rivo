// src/Apps/Oauth/Oauth.jsx
import React from "react";
import Button from "@/components/ui/ShimmerButton";
import { Github, Gitlab } from "lucide-react"; // icons

export default function Oauth() {
  const handleOAuthLogin = (provider) => {
    // Replace with your backend OAuth endpoints
    const oauthUrls = {
      github: "http://localhost:4000/auth/github", 
      gitlab: "http://localhost:4000/auth/gitlab",
    };

    window.location.href = oauthUrls[provider];
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Sign in with OAuth</h1>
      <div className="space-y-4 w-64">
        <Button
          onClick={() => handleOAuthLogin("github")}
          className="w-full flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white rounded-lg py-2 px-4"
        >
          <Github className="w-5 h-5" />
          Connect with GitHub
        </Button>

        <Button
          onClick={() => handleOAuthLogin("gitlab")}
          className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg py-2 px-4"
        >
          <Gitlab className="w-5 h-5" />
          Connect with GitLab
        </Button>
      </div>
    </div>
  );
}
