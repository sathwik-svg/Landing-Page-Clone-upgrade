import React, { useState } from 'react';
import { X, Check, Sparkles, Building2, User, ArrowRight } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState('');
  const [usageType, setUsageType] = useState<'team' | 'personal'>('team');
  const [workspaceName, setWorkspaceName] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    const defaultName = email.split('@')[0] + "'s Workspace";
    setWorkspaceName(defaultName);
    setStep(2);
  };

  const handleStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white dark:bg-neutral-900 max-w-md w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* STEP 1: Email Capture */}
        {step === 1 && (
          <form onSubmit={handleStep1} className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 flex items-center justify-center font-serif font-black text-xl">
                N
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-neutral-100">
                  Welcome to Notion
                </h3>
                <p className="text-xs text-neutral-500">Free forever. No credit card required.</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                Work or personal email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100"
              />
              {error && <p className="text-xs text-red-500">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Continue with Email →
            </button>

            <div className="text-center">
              <p className="text-[11px] text-neutral-400">
                By continuing, you agree to Notion's Terms and Privacy Policy.
              </p>
            </div>
          </form>
        )}

        {/* STEP 2: Workspace Setup */}
        {step === 2 && (
          <form onSubmit={handleStep2} className="space-y-5">
            <div>
              <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-neutral-100">
                How will you use Notion?
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">We'll customize your templates accordingly.</p>
            </div>

            {/* Segmented radio cards */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUsageType('team')}
                className={`p-4 rounded-xl border text-left space-y-2 transition-all cursor-pointer ${
                  usageType === 'team'
                    ? 'border-neutral-900 dark:border-neutral-100 bg-neutral-50 dark:bg-neutral-800/80 ring-1 ring-neutral-900 dark:ring-neutral-100'
                    : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/40'
                }`}
              >
                <Building2 className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                <div>
                  <p className="font-semibold text-xs text-neutral-900 dark:text-neutral-100">With my team</p>
                  <p className="text-[10px] text-neutral-500">Wikis, roadmaps &amp; sprint tracking</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setUsageType('personal')}
                className={`p-4 rounded-xl border text-left space-y-2 transition-all cursor-pointer ${
                  usageType === 'personal'
                    ? 'border-neutral-900 dark:border-neutral-100 bg-neutral-50 dark:bg-neutral-800/80 ring-1 ring-neutral-900 dark:ring-neutral-100'
                    : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/40'
                }`}
              >
                <User className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                <div>
                  <p className="font-semibold text-xs text-neutral-900 dark:text-neutral-100">For myself</p>
                  <p className="text-[10px] text-neutral-500">Personal notes, tasks &amp; vault</p>
                </div>
              </button>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                Workspace Name
              </label>
              <input
                type="text"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 rounded-xl transition-colors cursor-pointer"
              >
                Create Workspace →
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Complete / Ready */}
        {step === 3 && (
          <div className="text-center space-y-5 py-4 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 stroke-[2.5]" />
            </div>

            <div className="space-y-1.5">
              <h3 className="font-display font-bold text-2xl text-neutral-900 dark:text-neutral-100">
                You're ready to build!
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-xs mx-auto">
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">"{workspaceName}"</span> has been provisioned with standard templates and interactive block tools.
              </p>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-3 px-4 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 rounded-xl transition-all cursor-pointer"
            >
              Open Notion Canvas
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
