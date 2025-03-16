"use client";

import { useState, useEffect, useRef } from "react";
import displacementRiskData from "@/data/displacement-risk.json";

export function DisplacementTab() {
  const [selectedGroup, setSelectedGroup] = useState("Screen-Based Data Processing");
  const [selectedProfession, setSelectedProfession] = useState("Data Entry Specialists");
  const [riskData, setRiskData] = useState<any>(null);
  const [professionDetails, setProfessionDetails] = useState<string>("");
  const [riskCategory, setRiskCategory] = useState("Immediate Risk");
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
        
        // Set the profession-specific details if available
        if (groupData.professionDetails && groupData.professionDetails[selectedProfession]) {
          setProfessionDetails(groupData.professionDetails[selectedProfession]);
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

  const renderSCurve = (category: string, canvasRef: React.RefObject<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set dimensions
    const width = canvas.width;
    const height = canvas.height;
    const padding = 30;
    
    // Check if dark mode is active
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set colors based on theme
    const axisColor = isDarkMode ? '#6B7280' : '#E0E0E0'; // Medium gray for dark mode, light gray for light mode
    const textColor = isDarkMode ? '#9CA3AF' : '#616161'; // Lighter gray for dark mode, darker gray for light mode
    
    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = axisColor;
    ctx.lineWidth = 1;
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Add labels
    ctx.fillStyle = textColor;
    ctx.font = '10px Inter';
    ctx.textAlign = 'center';
    
    // X-axis labels (years)
    const years = ['Now', '+5 yrs', '+10 yrs', '+15 yrs', '+20 yrs'];
    const xStep = (width - 2 * padding) / (years.length - 1);
    years.forEach((year, i) => {
      const x = padding + i * xStep;
      ctx.fillText(year, x, height - padding + 15);
    });
    
    // Y-axis labels (percentage)
    ctx.textAlign = 'right';
    const percentages = [0, 25, 50, 75, 100];
    const yStep = (height - 2 * padding) / (percentages.length - 1);
    percentages.forEach((percentage, i) => {
      const y = height - padding - i * yStep;
      ctx.fillText(`${percentage}%`, padding - 10, y + 3);
    });
    
    // Draw grid lines for better readability
    ctx.beginPath();
    ctx.strokeStyle = isDarkMode ? 'rgba(75, 85, 99, 0.2)' : 'rgba(224, 224, 224, 0.5)';
    ctx.lineWidth = 0.5;
    
    // Horizontal grid lines
    percentages.forEach((_, i) => {
      const y = height - padding - i * yStep;
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
    });
    
    // Vertical grid lines
    years.forEach((_, i) => {
      const x = padding + i * xStep;
      ctx.moveTo(x, padding);
      ctx.lineTo(x, height - padding);
    });
    ctx.stroke();
    
    // Draw S-curve based on risk category
    ctx.beginPath();
    
    // Different curve parameters based on risk category
    let inflectionPoint = 0.5; // Default (mid-point)
    let steepness = 5; // Default steepness
    
    switch(category) {
      case "Immediate Risk":
        inflectionPoint = 0.15; // Early inflection
        steepness = 8; // Steeper curve
        ctx.strokeStyle = '#FF5252'; // Error color
        break;
      case "Near-Term Risk":
        inflectionPoint = 0.25;
        steepness = 7;
        ctx.strokeStyle = '#FFAB00'; // Warning color
        break;
      case "Mid-Term Risk":
        inflectionPoint = 0.4;
        steepness = 6;
        ctx.strokeStyle = '#FFAB00'; // Warning color
        break;
      case "Longer-Term Risk":
        inflectionPoint = 0.6;
        steepness = 5;
        ctx.strokeStyle = '#0066FF'; // AI blue
        break;
      case "Extended Timeline":
        inflectionPoint = 0.75;
        steepness = 4;
        ctx.strokeStyle = '#00CC99'; // Financial green
        break;
      case "Likely To Remain Human-Led":
        inflectionPoint = 0.85;
        steepness = 3;
        ctx.strokeStyle = '#00CC99'; // Financial green
        break;
      default:
        ctx.strokeStyle = '#616161'; // Medium dark
    }
    
    // Draw the S-curve
    ctx.lineWidth = 3;
    ctx.moveTo(padding, height - padding);
    
    for (let i = 0; i <= width - 2 * padding; i++) {
      const x = padding + i;
      const normalizedX = i / (width - 2 * padding);
      
      // Sigmoid function: 1 / (1 + e^(-steepness * (x - inflectionPoint)))
      const sigmoid = 1 / (1 + Math.exp(-steepness * (normalizedX - inflectionPoint)));
      
      const y = height - padding - sigmoid * (height - 2 * padding);
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    
    ctx.stroke();
    
    // Add current position marker based on risk category
    let currentPosition = 0;
    switch(category) {
      case "Immediate Risk":
        currentPosition = 0.1;
        break;
      case "Near-Term Risk":
        currentPosition = 0.2;
        break;
      case "Mid-Term Risk":
        currentPosition = 0.3;
        break;
      case "Longer-Term Risk":
        currentPosition = 0.4;
        break;
      case "Extended Timeline":
        currentPosition = 0.5;
        break;
      case "Likely To Remain Human-Led":
        currentPosition = 0.6;
        break;
    }
    
    const markerX = padding + currentPosition * (width - 2 * padding);
    const normalizedMarkerX = currentPosition;
    const sigmoid = 1 / (1 + Math.exp(-steepness * (normalizedMarkerX - inflectionPoint)));
    const markerY = height - padding - sigmoid * (height - 2 * padding);
    
    // Draw marker
    ctx.beginPath();
    ctx.fillStyle = '#0066FF';
    ctx.arc(markerX, markerY, 6, 0, 2 * Math.PI);
    ctx.fill();
    
    // Add "You are here" label
    ctx.fillStyle = '#0066FF';
    ctx.font = 'bold 10px Inter';
    ctx.textAlign = 'center';
    ctx.fillText("You are here", markerX, markerY - 10);
  };

  useEffect(() => {
    if (canvasRef.current && riskCategory) {
      // Set the canvas dimensions to match its display size
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      
      // Set the actual canvas dimensions (important for proper rendering)
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Render the S-curve
      renderSCurve(riskCategory, canvasRef);
      
      // Add listener for color scheme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => renderSCurve(riskCategory, canvasRef);
      mediaQuery.addEventListener('change', handleChange);
      
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, [riskCategory, canvasRef]);

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
          <h2 className="text-h3 font-semibold mb-4">Assess Your Displacement Risk</h2>
          <p className="text-medium-dark dark:text-medium mb-6">
            Understand how AI might impact your current career and when you should prepare for transition.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-medium-dark mb-2">Job Group</label>
              <select 
                value={selectedGroup}
                onChange={(e) => handleGroupChange(e.target.value)}
                className="w-full p-3 border border-light-medium dark:border-medium-dark rounded-md bg-light-cloud dark:bg-deep-space"
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
              <label className="block text-sm font-medium text-medium-dark mb-2">Profession</label>
              <select 
                value={selectedProfession}
                onChange={(e) => setSelectedProfession(e.target.value)}
                className="w-full p-3 border border-light-medium dark:border-medium-dark rounded-md bg-light-cloud dark:bg-deep-space"
              >
                {getProfessionsForGroup(selectedGroup).map((profession) => (
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
              
              {/* S-Curve Automation Graph */}
              <div className="mt-6 mb-6">
                <h4 className="text-sm font-medium text-medium-dark mb-2">Job Automation Curve</h4>
                <div className="bg-white dark:bg-night-mode rounded-lg p-4 border border-light-medium dark:border-medium-dark" style={{ minHeight: "200px" }}>
                  <canvas 
                    ref={canvasRef} 
                    className="w-full h-48"
                    style={{ display: "block" }}
                    aria-label="S-curve showing job automation over time"
                  ></canvas>
                </div>
                <p className="text-xs text-medium-dark mt-2">
                  This S-curve shows the projected percentage of jobs in your field that will be automated over time.
                  The steepness and timing of the curve are based on your risk category.
                </p>
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

// Helper function to get timeframe for a category
function getCategoryTimeframe(category: string): string {
  const categoryData = displacementRiskData.professionAutomationRisk.find(
    c => c.riskCategory === category
  );
  return categoryData ? categoryData.timeframe : "";
}
