import { OnboardingShell } from '@/components/layout/onboarding-shell';
import type { ReactNode } from 'react';

export default function OnboardingLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <OnboardingShell>{children}</OnboardingShell>;
}