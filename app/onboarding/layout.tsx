import type { Metadata } from "next";

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
    <div className="max-w-4xl mx-auto pt-12 pb-24 px-4 w-full bg-gradient-to-br from-light-cloud to-paper-white dark:from-deep-space/50 dark:to-night-mode">
      {children}
    </div>
  );
}
