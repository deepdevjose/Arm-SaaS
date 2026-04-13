import { PageHeader } from '@/components/dashboard/page-header';
import { Card } from '@/components/ui/card';
import { demoFleet } from '@/lib/mock-data';

export default function FleetPage() {
  return (
    <div>
      <PageHeader badge="Fleet" title="Fleet inventory" subtitle="Dense tabular control surface for all managed ARM nodes." />
      <div className="px-6 py-6">
        <Card className="overflow-hidden p-0">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-slate-400">
              <tr>
                <th className="px-4 py-3">Node</th>
                <th className="px-4 py-3">Region</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Temp</th>
                <th className="px-4 py-3">CPU</th>
                <th className="px-4 py-3">Memory</th>
                <th className="px-4 py-3">RUL</th>
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
        </Card>
      </div>
    </div>
  );
}