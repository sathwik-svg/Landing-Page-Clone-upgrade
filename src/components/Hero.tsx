import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { BlockEditorDemo } from './BlockEditorDemo';

interface HeroProps {
  onOpenSignup: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSignup }) => {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
      {/* Background radial gradient accent */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-neutral-100 to-transparent dark:from-neutral-900/40 dark:to-transparent -z-10 blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Value Proposition */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Subtle natural editorial kicker */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
            <span className="flex items-center gap-1.5 text-neutral-900 dark:text-neutral-100 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              Notion 3.0
            </span>
            <span aria-hidden="true">·</span>
            <span>Now with integrated enterprise AI &amp; connected docs</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-neutral-950 dark:text-neutral-50 [text-wrap:balance] leading-[1.08]">
            Write. Plan. Organize. <br className="hidden sm:inline" />
            <span className="text-neutral-500 dark:text-neutral-400 font-normal">All in one place.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            With Notion, all your work is connected. Create docs, manage sprints, centralize wikis, and automate workflows with integrated AI.
          </p>

          {/* Primary Action Button Cluster */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={onOpenSignup}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-150 active:scale-[0.98] cursor-pointer"
            >
              <span>Get Notion free</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#product-showcase"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-900 dark:hover:bg-neutral-800 rounded-xl transition-colors"
            >
              Explore workspace features
            </a>
          </div>

          {/* Unboxed reassurance metadata */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400 pt-1">
            <span>Free for individuals &amp; small teams</span>
            <span aria-hidden="true">·</span>
            <span>No credit card required</span>
            <span aria-hidden="true">·</span>
            <span>Used by 100M+ builders</span>
          </div>
        </div>

        {/* Embedded Interactive Block Editor Showcase */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Interactive Live Demo Sandbox
            </span>
          </div>
          <BlockEditorDemo />
        </div>
      </div>
    </section>
  );
};
