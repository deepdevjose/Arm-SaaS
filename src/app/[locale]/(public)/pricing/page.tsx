import Link from 'next/link';

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  nodes: string;
  highlight?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  emphasized?: boolean;
};

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isChinese = locale === 'zh-Hans';

  const title = isChinese ? '定价方案（演示版）' : 'Pricing (Demo Plans)';
  const subtitle = isChinese
    ? '以下价格用于产品演示，结构贴近工业 SaaS 实际商业模式。可按工厂规模和机器人数量进行定制。'
    : 'Demo pricing with a realistic industrial SaaS structure. Final pricing can be tailored by plant size and robot fleet.';

  const plans: Plan[] = isChinese
    ? [
        {
          name: 'Pilot 试点',
          price: '$4,900',
          period: '/月',
          description: '适用于单工厂 PoC 与首批产线验证。',
          nodes: '最多 25 台机器人',
          features: [
            '核心健康监控（温度/振动/电流）',
            '基础告警规则与邮件通知',
            '标准数据保留（90 天）',
            '每周运营报告',
          ],
          cta: '开始试点',
          ctaHref: `/${locale}/contact-sales`,
        },
        {
          name: 'Scale 规模化',
          price: '$12,900',
          period: '/月',
          description: '面向多条产线的常态化部署。',
          nodes: '最多 120 台机器人',
          highlight: '最受欢迎',
          emphasized: true,
          features: [
            '包含 Pilot 全部能力',
            'LSTM 预测与 RUL 评分',
            '数字孪生可视化与多站点看板',
            '工单集成与优先级告警编排',
          ],
          cta: '申请 ROI 分析',
          ctaHref: `/${locale}/contact-sales`,
        },
        {
          name: 'Enterprise 企业版',
          price: '定制',
          period: '',
          description: '覆盖集团级工厂网络与治理需求。',
          nodes: '120+ 台机器人',
          features: [
            '不限节点 + 集团级组织管理',
            '专属 VPC / 私有化部署选项',
            'SLA、SSO、审计日志与合规支持',
            '专属成功经理与 24/7 支持',
          ],
          cta: '联系销售团队',
          ctaHref: `/${locale}/contact-sales`,
        },
      ]
    : [
        {
          name: 'Pilot',
          price: '$4,900',
          period: '/month',
          description: 'Best for single-plant PoC and first production validation.',
          nodes: 'Up to 25 robots',
          features: [
            'Core health monitoring (temp/vibration/current)',
            'Baseline alert rules with email notifications',
            'Standard data retention (90 days)',
            'Weekly reliability report',
          ],
          cta: 'Start pilot',
          ctaHref: `/${locale}/contact-sales`,
        },
        {
          name: 'Scale',
          price: '$12,900',
          period: '/month',
          description: 'Built for multi-line deployments in daily operation.',
          nodes: 'Up to 120 robots',
          highlight: 'Most popular',
          emphasized: true,
          features: [
            'Everything in Pilot',
            'LSTM predictions and RUL scoring',
            'Digital twin views and multi-site dashboards',
            'CMMS integration and alert orchestration',
          ],
          cta: 'Request ROI analysis',
          ctaHref: `/${locale}/contact-sales`,
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: '',
          description: 'For global factory networks and advanced governance.',
          nodes: '120+ robots',
          features: [
            'Unlimited nodes and org-level management',
            'Dedicated VPC / on-prem deployment options',
            'SLA, SSO, audit logs, and compliance support',
            'Dedicated success manager and 24/7 support',
          ],
          cta: 'Talk to sales',
          ctaHref: `/${locale}/contact-sales`,
        },
      ];

  const addOns = isChinese
    ? [
        ['边缘网关套件', '$1,200 /工厂/月'],
        ['高级预测模型包', '$2,400 /月'],
        ['专家驻场服务', '$1,800 /天'],
      ]
    : [
        ['Edge gateway kit', '$1,200 / plant / month'],
        ['Advanced prediction model pack', '$2,400 / month'],
        ['On-site expert services', '$1,800 / day'],
      ];

  return (
    <main className="min-h-screen px-6 pb-16 pt-32">
      <section className="mx-auto max-w-6xl animate-fade-up">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-indigo-300/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
            {isChinese ? '商业方案' : 'Commercial plans'}
          </p>
          <h1 className="mt-5 text-4xl font-bold text-white md:text-6xl">{title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">{subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-7 ${
                plan.emphasized
                  ? 'border-indigo-300/50 bg-indigo-500/10 shadow-[0_20px_45px_rgba(79,70,229,0.25)]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
                {plan.highlight ? (
                  <span className="rounded-full border border-indigo-200/50 bg-indigo-400/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-100">
                    {plan.highlight}
                  </span>
                ) : null}
              </div>

              <p className="mt-3 text-sm text-slate-300">{plan.description}</p>

              <div className="mt-5 flex items-end gap-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.period ? <span className="pb-1 text-sm text-slate-300">{plan.period}</span> : null}
              </div>

              <p className="mt-2 text-sm font-medium text-indigo-200">{plan.nodes}</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`mt-7 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                  plan.emphasized
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                    : 'border border-white/20 text-slate-100 hover:bg-white/10'
                }`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">{isChinese ? '可选增值服务（Demo）' : 'Optional add-ons (Demo)'}</h3>
            <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
              <table className="w-full text-left text-sm">
                <tbody>
                  {addOns.map(([name, value]) => (
                    <tr key={name} className="border-t border-white/10 first:border-t-0">
                      <td className="px-4 py-3 text-slate-200">{name}</td>
                      <td className="px-4 py-3 text-right font-semibold text-indigo-200">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-300/25 bg-emerald-400/10 p-6">
            <h3 className="text-lg font-semibold text-white">{isChinese ? '说明' : 'Notes'}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-100">
              <li>{isChinese ? '以上价格为演示报价，不构成最终合同。' : 'Prices above are demo values and not final contractual quotes.'}</li>
              <li>{isChinese ? '按年签约可提供折扣（通常 10%-18%）。' : 'Annual commitments typically include a 10%-18% discount.'}</li>
              <li>{isChinese ? '首次部署可能包含一次性上线服务费。' : 'Initial rollout may include one-time implementation fees.'}</li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}
