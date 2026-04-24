export default async function ApiReferencePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isChinese = locale === 'zh-Hans';

  const title = isChinese ? 'API 参考文档' : 'API Reference';
  const subtitle = isChinese
    ? '用于设备接入、遥测上报、告警读取与健康评分查询的核心接口。'
    : 'Core endpoints for device onboarding, telemetry ingestion, alert retrieval, and health score queries.';

  const endpoints = [
    { method: 'POST', path: '/v1/devices/register' },
    { method: 'POST', path: '/v1/telemetry/ingest' },
    { method: 'GET', path: '/v1/alerts' },
    { method: 'GET', path: '/v1/fleet/health' },
  ];

  return (
    <main className="min-h-screen px-6 pb-16 pt-32">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">{subtitle}</p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-slate-300">
              <tr>
                <th className="px-4 py-3">Method</th>
                <th className="px-4 py-3">Endpoint</th>
              </tr>
            </thead>
            <tbody>
              {endpoints.map((endpoint) => (
                <tr key={endpoint.path} className="border-t border-white/10 bg-black/20 text-slate-200">
                  <td className="px-4 py-3 font-semibold text-indigo-300">{endpoint.method}</td>
                  <td className="px-4 py-3 font-mono">{endpoint.path}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
