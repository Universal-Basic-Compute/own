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
      <div className="absolute top-0 left-0 w-64 h-64 bg-ai-blue/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ownership-purple/20 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-financial-green/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-warning/15 rounded-full filter blur-3xl"></div>
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
      <div className="mb-6 border-b border-light-medium/30 dark:border-medium-dark/30 bg-gradient-to-r from-ai-blue/20 via-ownership-purple/20 to-financial-green/20 rounded-t-lg p-1">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-sm transition-all whitespace-nowrap rounded-t-lg ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-ai-blue/30 to-financial-green/30 text-white border-b-2 border-financial-green"
                  : "text-medium-dark hover:bg-ownership-purple/20 dark:text-medium dark:hover:text-light"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-gradient-to-br from-night-mode via-deep-space/90 to-deep-space rounded-lg shadow-lg border border-medium-dark/30 p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ai-blue/5 via-ownership-purple/5 to-financial-green/5 opacity-50"></div>
        <div className="relative z-10">
          {renderTabContent()}
        </div>
      </div>
    </div>
    </div>
  );
}
