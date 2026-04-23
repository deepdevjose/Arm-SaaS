import Image from 'next/image';
import mockImage from '@/app/[locale]/(public)/assets/dashboard_mock.png';

export function ProcessSection({ dict }: { dict?: any }) {
  return (
    <section className="process-section px-4 py-24 max-w-7xl mx-auto">
      <div className="animate-fade-up text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
          {dict?.processTitle || 'Zero downtime for industrial robotic arms.'}
        </h2>
        <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
          {dict?.processDesc || 'From edge telemetry to predictive alerts, our 3-step architecture guarantees maximum uptime for your fleet.'}
        </p>
      </div>

      {/* 3-Step Architecture Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative animate-fade-up" style={{ animationDelay: '200ms' }}>
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 z-0"></div>
        
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center relative z-10 group">
          <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 shadow-xl group-hover:border-indigo-500 transition-colors">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><path d="M22 6l-10 7L2 6"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{dict?.step1Title || '1. Data Ingestion (IoT Edge)'}</h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{dict?.step1Desc || 'Direct connection to temperature, vibration, and current sensors on robotic joints.'}</p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center relative z-10 group">
          <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 shadow-xl group-hover:border-indigo-500 transition-colors">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{dict?.step2Title || '2. AI Prediction (LSTM Core)'}</h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{dict?.step2Desc || 'Proprietary LSTM models calculate Remaining Useful Life (RUL) with >95% accuracy.'}</p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center relative z-10 group">
          <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 shadow-xl group-hover:border-indigo-500 transition-colors">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{dict?.step3Title || '3. Visualization & Actuation'}</h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{dict?.step3Desc || 'Automatic alerts, maintenance tickets, and live 3D stress heatmaps without human intervention.'}</p>
        </div>
      </div>

      <div className="hero-media-container animate-fade-up relative" style={{ animationDelay: '400ms' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07091a] via-transparent to-transparent z-10 pointer-events-none"></div>
        <Image 
          src={mockImage} 
          alt="Dashboard Interface" 
          width={1200} 
          height={675}
          className="rounded-2xl border border-white/10 shadow-2xl"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjY3NSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFmMWYyNSIvPjwvc3ZnPg=="
        />
      </div>
    </section>
  );
}
