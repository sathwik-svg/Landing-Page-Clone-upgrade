import React, { useState } from 'react';
import { 
  Check, 
  ChevronRight, 
  Plus, 
  Trash2, 
  GripVertical, 
  Lightbulb, 
  Sparkles, 
  Share2, 
  Star, 
  MoreHorizontal, 
  RotateCcw,
  Heading,
  ListTodo,
  List,
  Quote,
  MessageSquare,
  Smile
} from 'lucide-react';

export interface BlockItem {
  id: string;
  type: 'heading' | 'text' | 'todo' | 'callout' | 'toggle' | 'quote';
  content: string;
  checked?: boolean;
  expanded?: boolean;
  subItems?: string[];
  icon?: string;
}

const INITIAL_BLOCKS: BlockItem[] = [
  {
    id: 'b1',
    type: 'heading',
    content: '1. Executive Mission & Goals',
  },
  {
    id: 'b2',
    type: 'callout',
    content: 'Launch the unified customer portal by November 20. Target 99.9% uptime with zero regression bugs.',
    icon: '💡',
  },
  {
    id: 'b3',
    type: 'text',
    content: 'This roadmap connects cross-functional engineering, product design, and go-to-market teams into a single source of truth.',
  },
  {
    id: 'b4',
    type: 'todo',
    content: 'Finalize core API schemas and database migrations',
    checked: true,
  },
  {
    id: 'b5',
    type: 'todo',
    content: 'Complete design QA and dark mode contrast passes',
    checked: true,
  },
  {
    id: 'b6',
    type: 'todo',
    content: 'Run internal dogfooding sprint across product organization',
    checked: false,
  },
  {
    id: 'b7',
    type: 'todo',
    content: 'Publish live developer docs and release announcement',
    checked: false,
  },
  {
    id: 'b8',
    type: 'toggle',
    content: 'Sprint 24 Scope & Edge Case Guardrails',
    expanded: true,
    subItems: [
      'Zero layout shift on dynamic image rendering',
      'Real-time offline caching with IndexedDB fallback',
      'Granular enterprise role-based workspace permissions',
    ],
  },
  {
    id: 'b9',
    type: 'quote',
    content: 'Simplicity is about subtracting the obvious and adding the meaningful.',
  },
];

export const BlockEditorDemo: React.FC = () => {
  const [docTitle, setDocTitle] = useState('🚀 Q4 Product Launch & Platform Roadmap');
  const [blocks, setBlocks] = useState<BlockItem[]>(INITIAL_BLOCKS);
  const [showMenu, setShowMenu] = useState(false);
  const [aiSummarizing, setAiSummarizing] = useState(false);
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [starred, setStarred] = useState(false);

  // Toggle todo item
  const toggleTodo = (id: string) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, checked: !b.checked } : b));
  };

  // Toggle toggle-block expansion
  const toggleExpand = (id: string) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, expanded: !b.expanded } : b));
  };

  // Update text content
  const updateContent = (id: string, newText: string) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, content: newText } : b));
  };

  // Delete block
  const deleteBlock = (id: string) => {
    setBlocks(blocks.filter(b => b.id !== id));
  };

  // Add block
  const addBlock = (type: BlockItem['type']) => {
    const id = 'b_' + Date.now();
    let newBlock: BlockItem;
    if (type === 'todo') {
      newBlock = { id, type, content: 'New action item...', checked: false };
    } else if (type === 'heading') {
      newBlock = { id, type, content: 'New section heading' };
    } else if (type === 'callout') {
      newBlock = { id, type, content: 'Highlight important note or warning here.', icon: '📌' };
    } else if (type === 'quote') {
      newBlock = { id, type, content: 'Notable quote or feedback here.' };
    } else if (type === 'toggle') {
      newBlock = { id, type, content: 'Click to expand toggle list', expanded: true, subItems: ['Nested item one', 'Nested item two'] };
    } else {
      newBlock = { id, type: 'text', content: 'Type anything with clean formatting...' };
    }
    setBlocks([...blocks, newBlock]);
    setShowMenu(false);
  };

  // Reset demo
  const resetDemo = () => {
    setBlocks(INITIAL_BLOCKS);
    setDocTitle('🚀 Q4 Product Launch & Platform Roadmap');
    setAiSummary(null);
  };

  // Simulate Notion AI summarizer
  const triggerAiSummary = () => {
    setAiSummarizing(true);
    setAiSummary(null);
    setTimeout(() => {
      const completed = blocks.filter(b => b.type === 'todo' && b.checked).length;
      const total = blocks.filter(b => b.type === 'todo').length;
      setAiSummary(`✨ AI Summary: This roadmap tracks the November 20 launch. Current progress is ${completed}/${total} action items completed (${Math.round((completed / (total || 1)) * 100)}%). Core infrastructure and design QA are verified; sprint dogfooding and docs release are pending.`);
      setAiSummarizing(false);
    }, 600);
  };

  return (
    <div className="w-full bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden transition-colors">
      {/* Notion App Window Frame Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200/80 dark:border-neutral-800/80 select-none">
        {/* macOS Window Controls + Breadcrumb */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80 border border-red-500/20" />
            <div className="w-3 h-3 rounded-full bg-amber-400/80 border border-amber-500/20" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/80 border border-emerald-500/20" />
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 pl-2">
            <span>Engineering Hub</span>
            <span>/</span>
            <span className="text-neutral-800 dark:text-neutral-200 font-medium truncate max-w-[160px]">Product Launch</span>
          </div>
        </div>

        {/* Notion Document Top Bar Tools */}
        <div className="flex items-center gap-1.5">
          <button 
            type="button"
            onClick={triggerAiSummary}
            disabled={aiSummarizing}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/50 hover:bg-purple-100 dark:hover:bg-purple-900/50 border border-purple-200 dark:border-purple-800/60 rounded-md transition-colors cursor-pointer"
            title="Ask Notion AI to summarize this page"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{aiSummarizing ? 'Summarizing...' : 'Ask AI'}</span>
          </button>

          <button
            type="button"
            onClick={() => setStarred(!starred)}
            className={`p-1.5 rounded-md hover:bg-neutral-200/70 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 transition-colors cursor-pointer ${starred ? 'text-amber-500 dark:text-amber-400' : ''}`}
            aria-label="Star page"
          >
            <Star className={`w-3.5 h-3.5 ${starred ? 'fill-current' : ''}`} />
          </button>

          <button
            type="button"
            onClick={resetDemo}
            className="flex items-center gap-1 px-2 py-1 text-xs text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-200/70 dark:hover:bg-neutral-800 rounded-md transition-colors cursor-pointer"
            title="Reset sandbox"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          <div className="w-px h-3.5 bg-neutral-300 dark:bg-neutral-700 mx-1" />

          <button
            type="button"
            className="px-2 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/70 dark:hover:bg-neutral-800 rounded-md transition-colors"
          >
            Share
          </button>
        </div>
      </div>

      {/* Editor Main Canvas */}
      <div className="p-6 sm:p-8 max-w-3xl mx-auto space-y-4">
        {/* Document Icon & Title */}
        <div className="space-y-3 pb-2">
          <div className="inline-flex items-center justify-center text-3xl select-none cursor-pointer hover:scale-110 transition-transform">
            🚀
          </div>

          <input
            type="text"
            value={docTitle}
            onChange={(e) => setDocTitle(e.target.value)}
            className="w-full text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-neutral-100 bg-transparent border-none outline-none focus:ring-0 p-0 tracking-tight"
            placeholder="Untitled Document"
          />

          {/* Clean Unboxed Metadata Discipline */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 pt-1">
            <span className="font-medium text-neutral-700 dark:text-neutral-300">Status</span>
            <span>In Progress</span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-neutral-700 dark:text-neutral-300">Lead</span>
            <span>Elena Rostova</span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-neutral-700 dark:text-neutral-300">Sprint</span>
            <span>Q4 Release 2026</span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-neutral-700 dark:text-neutral-300">Target</span>
            <span>Nov 20</span>
          </div>
        </div>

        {/* AI Summary Banner if generated */}
        {aiSummary && (
          <div className="p-3.5 bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 rounded-lg text-xs leading-relaxed text-purple-950 dark:text-purple-200 animate-in fade-in duration-200">
            {aiSummary}
          </div>
        )}

        <div className="h-px bg-neutral-200/70 dark:bg-neutral-800/70 my-2" />

        {/* Dynamic Blocks Stream */}
        <div className="space-y-2.5">
          {blocks.map((block) => (
            <div 
              key={block.id}
              className="group relative flex items-start gap-2 -mx-2 px-2 py-1 rounded-md hover:bg-neutral-100/60 dark:hover:bg-neutral-800/40 transition-colors"
            >
              {/* Block action controls on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5 pt-1 text-neutral-400 shrink-0">
                <button 
                  type="button" 
                  onClick={() => deleteBlock(block.id)}
                  className="p-1 hover:text-red-500 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded cursor-pointer"
                  title="Delete block"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>

              {/* Block Content Renderers */}
              <div className="flex-1 min-w-0">
                {block.type === 'heading' && (
                  <input
                    type="text"
                    value={block.content}
                    onChange={(e) => updateContent(block.id, e.target.value)}
                    className="w-full text-lg sm:text-xl font-display font-semibold text-neutral-900 dark:text-neutral-100 bg-transparent border-none outline-none focus:ring-0 p-0"
                  />
                )}

                {block.type === 'text' && (
                  <input
                    type="text"
                    value={block.content}
                    onChange={(e) => updateContent(block.id, e.target.value)}
                    className="w-full text-sm sm:text-base text-neutral-700 dark:text-neutral-300 bg-transparent border-none outline-none focus:ring-0 p-0"
                  />
                )}

                {block.type === 'todo' && (
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => toggleTodo(block.id)}
                      className={`w-4 h-4 rounded flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                        block.checked 
                          ? 'bg-blue-600 border border-blue-600 text-white' 
                          : 'border border-neutral-300 dark:border-neutral-600 hover:border-neutral-400 dark:hover:border-neutral-500'
                      }`}
                      aria-label="Toggle task completion"
                    >
                      {block.checked && <Check className="w-3 h-3 stroke-[3]" />}
                    </button>
                    <input
                      type="text"
                      value={block.content}
                      onChange={(e) => updateContent(block.id, e.target.value)}
                      className={`w-full text-sm sm:text-base bg-transparent border-none outline-none focus:ring-0 p-0 transition-colors ${
                        block.checked 
                          ? 'text-neutral-400 dark:text-neutral-500 line-through' 
                          : 'text-neutral-800 dark:text-neutral-200'
                      }`}
                    />
                  </div>
                )}

                {block.type === 'callout' && (
                  <div className="flex items-start gap-3 p-3.5 bg-neutral-100/80 dark:bg-neutral-800/60 rounded-lg border border-neutral-200/60 dark:border-neutral-700/60">
                    <span className="text-base select-none shrink-0">{block.icon || '💡'}</span>
                    <input
                      type="text"
                      value={block.content}
                      onChange={(e) => updateContent(block.id, e.target.value)}
                      className="w-full text-sm text-neutral-800 dark:text-neutral-200 bg-transparent border-none outline-none focus:ring-0 p-0"
                    />
                  </div>
                )}

                {block.type === 'toggle' && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => toggleExpand(block.id)}>
                      <ChevronRight className={`w-4 h-4 text-neutral-500 transition-transform ${block.expanded ? 'rotate-90' : ''}`} />
                      <input
                        type="text"
                        value={block.content}
                        onChange={(e) => updateContent(block.id, e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full text-sm font-medium text-neutral-900 dark:text-neutral-100 bg-transparent border-none outline-none focus:ring-0 p-0"
                      />
                    </div>
                    {block.expanded && block.subItems && (
                      <div className="pl-6 space-y-1.5 border-l border-neutral-200 dark:border-neutral-800 ml-2">
                        {block.subItems.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {block.type === 'quote' && (
                  <div className="pl-3.5 border-l-2 border-neutral-900 dark:border-neutral-100 py-0.5">
                    <input
                      type="text"
                      value={block.content}
                      onChange={(e) => updateContent(block.id, e.target.value)}
                      className="w-full text-sm italic text-neutral-700 dark:text-neutral-300 bg-transparent border-none outline-none focus:ring-0 p-0"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Slash Command / Add Block Trigger */}
        <div className="pt-2 relative">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowMenu(!showMenu)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Block or press '/'</span>
            </button>
            <span className="text-xs text-neutral-400">Try checking off tasks above</span>
          </div>

          {/* Slash Command Notion Menu Popover */}
          {showMenu && (
            <div className="absolute top-full left-0 mt-2 w-64 p-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl z-20 animate-in fade-in zoom-in-95 duration-150">
              <p className="px-2 py-1 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">Basic Blocks</p>
              <div className="space-y-0.5 mt-1">
                <button
                  type="button"
                  onClick={() => addBlock('todo')}
                  className="w-full flex items-center gap-2.5 px-2 py-1.5 text-xs text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors text-left cursor-pointer"
                >
                  <ListTodo className="w-4 h-4 text-blue-500" />
                  <div>
                    <p className="font-medium">To-do list</p>
                    <p className="text-[10px] text-neutral-400">Track tasks with a checkbox</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => addBlock('heading')}
                  className="w-full flex items-center gap-2.5 px-2 py-1.5 text-xs text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors text-left cursor-pointer"
                >
                  <Heading className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                  <div>
                    <p className="font-medium">Heading</p>
                    <p className="text-[10px] text-neutral-400">Section title</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => addBlock('callout')}
                  className="w-full flex items-center gap-2.5 px-2 py-1.5 text-xs text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors text-left cursor-pointer"
                >
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <div>
                    <p className="font-medium">Callout</p>
                    <p className="text-[10px] text-neutral-400">Stand out with an icon</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => addBlock('toggle')}
                  className="w-full flex items-center gap-2.5 px-2 py-1.5 text-xs text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors text-left cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 text-emerald-500" />
                  <div>
                    <p className="font-medium">Toggle list</p>
                    <p className="text-[10px] text-neutral-400">Tuck away details inside</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => addBlock('quote')}
                  className="w-full flex items-center gap-2.5 px-2 py-1.5 text-xs text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors text-left cursor-pointer"
                >
                  <Quote className="w-4 h-4 text-purple-500" />
                  <div>
                    <p className="font-medium">Quote</p>
                    <p className="text-[10px] text-neutral-400">Capture a standout quote</p>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
