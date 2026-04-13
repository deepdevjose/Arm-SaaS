import Link from 'next/link';
import { ContactCta } from '@/components/home/ContactCta';
import { getDictionary } from '@/lib/i18n';

export default async function FleetPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { common } = await getDictionary(locale);
  const t = common.fleet;
  return (
    <main className="min-h-screen pt-32 pb-16">
      <section className="px-6 max-w-5xl mx-auto text-center mb-24 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{t.title}</h1>
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">{t.subtitle}</p>
        <Link href="/demo-console" className="pill-button">{t.cta}</Link>
      </section>

      <section className="px-6 max-w-7xl mx-auto mb-32 animate-fade-up" style={{animationDelay: '100ms'}}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
           <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
             <div className="text-4xl font-bold text-white mb-1">1,240</div>
             <div className="text-sm text-gray-500 uppercase tracking-widest">{t.nodes}</div>
           </div>
           <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
             <div className="text-4xl font-bold text-green-400 mb-1">1,180</div>
             <div className="text-sm text-green-500/70 uppercase tracking-widest">{t.healthy}</div>
           </div>
           <div className="p-6 rounded-2xl bg-yellow-500/10 border border-yellow-500/20">
             <div className="text-4xl font-bold text-yellow-400 mb-1">45</div>
             <div className="text-sm text-yellow-500/70 uppercase tracking-widest">{t.warning}</div>
           </div>
           <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
             <div className="text-4xl font-bold text-red-400 mb-1">15</div>
             <div className="text-sm text-red-500/70 uppercase tracking-widest">{t.critical}</div>
           </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0c0f1d] aspect-[21/9] flex items-center justify-center p-8">
            <div className="text-center">
              <h3 className="text-white text-2xl font-semibold mb-2">{t.mapTitle}</h3>
              <p className="text-gray-500">{t.mapDesc}</p>
            </div>
        </div>
      </section>

      <ContactCta dict={common.cta} />
    </main>
  );
}
