import Link from 'next/link';

export default async function DocsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isChinese = locale === 'zh-Hans';

  const title = isChinese ? '开发与运维文档' : 'Product Documentation';
  const subtitle = isChinese
    ? '集中查看平台接入、数字孪生部署、告警策略和运维最佳实践。'
    : 'Get started with platform onboarding, digital twin setup, alert policies, and operations best practices.';

  const sections = isChinese
    ? [
        { name: '快速开始', desc: '从设备接入到首个告警策略的完整流程。' },
        { name: '平台架构', desc: '理解数据流、AI 推理链路与可视化层。' },
        { name: '运维指南', desc: '生产环境监控、版本升级与回滚建议。' },
      ]
    : [
        { name: 'Quickstart', desc: 'End-to-end flow from device onboarding to first alert policy.' },
        { name: 'Platform Architecture', desc: 'Understand data flow, AI inference path, and visualization layers.' },
        { name: 'Operations Guide', desc: 'Production monitoring, upgrade strategy, and rollback guidance.' },
      ];

  return (
    <main className="min-h-screen px-6 pb-16 pt-32">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">{subtitle}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {sections.map((section) => (
            <article key={section.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-lg font-semibold text-white">{section.name}</h2>
              <p className="mt-2 text-sm text-slate-300">{section.desc}</p>
            </article>
          ))}
        </div>

        <Link href={`/${locale}/demo-console`} className="mt-8 inline-flex rounded-full border border-indigo-300/40 bg-indigo-500/15 px-5 py-2 text-sm font-semibold text-indigo-200 hover:bg-indigo-500/25">
          {isChinese ? '查看演示控制台' : 'Open demo console'}
        </Link>
      </section>
    </main>
  );
}
