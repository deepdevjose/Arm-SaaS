'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

type LoginErrors = {
  email?: string;
  password?: string;
};

export default function LoginPage() {
  const router = useRouter();
  const params = useParams<{ locale: string }>();
  const locale = typeof params?.locale === 'string' ? params.locale : 'en-US';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({});
  const [authError, setAuthError] = useState('');

  const validateField = (name: 'email' | 'password', value: string) => {
    if (name === 'email') {
      if (!value.trim()) return 'Email is required.';
      if (!/^\S+@\S+\.\S+$/.test(value)) return 'Use a valid work email.';
      return '';
    }

    if (!value.trim()) return 'Password is required.';
    if (value.length < 8) return 'Password must be at least 8 characters.';
    return '';
  };

  const validateForm = () => {
    const nextErrors: LoginErrors = {};
    const emailError = validateField('email', email);
    const passwordError = validateField('password', password);

    if (emailError) nextErrors.email = emailError;
    if (passwordError) nextErrors.password = passwordError;

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAuthError('');

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));

      const isDemoAccount = email.trim().toLowerCase() === 'demo@arm-health.com' && password === 'Demo1234!';
      if (!isDemoAccount) {
        setAuthError('Invalid credentials. Check your email/password or continue with SSO.');
        return;
      }

      void rememberMe;
      router.push(`/${locale}/app`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative isolate overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(196,193,224,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.14),transparent_40%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-120px)] w-full max-w-5xl items-center gap-8 lg:grid-cols-[1.05fr_1fr]">
        <Card className="hidden h-full min-h-[560px] border-white/15 bg-white/[0.045] p-10 lg:flex lg:flex-col lg:justify-between">
          <div>
            <p className="inline-flex rounded-full border border-teal-300/35 bg-teal-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
              Enterprise Access
            </p>
            <h1 className="mt-6 max-w-md text-4xl font-semibold leading-tight text-white">
              Keep your robot fleet online with secure, centralized access.
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-300">
              Login to review health telemetry, prioritize anomalies, and coordinate maintenance before costly downtime.
            </p>
          </div>

          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">✓</span>
              <span>Role-based access for plant managers, reliability engineers, and operators.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">✓</span>
              <span>SSO compatible with Azure AD, Okta, and enterprise identity providers.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">✓</span>
              <span>Encrypted telemetry sessions with audit-ready login history.</span>
            </li>
          </ul>
        </Card>

        <Card className="w-full border-white/15 bg-[linear-gradient(180deg,rgba(12,15,29,0.96),rgba(12,15,29,0.84))] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.45)] sm:p-8">
          <div className="text-xs uppercase tracking-[0.24em] text-teal-300">Welcome Back</div>
          <h2 className="mt-3 text-3xl font-semibold text-white">Sign in to ARM Health</h2>
          <p className="mt-2 text-sm text-slate-300">Use your work credentials or continue with enterprise SSO.</p>

          <form className="mt-8 space-y-5" noValidate onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-200">
                Work email
              </label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (errors.email) {
                    setErrors((prev) => ({ ...prev, email: '' }));
                  }
                  if (authError) setAuthError('');
                }}
                onBlur={() => {
                  const message = validateField('email', email);
                  setErrors((prev) => ({ ...prev, email: message }));
                }}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={errors.email ? 'border-rose-400/80 focus:border-rose-400' : ''}
              />
              {errors.email ? <p id="email-error" className="text-xs font-medium text-rose-300">{errors.email}</p> : null}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-slate-200">
                  Password
                </label>
                <a href="mailto:support@arm-health.com" className="text-xs font-medium text-teal-300 hover:text-teal-200">
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  if (errors.password) {
                    setErrors((prev) => ({ ...prev, password: '' }));
                  }
                  if (authError) setAuthError('');
                }}
                onBlur={() => {
                  const message = validateField('password', password);
                  setErrors((prev) => ({ ...prev, password: message }));
                }}
                aria-invalid={Boolean(errors.password)}
                aria-describedby={errors.password ? 'password-error' : undefined}
                className={errors.password ? 'border-rose-400/80 focus:border-rose-400' : ''}
              />
              {errors.password ? <p id="password-error" className="text-xs font-medium text-rose-300">{errors.password}</p> : null}
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
                className="h-4 w-4 rounded border border-white/20 bg-white/5 accent-teal-300"
              />
              Keep me signed in on this device
            </label>

            {authError ? (
              <p className="rounded-lg border border-rose-400/40 bg-rose-500/10 px-3 py-2 text-sm font-medium text-rose-200">{authError}</p>
            ) : null}

            <div className="space-y-3 pt-1">
              <Button className="h-11 w-full text-sm font-semibold" type="submit" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign in'}
              </Button>
              <Button variant="secondary" className="h-11 w-full text-sm font-semibold" type="button" disabled={isLoading}>
                Continue with SSO
              </Button>
            </div>
          </form>

          <p className="mt-4 text-center text-xs text-slate-500">Demo access: demo@arm-health.com / Demo1234!</p>

          <p className="mt-6 text-center text-xs text-slate-400">
            Need provisioning?{' '}
            <Link href="/pricing" className="font-semibold text-teal-300 hover:text-teal-200">
              Talk to sales engineering
            </Link>
          </p>
        </Card>
      </div>
    </section>
  );
}