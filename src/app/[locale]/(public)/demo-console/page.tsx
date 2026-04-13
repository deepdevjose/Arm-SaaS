import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { demoAlerts, demoFleet } from '@/lib/mock-data';
import { getDictionary } from '@/lib/i18n';

export default async function DemoConsolePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { common } = await getDictionary(locale);
  const t = common.demo;
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <Badge variant="warning">{t.tag}</Badge>
          <h1 className="mt-3 text-3xl font-semibold text-white">{t.title}</h1>
          <p className="mt-2 text-sm text-slate-400">{t.subtitle}</p>
        </div>
        <Badge variant="healthy">{t.online}</Badge>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.4fr_0.8fr]">
        <Card className="p-4">
          <div className="mb-4 text-sm font-medium text-slate-200">{t.fleetNodes}</div>
          <div className="overflow-hidden rounded-xl border border-white/8">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-slate-400">
                <tr>
                  <th className="px-4 py-3">{t.colNode}</th>
                  <th className="px-4 py-3">{t.colRegion}</th>
                  <th className="px-4 py-3">{t.colStatus}</th>
                  <th className="px-4 py-3">{t.colTemp}</th>
                  <th className="px-4 py-3">{t.colCpu}</th>
                  <th className="px-4 py-3">{t.colMem}</th>
                  <th className="px-4 py-3">{t.colRul}</th>
                </tr>
              </thead>
              <tbody>
                {demoFleet.map((node) => (
                  <tr key={node.id} className="border-t border-white/8 bg-black/10">
                    <td className="px-4 py-3 text-white">{node.id}</td>
                    <td className="px-4 py-3 text-slate-300">{node.region}</td>
                    <td className="px-4 py-3 text-slate-300">{node.status}</td>
                    <td className="px-4 py-3 text-slate-300">{node.temperature}C</td>
                    <td className="px-4 py-3 text-slate-300">{node.cpu}%</td>
                    <td className="px-4 py-3 text-slate-300">{node.memory}%</td>
                    <td className="px-4 py-3 text-slate-300">{node.rul}h</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-4">
          <div className="mb-4 text-sm font-medium text-slate-200">{t.alerts}</div>
          <div className="space-y-3">
            {demoAlerts.map((alert) => (
              <div key={alert.id} className="rounded-xl border border-white/8 bg-black/15 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">{alert.title}</span>
                  <Badge variant={alert.level === 'critical' ? 'critical' : alert.level === 'warning' ? 'warning' : 'muted'}>{alert.level}</Badge>
                </div>
                <div className="mt-2 text-xs text-slate-400">
                  {alert.node} · {alert.time}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}