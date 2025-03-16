"use client";

import { useState } from "react";
import { OnboardingStep } from "./OnboardingStep";
import { ProgressBar } from "./ProgressBar";
import { Visualization } from "./Visualization";

// Define the steps for the onboarding process
const STEPS = [
  {
    id: "financial-goals",
    title: "Financial Goals",
    question: "What are your primary financial independence goals?",
    options: [
      { value: "early-retirement", label: "Early Retirement" },
      { value: "passive-income", label: "Generate Passive Income" },
      { value: "wealth-building", label: "Build Long-term Wealth" },
      { value: "side-hustle", label: "Create a Profitable Side Hustle" },
    ],
    visualizationType: "goals",
  },
  {
    id: "monthly-expenses",
    title: "Monthly Expenses",
    question: "What are your current monthly expenses?",
    inputType: "slider",
    min: 1000,
    max: 10000,
    step: 500,
    prefix: "$",
    visualizationType: "expenses",
  },
  {
    id: "current-assets",
    title: "Current Assets",
    question: "What assets do you currently own?",
    inputType: "checkbox",
    options: [
      { value: "stocks", label: "Stocks/ETFs" },
      { value: "real-estate", label: "Real Estate" },
      { value: "crypto", label: "Cryptocurrency" },
      { value: "business", label: "Business Ownership" },
      { value: "ai-assets", label: "AI Assets" },
    ],
    visualizationType: "assets",
  },
  {
    id: "growth-outlook",
    title: "Growth Outlook",
    question: "How would you describe your preferred growth strategy?",
    inputType: "radio",
    options: [
      { value: "conservative", label: "Conservative (5-10% annual growth)" },
      { value: "moderate", label: "Moderate (10-15% annual growth)" },
      { value: "aggressive", label: "Aggressive (15-25% annual growth)" },
      { value: "very-aggressive", label: "Very Aggressive (25%+ annual growth)" },
    ],
    visualizationType: "growth",
  },
  {
    id: "investment-capacity",
    title: "Monthly Investment",
    question: "How much can you invest monthly in AI assets?",
    inputType: "slider",
    min: 100,
    max: 5000,
    step: 100,
    prefix: "$",
    visualizationType: "investment",
  },
  {
    id: "summary",
    title: "Your Financial Independence Plan",
    question: "Based on your inputs, here's your personalized plan:",
    inputType: "none",
    visualizationType: "summary",
  },
];

export function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  
  const handleNext = (stepData: any) => {
    // Update form data with the current step's data
    setFormData({
      ...formData,
      [STEPS[currentStep].id]: stepData,
    });
    
    // Move to the next step if not on the last step
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleSubmit = () => {
    // Handle final submission - could send to API, etc.
    console.log("Final form data:", formData);
    // Redirect to dashboard or show success message
  };
  
  const currentStepData = STEPS[currentStep];
  const progress = ((currentStep + 1) / STEPS.length) * 100;
  
  return (
    <div className="bg-white dark:bg-night-mode rounded-lg shadow-lg p-6 md:p-8">
      <ProgressBar progress={progress} />
      
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <OnboardingStep
            step={currentStepData}
            onNext={handleNext}
            onBack={handleBack}
            onSubmit={handleSubmit}
            isFirstStep={currentStep === 0}
            isLastStep={currentStep === STEPS.length - 1}
            stepNumber={currentStep + 1}
            totalSteps={STEPS.length}
          />
        </div>
        
        <div>
          <Visualization 
            type={currentStepData.visualizationType} 
            data={formData}
            currentStepId={currentStepData.id}
          />
        </div>
      </div>
    </div>
  );
}
