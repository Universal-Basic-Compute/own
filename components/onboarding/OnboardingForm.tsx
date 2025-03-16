"use client";

import { useState } from "react";
import { OnboardingStep } from "./OnboardingStep";
import { ProgressBar } from "./ProgressBar";
import { Visualization } from "./Visualization";

// Define the steps for the onboarding process
const STEPS = [
  {
    id: "ai-transition",
    title: "AI Transition Strategy",
    question: "As AI transforms the job market, building investment-based income is crucial for financial security.",
    inputType: "info-card", // Custom type for information display
    content: `
      <div class="space-y-4">
        <p>The <strong>AI Great Replacement</strong> is rapidly changing the nature of work, with many traditional jobs becoming automated or transformed.</p>
        
        <p>Own.ai helps you build financial resilience through strategic AI asset ownership, creating passive income streams that aren't dependent on traditional employment.</p>
        
        <p>By investing in AI assets like UBC tokens, COMPUTE tokens, Swarm shares, and KinKong investments, you can:</p>
        
        <ul class="list-disc pl-5 space-y-2">
          <li>Generate consistent passive income</li>
          <li>Benefit from AI growth rather than being displaced by it</li>
          <li>Achieve financial independence regardless of job market changes</li>
          <li>Build long-term wealth through appreciating digital assets</li>
        </ul>
        
        <p class="font-semibold">Let's create your personalized AI asset investment strategy to secure your financial future.</p>
      </div>
    `,
    visualizationType: "ai-transition",
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
    <div className="bg-white dark:bg-night-mode rounded-lg shadow-lg p-6 md:p-8 border border-light-medium dark:border-medium-dark">
      <ProgressBar progress={progress} />
      
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="bg-light-cloud/50 dark:bg-deep-space/30 p-6 rounded-lg">
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
        
        <div className="bg-light-cloud/50 dark:bg-deep-space/30 p-6 rounded-lg">
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
