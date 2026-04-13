import { PageHeader } from '@/components/dashboard/page-header';
import { Card } from '@/components/ui/card';

export default function LogsPage() {
  return (
    <div>
      <PageHeader badge="Logs" title="Event explorer" subtitle="Operational logs and anomaly traces for fast triage." />
      <div className="px-6 py-6">
        <Card className="p-4">
          <div className="h-[560px] rounded-xl border border-dashed border-white/10 bg-black/15" />
        </Card>
      </div>
    </div>
  );
}