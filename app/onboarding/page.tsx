"use client";

import { OnboardingForm } from "@/components/onboarding/OnboardingForm";

export default function OnboardingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-h1 font-bold mb-4 bg-gradient-to-r from-ai-blue via-financial-green to-ownership-purple bg-clip-text text-transparent">
          Your Path to Financial Independence
        </h1>
        <p className="text-body-1 text-medium-dark dark:text-medium max-w-2xl mx-auto">
          Complete this personalized assessment to create your AI asset ownership roadmap and start your journey toward financial freedom.
        </p>
      </div>
      <OnboardingForm />
    </div>
  );
}
