import { appName, appNav } from '@/lib/site';
import { Badge } from '@/components/ui/badge';
import type { ReactNode } from 'react';

export function AppShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,rgba(2,8,23,0.96),rgba(10,18,34,0.98))] text-white">
      <div className="grid min-h-screen grid-cols-[260px_1fr]">
        <aside className="border-r border-white/10 bg-black/25 px-4 py-5 backdrop-blur-xl">
          <div className="mb-8">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">{appName}</div>
            <div className="mt-2 text-xs text-slate-400">Enterprise operations console</div>
          </div>
          <nav className="space-y-1 text-sm">
            {appNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-xl px-3 py-2 text-slate-300 transition hover:bg-white/8 hover:text-white"
              >
                <span>{item.label}</span>
                <Badge variant="muted">live</Badge>
              </a>
            ))}
          </nav>
        </aside>
        <section className="min-w-0">{children}</section>
      </div>
    </div>
  );
}