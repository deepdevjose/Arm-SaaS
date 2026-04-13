import type { HTMLAttributes } from 'react';

const variants = {
  default: 'border-transparent bg-white/10 text-white',
  healthy: 'border-success/30 bg-success/15 text-success',
  warning: 'border-warning/30 bg-warning/15 text-warning',
  critical: 'border-danger/30 bg-danger/15 text-danger',
  muted: 'border-white/10 bg-white/5 text-slate-300'
} as const;

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: keyof typeof variants;
};

export function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium uppercase tracking-[0.18em] ${variants[variant]} ${className}`}
      {...props}
    />
  );
}