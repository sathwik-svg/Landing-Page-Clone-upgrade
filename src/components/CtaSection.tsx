import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CtaSectionProps {
  onOpenSignup: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenSignup }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid work email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    setTimeout(() => {
      onOpenSignup();
      setSubmitted(false);
      setEmail('');
    }, 400);
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-neutral-50 dark:bg-neutral-900/40 p-8 sm:p-16 rounded-3xl border border-neutral-200 dark:border-neutral-800">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-neutral-950 dark:text-neutral-50 [text-wrap:balance]">
              Get started for free.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto [text-wrap:balance]">
              Play around with docs, roadmaps, and wikis before inviting your team.
            </p>
          </div>

          {/* Interactive Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Enter your work email..."
                className="w-full px-4 py-3 text-sm bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-all"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 rounded-xl shadow-xs transition-all active:scale-[0.98] whitespace-nowrap cursor-pointer shrink-0"
              >
                {submitted ? 'Starting...' : 'Get started'}
              </button>
            </div>

            {error && (
              <p className="text-xs text-red-500 text-left">{error}</p>
            )}

            {submitted && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Opening your personalized workspace...</span>
              </p>
            )}
          </form>

          {/* Reassurance metadata */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400 pt-2">
            <span>Free for individuals &amp; teams</span>
            <span aria-hidden="true">·</span>
            <span>No credit card required</span>
            <span aria-hidden="true">·</span>
            <span>SOC2 Type II Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};
