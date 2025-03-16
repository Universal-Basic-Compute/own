"use client";

export function IndependenceTrackerTab() {
  // Sample data - in a real app, this would come from an API or database
  const independenceData = {
    currentPassiveIncome: 1500,
    targetPassiveIncome: 7000,
    progressPercentage: 21,
    monthsRemaining: 62,
    projectedFreedomDate: "October 2029",
    milestones: [
      {
        name: "Started Journey",
        date: "May 2023",
        description: "Began investing in AI assets",
        completed: true
      },
      {
        name: "First $500/month",
        date: "December 2023",
        description: "Reached $500 in monthly passive income",
        completed: true
      },
      {
        name: "Basic Income",
        date: "March 2025",
        description: "Projected to reach $2,000/month",
        completed: false,
        daysRemaining: 240
      },
      {
        name: "Half Freedom",
        date: "November 2026",
        description: "Projected to reach $3,500/month",
        completed: false,
        daysRemaining: 860
      },
      {
        name: "Financial Independence",
        date: "October 2029",
        description: "Projected to reach $7,000/month",
        completed: false,
        daysRemaining: 1860
      }
    ],
    recentAchievements: [
      {
        title: "Portfolio Milestone",
        description: "Reached $125,000 in total portfolio value",
        date: "Last week"
      },
      {
        title: "Income Growth",
        description: "Passive income increased by $150/month",
        date: "This month"
      },
      {
        title: "New Asset Added",
        description: "Added KinKong investments to your portfolio",
        date: "2 months ago"
      }
    ],
    nextActions: [
      {
        title: "Rebalance Portfolio",
        description: "Adjust asset allocation for optimal growth",
        impact: "Medium",
        timeEstimate: "1 hour"
      },
      {
        title: "Increase COMPUTE Token Holdings",
        description: "Add $2,500 in COMPUTE tokens",
        impact: "High",
        timeEstimate: "30 minutes"
      },
      {
        title: "Review Expense Reduction",
        description: "Identify areas to reduce monthly expenses",
        impact: "High",
        timeEstimate: "2 hours"
      }
    ]
  };
  
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "bg-financial-green text-white";
      case "Medium":
        return "bg-ai-blue text-white";
      case "Low":
        return "bg-light-medium text-dark";
      default:
        return "bg-light-medium text-dark";
    }
  };
  
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-ai-blue/10 to-financial-green/10 rounded-lg p-6 border border-ai-blue/20">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-ai-blue/10 to-deep-space/90 rounded-lg p-4 text-center border border-ai-blue/20 shadow-md">
            <h3 className="text-sm font-medium text-medium-dark dark:text-light-medium mb-2">Current Passive Income</h3>
            <div className="text-h3 font-bold text-ai-blue">${independenceData.currentPassiveIncome}/mo</div>
          </div>
          
          <div className="bg-gradient-to-br from-financial-green/10 to-deep-space/90 rounded-lg p-4 text-center border border-financial-green/20 shadow-md">
            <h3 className="text-sm font-medium text-medium-dark dark:text-light-medium mb-2">Target for Freedom</h3>
            <div className="text-h3 font-bold text-financial-green">${independenceData.targetPassiveIncome}/mo</div>
          </div>
          
          <div className="bg-gradient-to-br from-ownership-purple/10 to-deep-space/90 rounded-lg p-4 text-center border border-ownership-purple/20 shadow-md">
            <h3 className="text-sm font-medium text-medium-dark dark:text-light-medium mb-2">Months Remaining</h3>
            <div className="text-h3 font-bold text-ownership-purple">{independenceData.monthsRemaining}</div>
          </div>
        </div>
        
        <div className="mb-2">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-medium-dark dark:text-light-medium">Progress to Financial Independence</span>
            <span className="text-sm font-medium">{independenceData.progressPercentage}%</span>
          </div>
          <div className="w-full h-4 bg-light-medium dark:bg-medium-dark rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-ai-blue via-financial-green to-ownership-purple"
              style={{ width: `${independenceData.progressPercentage}%` }}
            ></div>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <div className="text-sm text-medium-dark dark:text-light-medium mb-1">Projected Freedom Date</div>
          <div className="text-h4 font-bold">{independenceData.projectedFreedomDate}</div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-h4 font-semibold mb-4">Your Freedom Journey</h3>
          <div className="bg-white dark:bg-night-mode rounded-lg shadow-sm p-6 border border-light-medium dark:border-medium-dark">
            <div className="space-y-8">
              {independenceData.milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Vertical line connecting milestones */}
                  {index < independenceData.milestones.length - 1 && (
                    <div className={`absolute top-10 left-4 w-0.5 h-full -ml-px ${milestone.completed ? 'bg-financial-green' : 'bg-light-medium dark:bg-medium-dark'}`}></div>
                  )}
                  
                  <div className="flex">
                    <div className={`relative flex items-center justify-center w-8 h-8 rounded-full ${
                      milestone.completed 
                        ? 'bg-financial-green text-white' 
                        : 'bg-light-medium dark:bg-medium-dark text-medium-dark dark:text-light'
                    } z-10`}>
                      {milestone.completed ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-sm">{index + 1}</span>
                      )}
                    </div>
                    
                    <div className="ml-4 pb-8">
                      <div className="flex items-center">
                        <h4 className="font-semibold">{milestone.name}</h4>
                        <span className="ml-2 text-sm text-medium-dark">{milestone.date}</span>
                      </div>
                      <p className="text-sm text-medium-dark dark:text-light-medium mt-1">{milestone.description}</p>
                      
                      {!milestone.completed && milestone.daysRemaining && (
                        <div className="mt-2 text-xs text-ai-blue">
                          {milestone.daysRemaining} days remaining
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-h4 font-semibold mb-4">Recent Achievements</h3>
            <div className="bg-white dark:bg-night-mode rounded-lg shadow-sm p-6 border border-light-medium dark:border-medium-dark">
              <div className="space-y-4">
                {independenceData.recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-financial-green/20 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-financial-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-medium-dark dark:text-light-medium">{achievement.description}</p>
                      <div className="text-xs text-medium-dark dark:text-light-medium mt-1">{achievement.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-h4 font-semibold mb-4">Priority Actions</h3>
            <div className="bg-white dark:bg-night-mode rounded-lg shadow-sm p-6 border border-light-medium dark:border-medium-dark">
              <div className="space-y-4">
                {independenceData.nextActions.map((action, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className={`text-xs px-2 py-1 rounded-full ${getImpactColor(action.impact)}`}>
                        {action.impact}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{action.title}</h4>
                      <p className="text-sm text-medium-dark dark:text-light-medium">{action.description}</p>
                      <div className="text-xs text-medium-dark dark:text-light-medium mt-1">Estimated time: {action.timeEstimate}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="btn-primary">
                  Complete Priority Actions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
