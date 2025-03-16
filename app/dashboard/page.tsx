"use client";

import { useState } from "react";
import { DisplacementTab } from "@/components/dashboard/DisplacementTab";
import { CashFlowTab } from "@/components/dashboard/CashFlowTab";
import { AIPortfolioTab } from "@/components/dashboard/AIPortfolioTab";
import { FutureGrowthTab } from "@/components/dashboard/FutureGrowthTab";
import { IndependenceTrackerTab } from "@/components/dashboard/IndependenceTrackerTab";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("displacement");

  const tabs = [
    { id: "displacement", label: "Displacement Risk" },
    { id: "cashflow", label: "Cash Flow" },
    { id: "portfolio", label: "AI Portfolio" },
    { id: "growth", label: "Future Growth" },
    { id: "independence", label: "Independence Tracker" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "displacement":
        return <DisplacementTab />;
      case "cashflow":
        return <CashFlowTab />;
      case "portfolio":
        return <AIPortfolioTab />;
      case "growth":
        return <FutureGrowthTab />;
      case "independence":
        return <IndependenceTrackerTab />;
      default:
        return <DisplacementTab />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      {/* Add colorful background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-ai-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-ownership-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-financial-green/10 rounded-full filter blur-3xl"></div>
      <div className="relative z-10">
      <div className="mb-8">
        <h1 className="text-h1 font-bold mb-4 bg-gradient-to-r from-ai-blue via-financial-green to-ownership-purple bg-clip-text text-transparent">
          Your Financial Independence Dashboard
        </h1>
        <p className="text-body-1 text-medium-dark dark:text-medium max-w-3xl">
          Track your journey to financial freedom through AI asset ownership. Monitor your displacement risk, current finances, AI portfolio, growth projections, and independence progress.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6 border-b border-light-medium/30 dark:border-medium-dark/30 bg-gradient-to-r from-deep-space/50 via-night-mode/50 to-deep-space/50 rounded-t-lg p-1">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-sm transition-all whitespace-nowrap rounded-t-lg ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-ai-blue/20 to-financial-green/20 text-white border-b-2 border-financial-green"
                  : "text-medium-dark hover:bg-night-mode/50 dark:text-medium dark:hover:text-light"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-gradient-to-br from-night-mode to-deep-space rounded-lg shadow-lg border border-medium-dark/30 p-6">
        {renderTabContent()}
      </div>
    </div>
    </div>
  );
}
