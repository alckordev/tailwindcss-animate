import { useState } from 'react';
import { animations } from '../data/animations';

export function Configurator() {
  const [selectedAnimation, setSelectedAnimation] = useState('animate-fade-in');
  const [duration, setDuration] = useState('');
  const [delay, setDelay] = useState('');
  const [timing, setTiming] = useState('');
  const [direction, setDirection] = useState('');
  const [iterations, setIterations] = useState('');
  const [fillMode, setFillMode] = useState('');
  const [useScrollTimeline, setUseScrollTimeline] = useState(false);
  const [animationRange, setAnimationRange] = useState('entry');
  const [key, setKey] = useState(0);
  const [copied, setCopied] = useState(false);

  const generatedClasses = [
    selectedAnimation,
    duration && `animate-duration-[${duration}]`,
    delay && `animate-delay-[${delay}]`,
    timing && `animate-ease-${timing}`,
    direction && `animate-${direction}`,
    iterations && `animate-${iterations}`,
    fillMode && `animate-fill-${fillMode}`,
    useScrollTimeline && 'timeline-view',
    useScrollTimeline && animationRange && `animate-range-${animationRange}`,
  ].filter(Boolean).join(' ');

  const replay = () => {
    setKey(prev => prev + 1);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedClasses);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr,400px]">
      {/* Controls */}
      <div className="space-y-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-8">
        <h3 className="text-xl font-bold text-[var(--color-text)]">
          Configuration
        </h3>
        
        <div>
          <label className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
            Animation
          </label>
          <select
            value={selectedAnimation}
            onChange={(e) => setSelectedAnimation(e.target.value)}
            className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-4 py-3 text-[var(--color-text)] transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
          >
            {animations.map(anim => (
              <option key={anim.class} value={anim.class}>
                {anim.name} • {anim.category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
              Duration
            </label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g. 500ms, 2s"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-4 py-3 text-[var(--color-text)] transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
              Delay
            </label>
            <input
              type="text"
              value={delay}
              onChange={(e) => setDelay(e.target.value)}
              placeholder="e.g. 200ms, 1s"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-4 py-3 text-[var(--color-text)] transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
              Timing Function
            </label>
            <select
              value={timing}
              onChange={(e) => setTiming(e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-4 py-3 text-[var(--color-text)] transition-colors focus:border-[var(--color-primary)] focus:outline-none"
            >
              <option value="">Default</option>
              <option value="linear">Linear</option>
              <option value="in">Ease In</option>
              <option value="out">Ease Out</option>
              <option value="in-out">Ease In-Out</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
              Direction
            </label>
            <select
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-4 py-3 text-[var(--color-text)] transition-colors focus:border-[var(--color-primary)] focus:outline-none"
            >
              <option value="">Default</option>
              <option value="normal">Normal</option>
              <option value="reverse">Reverse</option>
              <option value="alternate">Alternate</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
              Iterations
            </label>
            <select
              value={iterations}
              onChange={(e) => setIterations(e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-4 py-3 text-[var(--color-text)] transition-colors focus:border-[var(--color-primary)] focus:outline-none"
            >
              <option value="">Default (once)</option>
              <option value="once">Once</option>
              <option value="twice">Twice</option>
              <option value="thrice">Thrice</option>
              <option value="infinite">Infinite</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
              Fill Mode
            </label>
            <select
              value={fillMode}
              onChange={(e) => setFillMode(e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-4 py-3 text-[var(--color-text)] transition-colors focus:border-[var(--color-primary)] focus:outline-none"
            >
              <option value="">Default</option>
              <option value="none">None</option>
              <option value="forwards">Forwards</option>
              <option value="backwards">Backwards</option>
              <option value="both">Both</option>
            </select>
          </div>
        </div>

        {/* Scroll Timeline Options */}
        <div className="rounded-xl border-2 border-dashed border-[var(--color-border)] bg-gradient-to-br from-blue-500/5 to-purple-500/5 p-6">
          <div className="mb-4 flex items-center gap-2">
            <label className="flex flex-1 items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={useScrollTimeline}
                onChange={(e) => setUseScrollTimeline(e.target.checked)}
                className="h-5 w-5 rounded border-[var(--color-border)] text-[var(--color-primary)]"
              />
              <div>
                <span className="block text-sm font-semibold text-[var(--color-text)]">
                  Use Scroll Timeline
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">
                  Animate based on scroll position
                </span>
              </div>
            </label>
          </div>

          {useScrollTimeline && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
                Animation Range
              </label>
              <select
                value={animationRange}
                onChange={(e) => setAnimationRange(e.target.value)}
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text)] transition-colors focus:border-[var(--color-primary)] focus:outline-none"
              >
                <option value="entry">Entry</option>
                <option value="exit">Exit</option>
                <option value="cover">Cover</option>
                <option value="contain">Contain</option>
                <option value="gradual">Gradual (10%-90%)</option>
                <option value="moderate">Moderate (20%-80%)</option>
                <option value="brisk">Brisk (30%-70%)</option>
                <option value="rapid">Rapid (40%-60%)</option>
              </select>
            </div>
          )}
        </div>

        {/* Generated Code */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
            Generated Code
          </label>
          <div className="relative">
            <div className="overflow-x-auto rounded-lg border border-[var(--color-border)] bg-[#0d1117] p-4">
              <code className="text-sm text-gray-100 font-mono">
                {generatedClasses}
              </code>
            </div>
            <button
              onClick={copyToClipboard}
              className="absolute right-2 top-2 rounded-md bg-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[var(--color-primary-hover)] transition-all"
            >
              {copied ? '✓ Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        <button
          onClick={replay}
          className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-all hover:from-blue-500 hover:to-purple-500 hover:shadow-lg"
        >
          ↻ Replay Animation
        </button>
      </div>

      {/* Preview */}
      <div className="flex items-center justify-center rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-bg-alt)] to-[var(--color-bg)] p-8 lg:sticky lg:top-24 lg:h-[600px]">
        <div className="relative">
          <div
            key={key}
            className={`h-40 w-40 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl ${generatedClasses}`}
          />
          <div className="mt-6 text-center">
            <p className="text-sm font-medium text-[var(--color-text-muted)]">
              Preview
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
