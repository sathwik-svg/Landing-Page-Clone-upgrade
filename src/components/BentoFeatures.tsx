import React, { useState } from 'react';
import { 
  Database, 
  Search, 
  Zap, 
  ShieldCheck, 
  Sliders, 
  Layers, 
  Command, 
  Key, 
  CheckCircle2, 
  Lock,
  ArrowUpRight
} from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  const [activeProperty, setActiveProperty] = useState('relation');
  const [searchQuery, setSearchQuery] = useState('');
  
  const searchResults = [
    { title: 'Q4 Product Roadmap', type: 'Project', team: 'Product' },
    { title: 'Engineering Incident Playbook', type: 'Wiki', team: 'Engineering' },
    { title: 'Design Token Guidelines v3', type: 'Doc', team: 'Design' },
    { title: 'Customer Feedback Aggregator', type: 'Database', team: 'Operations' },
  ].filter(item => !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.type.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <section id="bento-features" className="py-20 sm:py-28 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Infinite versatility
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-neutral-950 dark:text-neutral-50 [text-wrap:balance]">
            Craft your workspace your way.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 [text-wrap:balance]">
            No two companies operate identically. Build connected tools that match your exact workflow without writing boilerplate code.
          </p>
        </div>

        {/* Asymmetric Bento Grid (2-columns on large screens, spanning 2 / 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Bento Card 1: Relational Databases & Rollups (Spans 2 cols) */}
          <div className="lg:col-span-2 p-6 sm:p-8 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400">
                <Database className="w-4 h-4" />
                <span>Connected Relational Databases</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-neutral-950 dark:text-neutral-50">
                Customize every property. Link projects directly to customers and code.
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl">
                Filter by any dimension, calculate formulas on the fly, and view the same live data as a table, calendar, board, or timeline gallery.
              </p>
            </div>

            {/* Interactive Property Inspector */}
            <div className="p-4 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 space-y-3">
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-neutral-500 font-medium">Active Property Type:</span>
                {['relation', 'formula', 'rollup', 'multi-select'].map((prop) => (
                  <button
                    key={prop}
                    type="button"
                    onClick={() => setActiveProperty(prop)}
                    className={`px-2.5 py-1 rounded-md transition-colors capitalize cursor-pointer ${
                      activeProperty === prop
                        ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-semibold'
                        : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700'
                    }`}
                  >
                    {prop}
                  </button>
                ))}
              </div>

              {/* Dynamic Property Explanation */}
              <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200/60 dark:border-neutral-800/60 text-xs">
                {activeProperty === 'relation' && (
                  <div className="space-y-1">
                    <p className="font-semibold text-neutral-900 dark:text-neutral-100">🔗 Relation Property</p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Connects tasks to Customers, OKR Milestones, or Pull Requests. One update syncs across all linked documents instantly.
                    </p>
                  </div>
                )}
                {activeProperty === 'formula' && (
                  <div className="space-y-1">
                    <p className="font-semibold text-neutral-900 dark:text-neutral-100">🧮 Dynamic Formula Engine</p>
                    <p className="text-neutral-600 dark:text-neutral-400 font-mono text-[11px]">
                      if(prop("Status") == "Complete", "✅ Ready", format(dateBetween(now(), prop("Due"), "days")) + " days left")
                    </p>
                  </div>
                )}
                {activeProperty === 'rollup' && (
                  <div className="space-y-1">
                    <p className="font-semibold text-neutral-900 dark:text-neutral-100">📊 Aggregation Rollup</p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Automatically sums story points, averages team velocities, or calculates percent completion across nested sub-tasks.
                    </p>
                  </div>
                )}
                {activeProperty === 'multi-select' && (
                  <div className="space-y-1">
                    <p className="font-semibold text-neutral-900 dark:text-neutral-100">🏷️ Tagged Taxonomies</p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Clean categorization without clutter. Group boards by Priority, Sprint Quarter, or Assigned Tribe.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bento Card 2: Global Instant Search (Spans 1 col) */}
          <div className="p-6 sm:p-8 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <Search className="w-4 h-4" />
                <span>Instant Universal Search</span>
              </div>
              <h3 className="text-xl font-display font-bold text-neutral-950 dark:text-neutral-50">
                Find anything in milliseconds.
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Full-text indexing with fuzzy match across all pages, comments, and database items.
              </p>
            </div>

            {/* Interactive Search Widget */}
            <div className="space-y-2">
              <div className="relative">
                <Command className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type to filter results..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 outline-none"
                />
              </div>

              <div className="space-y-1 max-h-36 overflow-y-auto pr-1">
                {searchResults.map((res, i) => (
                  <div 
                    key={i} 
                    className="flex items-center justify-between p-2 rounded-lg bg-neutral-50/70 dark:bg-neutral-950/70 text-xs border border-neutral-100 dark:border-neutral-800"
                  >
                    <div className="truncate mr-2">
                      <p className="font-medium text-neutral-900 dark:text-neutral-100 truncate">{res.title}</p>
                      <p className="text-[10px] text-neutral-400">{res.team}</p>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500 shrink-0">{res.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Card 3: Lightning Fast & Offline-First (Spans 1 col) */}
          <div className="p-6 sm:p-8 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-amber-600 dark:text-amber-400">
                <Zap className="w-4 h-4" />
                <span>Zero Latency Architecture</span>
              </div>
              <h3 className="text-xl font-display font-bold text-neutral-950 dark:text-neutral-50">
                Work seamlessly offline.
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Every keystroke is saved immediately locally and synchronized smoothly with delta conflict resolution when reconnected.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 space-y-2 text-xs">
              <div className="flex items-center justify-between text-neutral-600 dark:text-neutral-400">
                <span>Local Cache Engine</span>
                <span className="text-emerald-500 font-semibold font-mono">Synced</span>
              </div>
              <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-full" />
              </div>
              <p className="text-[11px] text-neutral-400 pt-1">
                Average interaction latency $\le 16ms$ on standard desktop hardware.
              </p>
            </div>
          </div>

          {/* Bento Card 4: Enterprise-Grade Security & Governance (Spans 2 cols) */}
          <div className="lg:col-span-2 p-6 sm:p-8 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-purple-600 dark:text-purple-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Enterprise Security &amp; Compliance</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-neutral-950 dark:text-neutral-50">
                Bank-level encryption, SAML SSO, and granular audit logs.
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl">
                Scale safely from an agile 5-person seed startup to 50,000 global enterprise employees with automated SCIM provisioning and domain capture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-neutral-100">
                  <Key className="w-3.5 h-3.5 text-neutral-500" />
                  <span>SAML 2.0 &amp; SCIM</span>
                </div>
                <p className="text-neutral-500 dark:text-neutral-400 text-[11px]">
                  Seamless Okta, Azure AD, and Google Workspace user provisioning.
                </p>
              </div>

              <div className="p-3 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-neutral-100">
                  <Lock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>SOC2 &amp; HIPAA</span>
                </div>
                <p className="text-neutral-500 dark:text-neutral-400 text-[11px]">
                  Certified compliant with annual penetration tests and BAA agreements.
                </p>
              </div>

              <div className="p-3 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-neutral-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Audit Event Logs</span>
                </div>
                <p className="text-neutral-500 dark:text-neutral-400 text-[11px]">
                  Granular immutable logging of all page exports, permissions, and IP ranges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
