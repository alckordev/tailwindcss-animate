import { useState, useEffect } from 'react';
import { animations, categories } from '../data/animations';

const durations = [
  { value: '', label: 'default' },
  { value: '200ms', label: '200ms' },
  { value: '300ms', label: '300ms' },
  { value: '500ms', label: '500ms' },
  { value: '700ms', label: '700ms' },
  { value: '1s', label: '1s' },
  { value: '2s', label: '2s' },
  { value: '3s', label: '3s' },
];

const delays = [
  { value: '', label: 'none' },
  { value: '100ms', label: '100ms' },
  { value: '200ms', label: '200ms' },
  { value: '300ms', label: '300ms' },
  { value: '500ms', label: '500ms' },
  { value: '1s', label: '1s' },
];

export function AnimationGrid() {
  const [duration, setDuration] = useState('');
  const [delay, setDelay] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [replayKey, setReplayKey] = useState(0);

  const filteredAnimations = selectedCategory === 'all'
    ? animations
    : animations.filter(a => a.category === selectedCategory);

  const handleAnimateAll = () => {
    setReplayKey(prev => prev + 1);
  };

  return (
    <div>
      {/* Controls */}
      <div className="mb-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
        <div className="flex flex-wrap items-center gap-6">
          {/* Duration */}
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-[var(--color-text)]">
              Duration
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-3 py-2 text-sm text-[var(--color-text)]"
            >
              {durations.map(d => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>
          </div>

          {/* Delay */}
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-[var(--color-text)]">
              Delay
            </label>
            <select
              value={delay}
              onChange={(e) => setDelay(e.target.value)}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-3 py-2 text-sm text-[var(--color-text)]"
            >
              {delays.map(d => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-[var(--color-text)]">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-3 py-2 text-sm text-[var(--color-text)]"
            >
              <option value="all">All ({animations.length})</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat} ({animations.filter(a => a.category === cat).length})
                </option>
              ))}
            </select>
          </div>

          {/* Animate All Button */}
          <button
            onClick={handleAnimateAll}
            className="ml-auto rounded-lg bg-[var(--color-primary)] px-6 py-2 font-semibold text-white hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            Animate all
          </button>
        </div>
      </div>

      {/* Animation Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredAnimations.map((anim) => {
          const classes = [
            anim.class,
            duration && `animate-duration-[${duration}]`,
            delay && `animate-delay-[${delay}]`,
          ].filter(Boolean).join(' ');

          return (
            <div
              key={`${anim.class}-${replayKey}`}
              className="group relative overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-all hover:border-[var(--color-primary)] hover:shadow-xl"
            >
              {anim.description && (
                <span className="absolute right-2 top-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 px-2 py-1 text-xs font-bold text-white">
                  {anim.description}
                </span>
              )}

              <div className="mb-4 flex h-32 items-center justify-center">
                <div
                  className={`h-20 w-20 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 ${classes}`}
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-sm font-semibold text-[var(--color-text)]">
                  {anim.name}
                </h3>
                <code className="block rounded-md bg-[var(--color-bg-alt)] px-3 py-1.5 text-xs text-[var(--color-text-muted)] font-mono">
                  {anim.class}
                </code>
              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(classes);
                  const btn = event?.currentTarget as HTMLButtonElement;
                  const original = btn.textContent;
                  btn.textContent = 'Copied!';
                  setTimeout(() => {
                    btn.textContent = original;
                  }, 2000);
                }}
                className="mt-4 w-full rounded-md bg-[var(--color-primary)] px-3 py-2 text-sm font-medium text-white opacity-0 transition-all group-hover:opacity-100 hover:bg-[var(--color-primary-hover)]"
              >
                Copy
              </button>
            </div>
          );
        })}
      </div>

      {filteredAnimations.length === 0 && (
        <div className="py-12 text-center text-[var(--color-text-muted)]">
          No animations found in this category
        </div>
      )}
    </div>
  );
}
