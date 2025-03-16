"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-light-medium dark:border-medium-dark">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-montserrat font-bold text-2xl bg-gradient-to-r from-ai-blue to-financial-green bg-clip-text text-transparent">
          Own.ai
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-medium-dark hover:text-dark dark:text-medium dark:hover:text-light"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/dashboard" className="text-medium-dark hover:text-ai-blue transition-colors">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/learn" className="text-medium-dark hover:text-ai-blue transition-colors">
                Learn
              </Link>
            </li>
            <li>
              <Link href="/help" className="text-medium-dark hover:text-ai-blue transition-colors">
                Help
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-medium-dark hover:text-ai-blue transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-light dark:bg-night-mode border-b border-light-medium dark:border-medium-dark animate-slide-down">
          <nav>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/dashboard" 
                  className="block py-2 px-4 text-medium-dark hover:text-ai-blue hover:bg-light-cloud dark:hover:bg-deep-space rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  href="/learn" 
                  className="block py-2 px-4 text-medium-dark hover:text-ai-blue hover:bg-light-cloud dark:hover:bg-deep-space rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Learn
                </Link>
              </li>
              <li>
                <Link 
                  href="/help" 
                  className="block py-2 px-4 text-medium-dark hover:text-ai-blue hover:bg-light-cloud dark:hover:bg-deep-space rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Help
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block py-2 px-4 text-medium-dark hover:text-ai-blue hover:bg-light-cloud dark:hover:bg-deep-space rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
