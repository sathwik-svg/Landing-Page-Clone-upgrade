import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronDown, 
  FileText, 
  BookOpen, 
  CheckSquare, 
  Sparkles, 
  ArrowRight,
  Shield,
  Users,
  Compass,
  Layers
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSignup: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleDarkMode, onOpenSignup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const productFeatures = [
    { title: 'Docs', desc: 'Simple, powerful, beautiful notes & docs', icon: FileText, href: '#product-showcase' },
    { title: 'Wikis', desc: 'Centralize your team knowledge', icon: BookOpen, href: '#product-showcase' },
    { title: 'Projects', desc: 'Connected roadmaps & task boards', icon: CheckSquare, href: '#product-showcase' },
    { title: 'Notion AI', desc: 'Integrated writing and search assistant', icon: Sparkles, href: '#product-showcase' },
  ];

  const solutions = [
    { title: 'Enterprise', desc: 'Advanced security, controls & support', icon: Shield, href: '#bento-features' },
    { title: 'Small Business', desc: 'Run your company from a single place', icon: Users, href: '#templates' },
    { title: 'Product & Tech', desc: 'Sprint planning and release wikis', icon: Layers, href: '#templates' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Zone 1: Brand Wordmark (Single text + iconic N icon) */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 text-neutral-900 dark:text-neutral-100 font-display font-bold text-lg tracking-tight whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-md"
            aria-label="Notion Home"
          >
            <div className="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 flex items-center justify-center font-serif font-black text-xl shadow-xs transition-transform group-hover:scale-105">
              N
            </div>
            <span>Notion</span>
          </a>

          {/* Zone 2: Navigation Links (4-5 single-line items) */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {/* Product with interactive Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('product')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'product' ? null : 'product')}
                className="flex items-center gap-1 px-3 py-2 rounded-md hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors whitespace-nowrap cursor-pointer"
                aria-expanded={activeDropdown === 'product'}
              >
                <span>Product</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === 'product' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'product' && (
                <div className="absolute top-full left-0 mt-1 w-72 p-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="space-y-1">
                    {productFeatures.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
                      >
                        <div className="p-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors shrink-0">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{item.title}</p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">{item.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions with interactive Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                className="flex items-center gap-1 px-3 py-2 rounded-md hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors whitespace-nowrap cursor-pointer"
                aria-expanded={activeDropdown === 'solutions'}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-1 w-68 p-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="space-y-1">
                    {solutions.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
                      >
                        <div className="p-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shrink-0">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{item.title}</p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">{item.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a 
              href="#templates" 
              className="px-3 py-2 rounded-md hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors whitespace-nowrap"
            >
              Templates
            </a>

            <a 
              href="#customer-stories" 
              className="px-3 py-2 rounded-md hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors whitespace-nowrap"
            >
              Customers
            </a>

            <a 
              href="#pricing" 
              className="px-3 py-2 rounded-md hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors whitespace-nowrap"
            >
              Pricing
            </a>
          </nav>

          {/* Zone 3: Actions (Theme toggle + Log in + Primary CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={onToggleDarkMode}
              className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Log in ghost button */}
            <button
              type="button"
              onClick={onOpenSignup}
              className="hidden sm:inline-block px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              Log in
            </button>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onOpenSignup}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200 rounded-lg shadow-xs transition-all duration-150 active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              Get Notion free
            </button>

            {/* Mobile menu toggle button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 pt-2 pb-6 space-y-3">
          <div className="space-y-1">
            <a
              href="#product-showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              Product
            </a>
            <a
              href="#bento-features"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              Solutions
            </a>
            <a
              href="#templates"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              Templates
            </a>
            <a
              href="#customer-stories"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              Customers
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              Pricing
            </a>
          </div>

          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignup();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-medium text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignup();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-medium text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded-lg transition-colors"
            >
              Get Notion free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
