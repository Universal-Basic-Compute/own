"use client";

import { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface StepProps {
  step: {
    id: string;
    title: string;
    question: string;
    options?: Option[];
    inputType?: string;
    min?: number;
    max?: number;
    step?: number;
    prefix?: string;
    visualizationType?: string;
    content?: string; // Add this property for info-card content
  };
  onNext: (data: any) => void;
  onBack: () => void;
  onSubmit: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  stepNumber: number;
  totalSteps: number;
}

export function OnboardingStep({
  step,
  onNext,
  onBack,
  onSubmit,
  isFirstStep,
  isLastStep,
  stepNumber,
  totalSteps,
}: StepProps) {
  // Initialize value based on input type
  const [value, setValue] = useState<any>(() => {
    // Initialize as an empty array for checkbox inputs, otherwise empty string
    return step.inputType === "checkbox" ? [] : "";
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (step.inputType === "checkbox") {
      // Ensure value is an array before operating on it
      const currentValue = Array.isArray(value) ? value : [];
      
      if (e.target.checked) {
        setValue([...currentValue, e.target.value]);
      } else {
        setValue(currentValue.filter((v: string) => v !== e.target.value));
      }
    } else if (step.inputType === "slider") {
      setValue(Number(e.target.value));
    } else {
      setValue(e.target.value);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLastStep) {
      onSubmit();
    } else {
      onNext(value);
    }
  };
  
  // Helper function to check if a value is in an array safely
  const isValueInArray = (arr: any[], val: string): boolean => {
    return Array.isArray(arr) && arr.includes(val);
  };
  
  return (
    <div className="space-y-6">
      <div className="text-sm font-medium text-medium-dark dark:text-medium">
        Step {stepNumber} of {totalSteps}
      </div>
      
      <h2 className="text-2xl font-semibold text-dark dark:text-white">
        {step.title}
      </h2>
      
      <p className="text-lg text-medium-dark dark:text-light-medium">
        {step.question}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {step.inputType === "info-card" && step.content && (
          <div className="bg-gradient-to-br from-white to-light-cloud dark:from-night-mode dark:to-deep-space rounded-lg p-6 border border-light-medium dark:border-medium-dark shadow-sm">
            <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: step.content }}></div>
          </div>
        )}
        
        {step.inputType === "radio" && step.options && (
          <div className="space-y-3">
            {step.options.map((option) => (
              <label
                key={option.value}
                className={`flex items-start p-4 border ${
                  value === option.value 
                    ? "border-ai-blue bg-ai-blue/5" 
                    : "border-light-medium"
                } rounded-md cursor-pointer hover:border-ai-blue transition-colors`}
              >
                <input
                  type="radio"
                  name={step.id}
                  value={option.value}
                  checked={value === option.value}
                  onChange={handleChange}
                  className="mt-1 text-ai-blue focus:ring-financial-green"
                />
                <span className="ml-3 font-medium">{option.label}</span>
              </label>
            ))}
          </div>
        )}
        
        {step.inputType === "checkbox" && step.options && (
          <div className="space-y-3">
            {step.options.map((option) => (
              <label
                key={option.value}
                className={`flex items-start p-4 border ${
                  isValueInArray(value, option.value)
                    ? "border-ai-blue bg-ai-blue/5" 
                    : "border-light-medium"
                } rounded-md cursor-pointer hover:border-ai-blue transition-colors`}
              >
                <input
                  type="checkbox"
                  name={step.id}
                  value={option.value}
                  checked={isValueInArray(value, option.value)}
                  onChange={handleChange}
                  className="mt-1 text-ai-blue focus:ring-financial-green"
                />
                <span className="ml-3 font-medium">{option.label}</span>
              </label>
            ))}
          </div>
        )}
        
        {step.inputType === "slider" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>{step.prefix}{step.min}</span>
              <span className="text-xl font-semibold text-financial-green">
                {step.prefix}{value || step.min}
              </span>
              <span>{step.prefix}{step.max}</span>
            </div>
            <input
              type="range"
              min={step.min}
              max={step.max}
              step={step.step}
              value={value || step.min}
              onChange={handleChange}
              className="w-full h-2 bg-light-medium rounded-lg appearance-none cursor-pointer accent-financial-green"
            />
          </div>
        )}
        
        {step.inputType === "none" && (
          <div className="py-4 text-center text-lg">
            Ready to see your personalized financial independence plan!
          </div>
        )}
        
        <div className="flex justify-between pt-4">
          {!isFirstStep && (
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-2 border border-light-medium rounded-md text-medium-dark hover:text-dark hover:border-medium transition-colors"
            >
              Back
            </button>
          )}
          
          <button
            type="submit"
            className={`px-6 py-2 rounded-md text-white font-medium ${
              isFirstStep ? "ml-auto" : ""
            } ${
              isLastStep
                ? "bg-gradient-to-r from-financial-green to-ownership-purple"
                : "bg-gradient-to-r from-ai-blue to-financial-green"
            } hover:opacity-90 transition-opacity`}
            disabled={!!(step.inputType && step.inputType !== "none" && !value)}
          >
            {isLastStep ? "Complete" : "Continue"}
          </button>
        </div>
      </form>
    </div>
  );
}
