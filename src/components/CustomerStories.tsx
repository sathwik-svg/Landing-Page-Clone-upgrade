import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, TrendingUp, Clock, Users } from 'lucide-react';

interface Story {
  company: string;
  quote: string;
  author: string;
  role: string;
  metric: string;
  metricLabel: string;
}

const STORIES: Story[] = [
  {
    company: 'Figma',
    quote: 'Notion replaced four disconnected tools across engineering and product design. New hires now ramp up and submit their first pull request within 3 days instead of 2 weeks.',
    author: 'Amanda Kleha',
    role: 'Chief Customer Officer at Figma',
    metric: '45%',
    metricLabel: 'Faster engineering onboarding time',
  },
  {
    company: 'OpenAI',
    quote: 'We run our research sprints, safety protocols, and internal knowledge indexing directly on Notion. It provides the flexibility required for rapid frontier research.',
    author: 'Boris Power',
    role: 'Principal Researcher at OpenAI',
    metric: '100%',
    metricLabel: 'Research sprint consolidation',
  },
  {
    company: 'Ramp',
    quote: 'The ability to link company roadmaps directly to customer feedback and financial metrics saved our operations team over 320 hours every single month.',
    author: 'Geoff Charles',
    role: 'VP of Product at Ramp',
    metric: '320h',
    metricLabel: 'Monthly operational hours saved',
  },
];

export const CustomerStories: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevStory = () => {
    setActiveIdx((activeIdx - 1 + STORIES.length) % STORIES.length);
  };

  const nextStory = () => {
    setActiveIdx((activeIdx + 1) % STORIES.length);
  };

  const current = STORIES[activeIdx];

  return (
    <section id="customer-stories" className="py-20 sm:py-28 border-y border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Real teams. Measurable outcomes.
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-neutral-950 dark:text-neutral-50 [text-wrap:balance]">
            Trusted by teams that ship fast.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 [text-wrap:balance]">
            From high-growth unicorns to established enterprises, see how teams streamline collaboration.
          </p>
        </div>

        {/* Quantified Metrics Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 tabular-nums">
              100M+
            </p>
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Active builders and operators</p>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-blue-600 dark:text-blue-400 tabular-nums">
              45%
            </p>
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Faster onboarding across orgs</p>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400 tabular-nums">
              2.8x
            </p>
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Increase in cross-team visibility</p>
          </div>
        </div>

        {/* Interactive Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12 shadow-sm relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-6 flex-1">
              <span className="text-xs font-bold font-display uppercase tracking-widest text-neutral-400">
                {current.company} Spotlight
              </span>

              <p className="text-lg sm:text-xl font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed italic">
                "{current.quote}"
              </p>

              <div>
                <p className="font-display font-bold text-sm sm:text-base text-neutral-950 dark:text-neutral-50">
                  {current.author}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {current.role}
                </p>
              </div>
            </div>

            {/* Impact Metric Badge Box */}
            <div className="w-full md:w-56 p-5 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 text-center shrink-0 space-y-1">
              <p className="text-3xl sm:text-4xl font-display font-black text-neutral-900 dark:text-neutral-100 tabular-nums">
                {current.metric}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-tight">
                {current.metricLabel}
              </p>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between pt-8 border-t border-neutral-100 dark:border-neutral-800/80 mt-8">
            <div className="flex items-center gap-1.5">
              {STORIES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeIdx === i ? 'w-6 bg-neutral-900 dark:bg-neutral-100' : 'w-2 bg-neutral-300 dark:bg-neutral-700'
                  }`}
                  aria-label={`Jump to story ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevStory}
                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
                aria-label="Previous customer story"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextStory}
                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
                aria-label="Next customer story"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
