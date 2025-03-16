"use client";

export function AIPortfolioTab() {
  // Sample data - in a real app, this would come from an API or database
  const portfolioData = {
    totalValue: 125000,
    monthlyIncome: 1500,
    annualYield: 14.4,
    assets: [
      {
        name: "UBC Tokens",
        symbol: "UBC",
        quantity: 5000,
        price: 8.50,
        value: 42500,
        monthlyIncome: 350,
        annualYield: 9.9,
        color: "bg-ai-blue"
      },
      {
        name: "COMPUTE Tokens",
        symbol: "CMPT",
        quantity: 2500,
        price: 12.20,
        value: 30500,
        monthlyIncome: 320,
        annualYield: 12.6,
        color: "bg-financial-green"
      },
      {
        name: "Swarm Shares",
        symbol: "SWRM",
        quantity: 150,
        price: 180,
        value: 27000,
        monthlyIncome: 405,
        annualYield: 18.0,
        color: "bg-ownership-purple"
      },
      {
        name: "KinKong Investments",
        symbol: "KKI",
        quantity: 5,
        price: 5000,
        value: 25000,
        monthlyIncome: 425,
        annualYield: 20.4,
        color: "bg-warning"
      }
    ]
  };
  
  // Calculate percentages for the pie chart
  portfolioData.assets.forEach(asset => {
    asset.percentage = Math.round((asset.value / portfolioData.totalValue) * 100);
  });
  
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-light-cloud dark:bg-deep-space/50 rounded-lg p-6">
          <h3 className="text-sm font-medium text-medium-dark mb-2">Total Portfolio Value</h3>
          <div className="text-h3 font-bold">${portfolioData.totalValue.toLocaleString()}</div>
        </div>
        
        <div className="bg-light-cloud dark:bg-deep-space/50 rounded-lg p-6">
          <h3 className="text-sm font-medium text-medium-dark mb-2">Monthly Passive Income</h3>
          <div className="text-h3 font-bold text-financial-green">${portfolioData.monthlyIncome.toLocaleString()}</div>
        </div>
        
        <div className="bg-light-cloud dark:bg-deep-space/50 rounded-lg p-6">
          <h3 className="text-sm font-medium text-medium-dark mb-2">Annual Yield</h3>
          <div className="text-h3 font-bold text-ai-blue">{portfolioData.annualYield}%</div>
        </div>
        
        <div className="bg-light-cloud dark:bg-deep-space/50 rounded-lg p-6">
          <h3 className="text-sm font-medium text-medium-dark mb-2">Asset Classes</h3>
          <div className="text-h3 font-bold">{portfolioData.assets.length}</div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-h4 font-semibold mb-4">AI Asset Holdings</h3>
          <div className="bg-white dark:bg-night-mode rounded-lg shadow-sm p-6 border border-light-medium dark:border-medium-dark">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-light-medium dark:border-medium-dark">
                    <th className="text-left py-3 px-4">Asset</th>
                    <th className="text-right py-3 px-4">Quantity</th>
                    <th className="text-right py-3 px-4">Price</th>
                    <th className="text-right py-3 px-4">Value</th>
                    <th className="text-right py-3 px-4">Monthly Income</th>
                    <th className="text-right py-3 px-4">Yield</th>
                  </tr>
                </thead>
                <tbody>
                  {portfolioData.assets.map((asset, index) => (
                    <tr key={index} className="border-b border-light-medium/50 dark:border-medium-dark/50 hover:bg-light-cloud/50 dark:hover:bg-deep-space/30">
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${asset.color} mr-2`}></div>
                          <div>
                            <div className="font-medium">{asset.name}</div>
                            <div className="text-xs text-medium-dark">{asset.symbol}</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right py-4 px-4">{asset.quantity.toLocaleString()}</td>
                      <td className="text-right py-4 px-4">${asset.price.toFixed(2)}</td>
                      <td className="text-right py-4 px-4 font-medium">${asset.value.toLocaleString()}</td>
                      <td className="text-right py-4 px-4 text-financial-green font-medium">${asset.monthlyIncome}</td>
                      <td className="text-right py-4 px-4 text-ai-blue font-medium">{asset.annualYield}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-h4 font-semibold mb-4">Portfolio Allocation</h3>
          <div className="bg-white dark:bg-night-mode rounded-lg shadow-sm p-6 border border-light-medium dark:border-medium-dark h-full">
            <div className="relative pt-5 pb-5">
              {/* This is a simplified pie chart representation */}
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden relative">
                {portfolioData.assets.map((asset, index) => {
                  let rotation = 0;
                  for (let i = 0; i < index; i++) {
                    rotation += portfolioData.assets[i].percentage * 3.6; // 3.6 degrees per percentage point
                  }
                  
                  return (
                    <div 
                      key={index}
                      className={`absolute top-0 left-0 w-full h-full ${asset.color}`}
                      style={{ 
                        clipPath: `conic-gradient(from ${rotation}deg, transparent 0%, transparent 0%, currentColor 0%, currentColor ${asset.percentage}%, transparent ${asset.percentage}%)`,
                        color: 'currentColor'
                      }}
                    ></div>
                  );
                })}
                <div className="absolute inset-4 bg-white dark:bg-night-mode rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs text-medium-dark">Total Value</div>
                    <div className="font-bold">${portfolioData.totalValue.toLocaleString()}</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-2">
                {portfolioData.assets.map((asset, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${asset.color} mr-2`}></div>
                      <span>{asset.name}</span>
                    </div>
                    <div className="font-medium">{asset.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-ai-blue/10 to-financial-green/10 rounded-lg p-6 border border-ai-blue/20">
        <h3 className="text-h4 font-semibold mb-4">Portfolio Recommendations</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-night-mode rounded-lg p-4">
            <div className="flex items-start">
              <div className="bg-financial-green/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-financial-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Increase KinKong Allocation</h4>
                <p className="text-sm text-medium-dark">KinKong has your highest yield. Consider increasing allocation by 5-10%.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-night-mode rounded-lg p-4">
            <div className="flex items-start">
              <div className="bg-warning/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Rebalance UBC Tokens</h4>
                <p className="text-sm text-medium-dark">UBC tokens are 34% of your portfolio. Consider rebalancing to 25-30%.</p>
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
                <h4 className="font-semibold mb-1">New Asset Opportunity</h4>
                <p className="text-sm text-medium-dark">Consider adding SwarmVentures to your portfolio for additional diversification.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-night-mode rounded-lg p-4">
            <div className="flex items-start">
              <div className="bg-ownership-purple/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ownership-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Stake COMPUTE Tokens</h4>
                <p className="text-sm text-medium-dark">Staking your COMPUTE tokens could increase yield from 12.6% to 15.8%.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <button className="btn-primary">
            Get Detailed Portfolio Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
