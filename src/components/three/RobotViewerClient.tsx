'use client';

import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';
import type { RobotViewer as RobotViewerType } from './RobotViewer';

const RobotViewerDynamic = dynamic(
  () => import('@/components/three/RobotViewer').then((m) => m.RobotViewer),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full flex items-center justify-center bg-[#07091a]"
        style={{ height: '100%', minHeight: '480px' }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-6 h-6 border-2 border-[#4F46E5] border-t-transparent rounded-full animate-spin" />
          <span className="text-slate-500 text-[11px] tracking-widest uppercase">Initializing 3D engine…</span>
        </div>
      </div>
    ),
  }
);

export function RobotViewerClient(props: ComponentProps<typeof RobotViewerType>) {
  return <RobotViewerDynamic {...props} />;
}
