import { PageHeader } from '@/components/dashboard/page-header';
import { Card } from '@/components/ui/card';

export default async function NodePage({ params }: Readonly<{ params: Promise<{ id: string }> }>) {
  const { id } = await params;

  return (
    <div>
      <PageHeader badge="Node detail" title={`Node ${id}`} subtitle="Single-node drill-down for telemetry, health state, and maintenance context." />
      <div className="grid gap-4 px-6 py-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-4">
          <div className="text-sm font-medium text-slate-200">Telemetry chart surface</div>
          <div className="mt-4 h-80 rounded-xl border border-dashed border-white/10 bg-black/15" />
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-slate-200">Health summary</div>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <div className="rounded-xl border border-white/8 bg-black/15 p-3">Thermal state: nominal</div>
            <div className="rounded-xl border border-white/8 bg-black/15 p-3">RUL forecast: 174h</div>
            <div className="rounded-xl border border-white/8 bg-black/15 p-3">Last alert: none</div>
          </div>
        </Card>
      </div>
    </div>
  );
}