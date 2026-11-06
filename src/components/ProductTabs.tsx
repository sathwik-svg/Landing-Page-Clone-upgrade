import React, { useState } from 'react';
import { 
  FileText, 
  BookOpen, 
  CheckSquare, 
  Sparkles, 
  ArrowRight, 
  Plus, 
  Clock, 
  Users, 
  Tag, 
  CheckCircle2, 
  Search,
  FolderOpen,
  Send,
  Zap,
  Columns
} from 'lucide-react';

type TabType = 'docs' | 'wikis' | 'projects' | 'ai';

interface Task {
  id: string;
  title: string;
  tag: string;
  owner: string;
  priority: 'High' | 'Medium' | 'Low';
  column: 'todo' | 'in_progress' | 'done';
}

const INITIAL_TASKS: Task[] = [
  { id: 't1', title: 'Migrate auth service to passkeys', tag: 'Security', owner: 'Alex M.', priority: 'High', column: 'in_progress' },
  { id: 't2', title: 'Design mobile responsive dock', tag: 'UI/UX', owner: 'Elena R.', priority: 'Medium', column: 'todo' },
  { id: 't3', title: 'Benchmark database read replicas', tag: 'Backend', owner: 'David K.', priority: 'High', column: 'todo' },
  { id: 't4', title: 'Audit accessibility focus rings', tag: 'Design QA', owner: 'Sarah L.', priority: 'Low', column: 'done' },
  { id: 't5', title: 'Publish release v3.4 notes', tag: 'Marketing', owner: 'Maya T.', priority: 'Medium', column: 'in_progress' },
];

export const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('projects');
  
  // Projects Kanban state
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  
  // Docs state
  const [fontChoice, setFontChoice] = useState<'sans' | 'serif' | 'mono'>('sans');
  
  // Wikis state
  const [wikiQuery, setWikiQuery] = useState('');
  const [selectedWikiDoc, setSelectedWikiDoc] = useState('engineering');

  // AI state
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiOutput, setAiOutput] = useState<string | null>(
    'Summary: The team completed 4 of 6 sprint objectives. Critical database indexing reduced P95 latency by 38%. On track for November 20 production release.'
  );

  const moveTask = (taskId: string, targetCol: Task['column']) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, column: targetCol } : t));
  };

  const tabs = [
    { id: 'docs' as TabType, label: 'Docs', icon: FileText, tag: 'Next-gen documents' },
    { id: 'wikis' as TabType, label: 'Wikis', icon: BookOpen, tag: 'Central knowledge' },
    { id: 'projects' as TabType, label: 'Projects', icon: CheckSquare, tag: 'Connected roadmaps' },
    { id: 'ai' as TabType, label: 'Notion AI', icon: Sparkles, tag: 'Built-in intelligence' },
  ];

  const handleAiAction = (promptText: string) => {
    setAiPrompt(promptText);
    setAiOutput('Analyzing workspace documents and synthesis criteria...');
    setTimeout(() => {
      if (promptText.includes('action items')) {
        setAiOutput('✅ Extracted Action Items:\n1. @Alex: Deploy passkey authentication to staging by Thursday.\n2. @Elena: Deliver Figma tokens for high-contrast dark mode.\n3. @David: Run load-test on replica clusters with 10k virtual users.');
      } else if (promptText.includes('brief')) {
        setAiOutput('📄 Project Brief Generated:\nGoal: Ship real-time document presence and collaborative cursor overlays.\nScope: WebSocket relay with local CRDT conflict resolution.\nSuccess Metric: P99 sync latency < 50ms.');
      } else {
        setAiOutput('⚡ AI Insight: Workspace search indexed 2,418 pages. Your team collaborated on 34 sprint issues this week with a 92% completion velocity.');
      }
    }, 400);
  };

  return (
    <section id="product-showcase" className="py-20 sm:py-28 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            A unified building block system
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-neutral-950 dark:text-neutral-50 [text-wrap:balance]">
            Four core superpowers. <br />
            Zero context switching.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 [text-wrap:balance]">
            Every team operates differently. Notion gives you Docs, Wikis, Projects, and AI seamlessly connected in one shared canvas.
          </p>
        </div>

        {/* Interactive Tab Switcher Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-neutral-100 dark:bg-neutral-900 rounded-2xl max-w-2xl mx-auto mb-10 border border-neutral-200/80 dark:border-neutral-800/80">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/40 dark:hover:bg-neutral-800/40'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-neutral-900 dark:text-neutral-100' : 'text-neutral-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Preview Container */}
        <div className="max-w-5xl mx-auto bg-neutral-50 dark:bg-neutral-900/60 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 sm:p-8 shadow-sm">
          {/* TAB 1: DOCS */}
          {activeTab === 'docs' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                <div>
                  <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-neutral-100">
                    Next-Generation Notes &amp; Docs
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Drag-and-drop blocks, live collaborative cursors, and custom font styling
                  </p>
                </div>

                {/* Font Styling Toggle Controls */}
                <div className="flex items-center gap-1 p-1 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 text-xs font-medium">
                  <span className="px-2 text-neutral-400">Font:</span>
                  <button
                    type="button"
                    onClick={() => setFontChoice('sans')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${fontChoice === 'sans' ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-semibold' : 'text-neutral-600 dark:text-neutral-300'}`}
                  >
                    Default
                  </button>
                  <button
                    type="button"
                    onClick={() => setFontChoice('serif')}
                    className={`px-2.5 py-1 rounded font-serif transition-colors cursor-pointer ${fontChoice === 'serif' ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-semibold' : 'text-neutral-600 dark:text-neutral-300'}`}
                  >
                    Serif
                  </button>
                  <button
                    type="button"
                    onClick={() => setFontChoice('mono')}
                    className={`px-2.5 py-1 rounded font-mono transition-colors cursor-pointer ${fontChoice === 'mono' ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-semibold' : 'text-neutral-600 dark:text-neutral-300'}`}
                  >
                    Mono
                  </button>
                </div>
              </div>

              {/* Sample Document Page with Collaborative Presence */}
              <div className={`p-6 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-4 ${
                fontChoice === 'serif' ? 'font-serif' : fontChoice === 'mono' ? 'font-mono' : 'font-sans'
              }`}>
                {/* Collaborative Avatars */}
                <div className="flex items-center justify-between text-xs text-neutral-500 pb-2 border-b border-neutral-100 dark:border-neutral-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>3 teammates editing live</span>
                  </div>
                  <div className="flex items-center -space-x-1.5">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center text-[10px] ring-2 ring-white dark:ring-neutral-900">
                      AK
                    </div>
                    <div className="w-6 h-6 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center text-[10px] ring-2 ring-white dark:ring-neutral-900">
                      SR
                    </div>
                    <div className="w-6 h-6 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-[10px] ring-2 ring-white dark:ring-neutral-900">
                      DK
                    </div>
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  Design System Principles &amp; Token Guidelines
                </h4>

                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Every interface element must serve a single functional objective. Maintain WCAG AA compliance with minimum 4.5:1 text contrast ratios. Prefer clean typography and unboxed metadata over arbitrary status pills.
                </p>

                <div className="p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300 space-y-1">
                  <p className="font-semibold text-neutral-900 dark:text-neutral-100">📦 Key Token Exports:</p>
                  <p>• Color neutral canvas: #FFFFFF (light) / #191919 (dark)</p>
                  <p>• Hairline borders: 1px rgba(0,0,0,0.08)</p>
                  <p>• Motion budget: settle transitions $\le 200ms$</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: WIKIS */}
          {activeTab === 'wikis' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                <div>
                  <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-neutral-100">
                    Centralized Knowledge Wiki
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Never search in five places again. Verified docs with expiration notices and owner badges.
                  </p>
                </div>

                {/* Live Wiki Search */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    value={wikiQuery}
                    onChange={(e) => setWikiQuery(e.target.value)}
                    placeholder="Search company wiki..."
                    className="pl-8 pr-3 py-1.5 text-xs bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 outline-none focus:ring-1 focus:ring-neutral-400 w-full sm:w-56"
                  />
                </div>
              </div>

              {/* Wiki Navigation Directory + Preview Pane */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Left Directory */}
                <div className="space-y-1 bg-white dark:bg-neutral-950 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800">
                  <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider px-2 py-1">Verified Sections</p>
                  {[
                    { id: 'engineering', title: 'Engineering Playbook', count: '14 articles' },
                    { id: 'onboarding', title: 'New Hire Onboarding', count: '8 articles' },
                    { id: 'security', title: 'SOC2 & Security Policies', count: '6 articles' },
                    { id: 'brand', title: 'Brand & Voice Standards', count: '11 articles' },
                  ]
                    .filter(doc => !wikiQuery || doc.title.toLowerCase().includes(wikiQuery.toLowerCase()))
                    .map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedWikiDoc(item.id)}
                        className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                          selectedWikiDoc === item.id
                            ? 'bg-neutral-100 dark:bg-neutral-800 font-semibold text-neutral-900 dark:text-neutral-100'
                            : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FolderOpen className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span className="truncate">{item.title}</span>
                        </div>
                        <span className="text-[10px] text-neutral-400 shrink-0">{item.count}</span>
                      </button>
                    ))}
                </div>

                {/* Right Document Preview */}
                <div className="md:col-span-2 bg-white dark:bg-neutral-950 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-neutral-800">
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified by Team Lead · Last reviewed yesterday
                    </span>
                    <span className="text-xs text-neutral-400">Owner: VP Engineering</span>
                  </div>

                  <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                    {selectedWikiDoc === 'engineering' && 'Production Deploy Standards & Incident Triage'}
                    {selectedWikiDoc === 'onboarding' && 'Welcome to the Team: Week 1 Setup Checklist'}
                    {selectedWikiDoc === 'security' && 'SOC2 Type II Security Protocol & Access Controls'}
                    {selectedWikiDoc === 'brand' && 'Notion Brand Voice, Typography & Illustration Guidelines'}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    This document serves as the mandatory canonical standard for all team members. Any architectural proposals or updates must follow the RFC pull-request template.
                  </p>

                  <div className="p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg text-xs space-y-1 text-neutral-700 dark:text-neutral-300">
                    <p className="font-semibold text-neutral-900 dark:text-neutral-100">Quick Navigation Links:</p>
                    <p>• Staging deployment pipeline runbooks</p>
                    <p>• Database backup and cross-region disaster recovery</p>
                    <p>• PagerDuty escalation rosters and on-call handbook</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROJECTS KANBAN BOARD */}
          {activeTab === 'projects' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                <div>
                  <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-neutral-100">
                    Connected Roadmaps &amp; Project Boards
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Click the action buttons on cards to move tasks across sprint stages
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-neutral-500">Board View:</span>
                  <span className="px-2 py-1 bg-white dark:bg-neutral-800 rounded font-medium text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700">
                    Sprint 24 (Active)
                  </span>
                </div>
              </div>

              {/* 3-Column Kanban Board */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Column: To Do */}
                <div className="bg-white dark:bg-neutral-950 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-neutral-800">
                    <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-neutral-400" />
                      To Do
                    </span>
                    <span className="text-xs text-neutral-400">
                      {tasks.filter(t => t.column === 'todo').length}
                    </span>
                  </div>

                  {tasks.filter(t => t.column === 'todo').map(task => (
                    <div 
                      key={task.id}
                      className="p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200/80 dark:border-neutral-800 space-y-2 hover:shadow-xs transition-shadow"
                    >
                      <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">{task.title}</p>
                      
                      <div className="flex items-center justify-between text-[11px] text-neutral-500">
                        <span>{task.tag} · {task.owner}</span>
                        <span className="font-medium text-amber-600 dark:text-amber-400">{task.priority}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => moveTask(task.id, 'in_progress')}
                        className="w-full mt-1 py-1 text-[11px] font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded transition-colors cursor-pointer"
                      >
                        Start Task →
                      </button>
                    </div>
                  ))}
                </div>

                {/* Column: In Progress */}
                <div className="bg-white dark:bg-neutral-950 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-neutral-800">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      In Progress
                    </span>
                    <span className="text-xs text-neutral-400">
                      {tasks.filter(t => t.column === 'in_progress').length}
                    </span>
                  </div>

                  {tasks.filter(t => t.column === 'in_progress').map(task => (
                    <div 
                      key={task.id}
                      className="p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200/80 dark:border-neutral-800 space-y-2 hover:shadow-xs transition-shadow"
                    >
                      <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">{task.title}</p>
                      
                      <div className="flex items-center justify-between text-[11px] text-neutral-500">
                        <span>{task.tag} · {task.owner}</span>
                        <span className="font-medium text-red-500">{task.priority}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-1 mt-1">
                        <button
                          type="button"
                          onClick={() => moveTask(task.id, 'todo')}
                          className="py-1 text-[11px] font-medium text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded cursor-pointer"
                        >
                          ← Revert
                        </button>
                        <button
                          type="button"
                          onClick={() => moveTask(task.id, 'done')}
                          className="py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 rounded cursor-pointer"
                        >
                          Complete ✓
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column: Completed */}
                <div className="bg-white dark:bg-neutral-950 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-neutral-800">
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Completed
                    </span>
                    <span className="text-xs text-neutral-400">
                      {tasks.filter(t => t.column === 'done').length}
                    </span>
                  </div>

                  {tasks.filter(t => t.column === 'done').map(task => (
                    <div 
                      key={task.id}
                      className="p-3 bg-neutral-50/60 dark:bg-neutral-900/40 rounded-lg border border-neutral-200/60 dark:border-neutral-800/60 space-y-1.5"
                    >
                      <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 line-through">{task.title}</p>
                      
                      <div className="flex items-center justify-between text-[10px] text-neutral-400">
                        <span>Done by {task.owner}</span>
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: NOTION AI */}
          {activeTab === 'ai' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="pb-4 border-b border-neutral-200 dark:border-neutral-800">
                <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  Notion AI: Direct Workspace Intelligence
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Write faster, summarize long specs, and ask questions across your company data.
                </p>
              </div>

              {/* Quick AI Presets */}
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleAiAction('Extract key action items and team owners')}
                  className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-colors cursor-pointer"
                >
                  ⚡ Extract action items
                </button>
                <button
                  type="button"
                  onClick={() => handleAiAction('Draft a one-page project brief')}
                  className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-colors cursor-pointer"
                >
                  📝 Draft project brief
                </button>
                <button
                  type="button"
                  onClick={() => handleAiAction('Summarize sprint velocity metrics')}
                  className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-colors cursor-pointer"
                >
                  📊 Summarize sprint velocity
                </button>
              </div>

              {/* AI Output Terminal / Box */}
              <div className="p-4 sm:p-5 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-medium text-purple-600 dark:text-purple-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Workspace Response</span>
                </div>

                <div className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 whitespace-pre-line leading-relaxed font-sans">
                  {aiOutput}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
