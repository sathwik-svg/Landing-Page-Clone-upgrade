import React from 'react';

export const SocialProof: React.FC = () => {
  const logos = [
    { name: 'Figma', mark: 'FIGMA' },
    { name: 'OpenAI', mark: 'OpenAI' },
    { name: 'Pixar', mark: 'PIXAR' },
    { name: 'Ramp', mark: 'ramp' },
    { name: 'Headspace', mark: 'headspace' },
    { name: 'Nike', mark: 'NIKE' },
    { name: 'Toyota', mark: 'TOYOTA' },
    { name: 'Loom', mark: 'loom' },
  ];

  return (
    <section className="py-12 border-y border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-8">
          Trusted by the next generation of industry leaders
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
          {logos.map((logo) => (
            <div 
              key={logo.name}
              className="flex items-center justify-center font-display font-bold text-base sm:text-lg tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-default select-none"
            >
              {logo.mark}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
