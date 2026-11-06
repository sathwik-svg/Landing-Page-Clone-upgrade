import React, { useState, useEffect } from 'react';
import { 
  Grid3X3, 
  Maximize2, 
  Minimize2, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Monitor, 
  Eye, 
  EyeOff, 
  Layers, 
  Sparkles,
  Compass,
  X
} from 'lucide-react';

interface LayoutInspectorProps {
  showGrid: boolean;
  onToggleGrid: () => void;
  showOutlines: boolean;
  onToggleOutlines: () => void;
  activeWidthPreset: string;
  onSelectWidthPreset: (preset: string) => void;
}

export const LayoutInspector: React.FC<LayoutInspectorProps> = ({
  showGrid,
  onToggleGrid,
  showOutlines,
  onToggleOutlines,
  activeWidthPreset,
  onSelectWidthPreset,
}) => {
  const [minimized, setMinimized] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 900);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBreakpoint = (width: number) => {
    if (width < 640) return { label: 'XS (<640px)', name: 'Mobile', color: 'text-amber-500' };
    if (width < 768) return { label: 'SM (≥640px)', name: 'Large Mobile', color: 'text-emerald-500' };
    if (width < 1024) return { label: 'MD (≥768px)', name: 'Tablet', color: 'text-blue-500' };
    if (width < 1280) return { label: 'LG (≥1024px)', name: 'Laptop', color: 'text-purple-500' };
    if (width < 1536) return { label: 'XL (≥1280px)', name: 'Desktop', color: 'text-pink-500' };
    return { label: '2XL (≥1536px)', name: 'Widescreen', color: 'text-indigo-500' };
  };

  const bp = getBreakpoint(windowWidth);

  const presets = [
    { id: 'full', label: '100% Fluid', icon: Monitor },
    { id: '1440', label: '1440px', icon: Laptop },
    { id: '1024', label: '1024px', icon: Laptop },
    { id: '768', label: '768px', icon: Tablet },
    { id: '390', label: '390px', icon: Smartphone },
  ];

  if (minimized) {
    return (
      <button
        type="button"
        onClick={() => setMinimized(false)}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3.5 py-2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full shadow-2xl text-xs font-semibold hover:scale-105 transition-transform cursor-pointer border border-neutral-700/50"
        title="Open Layout & Breakpoint Inspector"
      >
        <Grid3X3 className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
        <span className="font-mono">{windowWidth}px</span>
        <span className="text-[10px] opacity-75">· {bp.name}</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 sm:w-96 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl p-4 text-xs space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-150">
      {/* Inspector Header */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Grid3X3 className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-neutral-900 dark:text-neutral-100 text-xs">
              Layout &amp; Breakpoint Inspector
            </h4>
            <p className="text-[10px] text-neutral-400">CSS Grid &amp; Flexbox visualizer</p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-neutral-400">
          <button
            type="button"
            onClick={() => setMinimized(true)}
            className="p-1 hover:text-neutral-700 dark:hover:text-neutral-200 rounded"
            title="Minimize inspector"
          >
            <Minimize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Viewport HUD */}
      <div className="grid grid-cols-2 gap-2 bg-neutral-50 dark:bg-neutral-950 p-2.5 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60">
        <div>
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Viewport Width</span>
          <span className="font-mono font-bold text-sm text-neutral-900 dark:text-neutral-100">
            {windowWidth}px <span className="text-[10px] font-normal text-neutral-400">× {windowHeight}px</span>
          </span>
        </div>
        <div>
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Active Breakpoint</span>
          <span className={`font-mono font-bold text-xs ${bp.color}`}>
            {bp.label}
          </span>
        </div>
      </div>

      {/* Toggles */}
      <div className="space-y-2">
        <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Overlay Guides</p>
        
        <div className="grid grid-cols-2 gap-2">
          {/* 12-Column Grid Toggle */}
          <button
            type="button"
            onClick={onToggleGrid}
            className={`flex items-center justify-between p-2 rounded-lg border text-left transition-colors cursor-pointer ${
              showGrid
                ? 'bg-red-500/10 border-red-500/40 text-red-600 dark:text-red-400 font-semibold'
                : 'bg-neutral-50 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>12-Col Grid</span>
            </div>
            <span className="text-[10px] font-mono">{showGrid ? 'ON' : 'OFF'}</span>
          </button>

          {/* Flex & Box Outlines Toggle */}
          <button
            type="button"
            onClick={onToggleOutlines}
            className={`flex items-center justify-between p-2 rounded-lg border text-left transition-colors cursor-pointer ${
              showOutlines
                ? 'bg-blue-500/10 border-blue-500/40 text-blue-600 dark:text-blue-400 font-semibold'
                : 'bg-neutral-50 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              <span>CSS Outlines</span>
            </div>
            <span className="text-[10px] font-mono">{showOutlines ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </div>

      {/* Breakpoint Simulation Presets */}
      <div className="space-y-1.5">
        <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Simulate Viewport Frame</p>
        <div className="grid grid-cols-5 gap-1">
          {presets.map((p) => {
            const Icon = p.icon;
            const isSelected = activeWidthPreset === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => onSelectWidthPreset(p.id)}
                className={`py-1.5 px-1 rounded-md text-center transition-colors cursor-pointer flex flex-col items-center gap-0.5 ${
                  isSelected
                    ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-semibold'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
                title={`Simulate ${p.label}`}
              >
                <Icon className="w-3 h-3" />
                <span className="text-[9px] truncate w-full">{p.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Navigation Shortcuts */}
      <div className="pt-1 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-[10px] text-neutral-400">
        <span>Quick Jump:</span>
        <div className="flex items-center gap-2">
          <a href="#product-showcase" className="hover:text-neutral-900 dark:hover:text-neutral-100">Pillars</a>
          <span>·</span>
          <a href="#bento-features" className="hover:text-neutral-900 dark:hover:text-neutral-100">Bento</a>
          <span>·</span>
          <a href="#templates" className="hover:text-neutral-900 dark:hover:text-neutral-100">Templates</a>
          <span>·</span>
          <a href="#customer-stories" className="hover:text-neutral-900 dark:hover:text-neutral-100">Stories</a>
        </div>
      </div>
    </div>
  );
};
