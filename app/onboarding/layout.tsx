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
    <div className="min-h-screen bg-gradient-to-br from-light-cloud to-paper-white dark:from-deep-space dark:to-night-mode">
      <header className="border-b border-light-medium dark:border-medium-dark">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-montserrat font-bold text-2xl bg-gradient-to-r from-ai-blue to-financial-green bg-clip-text text-transparent">
            Own.ai
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li className="text-medium-dark hover:text-ai-blue transition-colors">Help</li>
              <li className="text-medium-dark hover:text-ai-blue transition-colors">Contact</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto pt-12 pb-24 px-4">
        {children}
      </main>
      <footer className="border-t border-light-medium dark:border-medium-dark py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-medium-dark">
          <p>© 2023 Own.ai - Your path to financial independence through AI asset ownership</p>
        </div>
      </footer>
    </div>
  );
}
