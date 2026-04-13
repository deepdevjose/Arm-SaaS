export const appName = 'ARM Health';

export const publicNav = [
  { href: '/', label: 'Overview' },
  { href: '/demo-console', label: 'Demo Console' },
  { href: '/auth/login', label: 'Login' }
] as const;

export const appNav = [
  { href: '/app', label: 'Dashboard' },
  { href: '/app/fleet', label: 'Fleet' },
  { href: '/app/metrics', label: 'Metrics' },
  { href: '/app/logs', label: 'Logs' },
  { href: '/app/alerts', label: 'Alerts' },
  { href: '/app/settings', label: 'Settings' }
] as const;