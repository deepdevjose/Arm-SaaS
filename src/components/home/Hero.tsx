import Link from 'next/link';
import { RobotViewerClient } from '@/components/three/RobotViewerClient';

/* ─── Live HUD overlay cards ─── */
function HudCard({ label, value, unit, status, accent }: {
  label: string; value: string; unit?: string; status?: string; accent?: string;
}) {
  const accentColor = accent ?? '#22c55e';
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 px-3.5 py-2.5 min-w-[110px]">
      <span className="text-[9px] tracking-widest uppercase font-medium" style={{ color: accentColor }}>{label}</span>
      <div className="flex items-baseline gap-1">
        <span className="text-lg font-bold text-white leading-none">{value}</span>
        {unit && <span className="text-[10px] text-slate-400">{unit}</span>}
      </div>
      {status && (
        <div className="flex items-center gap-1.5 mt-0.5">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accentColor }} />
          <span className="text-[9px] tracking-widest uppercase font-medium" style={{ color: accentColor }}>{status}</span>
        </div>
      )}
    </div>
  );
}

/* ─── Trust metrics strip ─── */
function TrustStrip({ dict }: { dict?: any }) {
  const items = [
    { icon: '⬇', value: dict?.trustStat1Val ?? '35%', label: dict?.trustStat1 ?? 'Downtime reduction' },
    { icon: '⏱', value: dict?.trustStat2Val ?? '72h', label: dict?.trustStat2 ?? 'Advance failure warning' },
    { icon: '🤖', value: dict?.trustStat3Val ?? '6-axis', label: dict?.trustStat3 ?? 'Real-time joint monitoring' },
    { icon: '⚡', value: dict?.trustStat4Val ?? '<100ms', label: dict?.trustStat4 ?? 'Telemetry latency' },
  ];
  return (
    <div className="w-full max-w-5xl mx-auto mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 px-4">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center gap-1 rounded-2xl border border-white/8 bg-white/3 px-4 py-4 text-center backdrop-blur-sm">
          <span className="text-2xl font-black text-white">{item.value}</span>
          <span className="text-[11px] text-slate-400 leading-tight">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export function Hero({ dict }: { dict?: any }) {
  return (
    <section className="hero-section">
      <div className="hero-bg-glow"></div>

      {/* ── Headline block ── */}
      <div className="animate-fade-up text-center px-4">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[#4F46E5]/40 bg-[#4F46E5]/10 text-[11px] tracking-widest uppercase text-[#818cf8] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
          {dict?.eyebrow ?? 'Live AI Monitoring — Now Available'}
        </div>

        <h1 className="hero-title">
          {dict?.title ?? 'Prevent Robotic Arm Failures Before They Happen'}
        </h1>

        <p className="hero-subtitle max-w-2xl mx-auto">
          {dict?.subtitle ?? 'Real-time AI Digital Twin for predictive maintenance, anomaly detection, and RUL estimation.'}
        </p>

        {/* ── CTAs with hierarchy ── */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8">
          <Link
            href="/demo-console"
            className="pill-button px-8 py-3.5 text-base font-bold shadow-[0_0_32px_rgba(79,70,229,0.5)] hover:shadow-[0_0_48px_rgba(79,70,229,0.7)] transition-all"
            style={{ background: 'linear-gradient(135deg,#4F46E5,#6366f1)', color: '#fff', border: 'none' }}
          >
            {dict?.ctaStart ?? 'Start Monitoring'}
          </Link>
          <Link
            href="/digital-twin"
            className="pill-button pill-button-secondary px-8 py-3.5 text-base font-medium"
          >
            {dict?.ctaDemo ?? 'Watch Demo →'}
          </Link>
        </div>

        {/* Microcopy */}
        <p className="mt-4 text-[11px] text-slate-500 tracking-widest uppercase">
          {dict?.disclaimer ?? 'Live AI Simulation — SIASUN SR12A Digital Twin'}
        </p>
      </div>

      {/* ── 3D Viewer + HUD Overlays ── */}
      <div className="hero-media-container animate-fade-up w-full max-w-5xl mx-auto px-4" style={{ animationDelay: '200ms' }}>
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#07091a]">
          {/* Top status bar */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-2.5 border-b border-white/8 bg-black/40 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] tracking-widest uppercase text-green-400 font-semibold">SIASUN SR12A · {dict?.hudLive ?? 'Live Twin'}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-widest uppercase text-slate-500">J1-J6 Active</span>
              <div className="flex gap-1">
                {[1,2,3,4].map(i => <div key={i} className="w-1 rounded-full bg-[#4F46E5]" style={{ height: `${6 + i * 3}px` }} />)}
              </div>
            </div>
          </div>

          {/* LEFT HUD column */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 pointer-events-none">
            <HudCard label="STATUS" value="HEALTHY" status="NOMINAL" accent="#22c55e" />
            <HudCard label="RUL" value="128" unit="hours" accent="#818cf8" />
            <HudCard label="ANOMALY" value="0.03" unit="/1.0" accent="#22c55e" />
          </div>

          {/* RIGHT HUD column */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 pointer-events-none">
            <HudCard label="TEMP (J3)" value="62" unit="°C" accent="#f59e0b" />
            <HudCard label="VIBRATION" value="NORMAL" accent="#22c55e" />
            <HudCard label="LOAD" value="78" unit="%" accent="#818cf8" />
          </div>

          <RobotViewerClient height="500px" autoRotate={true} />
        </div>
      </div>

      {/* ── Trust / proof strip ── */}
      <div className="animate-fade-up" style={{ animationDelay: '350ms' }}>
        <p className="text-center text-[11px] tracking-widest uppercase text-slate-500 mt-10 mb-4">
          {dict?.trustTitle ?? 'Trusted by industrial automation teams'}
        </p>
        <TrustStrip dict={dict} />
      </div>
    </section>
  );
}
