import { MetricCard } from '@/components/dashboard/metric-card';
import { PageHeader } from '@/components/dashboard/page-header';
import { Card } from '@/components/ui/card';

export default function AppHomePage() {
  return (
    <div>
      <PageHeader
        badge="Operations"
        title="Fleet overview"
        subtitle="The default landing page for authenticated users. Keep the main operational state visible at a glance."
      />
      <div className="grid gap-4 px-6 py-6 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Healthy nodes" value="118" detail="92% of the fleet is in nominal state" />
        <MetricCard label="Alerts open" value="12" detail="3 critical events require action" />
        <MetricCard label="Average RUL" value="174h" detail="Forecast window across active devices" />
        <MetricCard label="Edge regions" value="4" detail="All regions reporting telemetry" />
      </div>
      <div className="grid gap-4 px-6 pb-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="p-4">
          <div className="text-sm font-medium text-slate-200">Fleet status</div>
          <div className="mt-4 h-72 rounded-xl border border-dashed border-white/10 bg-black/15" />
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-slate-200">Recent activity</div>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <div className="rounded-xl border border-white/8 bg-black/15 p-3">arm-03 entered warning state after thermal drift</div>
            <div className="rounded-xl border border-white/8 bg-black/15 p-3">arm-02 generated a low RUL prediction</div>
            <div className="rounded-xl border border-white/8 bg-black/15 p-3">eu-west-1 gateway resynced successfully</div>
          </div>
        </Card>
      </div>
    </div>
  );
}