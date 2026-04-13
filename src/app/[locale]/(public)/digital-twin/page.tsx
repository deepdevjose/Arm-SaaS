import Link from 'next/link';
import { ContactCta } from '@/components/home/ContactCta';
import { RobotViewerClient } from '@/components/three/RobotViewerClient';
import { getDictionary } from '@/lib/i18n';

export default async function DigitalTwinPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { common } = await getDictionary(locale);
  const t = common.digitalTwin;
  return (
    <main className="min-h-screen pt-32 pb-16">
      {/* Hero */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-16 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{t.title}</h1>
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">{t.subtitle}</p>
        <Link href="/demo-console" className="pill-button">{t.cta}</Link>
      </section>

      {/* Interactive 3D Model */}
      <section className="px-6 max-w-5xl mx-auto mb-8 animate-fade-up" style={{animationDelay: '100ms'}}>
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#080b1a] relative">
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-3 border-b border-white/8 bg-black/30 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs tracking-widest uppercase text-green-400 font-medium">{t.demoTitle}</span>
            </div>
            <span className="text-xs tracking-widest uppercase text-slate-500">{t.demoSub}</span>
          </div>
          <RobotViewerClient height="560px" cameraPosition={[0, 2, 4]} autoRotate={true} />
        </div>
      </section>

      {/* Joint State Grid */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-32 animate-fade-up" style={{animationDelay: '200ms'}}>
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
           <h3 className="text-xl font-bold text-white mb-3">{t.feat1Title}</h3>
           <p className="text-gray-400">{t.feat1Desc}</p>
        </div>
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
           <h3 className="text-xl font-bold text-white mb-3">{t.feat2Title}</h3>
           <p className="text-gray-400">{t.feat2Desc}</p>
        </div>
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
           <h3 className="text-xl font-bold text-white mb-3">{t.feat3Title}</h3>
           <p className="text-gray-400">{t.feat3Desc}</p>
        </div>
      </section>

      <ContactCta dict={common.cta} />
    </main>
  );
}
