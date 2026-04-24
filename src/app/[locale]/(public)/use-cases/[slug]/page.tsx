import Link from 'next/link';
import { notFound } from 'next/navigation';

type UseCaseContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  highlights: string[];
  outcomes: string[];
};

const useCaseContent: Record<string, Record<string, UseCaseContent>> = {
  'en-US': {
    manufacturing: {
      eyebrow: 'Manufacturing',
      title: 'Reduce downtime across high-load manufacturing cells.',
      subtitle:
        'Monitor temperature drift, torque spikes, and cycle anomalies across robotic cells to shift from reactive fixes to planned interventions.',
      highlights: [
        'Plant-level heatmaps for line-by-line risk visibility.',
        'Shift-aware maintenance windows to avoid production interruptions.',
        'Unified health index for mixed-brand robot fleets.',
      ],
      outcomes: [
        'Up to 35% less unplanned downtime.',
        'Faster triage with prioritized alert queues.',
      ],
    },
    'welding-robots': {
      eyebrow: 'Welding Robots',
      title: 'Detect weld-cell wear before quality drops.',
      subtitle:
        'Track thermal stress and vibration signatures in welding cycles to flag early-stage component fatigue long before catastrophic failure.',
      highlights: [
        'Joint-level vibration baselines with anomaly scoring.',
        'Continuous thermal envelope monitoring for J2/J3 stress zones.',
        'Remaining Useful Life forecasts tied to production cadence.',
      ],
      outcomes: [
        'Fewer emergency stoppages during peak shifts.',
        'Improved weld consistency through proactive service.',
      ],
    },
    'assembly-lines': {
      eyebrow: 'Assembly Lines',
      title: 'Keep high-throughput assembly lines moving.',
      subtitle:
        'Identify micro-degradation in repetitive motion systems and schedule intervention without disrupting takt-time commitments.',
      highlights: [
        'Cycle-pattern intelligence for repetitive pick-and-place tasks.',
        'Alert policies tuned by line criticality and throughput targets.',
        'Multi-site dashboards for benchmark-based optimization.',
      ],
      outcomes: [
        'Lower mean-time-to-repair (MTTR).',
        'Higher line availability during demand spikes.',
      ],
    },
    'industrial-auto': {
      eyebrow: 'Industrial Automation',
      title: 'Standardize reliability in distributed automation programs.',
      subtitle:
        'Consolidate health telemetry, prediction models, and maintenance operations into one control plane across factories and vendors.',
      highlights: [
        'Cross-region visibility with role-based operational views.',
        'Centralized policy management for thresholds and escalation.',
        'Audit-ready event history for compliance workflows.',
      ],
      outcomes: [
        'Reduced alert noise through contextual prioritization.',
        'Better spare-parts planning with forecast-driven maintenance.',
      ],
    },
  },
  'zh-Hans': {
    manufacturing: {
      eyebrow: '制造业',
      title: '在高负载制造单元中降低停机风险。',
      subtitle:
        '持续监控温度漂移、扭矩突增与节拍异常，让维护从被动抢修转向计划性干预。',
      highlights: [
        '提供产线级热力风险视图，快速定位高风险区域。',
        '按班次规划维护窗口，减少对生产节奏的影响。',
        '为多品牌机器人资产建立统一健康指数。',
      ],
      outcomes: [
        '计划外停机最高可减少 35%。',
        '通过告警优先级排序提升故障处置速度。',
      ],
    },
    'welding-robots': {
      eyebrow: '焊接机器人',
      title: '在质量下滑前识别焊接单元磨损。',
      subtitle:
        '跟踪焊接工况下的热应力与振动特征，提前发现组件疲劳，避免灾难性故障。',
      highlights: [
        '关节级振动基线与异常评分。',
        '针对 J2/J3 应力区进行连续热包络监控。',
        '结合产线节拍输出剩余使用寿命预测。',
      ],
      outcomes: [
        '高峰班次中紧急停机更少。',
        '通过主动保养提升焊接一致性。',
      ],
    },
    'assembly-lines': {
      eyebrow: '装配线',
      title: '保障高节拍装配线稳定运行。',
      subtitle:
        '识别重复动作系统中的微退化，并在不影响 takt time 的前提下完成维护干预。',
      highlights: [
        '为重复抓取与搬运任务提供节拍模式识别。',
        '根据产线关键度与产能目标定制告警策略。',
        '多站点对比看板支持持续优化。',
      ],
      outcomes: [
        '降低平均修复时间（MTTR）。',
        '需求高峰期间保持更高产线可用性。',
      ],
    },
    'industrial-auto': {
      eyebrow: '工业自动化',
      title: '在分布式自动化项目中统一可靠性标准。',
      subtitle:
        '将健康遥测、预测模型和维护执行汇聚到统一平台，覆盖多工厂与多供应商场景。',
      highlights: [
        '跨区域可视化并支持角色化运营视图。',
        '集中管理阈值与升级策略。',
        '具备审计能力的事件历史，满足合规流程。',
      ],
      outcomes: [
        '通过上下文优先级减少告警噪音。',
        '基于预测维护优化备件计划。',
      ],
    },
  },
};

export default async function UseCaseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const localeKey = locale === 'zh-Hans' ? 'zh-Hans' : 'en-US';
  const content = useCaseContent[localeKey][slug];

  if (!content) {
    notFound();
  }

  const backLabel = localeKey === 'zh-Hans' ? '返回应用案例' : 'Back to use cases';
  const highlightsLabel = localeKey === 'zh-Hans' ? '关键能力' : 'Key capabilities';
  const outcomesLabel = localeKey === 'zh-Hans' ? '业务结果' : 'Business outcomes';

  return (
    <main className="min-h-screen px-6 pb-16 pt-32">
      <section className="mx-auto max-w-5xl animate-fade-up">
        <Link href={`/${locale}/use-cases`} className="text-sm font-semibold text-indigo-300 hover:text-indigo-200">
          {backLabel}
        </Link>

        <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <span className="inline-flex rounded-full border border-indigo-300/30 bg-indigo-500/10 px-3 py-1 text-xs uppercase tracking-widest text-indigo-200">
            {content.eyebrow}
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">{content.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">{content.subtitle}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-200">{highlightsLabel}</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {content.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 p-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-200">{outcomesLabel}</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {content.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
