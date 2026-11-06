import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Code, 
  Palette, 
  User, 
  Rocket, 
  Sparkles, 
  Check, 
  Copy,
  ExternalLink
} from 'lucide-react';

interface Template {
  id: string;
  title: string;
  category: 'all' | 'engineering' | 'design' | 'personal' | 'startup';
  desc: string;
  icon: string;
  author: string;
  uses: string;
  sections: string[];
}

const TEMPLATES: Template[] = [
  {
    id: 'temp-1',
    title: 'Sprint Planning & Release Tracker',
    category: 'engineering',
    desc: 'Manage sprint backlogs, story estimation points, and release burndown charts.',
    icon: '🚀',
    author: 'Notion Core Team',
    uses: '280k uses',
    sections: ['Backlog grooming table', 'Active sprint Kanban board', 'Release notes auto-generator'],
  },
  {
    id: 'temp-2',
    title: 'Design System & Component Specs',
    category: 'design',
    desc: 'Document design tokens, color ramps, typography scale, and Figma component specs.',
    icon: '🎨',
    author: 'Elena Rostova',
    uses: '194k uses',
    sections: ['Token documentation', 'Asset export pipeline', 'Accessibility contrast audit'],
  },
  {
    id: 'temp-3',
    title: 'Startup Fundraising CRM & Pitch Wiki',
    category: 'startup',
    desc: 'Track investor meetings, stage status, deck links, and commitments in one view.',
    icon: '📈',
    author: 'Y Combinator Alumni',
    uses: '310k uses',
    sections: ['Investor pipeline board', 'Due diligence data room', 'Cap table summary'],
  },
  {
    id: 'temp-4',
    title: 'Second Brain & Knowledge Vault',
    category: 'personal',
    desc: 'Based on the PARA method: Projects, Areas, Resources, and Archives.',
    icon: '🧠',
    author: 'Tiago Forte',
    uses: '520k uses',
    sections: ['Active projects dashboard', 'Book & article notes', 'Daily reflection journal'],
  },
  {
    id: 'temp-5',
    title: 'Engineering Incident Post-Mortem',
    category: 'engineering',
    desc: 'Structured RCA (root cause analysis) template with timeline, action items, and prevention checklist.',
    icon: '🛡️',
    author: 'SRE Working Group',
    uses: '145k uses',
    sections: ['Incident timeline log', 'Impacted services table', 'Action item accountability'],
  },
  {
    id: 'temp-6',
    title: 'All-Hands Meeting & Q&A Hub',
    category: 'startup',
    desc: 'Centralize company updates, recorded replay links, and upvoteable anonymous Q&A questions.',
    icon: '🎙️',
    author: 'Notion for Teams',
    uses: '215k uses',
    sections: ['Weekly agenda', 'Anonymous Q&A board', 'Recorded archive links'],
  },
];

interface TemplateGalleryProps {
  onOpenSignup: () => void;
}

export const TemplateGallery: React.FC<TemplateGalleryProps> = ({ onOpenSignup }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredTemplates = activeCategory === 'all'
    ? TEMPLATES
    : TEMPLATES.filter(t => t.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Templates' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'design', label: 'Design' },
    { id: 'startup', label: 'Startups' },
    { id: 'personal', label: 'Personal' },
  ];

  const handleUseTemplate = (t: Template) => {
    setCopiedId(t.id);
    setTimeout(() => {
      setCopiedId(null);
      setPreviewTemplate(null);
      onOpenSignup();
    }, 600);
  };

  return (
    <section id="templates" className="py-20 sm:py-28 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Endless community inspiration
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-neutral-950 dark:text-neutral-50 [text-wrap:balance]">
            Get a head start with 10,000+ templates.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 [text-wrap:balance]">
            Pick a pre-built setup for project tracking, company wikis, design reviews, or personal note-taking.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-semibold shadow-xs'
                  : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-200/70 dark:hover:bg-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group p-6 bg-neutral-50 dark:bg-neutral-900/60 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl select-none group-hover:scale-110 transition-transform">
                    {template.icon}
                  </span>
                  {/* Clean unboxed metadata */}
                  <span className="text-xs text-neutral-500 font-mono">
                    {template.uses}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-display font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                    {template.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-neutral-500">
                  <span>By {template.author}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setPreviewTemplate(template)}
                  className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Preview details
                </button>

                <button
                  type="button"
                  onClick={() => handleUseTemplate(template)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 hover:bg-neutral-200/60 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedId === template.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <span>Use template</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Template Preview Modal */}
        {previewTemplate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
            <div className="bg-white dark:bg-neutral-900 max-w-lg w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 space-y-5 shadow-2xl animate-in zoom-in-95 duration-150">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{previewTemplate.icon}</span>
                  <div>
                    <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-neutral-100">
                      {previewTemplate.title}
                    </h3>
                    <p className="text-xs text-neutral-500">Created by {previewTemplate.author} · {previewTemplate.uses}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewTemplate(null)}
                  className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 p-1"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {previewTemplate.desc}
              </p>

              <div className="p-4 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-2">
                <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">Included Structure:</p>
                <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                  {previewTemplate.sections.map((sec, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{sec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setPreviewTemplate(null)}
                  className="px-4 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => handleUseTemplate(previewTemplate)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 rounded-xl transition-all cursor-pointer"
                >
                  Duplicate to Workspace →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
