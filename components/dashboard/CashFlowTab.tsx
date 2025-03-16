"use client";

export function CashFlowTab() {
  // Sample data - in a real app, this would come from an API or database
  const financialData = {
    income: {
      salary: 6500,
      freelance: 1200,
      investments: 800,
      passive: 1500
    },
    expenses: {
      housing: 2200,
      transportation: 600,
      food: 800,
      utilities: 400,
      entertainment: 500,
      other: 700
    }
  };
  
  const totalIncome = Object.values(financialData.income).reduce((sum, value) => sum + value, 0);
  const totalExpenses = Object.values(financialData.expenses).reduce((sum, value) => sum + value, 0);
  const netCashFlow = totalIncome - totalExpenses;
  const savingsRate = Math.round((netCashFlow / totalIncome) * 100);
  const passiveIncome = financialData.income.passive;
  const freedomGap = totalExpenses - passiveIncome;
  const freedomPercentage = Math.min(100, Math.round((passiveIncome / totalExpenses) * 100));
  
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-light-cloud dark:bg-deep-space/50 rounded-lg p-6">
          <h3 className="text-h4 font-semibold mb-4">Monthly Net Cash Flow</h3>
          <div className="flex items-end gap-2">
            <span className={`text-h2 font-bold ${netCashFlow >= 0 ? 'text-financial-green' : 'text-error'}`}>
              ${netCashFlow.toLocaleString()}
            </span>
            <span className="text-medium-dark dark:text-medium mb-1">/ month</span>
          </div>
          <div className="mt-2 text-sm text-medium-dark">
            Savings Rate: <span className="font-semibold">{savingsRate}%</span>
          </div>
        </div>
        
        <div className="bg-light-cloud dark:bg-deep-space/50 rounded-lg p-6">
          <h3 className="text-h4 font-semibold mb-4">Freedom Gap</h3>
          <div className="flex items-end gap-2">
            <span className="text-h2 font-bold text-warning">
              ${freedomGap.toLocaleString()}
            </span>
            <span className="text-medium-dark dark:text-medium mb-1">/ month</span>
          </div>
          <div className="mt-2 text-sm text-medium-dark">
            Amount needed to close the gap between expenses and passive income
          </div>
        </div>
        
        <div className="bg-light-cloud dark:bg-deep-space/50 rounded-lg p-6">
          <h3 className="text-h4 font-semibold mb-4">Freedom Progress</h3>
          <div className="mb-2">
            <div className="w-full h-4 bg-light-medium dark:bg-medium-dark rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-ai-blue to-financial-green"
                style={{ width: `${freedomPercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-medium-dark">
            <span>{freedomPercentage}% covered by passive income</span>
            <span>${passiveIncome.toLocaleString()} / ${totalExpenses.toLocaleString()}</span>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-h4 font-semibold mb-4">Income Breakdown</h3>
          <div className="bg-white dark:bg-night-mode rounded-lg shadow-sm p-6 border border-light-medium dark:border-medium-dark">
            <div className="space-y-4">
              {Object.entries(financialData.income).map(([category, amount]) => {
                const percentage = Math.round((amount / totalIncome) * 100);
                const colors = {
                  salary: "bg-ai-blue",
                  freelance: "bg-ownership-purple",
                  investments: "bg-financial-green",
                  passive: "bg-warning"
                };
                const color = colors[category as keyof typeof colors] || "bg-medium";
                
                return (
                  <div key={category}>
                    <div className="flex justify-between mb-1">
                      <span className="capitalize">{category}</span>
                      <div>
                        <span className="font-semibold">${amount.toLocaleString()}</span>
                        <span className="text-medium-dark ml-2">({percentage}%)</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-light-medium dark:bg-medium-dark rounded-full overflow-hidden">
                      <div className={`h-full ${color}`} style={{ width: `${percentage}%` }}></div>
                    </div>
                  </div>
                );
              })}
              
              <div className="pt-4 border-t border-light-medium dark:border-medium-dark">
                <div className="flex justify-between">
                  <span className="font-semibold">Total Income</span>
                  <span className="font-semibold">${totalIncome.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-h4 font-semibold mb-4">Expense Breakdown</h3>
          <div className="bg-white dark:bg-night-mode rounded-lg shadow-sm p-6 border border-light-medium dark:border-medium-dark">
            <div className="space-y-4">
              {Object.entries(financialData.expenses).map(([category, amount]) => {
                const percentage = Math.round((amount / totalExpenses) * 100);
                const colors = {
                  housing: "bg-ai-blue",
                  transportation: "bg-ownership-purple",
                  food: "bg-financial-green",
                  utilities: "bg-warning",
                  entertainment: "bg-error",
                  other: "bg-medium"
                };
                const color = colors[category as keyof typeof colors] || "bg-medium";
                
                return (
                  <div key={category}>
                    <div className="flex justify-between mb-1">
                      <span className="capitalize">{category}</span>
                      <div>
                        <span className="font-semibold">${amount.toLocaleString()}</span>
                        <span className="text-medium-dark ml-2">({percentage}%)</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-light-medium dark:bg-medium-dark rounded-full overflow-hidden">
                      <div className={`h-full ${color}`} style={{ width: `${percentage}%` }}></div>
                    </div>
                  </div>
                );
              })}
              
              <div className="pt-4 border-t border-light-medium dark:border-medium-dark">
                <div className="flex justify-between">
                  <span className="font-semibold">Total Expenses</span>
                  <span className="font-semibold">${totalExpenses.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-ai-blue/10 to-financial-green/10 rounded-lg p-6 border border-ai-blue/20">
        <h3 className="text-h4 font-semibold mb-4">Optimization Opportunities</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-night-mode rounded-lg p-4">
            <div className="flex items-start">
              <div className="bg-financial-green/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-financial-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Increase Passive Income</h4>
                <p className="text-sm text-medium-dark">Allocate 50% of your savings to AI assets for higher passive income growth.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-night-mode rounded-lg p-4">
            <div className="flex items-start">
              <div className="bg-warning/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Reduce Housing Costs</h4>
                <p className="text-sm text-medium-dark">Your housing costs are 34% of expenses. Consider downsizing to accelerate your timeline.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-night-mode rounded-lg p-4">
            <div className="flex items-start">
              <div className="bg-ai-blue/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ai-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Diversify Income Streams</h4>
                <p className="text-sm text-medium-dark">You rely heavily on salary income. Add 1-2 more passive income sources for stability.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-night-mode rounded-lg p-4">
            <div className="flex items-start">
              <div className="bg-ownership-purple/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ownership-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Optimize Entertainment Spending</h4>
                <p className="text-sm text-medium-dark">Reducing entertainment by 20% would add $1,200/year to your investments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
