import { PageHeader } from '@/components/dashboard/page-header';
import { Card } from '@/components/ui/card';
import { demoAlerts } from '@/lib/mock-data';

export default function AlertsPage() {
  return (
    <div>
      <PageHeader badge="Alerts" title="Alert queue" subtitle="Active alerts, history, and escalation context." />
      <div className="grid gap-4 px-6 py-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-4">
          <div className="text-sm font-medium text-slate-200">Open alerts</div>
          <div className="mt-4 space-y-3">
            {demoAlerts.map((alert) => (
              <div key={alert.id} className="rounded-xl border border-white/8 bg-black/15 p-3 text-sm text-slate-300">
                {alert.title}
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-slate-200">Escalation rules</div>
          <div className="mt-4 h-80 rounded-xl border border-dashed border-white/10 bg-black/15" />
        </Card>
      </div>
    </div>
  );
}