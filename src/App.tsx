import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ProductTabs } from './components/ProductTabs';
import { BentoFeatures } from './components/BentoFeatures';
import { TemplateGallery } from './components/TemplateGallery';
import { CustomerStories } from './components/CustomerStories';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { LayoutInspector } from './components/LayoutInspector';
import { SignupModal } from './components/SignupModal';
import { RotateCcw } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [showGrid, setShowGrid] = useState(false);
  const [showOutlines, setShowOutlines] = useState(false);
  const [activeWidthPreset, setActiveWidthPreset] = useState<string>('full');
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // Synchronize darkMode with documentElement and body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark', 'bg-neutral-950', 'text-neutral-50');
      document.body.classList.remove('bg-white', 'text-neutral-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark', 'bg-neutral-950', 'text-neutral-50');
      document.body.classList.add('bg-white', 'text-neutral-900');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Determine width simulation container styles
  const getContainerMaxWidth = () => {
    switch (activeWidthPreset) {
      case '1440':
        return 'max-w-[1440px] mx-auto shadow-2xl border-x border-neutral-200 dark:border-neutral-800 transition-all';
      case '1024':
        return 'max-w-[1024px] mx-auto shadow-2xl border-x border-neutral-200 dark:border-neutral-800 transition-all';
      case '768':
        return 'max-w-[768px] mx-auto shadow-2xl border-x border-neutral-200 dark:border-neutral-800 transition-all';
      case '390':
        return 'max-w-[390px] mx-auto shadow-2xl border-x border-neutral-200 dark:border-neutral-800 transition-all';
      default:
        return 'w-full';
    }
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-neutral-950 transition-colors ${showGrid ? 'inspect-grid-active' : ''} ${showOutlines ? 'inspect-outlines-active' : ''}`}>
      {/* Breakpoint Simulation Notice Banner if non-full */}
      {activeWidthPreset !== 'full' && (
        <div className="sticky top-0 z-50 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 px-4 py-2 text-xs flex items-center justify-between border-b border-neutral-700">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold">Simulating Viewport: {activeWidthPreset}px</span>
            <span className="opacity-75">· Test responsive layout adaptation</span>
          </div>
          <button
            type="button"
            onClick={() => setActiveWidthPreset('full')}
            className="flex items-center gap-1 text-[11px] font-semibold underline hover:opacity-80 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset to 100% Fluid</span>
          </button>
        </div>
      )}

      {/* Main Viewport Container (can be constrained when testing breakpoints) */}
      <div className={getContainerMaxWidth()}>
        <Navbar 
          darkMode={darkMode} 
          onToggleDarkMode={toggleDarkMode} 
          onOpenSignup={() => setIsSignupOpen(true)} 
        />

        <main>
          <Hero onOpenSignup={() => setIsSignupOpen(true)} />
          <SocialProof />
          <ProductTabs />
          <BentoFeatures />
          <TemplateGallery onOpenSignup={() => setIsSignupOpen(true)} />
          <CustomerStories />
          <CtaSection onOpenSignup={() => setIsSignupOpen(true)} />
        </main>

        <Footer />
      </div>

      {/* Interactive Layout & Breakpoint Inspector Overlay */}
      <LayoutInspector
        showGrid={showGrid}
        onToggleGrid={() => setShowGrid(!showGrid)}
        showOutlines={showOutlines}
        onToggleOutlines={() => setShowOutlines(!showOutlines)}
        activeWidthPreset={activeWidthPreset}
        onSelectWidthPreset={(preset) => setActiveWidthPreset(preset)}
      />

      {/* Interactive Signup & Workspace Creator Modal */}
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)} 
      />
    </div>
  );
}
