import Link from 'next/link';
import Image from 'next/image';
import iconImage from '@/app/[locale]/(public)/assets/icon.png';

export function Footer({ dict, locale }: { dict?: any; locale: string }) {
  const withLocale = (href: string) => {
    if (/^(https?:|mailto:|#)/.test(href)) return href;
    const normalized = href.startsWith('/') ? href : `/${href}`;
    return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`;
  };

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href={withLocale('/')} className="header-logo !flex-col !gap-6 !items-center !justify-center" style={{ marginBottom: '40px', display: 'flex', width: 'max-content' }}>
            <Image src={iconImage} alt="Arm Health Logo" width={128} height={128} className="rounded-[16px]" unoptimized quality={100} />
            <span className="text-[36px] leading-none font-bold tracking-tight text-white">Arm Health</span>
          </Link>
        </div>
        
        <div>
          <h4 className="footer-col-title">{dict?.platform || 'Platform'}</h4>
          <Link href={withLocale('/platform')} className="footer-link-item">{dict?.overview || 'Overview'}</Link>
          <Link href={withLocale('/digital-twin')} className="footer-link-item">{dict?.digitalTwin || 'Digital Twin'}</Link>
          <Link href={withLocale('/ai-engine')} className="footer-link-item">{dict?.aiEngine || 'AI Engine'}</Link>
          <Link href={withLocale('/fleet')} className="footer-link-item">{dict?.fleet || 'Fleet Monitoring'}</Link>
        </div>

        <div>
           <h4 className="footer-col-title">{dict?.capabilities || 'Product'}</h4>
           <Link href={withLocale('/use-cases/welding-robots')} className="footer-link-item">{dict?.healthMonitoring || 'Health Monitoring'}</Link>
           <Link href={withLocale('/demo-console')} className="footer-link-item">Alerts System</Link>
           <Link href={withLocale('/use-cases/manufacturing')} className="footer-link-item">RUL Estimation</Link>
        </div>

        <div>
          <h4 className="footer-col-title">{dict?.useCases || 'Use Cases'}</h4>
          <Link href={withLocale('/use-cases/manufacturing')} className="footer-link-item">{dict?.manufacturing || 'Manufacturing'}</Link>
          <Link href={withLocale('/use-cases/welding-robots')} className="footer-link-item">{dict?.welding || 'Welding Robots'}</Link>
          <Link href={withLocale('/use-cases/assembly-lines')} className="footer-link-item">{dict?.assembly || 'Assembly Lines'}</Link>
        </div>

        <div>
          <h4 className="footer-col-title">{dict?.company || 'Company'}</h4>
          <Link href={withLocale('/about')} className="footer-link-item">{dict?.about || 'About'}</Link>
          <Link href={withLocale('/contact-sales')} className="footer-link-item">{dict?.contact || 'Contact'}</Link>
        </div>

        <div>
          <h4 className="footer-col-title">{dict?.resources || 'Resources'}</h4>
          <Link href={withLocale('/docs')} className="footer-link-item">{dict?.docs || 'Docs'}</Link>
          <Link href={withLocale('/case-studies')} className="footer-link-item">{dict?.caseStudies || 'Case Studies'}</Link>
          <Link href={withLocale('/api-reference')} className="footer-link-item">API Reference</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="flex gap-6">
          <Link href={withLocale('/docs')}>Terms of Use</Link>
          <Link href={withLocale('/docs')}>Privacy Policy</Link>
          <Link href={withLocale('/docs')}>Cookie Settings</Link>
        </div>
        <div>
          © {new Date().getFullYear()} ARM HEALTH LIMITED
        </div>
        <div className="footer-socials">
          <Link href={withLocale('/contact-sales')} className="social-icon">IN</Link>
          <Link href={withLocale('/contact-sales')} className="social-icon">YT</Link>
          <Link href={withLocale('/contact-sales')} className="social-icon">X</Link>
        </div>
      </div>
    </footer>
  );
}
