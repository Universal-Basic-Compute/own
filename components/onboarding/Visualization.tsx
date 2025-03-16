"use client";

interface VisualizationProps {
  type: string;
  data: any;
  currentStepId: string;
}

export function Visualization({ type, data, currentStepId }: VisualizationProps) {
  // This is a placeholder for actual visualizations
  // In a real implementation, you would use a charting library like Chart.js, D3, or Recharts
  
  const renderVisualization = () => {
    switch (type) {
      case "ai-transition":
        return (
          <div className="visualization-container">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold mb-2">AI Asset Income vs. Traditional Jobs</h3>
              <p className="text-medium-dark">Building resilience through investment income</p>
            </div>
            <div className="bg-gradient-to-br from-white to-light-cloud dark:from-night-mode dark:to-deep-space rounded-lg p-6 border border-light-medium dark:border-medium-dark shadow-sm">
              <div className="h-64 flex flex-col justify-center">
                <div className="relative h-40 mb-4">
                  {/* Traditional Jobs Line - declining */}
                  <div className="absolute top-0 left-0 w-full h-full flex items-center">
                    <div className="w-full h-0.5 bg-error relative">
                      <div className="absolute left-0 top-0 h-24 w-0.5 bg-error"></div>
                      <div className="absolute right-0 bottom-0 h-24 w-0.5 bg-error"></div>
                      <div className="absolute -top-6 left-0 text-sm text-error font-medium">Traditional Jobs</div>
                      <svg className="absolute -bottom-6 right-0" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L9 19" stroke="#FF5252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 19L3 13" stroke="#FF5252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* AI Asset Income Line - increasing */}
                  <div className="absolute top-0 left-0 w-full h-full flex items-center">
                    <div className="w-full h-0.5 bg-financial-green relative">
                      <div className="absolute left-0 bottom-0 h-24 w-0.5 bg-financial-green"></div>
                      <div className="absolute right-0 top-0 h-24 w-0.5 bg-financial-green"></div>
                      <div className="absolute -bottom-6 left-0 text-sm text-financial-green font-medium">AI Asset Income</div>
                      <svg className="absolute -top-6 right-0" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19L9 5" stroke="#00CC99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 5L3 11" stroke="#00CC99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-medium-dark dark:text-medium">As traditional employment becomes more uncertain, AI asset income provides growing financial stability.</p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "goals":
        return (
          <div className="visualization-container">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold mb-2">Your Financial Journey</h3>
              <p className="text-medium-dark">Visualizing your path to financial independence</p>
            </div>
            <div className="bg-gradient-to-br from-white to-light-cloud dark:from-night-mode dark:to-deep-space rounded-lg p-6 border border-light-medium dark:border-medium-dark shadow-sm">
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-ai-blue to-financial-green flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Select your financial goals to see your personalized journey</p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "expenses":
        return (
          <div className="visualization-container">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold mb-2">Monthly Expense Breakdown</h3>
              <p className="text-medium-dark">Understanding your current financial situation</p>
            </div>
            <div className="bg-gradient-to-br from-white to-light-cloud dark:from-night-mode dark:to-deep-space rounded-lg p-6 border border-light-medium dark:border-medium-dark shadow-sm">
              <div className="h-64 flex items-center justify-center">
                {data["monthly-expenses"] ? (
                  <div className="w-full">
                    <div className="flex justify-between mb-2">
                      <span>Housing (35%)</span>
                      <span>${Math.round(data["monthly-expenses"] * 0.35)}</span>
                    </div>
                    <div className="w-full bg-light-medium h-4 rounded-full mb-3">
                      <div className="bg-ai-blue h-4 rounded-full" style={{ width: "35%" }}></div>
                    </div>
                    
                    <div className="flex justify-between mb-2">
                      <span>Food & Utilities (25%)</span>
                      <span>${Math.round(data["monthly-expenses"] * 0.25)}</span>
                    </div>
                    <div className="w-full bg-light-medium h-4 rounded-full mb-3">
                      <div className="bg-financial-green h-4 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                    
                    <div className="flex justify-between mb-2">
                      <span>Transportation (15%)</span>
                      <span>${Math.round(data["monthly-expenses"] * 0.15)}</span>
                    </div>
                    <div className="w-full bg-light-medium h-4 rounded-full mb-3">
                      <div className="bg-ownership-purple h-4 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                    
                    <div className="flex justify-between mb-2">
                      <span>Other (25%)</span>
                      <span>${Math.round(data["monthly-expenses"] * 0.25)}</span>
                    </div>
                    <div className="w-full bg-light-medium h-4 rounded-full">
                      <div className="bg-warning h-4 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-lg font-medium">Drag the slider to see your expense breakdown</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
        
      case "assets":
        return (
          <div className="visualization-container">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold mb-2">Your Asset Portfolio</h3>
              <p className="text-medium-dark">Current diversification of your investments</p>
            </div>
            <div className="bg-gradient-to-br from-white to-light-cloud dark:from-night-mode dark:to-deep-space rounded-lg p-6 border border-light-medium dark:border-medium-dark shadow-sm">
              <div className="h-64 flex items-center justify-center">
                {data["current-assets"] && data["current-assets"].length > 0 ? (
                  <div className="w-full">
                    <div className="grid grid-cols-2 gap-4">
                      {data["current-assets"].map((asset: string, index: number) => {
                        const colors = ["bg-ai-blue", "bg-financial-green", "bg-ownership-purple", "bg-success", "bg-warning"];
                        const icons = [
                          <svg key="stocks" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>,
                          <svg key="real-estate" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>,
                          <svg key="crypto" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>,
                          <svg key="business" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>,
                          <svg key="ai-assets" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        ];
                        
                        const assetIndex = ["stocks", "real-estate", "crypto", "business", "ai-assets"].indexOf(asset);
                        const color = colors[assetIndex % colors.length];
                        const icon = icons[assetIndex];
                        
                        return (
                          <div key={asset} className={`${color} rounded-lg p-4 flex items-center`}>
                            <div className="mr-3">
                              {icon}
                            </div>
                            <div className="text-white capitalize">
                              {asset.replace(/-/g, ' ')}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <p className="text-lg font-medium">Select your current assets to visualize your portfolio</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
        
      case "growth":
        return (
          <div className="visualization-container">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold mb-2">Growth Projection</h3>
              <p className="text-medium-dark">Potential growth based on your strategy</p>
            </div>
            <div className="bg-gradient-to-br from-white to-light-cloud dark:from-night-mode dark:to-deep-space rounded-lg p-6 border border-light-medium dark:border-medium-dark shadow-sm">
              <div className="h-64 flex items-center justify-center">
                {data["growth-outlook"] ? (
                  <div className="w-full">
                    <div className="flex items-end h-48 w-full">
                      {["conservative", "moderate", "aggressive", "very-aggressive"].map((strategy) => {
                        const isSelected = data["growth-outlook"] === strategy;
                        const heights = {
                          "conservative": "h-1/4",
                          "moderate": "h-2/5",
                          "aggressive": "h-3/5",
                          "very-aggressive": "h-4/5"
                        };
                        const colors = {
                          "conservative": "bg-info",
                          "moderate": "bg-financial-green",
                          "aggressive": "bg-warning",
                          "very-aggressive": "bg-error"
                        };
                        
                        return (
                          <div key={strategy} className="flex-1 flex flex-col items-center">
                            <div 
                              className={`w-16 ${heights[strategy as keyof typeof heights]} ${colors[strategy as keyof typeof colors]} ${isSelected ? 'border-4 border-dark' : ''} rounded-t-lg transition-all duration-300`}
                            ></div>
                            <div className="mt-2 text-xs text-center capitalize">
                              {strategy.replace(/-/g, ' ')}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <p className="text-lg font-medium">Select your growth strategy to see potential returns</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
        
      case "investment":
        return (
          <div className="visualization-container">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold mb-2">Investment Impact</h3>
              <p className="text-medium-dark">How your monthly investment grows over time</p>
            </div>
            <div className="bg-gradient-to-br from-white to-light-cloud dark:from-night-mode dark:to-deep-space rounded-lg p-6 border border-light-medium dark:border-medium-dark shadow-sm">
              <div className="h-64 flex items-center justify-center">
                {data["investment-capacity"] ? (
                  <div className="w-full">
                    <div className="mb-6">
                      <div className="flex justify-between mb-1">
                        <span>Monthly Investment</span>
                        <span className="font-semibold">${data["investment-capacity"]}</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span>Annual Investment</span>
                        <span className="font-semibold">${data["investment-capacity"] * 12}</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span>5-Year Projection</span>
                        <span className="font-semibold">${data["investment-capacity"] * 12 * 5 * 1.15}</span>
                      </div>
                    </div>
                    
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-financial-green">
                            Growth Potential
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-light-medium">
                        <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-ai-blue">
                          1yr
                        </div>
                        <div style={{ width: "35%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-financial-green">
                          3yr
                        </div>
                        <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-ownership-purple">
                          5yr
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-lg font-medium">Set your monthly investment to see growth projections</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
        
      case "summary":
        return (
          <div className="visualization-container">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold mb-2">Your Financial Independence Plan</h3>
              <p className="text-medium-dark">Personalized roadmap to financial freedom</p>
            </div>
            <div className="bg-gradient-to-br from-white to-light-cloud dark:from-night-mode dark:to-deep-space rounded-lg p-6 border border-light-medium dark:border-medium-dark shadow-sm">
              <div className="h-64 overflow-auto">
                {Object.keys(data).length >= 5 ? (
                  <div className="space-y-4">
                    <div className="p-3 bg-gradient-to-r from-ai-blue/10 to-financial-green/10 rounded-lg">
                      <h4 className="font-semibold mb-1">Financial Goal</h4>
                      <p className="capitalize">{data["financial-goals"]?.replace(/-/g, ' ') || "Not specified"}</p>
                    </div>
                    
                    <div className="p-3 bg-gradient-to-r from-ai-blue/10 to-financial-green/10 rounded-lg">
                      <h4 className="font-semibold mb-1">Monthly Requirements</h4>
                      <p>${data["monthly-expenses"] || 0}</p>
                    </div>
                    
                    <div className="p-3 bg-gradient-to-r from-ai-blue/10 to-financial-green/10 rounded-lg">
                      <h4 className="font-semibold mb-1">Current Portfolio</h4>
                      <p>{data["current-assets"]?.length || 0} asset types</p>
                    </div>
                    
                    <div className="p-3 bg-gradient-to-r from-ai-blue/10 to-financial-green/10 rounded-lg">
                      <h4 className="font-semibold mb-1">Growth Strategy</h4>
                      <p className="capitalize">{data["growth-outlook"]?.replace(/-/g, ' ') || "Not specified"}</p>
                    </div>
                    
                    <div className="p-3 bg-gradient-to-r from-ai-blue/10 to-financial-green/10 rounded-lg">
                      <h4 className="font-semibold mb-1">Monthly Investment</h4>
                      <p>${data["investment-capacity"] || 0}</p>
                    </div>
                    
                    <div className="p-3 bg-gradient-to-r from-ownership-purple/20 to-financial-green/20 rounded-lg border border-ownership-purple/30">
                      <h4 className="font-semibold mb-1">Estimated Time to Financial Independence</h4>
                      <p className="text-xl font-bold text-ownership-purple">
                        {calculateTimeToFI(data)} years
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <p className="text-lg font-medium">Complete all previous steps to see your full plan</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p>Select options to see visualization</p>
          </div>
        );
    }
  };
  
  // Helper function to calculate estimated time to financial independence
  const calculateTimeToFI = (data: any) => {
    // This is a simplified calculation for demonstration purposes
    // A real implementation would use more sophisticated financial modeling
    
    const monthlyExpenses = data["monthly-expenses"] || 3000;
    const monthlyInvestment = data["investment-capacity"] || 500;
    const growthRate = data["growth-outlook"] === "conservative" ? 0.07 : 
                       data["growth-outlook"] === "moderate" ? 0.10 :
                       data["growth-outlook"] === "aggressive" ? 0.15 : 0.20;
    
    // Target: 25x annual expenses (4% rule)
    const targetAmount = monthlyExpenses * 12 * 25;
    
    // Simple compound interest formula
    // FV = PMT × ((1 + r)^n - 1) / r
    // Solving for n: n = log(FV * r / PMT + 1) / log(1 + r)
    
    const annualInvestment = monthlyInvestment * 12;
    const yearsToFI = Math.log(targetAmount * growthRate / annualInvestment + 1) / Math.log(1 + growthRate);
    
    return Math.round(yearsToFI);
  };
  
  return (
    <div className="bg-white dark:bg-night-mode rounded-lg shadow-md p-4 h-full border border-light-medium/50 dark:border-medium-dark/50">
      {renderVisualization()}
    </div>
  );
}
