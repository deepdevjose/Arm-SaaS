import Image from 'next/image';
import Link from 'next/link';
import robotImage from '@/app/[locale]/(public)/assets/robot_arm.png';

export function FeatureSplit({ dict }: { dict?: any }) {
  return (
    <section className="split-section">
      <div className="split-image-wrapper animate-fade-up">
        <Image 
          src={robotImage} 
          alt="Industrial Robotic ARM"
          width={800}
          height={600}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWYxZjI1Ii8+PC9zdmc+"
        />
      </div>
      <div className="split-content animate-fade-up" style={{ animationDelay: '200ms' }}>
        <h2 className="split-heading">
          {dict?.splitTitle || 'Real-time Digital Twins for robotic arm health.'}
        </h2>
        <p className="split-text">
          {dict?.splitDesc || 'Each robot is mirrored in a live 3D model, tracking joint-level degradation, thermal stress, and vibration anomalies. Detect failures before they impact production.'}
        </p>
        <Link href="/" className="pill-button">
          {dict?.splitCta || 'View Live Digital Twin'}
        </Link>
      </div>
    </section>
  );
}
