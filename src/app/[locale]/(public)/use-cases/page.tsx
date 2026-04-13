import Link from 'next/link';
import { getDictionary } from '@/lib/i18n';

export default async function UseCasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { common } = await getDictionary(locale);
  const t = common.useCases;
  return (
    <main className="min-h-screen pt-32 pb-16">
      <section className="px-6 max-w-5xl mx-auto text-center mb-24 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{t.title}</h1>
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">{t.subtitle}</p>
        <Link href="/demo-console" className="pill-button">{t.cta}</Link>
      </section>

      <section className="px-6 max-w-5xl mx-auto grid grid-cols-1 gap-8 mb-32 animate-fade-up" style={{animationDelay: '100ms'}}>
        <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs tracking-widest uppercase">{t.tag1}</span>
          <h2 className="text-3xl font-bold text-white mb-4">{t.title1}</h2>
          <p className="text-gray-400 text-lg leading-relaxed">{t.desc1}</p>
        </div>

        <div className="p-10 rounded-3xl bg-[#4F46E5]/10 border border-[#4F46E5]/20">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#4F46E5]/20 border border-[#4F46E5]/40 text-[#818cf8] text-xs tracking-widest uppercase">{t.tag2}</span>
          <p className="text-gray-300 text-lg leading-relaxed">{t.desc2}</p>
        </div>

        <div className="p-10 rounded-3xl bg-green-500/10 border border-green-500/20">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs tracking-widest uppercase">{t.tag3}</span>
          <p className="text-gray-300 text-lg leading-relaxed">{t.desc3}</p>
        </div>
      </section>
    </main>
  );
}
