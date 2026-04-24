export default async function CaseStudiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isChinese = locale === 'zh-Hans';

  const title = isChinese ? '行业案例研究' : 'Case Studies';
  const subtitle = isChinese
    ? '来自制造、焊接与装配场景的真实改进结果。'
    : 'Real outcomes from manufacturing, welding, and assembly operations.';

  const items = isChinese
    ? [
        '某汽车厂将焊接工位意外停机降低 31%。',
        '某电子装配线将 MTTR 缩短 22%。',
        '跨站点告警治理使误报率下降 40%。',
      ]
    : [
        'Automotive weld cells reduced unplanned stops by 31%.',
        'Electronics assembly lowered MTTR by 22%.',
        'Cross-site alert governance reduced false positives by 40%.',
      ];

  return (
    <main className="min-h-screen px-6 pb-16 pt-32">
      <section className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-slate-300">{subtitle}</p>

        <ul className="mt-8 space-y-4 text-slate-200">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 p-4">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
