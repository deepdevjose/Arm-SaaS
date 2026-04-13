import { PublicShell } from '@/components/layout/public-shell';
import type { ReactNode } from 'react';
import { getDictionary } from '@/lib/i18n';

export default async function PublicLayout({ children, params }: Readonly<{ children: ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return <PublicShell dict={dict.common}>{children}</PublicShell>;
}