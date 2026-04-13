import { Hero } from '@/components/home/Hero';
import { ProcessSection } from '@/components/home/ProcessSection';
import { FeatureSplit } from '@/components/home/FeatureSplit';
import { ContactCta } from '@/components/home/ContactCta';
import { getDictionary } from '@/lib/i18n';

export default async function LandingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { common } = await getDictionary(locale);
  return (
    <main className="min-h-screen">
      <Hero dict={common.home} />
      <ProcessSection dict={common.home} />
      <FeatureSplit dict={common.home} />
      <ContactCta dict={common.cta} />
    </main>
  );
}