import Link from 'next/link';
import { ContactCta } from '@/components/home/ContactCta';
import { getDictionary } from '@/lib/i18n';

export default async function AIEnginePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { common } = await getDictionary(locale);
  const t = common.aiEngine;
  return (
    <main className="min-h-screen pt-32 pb-16">
      <section className="px-6 max-w-4xl mx-auto text-center mb-24 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{t.title}</h1>
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">{t.subtitle}</p>
        <Link href="/demo-console" className="pill-button">{t.cta}</Link>
      </section>

      <section className="px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32 animate-fade-up" style={{animationDelay: '100ms'}}>
        <div className="rounded-3xl border border-white/10 bg-[#0c0f1d] aspect-square relative flex items-center justify-center p-8">
           <div className="w-full h-full border border-gray-700 rounded-xl relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-[#4F46E5]/20 to-transparent opacity-50" />
             <div className="absolute bottom-1/3 left-0 right-0 border-t border-red-500/50 border-dashed" />
             <div className="absolute top-4 left-4 text-xs tracking-widest text-[#818cf8] uppercase">{t.chartTitle}</div>
             <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
               <path d="M0 80 Q25 75 50 60 T100 20" fill="none" stroke="#4F46E5" strokeWidth="2" />
               <path d="M0 80 Q25 78 50 63 T100 25" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
             </svg>
           </div>
        </div>
        <div>
           <h2 className="text-3xl font-bold text-white mb-6">{t.lstmTitle}</h2>
           <p className="text-gray-400 mb-8 text-lg">{t.lstmDesc}</p>
           <div className="space-y-6">
             <div className="p-4 rounded-xl bg-white/5 border border-white/10">
               <h4 className="text-white font-semibold mb-1">{t.valTitle}</h4>
               <p className="text-sm text-gray-500">{t.valDesc}</p>
             </div>
             <div className="p-4 rounded-xl bg-white/5 border border-white/10">
               <h4 className="text-white font-semibold mb-1">{t.scoreTitle}</h4>
               <p className="text-sm text-gray-500">{t.scoreDesc}</p>
             </div>
           </div>
        </div>
      </section>

      <ContactCta dict={common.cta} />
    </main>
  );
}
