export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isChinese = locale === 'zh-Hans';

  const title = isChinese ? '关于 Arm Health' : 'About Arm Health';
  const subtitle = isChinese
    ? '我们专注于工业机械臂的预测性维护与可靠性运营。'
    : 'We build predictive reliability software for industrial robotic fleets.';
  const paragraph = isChinese
    ? '通过数字孪生、AI 预测和可执行告警，我们帮助工厂将停机风险转化为可计划、可追踪、可持续优化的运营流程。'
    : 'By combining digital twins, AI predictions, and action-ready alerts, we help factories turn downtime risk into planned, measurable, and continuously improving operations.';

  return (
    <main className="min-h-screen px-6 pb-16 pt-32">
      <section className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-slate-300">{subtitle}</p>
        <p className="mt-6 text-base leading-relaxed text-slate-200">{paragraph}</p>
      </section>
    </main>
  );
}
