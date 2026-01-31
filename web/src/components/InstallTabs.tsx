import { useState } from 'react';
import { Code } from 'astro:components';

interface TabProps {
  version: 'v4' | 'v3';
}

const packageManagers = [
  { id: 'npm', label: 'npm', command: 'npm install' },
  { id: 'pnpm', label: 'pnpm', command: 'pnpm install' },
  { id: 'yarn', label: 'yarn', command: 'yarn add' },
  { id: 'bun', label: 'bun', command: 'bun add' },
];

export function InstallTabs({ version }: TabProps) {
  const [activeTab, setActiveTab] = useState('npm');
  const [activeTailwind, setActiveTailwind] = useState(version);

  const packageName = activeTailwind === 'v4'
    ? '@iscodex/tailwindcss-animate'
    : '@iscodex/tailwindcss-animate-plugin';

  const manager = packageManagers.find(m => m.id === activeTab);
  const installCommand = `${manager?.command} ${packageName}`;

  const usageCode = activeTailwind === 'v4'
    ? `@import 'tailwindcss';\n@import '@iscodex/tailwindcss-animate';`
    : `// tailwind.config.js\nmodule.exports = {\n  plugins: [\n    require('@iscodex/tailwindcss-animate-plugin'),\n  ],\n}`;

  return (
    <div className="mx-auto max-w-3xl">
      {/* Tailwind Version Tabs */}
      <div className="mb-6 flex justify-center gap-2">
        <button
          onClick={() => setActiveTailwind('v4')}
          className={`rounded-lg px-6 py-2 font-semibold transition-all ${activeTailwind === 'v4'
              ? 'bg-[var(--color-primary)] text-white shadow-lg'
              : 'bg-[var(--color-bg-alt)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
            }`}
        >
          Tailwind v4
        </button>
        <button
          onClick={() => setActiveTailwind('v3')}
          className={`rounded-lg px-6 py-2 font-semibold transition-all ${activeTailwind === 'v3'
              ? 'bg-[var(--color-primary)] text-white shadow-lg'
              : 'bg-[var(--color-bg-alt)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
            }`}
        >
          Tailwind v3
        </button>
      </div>

      {/* Package Manager Tabs */}
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {packageManagers.map((pm) => (
          <button
            key={pm.id}
            onClick={() => setActiveTab(pm.id)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${activeTab === pm.id
                ? 'bg-[var(--color-bg-alt)] text-[var(--color-text)] ring-2 ring-[var(--color-primary)]'
                : 'bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
              }`}
          >
            {pm.label}
          </button>
        ))}
      </div>

      {/* Install Command */}
      <div className="mb-6 overflow-hidden rounded-lg border border-[var(--color-border)]">
        <div className="bg-[#0d1117] p-4">
          <div className="flex items-center justify-between">
            <code className="text-sm text-gray-100">{installCommand}</code>
            <button
              onClick={() => {
                navigator.clipboard.writeText(installCommand);
                alert('Copied!');
              }}
              className="ml-4 rounded-md bg-[var(--color-primary)] px-3 py-1 text-xs font-medium text-white hover:bg-[var(--color-primary-hover)]"
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      {/* Usage */}
      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
        <h3 className="mb-3 text-lg font-semibold text-[var(--color-text)]">
          How to use
        </h3>
        <div className="overflow-hidden rounded-lg">
          <pre className="bg-[#0d1117] p-4 text-sm text-gray-100 overflow-x-auto">
            <code>{usageCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
