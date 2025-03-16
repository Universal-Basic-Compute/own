"use client";

import { useState, useEffect, useRef } from "react";
import displacementRiskData from "@/data/displacement-risk.json";

// Add this type definition at the top of the file, before the component
type ProfessionDetails = {
  [key: string]: string;
};

export function DisplacementTab() {
  const [selectedGroup, setSelectedGroup] = useState("Screen-Based Data Processing");
  const [selectedProfession, setSelectedProfession] = useState("Data Entry Specialists");
  const [riskData, setRiskData] = useState<any>(null);
  const [professionDetails, setProfessionDetails] = useState<string>("");
  const [riskCategory, setRiskCategory] = useState("Immediate Risk");

  // Get all job groups across all risk categories
  const getAllJobGroups = () => {
    const groups: { name: string; category: string }[] = [];
    
    displacementRiskData.professionAutomationRisk.forEach(category => {
      category.groups.forEach(group => {
        groups.push({
          name: group.groupName,
          category: category.riskCategory
        });
      });
    });
    
    return groups;
  };

  const allJobGroups = getAllJobGroups();

  // Find the selected group data
  useEffect(() => {
    // First, find which risk category contains this group
    const categoryData = displacementRiskData.professionAutomationRisk.find(
      category => category.groups.some(group => group.groupName === selectedGroup)
    );
    
    if (categoryData) {
      setRiskCategory(categoryData.riskCategory);
      
      const groupData = categoryData.groups.find(
        group => group.groupName === selectedGroup
      );
      
      if (groupData) {
        setRiskData({
          timeframe: categoryData.timeframe,
          groupName: groupData.groupName,
          professions: groupData.professions,
          automationSignals: groupData.automationSignals,
          automationStages: groupData.automationStages,
          explanation: groupData.explanation
        });
        
        // Cast professionDetails to our type with index signature
        const details = groupData.professionDetails as unknown as ProfessionDetails;
        if (details && details[selectedProfession]) {
          setProfessionDetails(details[selectedProfession]);
        } else {
          setProfessionDetails("");
        }
      }
    }
  }, [selectedGroup, selectedProfession]);

  // Get professions for the selected group
  const getProfessionsForGroup = (groupName: string) => {
    for (const category of displacementRiskData.professionAutomationRisk) {
      const group = category.groups.find(g => g.groupName === groupName);
      if (group) {
        return group.professions;
      }
    }
    return [];
  };

  // Handle group change
  const handleGroupChange = (groupName: string) => {
    setSelectedGroup(groupName);
    const professions = getProfessionsForGroup(groupName);
    if (professions.length > 0) {
      setSelectedProfession(professions[0]);
    }
  };

  // Get risk level based on category
  const getRiskLevel = (category: string) => {
    switch (category) {
      case "Immediate Risk": return { level: "High", color: "text-error", percentage: 90 };
      case "Near-Term Risk": return { level: "Medium-High", color: "text-warning", percentage: 75 };
      case "Mid-Term Risk": return { level: "Medium", color: "text-warning", percentage: 60 };
      case "Longer-Term Risk": return { level: "Medium-Low", color: "text-ai-blue", percentage: 40 };
      case "Extended Timeline": return { level: "Low", color: "text-financial-green", percentage: 25 };
      case "Likely To Remain Human-Led": return { level: "Very Low", color: "text-financial-green", percentage: 10 };
      default: return { level: "Unknown", color: "text-medium-dark", percentage: 50 };
    }
  };


  const riskInfo = getRiskLevel(riskCategory);

  // Group job groups by risk category for better organization in the dropdown
  const groupedJobGroups = allJobGroups.reduce((acc, group) => {
    if (!acc[group.category]) {
      acc[group.category] = [];
    }
    acc[group.category].push(group.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/2">
          <h2 className="text-h3 font-semibold mb-4 bg-gradient-to-r from-ai-blue via-ownership-purple to-financial-green bg-clip-text text-transparent">When will I be replaced by AI?</h2>
          <p className="text-medium-dark dark:text-light-medium mb-6">
            Understand how AI might impact your current career and when you should prepare for transition.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-medium-dark dark:text-light-medium mb-2">Job Group</label>
              <select 
                value={selectedGroup}
                onChange={(e) => handleGroupChange(e.target.value)}
                className="w-full p-3 border border-medium-dark rounded-md bg-night-mode text-light"
              >
                {Object.entries(groupedJobGroups).map(([category, groups]) => (
                  <optgroup key={category} label={`${category} (${getCategoryTimeframe(category)})`}>
                    {groups.map(group => (
                      <option key={group} value={group}>
                        {group}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-medium-dark dark:text-light-medium mb-2">Profession</label>
              <select 
                value={selectedProfession}
                onChange={(e) => setSelectedProfession(e.target.value)}
                className="w-full p-3 border border-medium-dark rounded-md bg-night-mode text-light"
              >
                {getProfessionsForGroup(selectedGroup).map((profession) => (
                  <option key={profession} value={profession}>
                    {profession}
                  </option>
                ))}
              </select>
            </div>
            
            {professionDetails && (
              <div className="mt-4 bg-gradient-to-br from-night-mode to-deep-space/90 rounded-lg shadow-md p-6 border-l-4 border-ai-blue">
                <h3 className="text-h4 font-semibold mb-4 text-light">Your Profession: {selectedProfession}</h3>
                <p className="text-light">
                  {professionDetails}
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="md:w-1/2 bg-gradient-to-br from-night-mode via-ownership-purple/10 to-deep-space/80 rounded-lg p-6 border border-medium-dark/30 shadow-lg">
          {riskData && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-h4 font-semibold text-light">Displacement Risk Level</h3>
                <span className={`text-h2 font-bold ${
                  riskInfo.level === "High" ? "text-error" : 
                  riskInfo.level === "Medium-High" ? "text-warning" : 
                  riskInfo.level === "Medium" ? "text-warning" : 
                  riskInfo.level === "Medium-Low" ? "text-ai-blue" : 
                  riskInfo.level === "Low" ? "text-financial-green" : 
                  riskInfo.level === "Very Low" ? "text-financial-green" : "text-medium-dark"
                }`}>
                  {riskInfo.level}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-light">Low Risk</span>
                  <span className="text-sm font-medium text-light">High Risk</span>
                </div>
                <div className="w-full h-3 bg-medium-dark rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${
                      riskInfo.percentage >= 80 ? "bg-gradient-to-r from-financial-green to-error" :
                      riskInfo.percentage >= 60 ? "bg-gradient-to-r from-financial-green to-warning" :
                      riskInfo.percentage >= 40 ? "bg-gradient-to-r from-financial-green to-ai-blue" : "bg-gradient-to-r from-ownership-purple to-financial-green"
                    }`}
                    style={{ width: `${riskInfo.percentage}%` }}
                  ></div>
                </div>
              </div>
              
              {/* S-Curve Automation Graph */}
              <div className="mt-6 mb-6">
                <h4 className="text-sm font-medium text-light mb-2">Job Automation Curve</h4>
                <div className="bg-night-mode rounded-lg p-4 border border-medium-dark" style={{ minHeight: "200px" }}>
                  <div className="w-full h-48 relative">
                    {/* SVG S-curve */}
                    <svg width="100%" height="100%" viewBox="0 0 400 150" preserveAspectRatio="none">
                      {/* Grid lines */}
                      <g stroke="#333" strokeWidth="0.5" opacity="0.5">
                        {/* Horizontal grid lines */}
                        <line x1="30" y1="30" x2="370" y2="30" />
                        <line x1="30" y1="60" x2="370" y2="60" />
                        <line x1="30" y1="90" x2="370" y2="90" />
                        <line x1="30" y1="120" x2="370" y2="120" />
                
                        {/* Vertical grid lines */}
                        <line x1="30" y1="30" x2="30" y2="120" />
                        <line x1="115" y1="30" x2="115" y2="120" />
                        <line x1="200" y1="30" x2="200" y2="120" />
                        <line x1="285" y1="30" x2="285" y2="120" />
                        <line x1="370" y1="30" x2="370" y2="120" />
                      </g>
              
                      {/* Axes */}
                      <g stroke="#666" strokeWidth="1">
                        <line x1="30" y1="30" x2="30" y2="120" />
                        <line x1="30" y1="120" x2="370" y2="120" />
                      </g>
              
                      {/* S-curve based on risk category */}
                      <path 
                        d={
                          riskCategory === "Immediate Risk" 
                            ? "M30,120 C60,120 80,30 200,30" // Completes by +10 years (x=200)
                            : riskCategory === "Near-Term Risk" 
                            ? "M30,120 C80,120 115,30 200,30" // Completes by +10 years (x=200)
                            : riskCategory === "Mid-Term Risk"
                            ? "M30,120 C100,120 150,30 200,30" // Completes by +10 years (x=200)
                            : riskCategory === "Longer-Term Risk"
                            ? "M30,120 C150,120 200,30 370,30" // Keeps original timeline
                            : riskCategory === "Extended Timeline"
                            ? "M30,120 C200,120 250,30 370,30" // Keeps original timeline
                            : "M30,120 C250,120 300,30 370,30" // Keeps original timeline
                        }
                        stroke={
                          riskCategory === "Immediate Risk" || riskCategory === "Near-Term Risk"
                            ? "#FFAB00" // Warning color
                            : riskCategory === "Mid-Term Risk"
                            ? "#0066FF" // AI blue
                            : "#00CC99" // Financial green
                        }
                        strokeWidth="3"
                        fill="none"
                      />
              
                      {/* Current position marker */}
                      <circle 
                        cx={
                          riskCategory === "Immediate Risk" 
                            ? "60" 
                            : riskCategory === "Near-Term Risk" 
                            ? "90"
                            : riskCategory === "Mid-Term Risk"
                            ? "120"
                            : riskCategory === "Longer-Term Risk"
                            ? "180"
                            : riskCategory === "Extended Timeline"
                            ? "240"
                            : "300"
                        }
                        cy={
                          riskCategory === "Immediate Risk" 
                            ? "90" 
                            : riskCategory === "Near-Term Risk" 
                            ? "100"
                            : riskCategory === "Mid-Term Risk"
                            ? "110"
                            : riskCategory === "Longer-Term Risk"
                            ? "115"
                            : riskCategory === "Extended Timeline"
                            ? "118"
                            : "119"
                        }
                        r="6"
                        fill="#0066FF"
                      />
              
                      {/* X-axis labels */}
                      <text x="30" y="135" fontSize="10" textAnchor="middle" fill="#9CA3AF">Now</text>
                      <text x="115" y="135" fontSize="10" textAnchor="middle" fill="#9CA3AF">+5 yrs</text>
                      <text x="200" y="135" fontSize="10" textAnchor="middle" fill="#9CA3AF">+10 yrs</text>
                      <text x="285" y="135" fontSize="10" textAnchor="middle" fill="#9CA3AF">+15 yrs</text>
                      <text x="370" y="135" fontSize="10" textAnchor="middle" fill="#9CA3AF">+20 yrs</text>
              
                      {/* Y-axis labels */}
                      <text x="25" y="120" fontSize="10" textAnchor="end" fill="#9CA3AF">0%</text>
                      <text x="25" y="90" fontSize="10" textAnchor="end" fill="#9CA3AF">25%</text>
                      <text x="25" y="60" fontSize="10" textAnchor="end" fill="#9CA3AF">50%</text>
                      <text x="25" y="30" fontSize="10" textAnchor="end" fill="#9CA3AF">75%</text>
                      <text x="25" y="15" fontSize="10" textAnchor="end" fill="#9CA3AF">100%</text>
              
                      {/* "You are here" label */}
                      <text 
                        x={
                          riskCategory === "Immediate Risk" 
                            ? "60" 
                            : riskCategory === "Near-Term Risk" 
                            ? "90"
                            : riskCategory === "Mid-Term Risk"
                            ? "120"
                            : riskCategory === "Longer-Term Risk"
                            ? "180"
                            : riskCategory === "Extended Timeline"
                            ? "240"
                            : "300"
                        }
                        y={
                          riskCategory === "Immediate Risk" 
                            ? "80" 
                            : riskCategory === "Near-Term Risk" 
                            ? "90"
                            : riskCategory === "Mid-Term Risk"
                            ? "100"
                            : riskCategory === "Longer-Term Risk"
                            ? "105"
                            : riskCategory === "Extended Timeline"
                            ? "108"
                            : "109"
                        }
                        fontSize="10"
                        fontWeight="bold"
                        textAnchor="middle"
                        fill="#0066FF"
                      >
                        Your displacement date
                      </text>
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-light mt-2">
                  This S-curve shows the projected percentage of jobs in your field that will be automated over time.
                  The steepness and timing of the curve are based on your risk category.
                </p>
              </div>
              
              
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium text-light">Estimated Timeframe:</span>
                  <span className="text-warning">{riskData.timeframe}</span>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </div>
      
      {riskData && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-ai-blue/10 to-deep-space/90 rounded-lg p-6 border border-ai-blue/20 shadow-md">
            <h3 className="text-h4 font-semibold mb-4 text-light">Automation Signals</h3>
            <ul className="space-y-2">
              {riskData.automationSignals.map((signal: string, index: number) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-warning mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-light">{signal}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-ownership-purple/10 to-deep-space/90 rounded-lg p-6 border border-ownership-purple/20 shadow-md">
            <h3 className="text-h4 font-semibold mb-4 text-light">Automation Timeline</h3>
            <div className="space-y-6">
              {riskData.automationStages.map((stage: any, index: number) => (
                <div key={index} className="relative">
                  {/* Vertical line connecting stages */}
                  {index < riskData.automationStages.length - 1 && (
                    <div className="absolute top-10 left-4 w-0.5 h-full -ml-px bg-medium-dark"></div>
                  )}
                  
                  <div className="flex">
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-ai-blue text-white z-10">
                      <span className="text-sm">{index + 1}</span>
                    </div>
                    
                    <div className="ml-4 pb-8">
                      <div className="font-semibold text-light">{stage.stage}</div>
                      <p className="text-sm text-light-medium mt-1">{stage.description}</p>
                      <div className="mt-2 text-xs text-ai-blue">
                        {stage.timeframe}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {riskData && (
        <div className="bg-gradient-to-r from-ai-blue/10 to-financial-green/10 rounded-lg p-6 border border-ai-blue/20">
          <h3 className="text-h4 font-semibold mb-4 text-light">Automation Impact Analysis</h3>
          <p className="text-light mb-6">
            {riskData.explanation}
          </p>
          
          <div className="mt-6 text-center">
            <button className="btn-primary">
              Get Personalized AI Resilience Plan
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper function to get timeframe for a category
function getCategoryTimeframe(category: string): string {
  const categoryData = displacementRiskData.professionAutomationRisk.find(
    c => c.riskCategory === category
  );
  return categoryData ? categoryData.timeframe : "";
}
