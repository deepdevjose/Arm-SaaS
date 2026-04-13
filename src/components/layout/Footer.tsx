import Link from 'next/link';
import Image from 'next/image';
import iconImage from '@/app/[locale]/(public)/assets/icon.png';

export function Footer({ dict }: { dict?: any }) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="header-logo !flex-col !gap-6 !items-center !justify-center" style={{ marginBottom: '40px', display: 'flex', width: 'max-content' }}>
            <Image src={iconImage} alt="Arm Health Logo" width={128} height={128} className="rounded-[16px]" unoptimized quality={100} />
            <span className="text-[36px] leading-none font-bold tracking-tight text-white">Arm Health</span>
          </Link>
        </div>
        
        <div>
          <h4 className="footer-col-title">{dict?.platform || 'Platform'}</h4>
          <Link href="/" className="footer-link-item">{dict?.overview || 'Overview'}</Link>
          <Link href="/" className="footer-link-item">{dict?.digitalTwin || 'Digital Twin'}</Link>
          <Link href="/" className="footer-link-item">{dict?.aiEngine || 'AI Engine'}</Link>
          <Link href="/" className="footer-link-item">{dict?.fleet || 'Fleet Monitoring'}</Link>
        </div>

        <div>
           <h4 className="footer-col-title">{dict?.capabilities || 'Product'}</h4>
           <Link href="/" className="footer-link-item">Health Monitoring</Link>
           <Link href="/" className="footer-link-item">Alerts System</Link>
           <Link href="/" className="footer-link-item">RUL Estimation</Link>
        </div>

        <div>
          <h4 className="footer-col-title">{dict?.useCases || 'Use Cases'}</h4>
          <Link href="/" className="footer-link-item">Manufacturing</Link>
          <Link href="/" className="footer-link-item">Welding Robots</Link>
          <Link href="/" className="footer-link-item">Assembly Lines</Link>
        </div>

        <div>
          <h4 className="footer-col-title">{dict?.company || 'Company'}</h4>
          <Link href="/" className="footer-link-item">{dict?.about || 'About'}</Link>
          <Link href="/" className="footer-link-item">{dict?.contact || 'Contact'}</Link>
        </div>

        <div>
          <h4 className="footer-col-title">{dict?.resources || 'Resources'}</h4>
          <Link href="/" className="footer-link-item">{dict?.docs || 'Docs'}</Link>
          <Link href="/" className="footer-link-item">{dict?.caseStudies || 'Case Studies'}</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="flex gap-6">
          <Link href="/">Terms of Use</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Cookie Settings</Link>
        </div>
        <div>
          © {new Date().getFullYear()} ARM HEALTH LIMITED
        </div>
        <div className="footer-socials">
          <Link href="/" className="social-icon">IN</Link>
          <Link href="/" className="social-icon">YT</Link>
          <Link href="/" className="social-icon">X</Link>
        </div>
      </div>
    </footer>
  );
}
