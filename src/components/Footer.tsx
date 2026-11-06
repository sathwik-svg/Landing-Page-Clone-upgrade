import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 flex items-center justify-center font-serif font-black text-lg">
                N
              </div>
              <span className="font-display font-bold text-lg text-neutral-950 dark:text-neutral-50 tracking-tight">Notion</span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-xs leading-relaxed">
              We make software that gives everyone the tools to shape their own workspace and share ideas effortlessly.
            </p>
            <div className="flex items-center gap-3 text-xs text-neutral-400">
              <span>English (US)</span>
              <span aria-hidden="true">·</span>
              <span>Privacy</span>
              <span aria-hidden="true">·</span>
              <span>Terms</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider">Product</p>
            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
              <li><a href="#product-showcase" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Wikis</a></li>
              <li><a href="#product-showcase" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Docs</a></li>
              <li><a href="#product-showcase" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</a></li>
              <li><a href="#product-showcase" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Notion AI</a></li>
              <li><a href="#templates" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Template Gallery</a></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider">Solutions</p>
            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
              <li><a href="#bento-features" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Enterprise</a></li>
              <li><a href="#bento-features" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Small Business</a></li>
              <li><a href="#templates" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Personal</a></li>
              <li><a href="#templates" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Startups</a></li>
              <li><a href="#templates" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Engineering</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider">Resources</p>
            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
              <li><a href="#customer-stories" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Customer Stories</a></li>
              <li><a href="#bento-features" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Security &amp; SOC2</a></li>
              <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-100 dark:border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Notion Labs, Inc. Clone crafted for educational design &amp; layout study.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-600 dark:hover:text-neutral-300">Security</a>
            <a href="#" className="hover:text-neutral-600 dark:hover:text-neutral-300">Cookie Settings</a>
            <a href="#" className="hover:text-neutral-600 dark:hover:text-neutral-300">Do Not Sell My Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
