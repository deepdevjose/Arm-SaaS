"use client";

import Link from 'next/link';
import Image from 'next/image';
import iconImage from '@/app/[locale]/(public)/assets/icon.png';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export function Header({ dict }: { dict?: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname() || '/';
  const router = useRouter();
  
  const isChinese = pathname.startsWith('/zh-Hans');
  
  const toggleLanguage = () => {
    const targetLocale = isChinese ? 'en-US' : 'zh-Hans';
    const newPath = pathname.replace(/^\/(en-US|zh-Hans)/, `/${targetLocale}`);
    router.push(newPath || `/${targetLocale}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="header-wrapper">
      <header className={`glass-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="flex items-center gap-12">
        <Link href="/" className="header-logo">
          <Image src={iconImage} alt="Arm Health Logo" width={28} height={28} className="rounded-md" unoptimized quality={100} />
          Arm Health
        </Link>
        <nav className="header-nav hidden lg:flex items-center">
          <div className="relative group/platform">
            <button className="header-nav-link flex items-center gap-1 py-4">
              {dict?.platform || 'Platform'}
              <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="opacity-70 transition-transform group-hover/platform:rotate-180"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            
            {/* Mega Menu Dropdown */}
            <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[550px] opacity-0 invisible group-hover/platform:opacity-100 group-hover/platform:visible transition-all duration-300 z-50">
              <div className="bg-[#f2f4fe] rounded-[32px] p-8 shadow-xl flex gap-8 text-slate-800 mt-2 border border-white/50 relative overflow-hidden">
                {/* Left side info */}
                <div className="w-[45%] flex flex-col relative z-10">
                   <p className="text-[14px] font-medium leading-relaxed text-slate-600">A unified platform for robotic arm health and predictive maintenance.</p>
                   <Link href="/platform" className="text-indigo-600 font-bold text-[13px] hover:text-indigo-800 transition-colors mt-auto flex items-center gap-1 w-max">
                     View Platform Details &rarr;
                   </Link>
                </div>
                
                {/* Right side links */}
                <div className="w-[55%] flex flex-col justify-center gap-4 relative z-10 pl-6 border-l border-indigo-500/10">
                   <Link href="/platform" className="flex items-center gap-3 hover:text-indigo-600 transition-colors group/link">
                     <svg width="20" height="20" className="text-indigo-600 transition-transform group-hover/link:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z M4 11h16M10 11v9"></path></svg>
                     <span className="font-bold text-[14.5px]">{dict?.overview || 'Overview'}</span>
                   </Link>
                   <Link href="/digital-twin" className="flex items-center gap-3 hover:text-indigo-600 transition-colors group/link">
                     <svg width="20" height="20" className="text-indigo-600 transition-transform group-hover/link:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                     <span className="font-bold text-[14.5px]">{dict?.digitalTwin || 'Digital Twin'}</span>
                   </Link>
                   <Link href="/ai-engine" className="flex items-center gap-3 hover:text-indigo-600 transition-colors group/link">
                     <svg width="20" height="20" className="text-indigo-600 transition-transform group-hover/link:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                     <span className="font-bold text-[14.5px]">{dict?.aiEngine || 'AI Engine'}</span>
                   </Link>
                   <Link href="/fleet" className="flex items-center gap-3 hover:text-indigo-600 transition-colors group/link">
                     <svg width="20" height="20" className="text-indigo-600 transition-transform group-hover/link:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"></path></svg>
                     <span className="font-bold text-[14.5px]">{dict?.fleet || 'Fleet Monitoring'}</span>
                   </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group/usecases">
            <button className="header-nav-link flex items-center gap-1 py-4">
              {dict?.solutions || 'Solutions'}
              <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="opacity-70 transition-transform group-hover/usecases:rotate-180"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[480px] opacity-0 invisible group-hover/usecases:opacity-100 group-hover/usecases:visible transition-all duration-300 z-50">
              <div className="bg-[#f2f4fe] rounded-[24px] p-8 shadow-xl flex gap-8 text-slate-800 mt-2 border border-white/50 relative overflow-hidden">
                <div className="w-[50%] flex flex-col relative z-10">
                   <span className="text-indigo-600 font-bold text-[12px] uppercase tracking-wider mb-4">Use Cases</span>
                   <Link href="/" className="font-bold text-[14px] hover:text-indigo-600 mb-3 transition-colors">Manufacturing</Link>
                   <Link href="/" className="font-bold text-[14px] hover:text-indigo-600 mb-3 transition-colors">Welding Robots</Link>
                   <Link href="/" className="font-bold text-[14px] hover:text-indigo-600 mb-3 transition-colors">Assembly Lines</Link>
                   <Link href="/" className="font-bold text-[14px] hover:text-indigo-600 transition-colors">Industrial Auto</Link>
                </div>
                <div className="w-[50%] flex flex-col relative z-10 pl-6 border-l border-indigo-500/10">
                   <span className="text-indigo-600 font-bold text-[12px] uppercase tracking-wider mb-4">Capabilities</span>
                   <Link href="/" className="font-bold text-[14px] hover:text-indigo-600 mb-3 transition-colors">Predictive Maint.</Link>
                   <Link href="/" className="font-bold text-[14px] hover:text-indigo-600 mb-3 transition-colors">Health Monitoring</Link>
                   <Link href="/" className="font-bold text-[14px] hover:text-indigo-600 mb-3 transition-colors">Zero Downtime</Link>
                   <Link href="/" className="font-bold text-[14px] hover:text-indigo-600 transition-colors">Robotic Intel.</Link>
                </div>
              </div>
            </div>
          </div>
          
          <Link href="/pricing" className="header-nav-link py-4">{dict?.pricing || 'Pricing'}</Link>
          
          <div className="relative group/docs">
            <button className="header-nav-link flex items-center gap-1 py-4">
              {dict?.resources || 'Resources'}
              <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="opacity-70 transition-transform group-hover/docs:rotate-180"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-[100%] right-0 w-[420px] opacity-0 invisible group-hover/docs:opacity-100 group-hover/docs:visible transition-all duration-300 z-50 pointer-events-none group-hover/docs:pointer-events-auto">
              <div className="bg-[#f2f4fe] rounded-[24px] p-8 shadow-xl flex gap-8 text-slate-800 mt-2 border border-white/50 relative overflow-hidden">
                <div className="w-[50%] flex flex-col relative z-10">
                   <span className="text-indigo-600 font-bold text-[12px] uppercase tracking-wider mb-4">Resources</span>
                   <Link href="/" className="font-bold text-[14px] hover:text-indigo-600 mb-3 transition-colors">Documentation</Link>
                   <Link href="/" className="font-bold text-[14px] hover:text-indigo-600 mb-3 transition-colors">Case Studies</Link>
                   <Link href="/" className="font-bold text-[14px] hover:text-indigo-600 transition-colors">API Reference</Link>
                </div>
                <div className="w-[50%] flex flex-col relative z-10 pl-6 border-l border-indigo-500/10">
                   <span className="text-indigo-600 font-bold text-[12px] uppercase tracking-wider mb-4">Company</span>
                   <Link href="/" className="font-bold text-[14px] hover:text-indigo-600 mb-3 transition-colors">About Us</Link>
                   <Link href="/" className="font-bold text-[14px] hover:text-indigo-600 transition-colors">Contact Sales</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex justify-end gap-2 sm:gap-4 items-center">
        <div className="relative group">
          <button className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:text-[#B9BEFA] hover:bg-white/10 transition-colors" aria-label="Contact Options">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path fill="currentColor" stroke="none" d="M10.5 4C6.9101 4 4 6.91015 4 10.5C4 11.6428 4.29525 12.7169 4.815 13.659L3.5 16.5L6.34098 15.185C7.2831 15.7048 8.3572 16 9.5 16H10.5C14.0899 16 17 13.0899 17 9.5V8.5C17 4.91015 14.0899 4 10.5 4Z"/>
              <path fill="currentColor" stroke="none" d="M18.815 17.659L20.5 20.5L17.659 19.185C16.7169 19.7048 15.6428 20 14.5 20h-1C11.5175 20 9.011 17.962 8.601 15.006C8.892 15.002 9.193 15 9.5 15H10.5C14.6421 15 18 11.6421 18 7.5V6.5C18 6.193 17.998 5.892 17.994 5.601C20.95 6.011 22.988 8.5175 22.988 11.5C22.988 12.6428 22.6927 13.7169 22.173 14.6590L18.815 17.659Z"/>
            </svg>
          </button>
          
          <div className="absolute left-1/2 -bottom-2 w-0 h-0 opacity-0 group-hover:opacity-100 transition-all pointer-events-none group-hover:pointer-events-auto z-50">
            <Link href="/" className="absolute social-floating-btn z-10 hover:z-20" title="WeChat" style={{ left: '-68px', top: '-15px' }}>W</Link>
            <Link href="/" className="absolute social-floating-btn z-10 hover:z-20" title="LinkedIn" style={{ left: '-20px', top: '15px' }}>in</Link>
            <Link href="/" className="absolute social-floating-btn z-10 hover:z-20" title="Instagram" style={{ left: '28px', top: '-15px' }}>Ig</Link>
          </div>
        </div>
        
        <button onClick={toggleLanguage} className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:text-[#B9BEFA] hover:bg-white/10 transition-colors" aria-label="Toggle Language" title={isChinese ? "Switch to English" : "切换到中文"}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
          </svg>
        </button>
        <div className="w-[1px] h-6 bg-white/20 mx-1"></div>
        
        <Link href="/" className="px-7 py-[9px] rounded-full bg-[#B9BEFA] text-[#0a0f25] font-bold text-[15px] hover:bg-[#4F46E5] hover:text-white transition-all duration-300 hover:shadow-[0_0_24px_rgba(185,190,250,0.5)] whitespace-nowrap">
          {dict?.signup || 'Sign up'}
        </Link>
        
        <div className="relative group/login ml-1 flex items-center">
          <Link href="/auth/login" className="flex items-center justify-center w-10 h-10 rounded-full border border-transparent text-white hover:text-[#B9BEFA] hover:bg-white/10 transition-colors" aria-label="Log in">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </Link>
          
          <div className="absolute top-[140%] right-1/2 translate-x-1/2 opacity-0 invisible group-hover/login:opacity-100 group-hover/login:visible transition-all duration-300 z-50 pointer-events-none">
             <div className="relative bg-[#f8f9ff] text-center rounded-[10px] px-4 py-2 shadow-xl whitespace-nowrap">
                <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-[14px] h-[14px] bg-[#f8f9ff] rotate-45 rounded-[2px]"></div>
                <span className="font-[800] text-[13px] text-slate-900 tracking-wider relative z-10">{dict?.login || 'SIGN IN'}</span>
             </div>
          </div>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button className="lg:hidden ml-1 sm:ml-2 flex items-center justify-center text-white hover:text-indigo-300 transition-colors" aria-label="Toggle mobile menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-[100%] left-0 w-full bg-[#0a0f25]/95 backdrop-blur-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[600px] border-b border-white/10 shadow-2xl' : 'max-h-0'}`}>
        <nav className="flex flex-col px-6 py-6 gap-2 border-t border-white/5">
          <Link href="/platform" className="text-white hover:text-[#B9BEFA] font-medium py-3 text-[17px]">Platform</Link>
          <div className="flex flex-col pl-4 border-l-2 border-indigo-500/30 ml-2 gap-2 mt-1 mb-2">
             <Link href="/platform" className="text-slate-300 hover:text-[#B9BEFA] font-medium py-1">Overview</Link>
             <Link href="/digital-twin" className="text-slate-300 hover:text-[#B9BEFA] font-medium py-1">Digital Twin</Link>
             <Link href="/ai-engine" className="text-slate-300 hover:text-[#B9BEFA] font-medium py-1">AI Engine</Link>
             <Link href="/fleet" className="text-slate-300 hover:text-[#B9BEFA] font-medium py-1">Fleet Monitoring</Link>
          </div>
          <span className="text-white font-medium py-2 mt-2 text-[17px]">Solutions</span>
          <div className="flex flex-col pl-4 border-l-2 border-indigo-500/30 ml-2 gap-2 mt-1 mb-2">
             <Link href="/" className="text-slate-300 hover:text-[#B9BEFA] font-medium py-1">Use Cases</Link>
             <Link href="/" className="text-slate-300 hover:text-[#B9BEFA] font-medium py-1">Capabilities</Link>
          </div>
          
          <Link href="/pricing" className="text-white hover:text-[#B9BEFA] font-medium py-3 text-[17px]">Pricing</Link>
          
          <span className="text-white font-medium py-2 mt-2 text-[17px]">Resources</span>
          <div className="flex flex-col pl-4 border-l-2 border-indigo-500/30 ml-2 gap-2 mt-1 mb-2">
             <Link href="/" className="text-slate-300 hover:text-[#B9BEFA] font-medium py-1">Documentation</Link>
             <Link href="/" className="text-slate-300 hover:text-[#B9BEFA] font-medium py-1">Case Studies</Link>
             <Link href="/" className="text-slate-300 hover:text-[#B9BEFA] font-medium py-1">Company</Link>
          </div>
        </nav>
      </div>
      </header>
    </div>
  );
}
