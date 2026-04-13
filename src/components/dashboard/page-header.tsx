import { Badge } from '@/components/ui/badge';

export function PageHeader({
  title,
  subtitle,
  badge
}: Readonly<{
  title: string;
  subtitle: string;
  badge?: string;
}>) {
  return (
    <div className="flex flex-col gap-3 border-b border-white/10 px-6 py-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        {badge ? <Badge variant="muted" className="mb-3">{badge}</Badge> : null}
        <h1 className="text-2xl font-semibold tracking-tight text-white">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}