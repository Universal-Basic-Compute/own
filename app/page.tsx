import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-ai-blue via-financial-green to-ownership-purple bg-clip-text text-transparent">
                Financial Independence Through AI Asset Ownership
              </h1>
              <p className="text-xl text-medium-dark dark:text-medium mb-8">
                Own.ai helps you visualize, plan, and achieve financial freedom through strategic investments in AI assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/onboarding" 
                  className="btn-primary text-center"
                >
                  Start Your Journey
                </Link>
                <Link 
                  href="/learn" 
                  className="btn-secondary text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-ai-blue/20 to-ownership-purple/20 rounded-lg transform rotate-3"></div>
                <div className="absolute inset-0 bg-white dark:bg-night-mode rounded-lg shadow-lg p-6 flex items-center justify-center">
                  <div className="w-full">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">Your Path to Freedom</h3>
                      <div className="w-full h-4 bg-light-medium dark:bg-medium-dark rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-ai-blue to-financial-green w-[65%]"></div>
                      </div>
                      <div className="flex justify-between mt-1 text-sm">
                        <span>Current: $2,450/mo</span>
                        <span>Goal: $3,800/mo</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-gradient-to-r from-ai-blue/10 to-financial-green/10 rounded-lg">
                        <div className="flex justify-between">
                          <span>UBC Tokens</span>
                          <span className="font-semibold">$850/mo</span>
                        </div>
                      </div>
                      <div className="p-3 bg-gradient-to-r from-ai-blue/10 to-financial-green/10 rounded-lg">
                        <div className="flex justify-between">
                          <span>COMPUTE Tokens</span>
                          <span className="font-semibold">$620/mo</span>
                        </div>
                      </div>
                      <div className="p-3 bg-gradient-to-r from-ai-blue/10 to-financial-green/10 rounded-lg">
                        <div className="flex justify-between">
                          <span>Swarm Shares</span>
                          <span className="font-semibold">$980/mo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-light dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Own.ai Works</h2>
            <p className="text-xl text-medium-dark dark:text-medium max-w-2xl mx-auto">
              Our platform helps you track and visualize your path to financial independence through AI asset ownership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-night-mode rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-ai-blue to-financial-green rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Planning</h3>
              <p className="text-medium-dark dark:text-medium">
                Answer a few questions about your financial goals and current situation to create a customized independence plan.
              </p>
            </div>
            
            <div className="bg-white dark:bg-night-mode rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-ai-blue to-financial-green rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Visual Progress Tracking</h3>
              <p className="text-medium-dark dark:text-medium">
                Track your journey with intuitive visualizations showing your progress toward financial independence.
              </p>
            </div>
            
            <div className="bg-white dark:bg-night-mode rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-ai-blue to-financial-green rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Asset Optimization</h3>
              <p className="text-medium-dark dark:text-medium">
                Get personalized recommendations to optimize your AI asset portfolio for maximum passive income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assets Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Assets for Financial Freedom</h2>
            <p className="text-xl text-medium-dark dark:text-medium max-w-2xl mx-auto">
              Discover the AI assets that can generate passive income and accelerate your path to financial independence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-night-mode rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-ai-blue"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">UBC Tokens</h3>
                <p className="text-medium-dark dark:text-medium mb-4">
                  Universal Basic Computing tokens that generate passive income through distributed computing networks.
                </p>
                <div className="flex items-center text-financial-green">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>8-12% Annual Yield</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-night-mode rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-financial-green"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">COMPUTE Tokens</h3>
                <p className="text-medium-dark dark:text-medium mb-4">
                  Tokenized computing resources that earn revenue from AI model training and inference operations.
                </p>
                <div className="flex items-center text-financial-green">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>10-15% Annual Yield</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-night-mode rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-ownership-purple"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Swarm Shares</h3>
                <p className="text-medium-dark dark:text-medium mb-4">
                  Ownership shares in decentralized AI swarm networks that provide services to businesses and individuals.
                </p>
                <div className="flex items-center text-financial-green">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>12-18% Annual Yield</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-night-mode rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-warning"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">KinKong Investments</h3>
                <p className="text-medium-dark dark:text-medium mb-4">
                  Fractional investments in high-performance AI models with revenue-sharing from commercial applications.
                </p>
                <div className="flex items-center text-financial-green">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>15-25% Annual Yield</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/learn" className="btn-secondary">
              Learn More About AI Assets
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-light dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-ai-blue to-ownership-purple rounded-lg shadow-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Start Your Journey to Financial Independence Today
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Complete our personalized assessment and get your custom AI asset ownership roadmap in minutes.
              </p>
              <Link 
                href="/onboarding" 
                className="inline-block px-8 py-4 bg-white text-ai-blue font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-opacity"
              >
                Create Your Plan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
