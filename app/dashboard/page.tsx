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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-h1 font-bold mb-4 bg-gradient-to-r from-ai-blue via-financial-green to-ownership-purple bg-clip-text text-transparent">
          Your Financial Independence Dashboard
        </h1>
        <p className="text-body-1 text-medium-dark dark:text-medium max-w-3xl">
          Track your journey to financial freedom through AI asset ownership. Monitor your displacement risk, current finances, AI portfolio, growth projections, and independence progress.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6 border-b border-light-medium dark:border-medium-dark">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-b-2 border-ai-blue text-ai-blue dark:text-ai-blue"
                  : "text-medium-dark hover:text-dark dark:text-medium dark:hover:text-light"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-night-mode rounded-lg shadow-lg border border-light-medium dark:border-medium-dark p-6">
        {renderTabContent()}
      </div>
    </div>
  );
}
