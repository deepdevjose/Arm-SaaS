import Image from 'next/image';
import mockImage from '@/app/[locale]/(public)/assets/dashboard_mock.png';

export function ProcessSection({ dict }: { dict?: any }) {
  return (
    <section className="process-section">
      <div className="animate-fade-up">
        <h2 className="process-heading">
          {dict?.processTitle || 'Zero downtime for industrial robotic arms.'}
        </h2>
        <p className="process-text">
          {dict?.processDesc || 'By analyzing J1-J6 joint sequences, current, temperature, and vibration in real-time, our AI instantly calculates degradation risk and schedules maintenance exactly when required.'}
        </p>
      </div>

      <div className="hero-media-container animate-fade-up" style={{ animationDelay: '200ms' }}>
        <Image 
          src={mockImage} 
          alt="Dashboard Interface" 
          width={1200} 
          height={675}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjY3NSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFmMWYyNSIvPjwvc3ZnPg=="
        />
      </div>
    </section>
  );
}
