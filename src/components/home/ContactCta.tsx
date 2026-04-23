'use client';

import Link from 'next/link';

export function ContactCta({ dict }: { dict?: any }) {
  return (
    <div className="flex flex-col gap-12 max-w-5xl mx-auto px-4 py-24">
      {/* ── ORIGINAL WHITE CTA SECTION ── */}
      <section className="cta-section">
        <div className="cta-grid">
           <div className="cta-main-card animate-fade-up">
              <div className="flex -space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#e2e8f0] text-slate-400 border-4 border-white flex items-center justify-center relative z-10 transition-transform hover:z-40 hover:scale-105">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#cbd5e1] text-slate-500 border-4 border-white flex items-center justify-center relative z-20 transition-transform hover:z-40 hover:scale-105">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#94a3b8] text-slate-600 border-4 border-white flex items-center justify-center relative z-30 transition-transform hover:z-40 hover:scale-105">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
              </div>
              
              <h2 className="cta-heading">{dict?.title || 'Start monitoring your robotic fleet before the next failure.'}</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/" className="pill-button justify-center sm:justify-start" style={{background: '#4F46E5', color: '#fff', border: 'none'}}>
                  {dict?.demo || 'Request Demo'}
                </Link>
                <Link href="/" className="pill-button pill-button-secondary justify-center sm:justify-start border-slate-300 text-slate-800 hover:bg-slate-50">
                  {dict?.talk || 'Talk to an Engineer'}
                </Link>
              </div>
           </div>
           
           <div className="cta-side-cards animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="cta-small-card">
                 <h4 className="cta-small-title">{dict?.healthTitle || 'Health Monitoring'}</h4>
                 <p className="cta-small-text">{dict?.healthDesc || 'Joint telemetry (J1–J6), tracking temperature, vibration, and current.'}</p>
                 <div className="mt-4 w-10 h-10 text-gray-500 rounded-full border border-gray-300 flex items-center justify-center ml-auto transition-transform hover:translate-x-1 cursor-pointer">
                   <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </div>
              </div>
              
              <div className="cta-small-card">
                 <h4 className="cta-small-title">{dict?.aiTitle || 'AI Predictions'}</h4>
                 <p className="cta-small-text">{dict?.aiDesc || 'LSTM-based failure prediction and Remaining Useful Life (RUL) estimation.'}</p>
                 <div className="mt-4 w-10 h-10 text-gray-500 rounded-full border border-gray-300 flex items-center justify-center ml-auto transition-transform hover:translate-x-1 cursor-pointer">
                   <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── NEW LIGHT THEME FORM SECTION ── */}
      <section className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden animate-fade-up" style={{ animationDelay: '300ms' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side text */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-xs tracking-widest uppercase text-indigo-600 font-semibold">
              Enterprise Onboarding
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              {dict?.title || 'Start monitoring your robotic fleet before the next failure.'}
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Get a customized breakdown of how much unplanned downtime is costing your specific plant, and how our AI Digital Twin can guarantee your uptime.
            </p>
            <div className="flex gap-4 items-center opacity-80">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span className="text-sm font-semibold text-slate-700 tracking-wide">No credit card required. Hardware included.</span>
            </div>
          </div>

          {/* Right side form */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 relative z-10">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">Corporate Email</label>
                <input type="email" placeholder="engineer@manufacturing.com" className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">Robots in Plant</label>
                <input type="number" min="1" placeholder="e.g. 150" className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">Primary Manufacturer</label>
                <select defaultValue="" className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors appearance-none cursor-pointer" required>
                  <option value="" disabled>Select hardware brand...</option>
                  <option value="abb">ABB</option>
                  <option value="fanuc">Fanuc</option>
                  <option value="kuka">KUKA</option>
                  <option value="siasun">SIASUN</option>
                  <option value="yaskawa">Yaskawa</option>
                  <option value="other">Other / Mixed</option>
                </select>
              </div>
              
              <button type="submit" className="mt-2 w-full py-4 rounded-xl text-white font-bold text-lg shadow-[0_4px_14px_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:bg-indigo-600 transition-all bg-indigo-500">
                Request an ROI Analysis
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
