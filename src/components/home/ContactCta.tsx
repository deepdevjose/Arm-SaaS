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
                <Link href="/pricing" className="pill-button justify-center sm:justify-start" style={{background: '#4F46E5', color: '#fff', border: 'none'}}>
                  See Pricing
                </Link>
                <Link href="/" className="pill-button justify-center sm:justify-start" style={{ background: '#ffffff', color: '#1e293b', border: '1px solid #cbd5e1' }}>
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

    </div>
  );
}
