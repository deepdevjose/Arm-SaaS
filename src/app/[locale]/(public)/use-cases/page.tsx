import Link from 'next/link';
import { getDictionary } from '@/lib/i18n';

export default async function UseCasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { common } = await getDictionary(locale);
  const t = common.useCases;
  const isChinese = locale === 'zh-Hans';

  const cases = [
    {
      slug: 'manufacturing',
      title: isChinese ? '制造业产线' : 'Manufacturing Plants',
      description: isChinese
        ? '针对多班次、高负载场景进行健康评分与保养排程，降低突发停机。'
        : 'Health scoring and maintenance scheduling for multi-shift, high-load production floors.',
    },
    {
      slug: 'welding-robots',
      title: isChinese ? '焊接机器人' : 'Welding Robots',
      description: isChinese
        ? '持续跟踪热应力与关节振动，提前识别焊接工况下的疲劳风险。'
        : 'Continuous thermal and vibration tracking to catch fatigue risk in welding cycles early.',
    },
    {
      slug: 'assembly-lines',
      title: isChinese ? '装配线自动化' : 'Assembly Lines',
      description: isChinese
        ? '面向高节拍节奏的预测维护策略，减少计划外停线和返工。'
        : 'Predictive maintenance tuned for high-throughput assembly to avoid unplanned line stops.',
    },
    {
      slug: 'industrial-auto',
      title: isChinese ? '工业自动化系统' : 'Industrial Automation',
      description: isChinese
        ? '跨站点统一视图，集中处理告警优先级与备件更换窗口。'
        : 'Cross-site visibility to prioritize alerts and optimize spare-part replacement windows.',
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-16">
      <section className="px-6 max-w-5xl mx-auto text-center mb-24 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{t.title}</h1>
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">{t.subtitle}</p>
        <Link href={`/${locale}/demo-console`} className="pill-button">{t.cta}</Link>
      </section>

      <section className="px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 animate-fade-up" style={{ animationDelay: '100ms' }}>
        {cases.map((item) => (
          <Link
            key={item.slug}
            href={`/${locale}/use-cases/${item.slug}`}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:-translate-y-1 hover:border-indigo-300/40 hover:bg-indigo-500/10"
          >
            <span className="inline-flex rounded-full border border-indigo-300/30 bg-indigo-400/10 px-3 py-1 text-[10px] uppercase tracking-widest text-indigo-200">
              {isChinese ? '应用场景' : 'Use Case'}
            </span>
            <h2 className="mt-5 text-2xl font-bold text-white group-hover:text-indigo-100">{item.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">{item.description}</p>
            <p className="mt-6 text-sm font-semibold text-indigo-300">{isChinese ? '查看详情 →' : 'View details →'}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
