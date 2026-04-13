import Link from 'next/link';
import { ContactCta } from '@/components/home/ContactCta';
import { getDictionary } from '@/lib/i18n';

export default async function PlatformPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { common } = await getDictionary(locale);
  const t = common.platform;
  return (
    <main className="min-h-screen pt-32 pb-16">
      {/* Hero */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-24 animate-fade-up">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{t.title}</h1>
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">{t.subtitle}</p>
        <Link href="/demo-console" className="pill-button">{t.cta}</Link>
      </section>

      {/* Pipeline Visual */}
      <section className="px-6 max-w-7xl mx-auto mb-32 animate-fade-up" style={{animationDelay: '100ms'}}>
        <h2 className="text-center text-sm tracking-widest uppercase text-gray-500 mb-12">{t.flowTitle}</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <div className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/10">{t.flowSensors}</div>
            <div className="hidden md:block text-gray-600">→</div>
            <div className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/10">{t.flowData}</div>
            <div className="hidden md:block text-gray-600">→</div>
            <div className="flex-1 p-6 rounded-2xl bg-[#4F46E5]/20 border border-[#4F46E5]/50 text-[#818cf8]">{t.flowAI}</div>
            <div className="hidden md:block text-gray-600">→</div>
            <div className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/10">{t.flowTwin}</div>
            <div className="hidden md:block text-gray-600">→</div>
            <div className="flex-1 p-6 rounded-2xl bg-red-500/20 border border-red-500/50 text-red-400">{t.flowAlerts}</div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 animate-fade-up" style={{animationDelay: '200ms'}}>
        <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">{t.feat1Title}</h3>
          <p className="text-gray-400 text-lg">{t.feat1Desc}</p>
        </div>
        <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">{t.feat2Title}</h3>
          <p className="text-gray-400 text-lg">{t.feat2Desc}</p>
        </div>
        <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">{t.feat3Title}</h3>
          <p className="text-gray-400 text-lg">{t.feat3Desc}</p>
        </div>
        <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">{t.feat4Title}</h3>
          <p className="text-gray-400 text-lg">{t.feat4Desc}</p>
        </div>
      </section>

      <ContactCta dict={common.cta} />
    </main>
  );
}
