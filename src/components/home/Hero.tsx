import Link from 'next/link';
import Image from 'next/image';
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
function TrustStrip() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6 flex flex-col gap-8 px-4 items-center">
      {/* Row 1: Academic Partners */}
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/logos/xjtlu.png"
            alt="XJTLU Logo"
            width={180}
            height={45}
            style={{ height: '45px', width: 'auto' }}
          />
          <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Xi&apos;an Jiaotong-Liverpool University</span>
        </div>
        <div className="flex flex-col items-center gap-3">
            <Image
              src="/logos/itsoeh.png"
              alt="ITSOEH Logo"
              width={220}
              height={55}
              style={{ height: '55px', width: 'auto' }}
            />
          <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Instituto Tecnológico (ITSOEH)</span>
        </div>
      </div>

      {/* Row 2: Industrial & Standards */}
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 hover:opacity-100 transition-opacity duration-500">
        <div className="flex flex-col items-center gap-1">
           <span className="text-[#ef4444] font-black text-3xl tracking-tighter">SIASUN</span>
           <span className="text-[8px] uppercase tracking-widest text-slate-500">Hardware Integration</span>
        </div>
        <div className="flex flex-col items-center gap-1">
           <div className="flex items-center gap-2">
             <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
               <div className="bg-indigo-400 rounded-sm"></div>
               <div className="bg-indigo-400 rounded-sm"></div>
               <div className="bg-indigo-400 rounded-sm"></div>
             </div>
             <span className="font-black text-2xl tracking-tight text-slate-300">ROS <span className="font-light">Industrial</span></span>
           </div>
           <span className="text-[8px] uppercase tracking-widest text-slate-500">Open Standards Protocol</span>
        </div>
      </div>
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
        <TrustStrip />
      </div>
    </section>
  );
}
