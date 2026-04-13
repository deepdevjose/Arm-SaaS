import type { ReactNode } from 'react';

export function OnboardingShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-12">
      <div className="w-full rounded-3xl border border-white/10 bg-white/6 p-8 shadow-panel backdrop-blur-xl">{children}</div>
    </div>
  );
}