import type { ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export function PublicShell({ children, dict }: Readonly<{ children: ReactNode; dict?: any }>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header dict={dict?.nav} />
      <div className="flex-1">
        {children}
      </div>
      <Footer dict={dict?.nav} />
    </div>
  );
}