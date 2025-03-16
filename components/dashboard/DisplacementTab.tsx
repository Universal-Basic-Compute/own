"use client";

import { useState } from "react";

export function DisplacementTab() {
  const [industry, setIndustry] = useState("technology");
  const [role, setRole] = useState("software-developer");

  // Sample data - in a real app, this would come from an API or database
  const displacementData = {
    technology: {
      "software-developer": {
        riskScore: 65,
        timeframe: "3-5 years",
        vulnerableSkills: ["Basic coding", "Simple data analysis", "Manual testing"],
        resilientSkills: ["System architecture", "AI prompt engineering", "Creative problem solving"],
        recommendations: [
          "Focus on AI integration skills",
          "Develop expertise in AI ethics and governance",
          "Build skills in areas requiring human judgment and creativity"
        ]
      },
      "data-analyst": {
        riskScore: 78,
        timeframe: "2-4 years",
        vulnerableSkills: ["Data cleaning", "Basic visualization", "Standard reporting"],
        resilientSkills: ["Advanced statistical analysis", "Business strategy", "Narrative development"],
        recommendations: [
          "Transition to decision science roles",
          "Develop AI collaboration skills",
          "Focus on business insights rather than data processing"
        ]
      }
    },
    finance: {
      "accountant": {
        riskScore: 82,
        timeframe: "2-3 years",
        vulnerableSkills: ["Bookkeeping", "Tax preparation", "Financial reporting"],
        resilientSkills: ["Financial strategy", "Client relationships", "Regulatory expertise"],
        recommendations: [
          "Specialize in AI-assisted financial strategy",
          "Develop advisory skills beyond compliance",
          "Focus on complex regulatory interpretation"
        ]
      },
      "financial-advisor": {
        riskScore: 55,
        timeframe: "5-7 years",
        vulnerableSkills: ["Basic portfolio management", "Standard financial planning"],
        resilientSkills: ["Behavioral coaching", "Complex financial planning", "Relationship building"],
        recommendations: [
          "Emphasize emotional intelligence and client relationships",
          "Develop expertise in complex financial situations",
          "Integrate AI tools into your practice"
        ]
      }
    }
  };

  const industries = Object.keys(displacementData);
  const roles = industry ? Object.keys(displacementData[industry as keyof typeof displacementData]) : [];
  const currentData = industry && role ? 
    displacementData[industry as keyof typeof displacementData][role as any] : null;

  const getRiskColor = (score: number) => {
    if (score >= 80) return "text-error";
    if (score >= 60) return "text-warning";
    if (score >= 40) return "text-ai-blue";
    return "text-financial-green";
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/2">
          <h2 className="text-h3 font-semibold mb-4">Assess Your Displacement Risk</h2>
          <p className="text-medium-dark dark:text-medium mb-6">
            Understand how AI might impact your current career and when you should prepare for transition.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-medium-dark mb-2">Industry</label>
              <select 
                value={industry}
                onChange={(e) => {
                  setIndustry(e.target.value);
                  setRole(Object.keys(displacementData[e.target.value as keyof typeof displacementData])[0]);
                }}
                className="w-full p-3 border border-light-medium dark:border-medium-dark rounded-md bg-light-cloud dark:bg-deep-space"
              >
                {industries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind.charAt(0).toUpperCase() + ind.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-medium-dark mb-2">Role</label>
              <select 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-3 border border-light-medium dark:border-medium-dark rounded-md bg-light-cloud dark:bg-deep-space"
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 bg-light-cloud dark:bg-deep-space/50 rounded-lg p-6">
          {currentData && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-h4 font-semibold">Displacement Risk Score</h3>
                <span className={`text-h2 font-bold ${getRiskColor(currentData.riskScore)}`}>
                  {currentData.riskScore}%
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-medium-dark">Low Risk</span>
                  <span className="text-sm text-medium-dark">High Risk</span>
                </div>
                <div className="w-full h-3 bg-light-medium dark:bg-medium-dark rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${
                      currentData.riskScore >= 80 ? "bg-error" :
                      currentData.riskScore >= 60 ? "bg-warning" :
                      currentData.riskScore >= 40 ? "bg-ai-blue" : "bg-financial-green"
                    }`}
                    style={{ width: `${currentData.riskScore}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Estimated Timeframe:</span>
                  <span>{currentData.timeframe}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {currentData && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-light-cloud dark:bg-deep-space/50 rounded-lg p-6">
            <h3 className="text-h4 font-semibold mb-4">Vulnerable Skills</h3>
            <ul className="space-y-2">
              {currentData.vulnerableSkills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-error mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-light-cloud dark:bg-deep-space/50 rounded-lg p-6">
            <h3 className="text-h4 font-semibold mb-4">Resilient Skills</h3>
            <ul className="space-y-2">
              {currentData.resilientSkills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-financial-green mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      {currentData && (
        <div className="bg-gradient-to-r from-ai-blue/10 to-financial-green/10 rounded-lg p-6 border border-ai-blue/20">
          <h3 className="text-h4 font-semibold mb-4">Recommendations</h3>
          <ul className="space-y-3">
            {currentData.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ai-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 text-center">
            <button className="btn-primary">
              Get Detailed Transition Plan
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
