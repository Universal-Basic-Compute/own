"use client";

import { useState, useEffect, useRef } from "react";
import displacementRiskData from "@/data/displacement-risk.json";

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
    console.log("Rendering S-Curve with category:", category);
    console.log("Canvas ref exists:", !!canvasRef.current);
  
  // Add this new function right after the renderSCurve function:
  const renderTestCurve = () => {
    if (!canvasRef.current) return;
  
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
  
    // Clear canvas and set dimensions
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    const width = canvas.width;
    const height = canvas.height;
  
    // Draw a simple curve
    ctx.beginPath();
    ctx.strokeStyle = '#FF0000';
    ctx.lineWidth = 5;
    ctx.moveTo(50, height - 50);
    ctx.quadraticCurveTo(width/2, 50, width - 50, height - 50);
    ctx.stroke();
  
    // Add a circle
    ctx.beginPath();
    ctx.fillStyle = '#0066FF';
    ctx.arc(width/2, height/2, 20, 0, 2 * Math.PI);
    ctx.fill();
  };
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    console.log("Canvas dimensions:", canvas.width, "x", canvas.height);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Check if dark mode is active
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set background color
    ctx.fillStyle = isDarkMode ? '#1E1E1E' : '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Set dimensions
    const width = canvas.width;
    const height = canvas.height;
    const padding = 30;
    
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
    
    // Different curve parameters based on risk category
    let inflectionPoint = 0.5; // Default (mid-point)
    let steepness = 5; // Default steepness
    let curveColor = '#616161'; // Default color
    
    switch(category) {
      case "Immediate Risk":
        inflectionPoint = 0.15; // Early inflection
        steepness = 8; // Steeper curve
        curveColor = '#FF5252'; // Error color
        break;
      case "Near-Term Risk":
        inflectionPoint = 0.25;
        steepness = 7;
        curveColor = '#FFAB00'; // Warning color
        break;
      case "Mid-Term Risk":
        inflectionPoint = 0.4;
        steepness = 6;
        curveColor = '#FFAB00'; // Warning color
        break;
      case "Longer-Term Risk":
        inflectionPoint = 0.6;
        steepness = 5;
        curveColor = '#0066FF'; // AI blue
        break;
      case "Extended Timeline":
        inflectionPoint = 0.75;
        steepness = 4;
        curveColor = '#00CC99'; // Financial green
        break;
      case "Likely To Remain Human-Led":
        inflectionPoint = 0.85;
        steepness = 3;
        curveColor = '#00CC99'; // Financial green
        break;
    }
    
    // Draw the S-curve with a solid color instead of gradient
    ctx.beginPath();
    ctx.strokeStyle = curveColor;
    ctx.lineWidth = 3;
    
    // Draw the actual curve points
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
    console.log("Effect running with riskCategory:", riskCategory);
    
    if (canvasRef.current && riskCategory) {
      const handleResize = () => {
        if (!canvasRef.current) return;
        
        // Set the canvas dimensions to match its display size
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        
        console.log("Canvas rect:", rect.width, "x", rect.height);
        
        // Set the actual canvas dimensions (important for proper rendering)
        canvas.width = rect.width || 300; // Provide fallback width
        canvas.height = rect.height || 150; // Provide fallback height
        
        console.log("Set canvas dimensions to:", canvas.width, "x", canvas.height);
        
        // Render the S-curve
        renderSCurve(riskCategory, canvasRef);
      };
      
      // Initial render - add a small delay to ensure the canvas is in the DOM
      setTimeout(handleResize, 100);
      
      // Add listener for window resize
      window.addEventListener('resize', handleResize);
      
      // Add listener for color scheme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleColorSchemeChange = () => renderSCurve(riskCategory, canvasRef);
      mediaQuery.addEventListener('change', handleColorSchemeChange);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        mediaQuery.removeEventListener('change', handleColorSchemeChange);
      };
    }
  }, [riskCategory]); // Removed canvasRef from dependencies as it's a stable ref

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
                            ? "M30,120 C60,120 80,30 370,30" 
                            : riskCategory === "Near-Term Risk" 
                            ? "M30,120 C80,120 115,30 370,30"
                            : riskCategory === "Mid-Term Risk"
                            ? "M30,120 C100,120 150,30 370,30"
                            : riskCategory === "Longer-Term Risk"
                            ? "M30,120 C150,120 200,30 370,30"
                            : riskCategory === "Extended Timeline"
                            ? "M30,120 C200,120 250,30 370,30"
                            : "M30,120 C250,120 300,30 370,30"
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
                        You are here
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
