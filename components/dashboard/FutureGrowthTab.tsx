"use client";

import { useState } from "react";

export function FutureGrowthTab() {
  const [timeframe, setTimeframe] = useState("3year");
  const [growthScenario, setGrowthScenario] = useState("moderate");
  
  // Sample data - in a real app, this would come from an API or database
  const projectionData = {
    currentPortfolioValue: 125000,
    currentMonthlyIncome: 1500,
    monthlyContribution: 2000,
    scenarios: {
      conservative: {
        annualGrowthRate: 8,
        description: "Lower risk, steady growth",
        projections: {
          "1year": {
            portfolioValue: 148600,
            monthlyIncome: 1780,
            tokenPrices: {
              UBC: 9.18,
              CMPT: 13.06,
              SWRM: 194.40,
              KKI: 5400
            }
          },
          "3year": {
            portfolioValue: 221000,
            monthlyIncome: 2650,
            tokenPrices: {
              UBC: 10.70,
              CMPT: 15.25,
              SWRM: 226.80,
              KKI: 6300
            }
          },
          "5year": {
            portfolioValue: 315000,
            monthlyIncome: 3780,
            tokenPrices: {
              UBC: 12.50,
              CMPT: 17.80,
              SWRM: 265.00,
              KKI: 7350
            }
          },
          "10year": {
            portfolioValue: 630000,
            monthlyIncome: 7560,
            tokenPrices: {
              UBC: 18.50,
              CMPT: 26.30,
              SWRM: 392.00,
              KKI: 10900
            }
          }
        }
      },
      moderate: {
        annualGrowthRate: 15,
        description: "Balanced risk and reward",
        projections: {
          "1year": {
            portfolioValue: 168750,
            monthlyIncome: 2025,
            tokenPrices: {
              UBC: 9.78,
              CMPT: 14.03,
              SWRM: 207.00,
              KKI: 5750
            }
          },
          "3year": {
            portfolioValue: 295000,
            monthlyIncome: 3540,
            tokenPrices: {
              UBC: 12.75,
              CMPT: 18.30,
              SWRM: 270.00,
              KKI: 7500
            }
          },
          "5year": {
            portfolioValue: 490000,
            monthlyIncome: 5880,
            tokenPrices: {
              UBC: 16.60,
              CMPT: 23.80,
              SWRM: 351.00,
              KKI: 9750
            }
          },
          "10year": {
            portfolioValue: 1250000,
            monthlyIncome: 15000,
            tokenPrices: {
              UBC: 33.20,
              CMPT: 47.60,
              SWRM: 702.00,
              KKI: 19500
            }
          }
        }
      },
      aggressive: {
        annualGrowthRate: 25,
        description: "Higher risk, potential for significant returns",
        projections: {
          "1year": {
            portfolioValue: 193750,
            monthlyIncome: 2325,
            tokenPrices: {
              UBC: 10.63,
              CMPT: 15.25,
              SWRM: 225.00,
              KKI: 6250
            }
          },
          "3year": {
            portfolioValue: 427000,
            monthlyIncome: 5125,
            tokenPrices: {
              UBC: 16.50,
              CMPT: 23.80,
              SWRM: 351.00,
              KKI: 9750
            }
          },
          "5year": {
            portfolioValue: 915000,
            monthlyIncome: 10980,
            tokenPrices: {
              UBC: 25.50,
              CMPT: 36.60,
              SWRM: 540.00,
              KKI: 15000
            }
          },
          "10year": {
            portfolioValue: 3500000,
            monthlyIncome: 42000,
            tokenPrices: {
              UBC: 76.50,
              CMPT: 109.80,
              SWRM: 1620.00,
              KKI: 45000
            }
          }
        }
      }
    }
  };
  
  const currentScenario = projectionData.scenarios[growthScenario as keyof typeof projectionData.scenarios];
  const currentProjection = currentScenario.projections[timeframe as keyof typeof currentScenario.projections];
  
  const timeframeOptions = [
    { value: "1year", label: "1 Year" },
    { value: "3year", label: "3 Years" },
    { value: "5year", label: "5 Years" },
    { value: "10year", label: "10 Years" }
  ];
  
  const scenarioOptions = [
    { value: "conservative", label: "Conservative" },
    { value: "moderate", label: "Moderate" },
    { value: "aggressive", label: "Aggressive" }
  ];
  
  // Calculate growth percentages
  const portfolioGrowthPercentage = Math.round((currentProjection.portfolioValue / projectionData.currentPortfolioValue - 1) * 100);
  const incomeGrowthPercentage = Math.round((currentProjection.monthlyIncome / projectionData.currentMonthlyIncome - 1) * 100);
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/2">
          <h3 className="text-h4 font-semibold mb-4">Growth Projections</h3>
          <p className="text-medium-dark dark:text-light-medium mb-6">
            Explore how your AI asset portfolio could grow over time based on different scenarios.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-medium-dark dark:text-light-medium mb-2">Timeframe</label>
              <select 
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="w-full p-3 border border-light-medium dark:border-medium-dark rounded-md bg-light-cloud dark:bg-deep-space"
              >
                {timeframeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-medium-dark dark:text-light-medium mb-2">Growth Scenario</label>
              <select 
                value={growthScenario}
                onChange={(e) => setGrowthScenario(e.target.value)}
                className="w-full p-3 border border-light-medium dark:border-medium-dark rounded-md bg-light-cloud dark:bg-deep-space"
              >
                {scenarioOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label} ({projectionData.scenarios[option.value as keyof typeof projectionData.scenarios].annualGrowthRate}%)
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="bg-light-cloud dark:bg-deep-space/50 rounded-lg p-4 mb-4">
            <div className="text-sm text-medium-dark dark:text-light-medium mb-1">Scenario Description</div>
            <div className="font-medium">{currentScenario.description}</div>
          </div>
          
          <div className="bg-light-cloud dark:bg-deep-space/50 rounded-lg p-4">
            <div className="text-sm text-medium-dark dark:text-light-medium mb-1">Monthly Contribution</div>
            <div className="font-medium">${projectionData.monthlyContribution}/month</div>
          </div>
        </div>
        
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-ai-blue/10 to-financial-green/10 rounded-lg p-6 flex flex-col justify-between">
            <div className="text-sm text-medium-dark dark:text-light-medium">Current Portfolio Value</div>
            <div className="text-h4 font-bold">${projectionData.currentPortfolioValue.toLocaleString()}</div>
          </div>
          
          <div className="bg-gradient-to-br from-ai-blue/10 to-financial-green/10 rounded-lg p-6 flex flex-col justify-between">
            <div className="text-sm text-medium-dark dark:text-light-medium">Projected Value</div>
            <div className="text-h4 font-bold text-financial-green">${currentProjection.portfolioValue.toLocaleString()}</div>
            <div className="text-sm text-financial-green">+{portfolioGrowthPercentage}%</div>
          </div>
          
          <div className="bg-gradient-to-br from-ai-blue/10 to-financial-green/10 rounded-lg p-6 flex flex-col justify-between">
            <div className="text-sm text-medium-dark dark:text-light-medium">Current Monthly Income</div>
            <div className="text-h4 font-bold">${projectionData.currentMonthlyIncome.toLocaleString()}</div>
          </div>
          
          <div className="bg-gradient-to-br from-ai-blue/10 to-financial-green/10 rounded-lg p-6 flex flex-col justify-between">
            <div className="text-sm text-medium-dark dark:text-light-medium">Projected Monthly Income</div>
            <div className="text-h4 font-bold text-financial-green">${currentProjection.monthlyIncome.toLocaleString()}</div>
            <div className="text-sm text-financial-green">+{incomeGrowthPercentage}%</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-night-mode rounded-lg shadow-sm p-6 border border-light-medium dark:border-medium-dark">
        <h3 className="text-h4 font-semibold mb-4">Portfolio Growth Visualization</h3>
        <div className="h-64 relative">
          {/* This is a simplified chart representation */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-1/4 h-1/5 bg-light-medium dark:bg-medium-dark flex items-center justify-center">
              <span className="text-xs">Now</span>
            </div>
            <div className="w-1/4 h-2/5 bg-ai-blue flex items-center justify-center">
              <span className="text-xs text-white">1yr</span>
            </div>
            <div className="w-1/4 h-3/5 bg-financial-green flex items-center justify-center">
              <span className="text-xs text-white">5yr</span>
            </div>
            <div className="w-1/4 h-4/5 bg-ownership-purple flex items-center justify-center">
              <span className="text-xs text-white">10yr</span>
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <span className="text-sm font-medium">Portfolio Value Growth</span>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-night-mode rounded-lg shadow-sm p-6 border border-light-medium dark:border-medium-dark">
          <h3 className="text-h4 font-semibold mb-4">Token Price Projections</h3>
          <div className="space-y-4">
            {Object.entries(currentProjection.tokenPrices).map(([token, price]) => {
              const currentPrice = token === "UBC" ? 8.50 :
                                  token === "CMPT" ? 12.20 :
                                  token === "SWRM" ? 180 : 5000;
              const growthPercentage = Math.round((price / currentPrice - 1) * 100);
              
              return (
                <div key={token}>
                  <div className="flex justify-between mb-1">
                    <span>{token}</span>
                    <div>
                      <span className="font-semibold">${typeof price === 'number' ? price.toFixed(2) : price}</span>
                      <span className="text-financial-green ml-2">+{growthPercentage}%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-light-medium dark:bg-medium-dark rounded-full overflow-hidden">
                    <div className="h-full bg-ai-blue" style={{ width: `${Math.min(100, growthPercentage)}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="bg-white dark:bg-night-mode rounded-lg shadow-sm p-6 border border-light-medium dark:border-medium-dark">
          <h3 className="text-h4 font-semibold mb-4">Financial Independence Milestones</h3>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="relative flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-ai-blue flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="absolute w-1 h-16 bg-light-medium dark:bg-medium-dark -bottom-16 left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Basic Income</h4>
                <p className="text-sm text-medium-dark">$2,000/month passive income</p>
                <p className="text-xs text-financial-green">Projected: 14 months</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="relative flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-financial-green flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="absolute w-1 h-16 bg-light-medium dark:bg-medium-dark -bottom-16 left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Half Freedom</h4>
                <p className="text-sm text-medium-dark">$3,500/month passive income</p>
                <p className="text-xs text-financial-green">Projected: 2.5 years</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="relative flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-ownership-purple flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Financial Independence</h4>
                <p className="text-sm text-medium-dark">$7,000/month passive income</p>
                <p className="text-xs text-financial-green">Projected: 5.2 years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-ai-blue/10 to-financial-green/10 rounded-lg p-6 border border-ai-blue/20">
        <h3 className="text-h4 font-semibold mb-4">Accelerate Your Timeline</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-night-mode rounded-lg p-4">
            <div className="flex items-start">
              <div className="bg-financial-green/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-financial-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Increase Monthly Contribution</h4>
                <p className="text-sm text-medium-dark">Adding $500/month would accelerate your timeline by 1.3 years.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-night-mode rounded-lg p-4">
            <div className="flex items-start">
              <div className="bg-ai-blue/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ai-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Optimize Asset Allocation</h4>
                <p className="text-sm text-medium-dark">Shifting 15% to higher-yield assets could save 8 months.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-night-mode rounded-lg p-4">
            <div className="flex items-start">
              <div className="bg-ownership-purple/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ownership-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Reduce Monthly Expenses</h4>
                <p className="text-sm text-medium-dark">Cutting $700/month in expenses would achieve freedom 1.8 years sooner.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <button className="btn-primary">
            Create Custom Growth Scenario
          </button>
        </div>
      </div>
    </div>
  );
}
