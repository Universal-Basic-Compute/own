"use client";

import { useState, useEffect } from "react";
import displacementRiskData from "@/data/displacement-risk.json";

export function DisplacementTab() {
  const [selectedCategory, setSelectedCategory] = useState("Immediate Risk");
  const [selectedGroup, setSelectedGroup] = useState("Screen-Based Data Processing");
  const [selectedProfession, setSelectedProfession] = useState("Data Entry Specialists");
  const [riskData, setRiskData] = useState<any>(null);

  // Find the selected category data
  useEffect(() => {
    const categoryData = displacementRiskData.professionAutomationRisk.find(
      category => category.riskCategory === selectedCategory
    );
    
    if (categoryData) {
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
      }
    }
  }, [selectedCategory, selectedGroup]);

  // Get all categories from the data
  const categories = displacementRiskData.professionAutomationRisk.map(
    category => category.riskCategory
  );

  // Get groups for the selected category
  const getGroupsForCategory = (category: string) => {
    const categoryData = displacementRiskData.professionAutomationRisk.find(
      c => c.riskCategory === category
    );
    return categoryData ? categoryData.groups.map(group => group.groupName) : [];
  };

  // Get professions for the selected group
  const getProfessionsForGroup = (category: string, group: string) => {
    const categoryData = displacementRiskData.professionAutomationRisk.find(
      c => c.riskCategory === category
    );
    if (!categoryData) return [];
    
    const groupData = categoryData.groups.find(g => g.groupName === group);
    return groupData ? groupData.professions : [];
  };

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const groups = getGroupsForCategory(category);
    if (groups.length > 0) {
      setSelectedGroup(groups[0]);
      const professions = getProfessionsForGroup(category, groups[0]);
      if (professions.length > 0) {
        setSelectedProfession(professions[0]);
      }
    }
  };

  // Handle group change
  const handleGroupChange = (group: string) => {
    setSelectedGroup(group);
    const professions = getProfessionsForGroup(selectedCategory, group);
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

  const riskInfo = getRiskLevel(selectedCategory);

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
              <label className="block text-sm font-medium text-medium-dark mb-2">Risk Category</label>
              <select 
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full p-3 border border-light-medium dark:border-medium-dark rounded-md bg-light-cloud dark:bg-deep-space"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category} ({displacementRiskData.professionAutomationRisk.find(c => c.riskCategory === category)?.timeframe})
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-medium-dark mb-2">Job Group</label>
              <select 
                value={selectedGroup}
                onChange={(e) => handleGroupChange(e.target.value)}
                className="w-full p-3 border border-light-medium dark:border-medium-dark rounded-md bg-light-cloud dark:bg-deep-space"
              >
                {getGroupsForCategory(selectedCategory).map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-medium-dark mb-2">Profession</label>
              <select 
                value={selectedProfession}
                onChange={(e) => setSelectedProfession(e.target.value)}
                className="w-full p-3 border border-light-medium dark:border-medium-dark rounded-md bg-light-cloud dark:bg-deep-space"
              >
                {getProfessionsForGroup(selectedCategory, selectedGroup).map((profession) => (
                  <option key={profession} value={profession}>
                    {profession}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 bg-light-cloud dark:bg-deep-space/50 rounded-lg p-6">
          {riskData && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-h4 font-semibold">Displacement Risk Level</h3>
                <span className={`text-h2 font-bold ${riskInfo.color}`}>
                  {riskInfo.level}
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
                      riskInfo.percentage >= 80 ? "bg-error" :
                      riskInfo.percentage >= 60 ? "bg-warning" :
                      riskInfo.percentage >= 40 ? "bg-ai-blue" : "bg-financial-green"
                    }`}
                    style={{ width: `${riskInfo.percentage}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Estimated Timeframe:</span>
                  <span>{riskData.timeframe}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {riskData && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-light-cloud dark:bg-deep-space/50 rounded-lg p-6">
            <h3 className="text-h4 font-semibold mb-4">Automation Signals</h3>
            <ul className="space-y-2">
              {riskData.automationSignals.map((signal: string, index: number) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-warning mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-light-cloud dark:bg-deep-space/50 rounded-lg p-6">
            <h3 className="text-h4 font-semibold mb-4">Automation Timeline</h3>
            <div className="space-y-6">
              {riskData.automationStages.map((stage: any, index: number) => (
                <div key={index} className="relative">
                  {/* Vertical line connecting stages */}
                  {index < riskData.automationStages.length - 1 && (
                    <div className="absolute top-10 left-4 w-0.5 h-full -ml-px bg-light-medium dark:bg-medium-dark"></div>
                  )}
                  
                  <div className="flex">
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-ai-blue text-white z-10">
                      <span className="text-sm">{index + 1}</span>
                    </div>
                    
                    <div className="ml-4 pb-8">
                      <div className="font-semibold">{stage.stage}</div>
                      <p className="text-sm text-medium-dark mt-1">{stage.description}</p>
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
          <h3 className="text-h4 font-semibold mb-4">Automation Impact Analysis</h3>
          <p className="text-medium-dark dark:text-medium mb-6">
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
