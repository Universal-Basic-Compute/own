"use client";

import { OnboardingForm } from "@/components/onboarding/OnboardingForm";

export default function OnboardingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Your Path to Financial Independence
      </h1>
      <OnboardingForm />
    </div>
  );
}
