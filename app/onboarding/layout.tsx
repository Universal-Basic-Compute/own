import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Own.ai - Onboarding",
  description: "Start your journey to financial independence through AI asset ownership",
};

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-cloud to-paper-white dark:from-deep-space dark:to-night-mode flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto pt-12 pb-24 px-4 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
