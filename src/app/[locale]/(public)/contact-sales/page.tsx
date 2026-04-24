import Link from 'next/link';

export default async function ContactSalesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isChinese = locale === 'zh-Hans';

  const title = isChinese ? '联系销售工程团队' : 'Contact Sales Engineering';
  const subtitle = isChinese
    ? '告诉我们你的产线规模与机器人品牌，我们将提供落地方案与 ROI 评估。'
    : 'Share your fleet size and robot mix to receive a deployment plan and ROI breakdown.';

  return (
    <main className="min-h-screen px-6 pb-16 pt-32">
      <section className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-slate-300">{subtitle}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="mailto:sales@arm-health.com" className="inline-flex rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400">
            {isChinese ? '发送邮件' : 'Email sales'}
          </a>
          <Link href={`/${locale}/pricing`} className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10">
            {isChinese ? '查看定价' : 'View pricing'}
          </Link>
        </div>
      </section>
    </main>
  );
}
