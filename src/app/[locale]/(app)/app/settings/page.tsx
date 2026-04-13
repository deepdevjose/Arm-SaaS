import { PageHeader } from '@/components/dashboard/page-header';
import { Card } from '@/components/ui/card';

export default function SettingsPage() {
  return (
    <div>
      <PageHeader badge="Settings" title="Tenant settings" subtitle="Configure access, regions, policies, and account preferences." />
      <div className="grid gap-4 px-6 py-6 xl:grid-cols-2">
        <Card className="p-4">
          <div className="text-sm font-medium text-slate-200">Access control</div>
          <div className="mt-4 h-64 rounded-xl border border-dashed border-white/10 bg-black/15" />
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-slate-200">Regional policy</div>
          <div className="mt-4 h-64 rounded-xl border border-dashed border-white/10 bg-black/15" />
        </Card>
      </div>
    </div>
  );
}