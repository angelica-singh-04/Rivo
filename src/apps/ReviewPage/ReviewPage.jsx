import React from "react";

const suggestions = [
  {
    type: "Detailed Suggestions",
    title: "Review and apply AI-generated code improvements",
    file: "src/utils/helpers.js",
    code: `function sanitizeInput(input) {
  return input.replace(/<script>/g, '');
}`,
    actions: ["Accept Fix", "Ignore"],
    category: "Security Risk",
    description: "Potential XSS vulnerability in sanitizeInput function. Consider using DOMPurify library."
  },
    {
    type: "Detailed Suggestions",
    title: "Review and apply AI-generated code improvements",
    file: "src/utils/helpers.js",
    code: `function sanitizeInput(input) {
  return input.replace(/<script>/g, '');
}`,
    actions: ["Accept Fix", "Ignore"],
    category: "Security Risk",
    description: "Potential XSS vulnerability in sanitizeInput function. Consider using DOMPurify library."
  },
  {
    type: "Detailed Suggestions",
    title: "Component refactoring suggestion",
    file: "src/components/UserProfile.tsx",
    code: `export function UserProfile({ user, posts, settings }) {
  // 200+ lines of code
}`,
    actions: ["Accept Fix", "Ignore"],
    category: "Code Smell",
    description: "Component has too many responsibilities. Consider splitting into smaller components."
  }
];

export default function AiReviewOutput() {
  return (
    <div className="w-full bg-neutral-50 p-6 overflow-y-auto max-h-screen hide-scrollbar">
  <h1 className="text-2xl font-bold mb-6 text-gray-900">AI Review Suggestions</h1>

  <div className="space-y-6">
    {suggestions.map((item, idx) => (
      <div key={idx} className="bg-white rounded-xl p-5 border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
          <span className="text-sm font-medium text-gray-500">{item.file}</span>
        </div>

        <p className="text-sm font-semibold text-orange-500 mb-1">{item.category}</p>
        <p className="text-sm text-gray-600 mb-3">{item.description}</p>

        <pre className="bg-gray-100 rounded-md p-3 text-sm overflow-x-auto mb-3">
          <code>{item.code}</code>
        </pre>

        <div className="flex gap-3">
          {item.actions.map((action, i) => (
            <button
              key={i}
              className={`px-4 py-1 text-sm rounded-md font-semibold ${
                action === "Accept Fix"
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
