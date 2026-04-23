'use client';

import { useEffect, useRef, useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface RobotNode {
  id: string;
  site: string;
  region: string;
  model: string;
  status: 'healthy' | 'warning' | 'critical' | 'offline';
  temp: number;
  rul: number;
  vibration: number;
  joints: number[];
  uptime: number;
  cycles: number;
  lastAlert: string;
}

interface SitePin {
  id: string;
  label: string;
  city: string;
  x: number; // percentage
  y: number; // percentage
  count: number;
  healthy: number;
  warning: number;
  critical: number;
}

// ─── Static data ──────────────────────────────────────────────────────────────
// pin x/y = % on the map area (equirectangular projection)
const SITES: SitePin[] = [
  { id: 'shenzhen', label: 'SZX', city: 'Shenzhen, CN', x: 79.8, y: 30.3, count: 380, healthy: 362, warning: 14, critical: 4 },
  { id: 'shanghai', label: 'SHA', city: 'Shanghai, CN', x: 81.7, y: 22.7, count: 290, healthy: 275, warning: 12, critical: 3 },
  { id: 'suzhou', label: 'SUZ', city: 'Suzhou, CN', x: 81.5, y: 22.1, count: 120, healthy: 116, warning: 3, critical: 1 },
  { id: 'beijing', label: 'BJS', city: 'Beijing, CN', x: 80.4, y: 15.0, count: 210, healthy: 203, warning: 5, critical: 2 },
  { id: 'chengdu', label: 'CTU', city: 'Chengdu, CN', x: 77.1, y: 23.2, count: 160, healthy: 155, warning: 4, critical: 1 },
  { id: 'monterrey', label: 'MTY', city: 'Monterrey, MX', x: 22.7, y: 27.5, count: 140, healthy: 132, warning: 6, critical: 2 },
  { id: 'cdmx', label: 'MEX', city: 'Ciudad de México', x: 23.0, y: 33.0, count: 110, healthy: 104, warning: 5, critical: 1 },
  { id: 'guadalajara', label: 'GDL', city: 'Guadalajara, MX', x: 21.9, y: 31.9, count: 80, healthy: 77, warning: 2, critical: 1 },
  { id: 'tijuana', label: 'TIJ', city: 'Tijuana, MX', x: 18.6, y: 21.8, count: 60, healthy: 58, warning: 2, critical: 0 },
  { id: 'hidalgo', label: 'HGO', city: 'Hidalgo, MX', x: 22.6, y: 31.8, count: 45, healthy: 43, warning: 2, critical: 0 },

];

const INITIAL_ROBOTS: RobotNode[] = [
  { id: 'SZX-ARM-001', site: 'Shenzhen', region: 'CN', model: 'SIASUN SR12A', status: 'healthy', temp: 42, rul: 612, vibration: 0.12, joints: [98, 97, 99, 96, 98, 97], uptime: 99.8, cycles: 142800, lastAlert: '—' },
  { id: 'SZX-ARM-002', site: 'Shenzhen', region: 'CN', model: 'SIASUN SR12A', status: 'warning', temp: 67, rul: 28, vibration: 0.41, joints: [78, 72, 80, 85, 90, 88], uptime: 97.1, cycles: 189400, lastAlert: 'High vibration J2' },
  { id: 'SHA-ARM-011', site: 'Shanghai', region: 'CN', model: 'ESTUN ER50', status: 'healthy', temp: 38, rul: 480, vibration: 0.09, joints: [99, 98, 97, 99, 98, 97], uptime: 99.9, cycles: 98200, lastAlert: '—' },
  { id: 'SUZ-ARM-004', site: 'Suzhou', region: 'CN', model: 'ESTUN ER50', status: 'healthy', temp: 40, rul: 520, vibration: 0.08, joints: [99, 99, 98, 97, 99, 98], uptime: 99.7, cycles: 87400, lastAlert: '—' },
  { id: 'BJS-ARM-007', site: 'Beijing', region: 'CN', model: 'ROKAE XB10', status: 'critical', temp: 81, rul: 9, vibration: 0.89, joints: [44, 38, 55, 62, 70, 66], uptime: 91.4, cycles: 227600, lastAlert: 'Thermal overload J1' },
  { id: 'CTU-ARM-003', site: 'Chengdu', region: 'CN', model: 'GSK RB50', status: 'warning', temp: 59, rul: 41, vibration: 0.31, joints: [82, 88, 79, 84, 91, 86], uptime: 98.2, cycles: 161000, lastAlert: 'RUL < 30d' },
  { id: 'MTY-ARM-005', site: 'Monterrey', region: 'MX', model: 'ABB IRB 6700', status: 'healthy', temp: 44, rul: 390, vibration: 0.10, joints: [96, 95, 97, 98, 96, 99], uptime: 99.5, cycles: 112400, lastAlert: '—' },
  { id: 'MEX-ARM-022', site: 'CDMX', region: 'MX', model: 'FANUC M-20iD', status: 'warning', temp: 63, rul: 22, vibration: 0.37, joints: [75, 80, 70, 88, 85, 82], uptime: 96.8, cycles: 174000, lastAlert: 'RUL critical soon' },
  { id: 'TIJ-ARM-001', site: 'Tijuana', region: 'MX', model: 'ABB IRB 6700', status: 'offline', temp: 0, rul: 0, vibration: 0, joints: [0, 0, 0, 0, 0, 0], uptime: 0, cycles: 0, lastAlert: 'Connection lost' },
  { id: 'HGO-ARM-008', site: 'Hidalgo', region: 'MX', model: 'FANUC M-20iD', status: 'healthy', temp: 46, rul: 310, vibration: 0.11, joints: [97, 96, 98, 95, 97, 96], uptime: 99.2, cycles: 76800, lastAlert: '—' },

];

// ─── Utility ──────────────────────────────────────────────────────────────────
function jitter(v: number, range: number) {
  return Math.max(0, Math.min(100, v + (Math.random() - 0.5) * range));
}

const STATUS_COLOR: Record<string, string> = {
  healthy: 'text-emerald-400',
  warning: 'text-amber-400',
  critical: 'text-red-400',
  offline: 'text-slate-500',
};
const STATUS_DOT: Record<string, string> = {
  healthy: 'bg-emerald-400',
  warning: 'bg-amber-400',
  critical: 'bg-red-500 animate-pulse',
  offline: 'bg-slate-600',
};
const STATUS_RING: Record<string, string> = {
  healthy: 'border-emerald-500/60',
  warning: 'border-amber-500/60',
  critical: 'border-red-500/60',
  offline: 'border-slate-600/40',
};

// ─── Sparkline (area chart with gradient fill) ───────────────────────────────
function Sparkline({ values, color }: { values: number[]; color: string }) {
  const w = 80; const h = 28;
  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);
  const range = max - min || 1;
  const pts = values.map((v, i) => [
    (i / (values.length - 1)) * w,
    h - ((v - min) / range) * (h - 2) - 1,
  ]);
  const linePts = pts.map(([x, y]) => `${x},${y}`).join(' ');
  const areaPath = [
    `M${pts[0][0]},${h}`,
    ...pts.map(([x, y]) => `L${x},${y}`),
    `L${pts[pts.length - 1][0]},${h}`,
    'Z',
  ].join(' ');
  const gradId = `sg-${color.replace('#', '')}`;
  return (
    <svg width={w} height={h} className="overflow-visible">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradId})`} />
      <polyline fill="none" stroke={color} strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" points={linePts} />
      {/* Threshold line */}
      <line x1="0" y1={h * 0.3} x2={w} y2={h * 0.3} stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="2 2" />
      <text x="2" y={h * 0.3 - 4} fill="rgba(255,255,255,0.4)" fontSize="6" fontWeight="bold" letterSpacing="0.05em">DYN THRESHOLD</text>
      {/* last point dot */}
      <circle cx={pts[pts.length-1][0]} cy={pts[pts.length-1][1]} r="2.5"
        fill={color} opacity="0.9" />
    </svg>
  );
}


// ─── Joint health bar ─────────────────────────────────────────────────────────
function JointBars({ joints }: { joints: number[] }) {
  return (
    <div className="flex gap-[3px]">
      {joints.map((v, i) => {
        const color = v >= 85 ? '#34d399' : v >= 60 ? '#fbbf24' : '#f87171';
        return (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <div className="w-3 rounded-sm overflow-hidden" style={{ height: 20, background: 'rgba(255,255,255,0.06)' }}>
              <div style={{ height: `${v}%`, background: color, marginTop: 'auto', transition: 'height 0.6s ease' }} />
            </div>
            <span className="text-[8px] text-slate-600">J{i + 1}</span>
          </div>
        );
      })}
    </div>
  );
}

// ─── Alert feed item ──────────────────────────────────────────────────────────
interface AlertItem { id: number; node: string; msg: string; level: 'critical' | 'warning' | 'info'; time: string; }

// ─── Main component ───────────────────────────────────────────────────────────
export function FleetDemo() {
  const [robots, setRobots] = useState<RobotNode[]>(INITIAL_ROBOTS);
  const [activePin, setActivePin] = useState<string | null>(null);
  const [selectedRow, setSelectedRow] = useState<string | null>('SZX-ARM-002');

  // ── Zoom / Pan state ──────────────────────────────────────────────────────
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<{ mx: number; my: number; px: number; py: number } | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const MIN_ZOOM = 1;
  const MAX_ZOOM = 6;

  const zoomRef = useRef(zoom);
  const panRef = useRef(pan);
  zoomRef.current = zoom;
  panRef.current = pan;

  function clampPan(scale: number, nx: number, ny: number) {
    const mx = (scale - 1) / 2 * 100;
    return { x: Math.max(-mx, Math.min(mx, nx)), y: Math.max(-mx, Math.min(mx, ny)) };
  }

  // Native wheel listener with { passive: false } — only way to call preventDefault()
  // and block browser page zoom/scroll while the cursor is over the map.
  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    function onWheel(e: WheelEvent) {
      e.preventDefault();
      const rect = el!.getBoundingClientRect();
      const factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
      const curZoom = zoomRef.current;
      const curPan = panRef.current;
      const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, curZoom * factor));
      const cx = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
      const cy = ((e.clientY - rect.top) / rect.height - 0.5) * 100;
      const nx = curPan.x - (cx * (newZoom - curZoom)) / curZoom;
      const ny = curPan.y - (cy * (newZoom - curZoom)) / curZoom;
      setZoom(newZoom);
      setPan(s => {
        const mx = (newZoom - 1) / 2 * 100;
        return { x: Math.max(-mx, Math.min(mx, nx)), y: Math.max(-mx, Math.min(mx, ny)) };
      });
    }
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  function handleMouseDown(e: React.MouseEvent) {
    if (e.button !== 0) return;
    setDragging(true);
    dragStart.current = { mx: e.clientX, my: e.clientY, px: pan.x, py: pan.y };
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!dragging || !dragStart.current || !mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    const dx = (e.clientX - dragStart.current.mx) / rect.width * 100;
    const dy = (e.clientY - dragStart.current.my) / rect.height * 100;
    setPan(clampPan(zoom, dragStart.current.px + dx, dragStart.current.py + dy));
  }

  function handleMouseUp() { setDragging(false); dragStart.current = null; }

  function zoomStep(dir: 1 | -1) {
    const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoom * (dir > 0 ? 1.4 : 1 / 1.4)));
    setPan(clampPan(newZoom, pan.x, pan.y));
    setZoom(newZoom);
  }

  function resetView() { setZoom(1); setPan({ x: 0, y: 0 }); }
  // ─────────────────────────────────────────────────────────────────────────
  const [alerts, setAlerts] = useState<AlertItem[]>([
    { id: 1, node: 'BJS-ARM-007', msg: 'Thermal overload on J1 — maintenance required', level: 'critical', time: '0s ago' },
    { id: 2, node: 'SZX-ARM-002', msg: 'Vibration anomaly detected on J2', level: 'warning', time: '14s ago' },
    { id: 3, node: 'CTU-ARM-003', msg: 'RUL < 30 days — schedule replacement', level: 'warning', time: '1m ago' },
    { id: 4, node: 'TIJ-ARM-001', msg: 'Node offline — connection timeout', level: 'critical', time: '3m ago' },
    { id: 5, node: 'MEX-ARM-022', msg: 'RUL dropping — inspect J3 bearing', level: 'warning', time: '2m ago' },
    { id: 6, node: 'SZX-ARM-001', msg: 'Routine telemetry sync complete', level: 'info', time: '5m ago' },
  ]);
  const [tempHistory, setTempHistory] = useState<number[]>([42, 44, 43, 45, 46, 44, 45, 46, 48, 47, 48, 50]);
  const [vibHistory, setVibHistory] = useState<number[]>([0.10, 0.12, 0.15, 0.18, 0.22, 0.28, 0.35, 0.38, 0.40, 0.41, 0.43, 0.41].map(v => v * 100));
  const tickRef = useRef(0);

  // Simulated live ticks every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      tickRef.current += 1;
      setRobots(prev =>
        prev.map(r => {
          if (r.status === 'offline') return r;
          const newTemp = +(jitter(r.temp, 3).toFixed(1));
          const newVib = +(jitter(r.vibration * 100, 8) / 100).toFixed(3);
          const newJoints = r.joints.map(j => +(jitter(j, 2).toFixed(0)));
          return { ...r, temp: newTemp, vibration: newVib, joints: newJoints };
        })
      );
      // Update selected robot history
      setTempHistory(prev => {
        const node = robots.find(r => r.id === selectedRow);
        const next = node ? +(jitter(node.temp, 3).toFixed(1)) : prev[prev.length - 1];
        return [...prev.slice(-15), next];
      });
      setVibHistory(prev => {
        const node = robots.find(r => r.id === selectedRow);
        const next = node ? +(jitter(node.vibration * 100, 8).toFixed(1)) : prev[prev.length - 1];
        return [...prev.slice(-15), next];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [selectedRow, robots]);

  const selected = robots.find(r => r.id === selectedRow) ?? robots[0];
  const activesite = SITES.find(s => s.id === activePin);

  const healthy = robots.filter(r => r.status === 'healthy').length;
  const warning = robots.filter(r => r.status === 'warning').length;
  const critical = robots.filter(r => r.status === 'critical').length;

  return (
    <div className="fleet-demo-root">
      {/* ── Header bar ── */}
      <div className="fleet-demo-header">
        <div className="flex items-center gap-2">
          <span className="fleet-live-dot" />
          <span className="fleet-live-label">LIVE</span>
          <span className="fleet-header-title">Fleet Control Center</span>
        </div>
        <div className="fleet-header-stats">
          <span className="fleet-stat-chip fleet-stat-total">{robots.length} Nodes</span>
          <span className="fleet-stat-chip fleet-stat-healthy">{healthy} Healthy</span>
          <span className="fleet-stat-chip fleet-stat-warning">{warning} Warning</span>
          <span className="fleet-stat-chip fleet-stat-critical">{critical} Critical</span>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="fleet-demo-body">

        {/* LEFT: map + table */}
        <div className="fleet-demo-left">

          {/* World map */}
          <div className="fleet-map-card">
            <div className="fleet-card-label">Global Site Map</div>
            {/* Zoom controls */}
            <div className="fleet-zoom-bar">
              <button className="fleet-zoom-btn" onClick={() => zoomStep(1)} title="Zoom in">+</button>
              <span className="fleet-zoom-level">{Math.round(zoom * 100)}%</span>
              <button className="fleet-zoom-btn" onClick={() => zoomStep(-1)} title="Zoom out">−</button>
              <button className="fleet-zoom-btn fleet-zoom-reset" onClick={resetView} title="Reset">⌂</button>
            </div>

            <div
              className="fleet-map-area"
              ref={mapRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{ cursor: dragging ? 'grabbing' : zoom > 1 ? 'grab' : 'default' }}
            >
              {/* Single transformed wrapper — map + glows + pins move together */}
              <div
                className="fleet-map-zoom-wrap"
                style={{
                  transform: `translate(${pan.x}%, ${pan.y}%) scale(${zoom})`,
                  transformOrigin: '50% 50%',
                  transition: dragging ? 'none' : 'transform 0.15s ease',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/world-map.svg" alt="World map" className="fleet-map-svg"
                  style={{ objectFit: 'cover', objectPosition: 'center' }} />

                {/* Country glow overlay */}
                <svg viewBox="185.29 136.11 589.43 307.77" className="fleet-map-svg"
                  preserveAspectRatio="xMidYMid meet"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                  <defs>
                    <radialGradient id="cnGlow2" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="mxGlow2" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                    </radialGradient>
                    <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>
                  <ellipse cx="660" cy="220" rx="55" ry="35" fill="url(#cnGlow2)" opacity="0.8" />
                  <ellipse cx="310" cy="222" rx="28" ry="22" fill="url(#mxGlow2)" opacity="0.8" />
                  <text x="660" y="208" fill="rgba(251,146,60,0.9)" fontSize="10" fontWeight="800"
                    letterSpacing="2.5" textAnchor="middle" filter="url(#softGlow)">CHINA</text>
                  <text x="310" y="214" fill="rgba(125,211,252,0.9)" fontSize="7" fontWeight="800"
                    letterSpacing="1.5" textAnchor="middle" filter="url(#softGlow)">MÉXICO</text>
                </svg>

                {/* Pins — same coordinate system, transform handled by parent */}
                {SITES.map(site => {
                  const isActive = activePin === site.id;
                  const dotColor = site.critical > 0 ? '#f87171' : site.warning > 3 ? '#fbbf24' : '#34d399';
                  // Counter-scale pin labels so they stay readable at any zoom
                  const pinScale = 1 / zoom;
                  return (
                    <button
                      key={site.id}
                      className="fleet-site-pin"
                      style={{ left: `${site.x}%`, top: `${site.y}%` }}
                      onClick={(e) => { e.stopPropagation(); setActivePin(isActive ? null : site.id); }}
                    >
                      <span className="fleet-pin-ring" style={{ borderColor: dotColor + '60', boxShadow: `0 0 12px ${dotColor}40`, transform: `scale(${pinScale})` }} />
                      <span className="fleet-pin-dot" style={{ background: dotColor, transform: `scale(${pinScale})` }} />
                      <span className="fleet-pin-label" style={{ transform: `scale(${pinScale})`, transformOrigin: 'top center' }}>{site.label}</span>
                      {isActive && (
                        <div className="fleet-pin-tooltip" style={{ transform: `scale(${pinScale})`, transformOrigin: 'bottom center' }}>
                          <div className="font-semibold text-white text-xs mb-1">{site.city}</div>
                          <div className="text-[10px] text-slate-400">{site.count} robots</div>
                          <div className="flex gap-2 mt-1.5">
                            <span className="text-[10px] text-emerald-400">✓ {site.healthy}</span>
                            <span className="text-[10px] text-amber-400">⚠ {site.warning}</span>
                            <span className="text-[10px] text-red-400">✕ {site.critical}</span>
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Robot table */}
          <div className="fleet-table-card">
            <div className="fleet-card-label">Robot Nodes</div>
            <div className="fleet-table-wrap">
              <table className="fleet-table">
                <thead>
                  <tr>
                    <th>Node ID</th>
                    <th>Status</th>
                    <th>Site</th>
                    <th>Temp</th>
                    <th>Vibration</th>
                    <th>RUL</th>
                    <th>Joints</th>
                  </tr>
                </thead>
                <tbody>
                  {robots.map(r => (
                    <tr
                      key={r.id}
                      className={`fleet-table-row ${selectedRow === r.id ? 'fleet-row-selected' : ''} ${r.status === 'healthy' ? 'bg-emerald-500/5 hover:bg-emerald-500/10' : r.status === 'warning' ? 'bg-amber-500/5 hover:bg-amber-500/10' : r.status === 'critical' ? 'bg-red-500/10 hover:bg-red-500/20' : ''}`}
                      onClick={() => setSelectedRow(r.id)}
                    >
                      <td className="font-mono text-white text-[11px]">{r.id}</td>
                      <td>
                        <span className={`fleet-status-badge ${STATUS_COLOR[r.status]}`}>
                          <span className={`fleet-status-dot ${STATUS_DOT[r.status]}`} />
                          {r.status}
                        </span>
                      </td>
                      <td className="text-slate-400">{r.site}</td>
                      <td className={r.temp > 70 ? 'text-red-400' : r.temp > 55 ? 'text-amber-400' : 'text-slate-300'}>
                        {r.status === 'offline' ? '—' : `${r.temp}°C`}
                      </td>
                      <td className={r.vibration > 0.5 ? 'text-red-400' : r.vibration > 0.25 ? 'text-amber-400' : 'text-slate-300'}>
                        {r.status === 'offline' ? '—' : `${r.vibration.toFixed(2)} g`}
                      </td>
                      <td className={r.rul < 15 ? 'text-red-400 font-semibold' : r.rul < 35 ? 'text-amber-400' : 'text-slate-300'}>
                        {r.status === 'offline' ? '—' : `${r.rul}d`}
                      </td>
                      <td><JointBars joints={r.joints} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* RIGHT: detail panel + alerts */}
        <div className="fleet-demo-right">

          {/* Detail panel */}
          <div className={`fleet-detail-card ${STATUS_RING[selected.status]}`}>
            <div className="fleet-detail-header">
              <div>
                <div className="fleet-detail-id">{selected.id}</div>
                <div className="fleet-detail-model">{selected.model} · {selected.site}, {selected.region}</div>
              </div>
              <span className={`fleet-detail-badge ${STATUS_COLOR[selected.status]}`}>
                <span className={`fleet-status-dot ${STATUS_DOT[selected.status]}`} />
                {selected.status.toUpperCase()}
              </span>
            </div>

            {/* KPI row */}
            <div className="fleet-kpi-row">
              {[
                { label: 'Temperature', value: selected.status === 'offline' ? '—' : `${selected.temp}°C`, color: selected.temp > 70 ? '#f87171' : selected.temp > 55 ? '#fbbf24' : '#34d399' },
                { label: 'Vibration', value: selected.status === 'offline' ? '—' : `${selected.vibration.toFixed(2)}g`, color: selected.vibration > 0.5 ? '#f87171' : selected.vibration > 0.25 ? '#fbbf24' : '#34d399' },
                { label: 'RUL', value: selected.status === 'offline' ? '—' : `${selected.rul}d`, color: selected.rul < 15 ? '#f87171' : selected.rul < 35 ? '#fbbf24' : '#34d399' },
                { label: 'Uptime', value: selected.status === 'offline' ? '—' : `${selected.uptime}%`, color: '#94a3b8' },
              ].map(k => (
                <div key={k.label} className="fleet-kpi-item">
                  <div className="fleet-kpi-value" style={{ color: k.color }}>{k.value}</div>
                  <div className="fleet-kpi-label">{k.label}</div>
                </div>
              ))}
            </div>

            {/* Joint bars detail */}
            <div className="fleet-detail-section-label">Joint Health — J1 to J6</div>
            <div className="fleet-joints-detail">
              {selected.joints.map((v, i) => {
                const color = v >= 85 ? '#34d399' : v >= 60 ? '#fbbf24' : '#f87171';
                return (
                  <div key={i} className="fleet-joint-col">
                    <div className="fleet-joint-bar-bg">
                      <div className="fleet-joint-bar-fill" style={{ height: `${v}%`, background: color }} />
                    </div>
                    <div className="fleet-joint-pct" style={{ color }}>{v}%</div>
                    <div className="fleet-joint-name">J{i + 1}</div>
                  </div>
                );
              })}
            </div>

            {/* Sparkline charts */}
            <div className="fleet-charts-row">
              <div className="fleet-chart-box">
                <div className="fleet-chart-label">Temperature (°C)</div>
                <Sparkline values={tempHistory} color="#f97316" />
              </div>
              <div className="fleet-chart-box">
                <div className="fleet-chart-label">Vibration (×100)</div>
                <Sparkline values={vibHistory} color="#a78bfa" />
              </div>
            </div>

            {/* Cycles & last alert */}
            <div className="fleet-meta-row">
              <div className="fleet-meta-item">
                <span className="fleet-meta-label">Total Cycles</span>
                <span className="fleet-meta-value">{selected.cycles.toLocaleString()}</span>
              </div>
              <div className="fleet-meta-item">
                <span className="fleet-meta-label">Last Alert</span>
                <span className={`fleet-meta-value ${selected.lastAlert === '—' ? 'text-slate-500' : 'text-amber-400'}`}>{selected.lastAlert}</span>
              </div>
            </div>
          </div>

          {/* Alert feed */}
          <div className="fleet-alert-card">
            <div className="fleet-card-label">Live Alert Feed</div>
            <div className="fleet-alert-list">
              {alerts.map(a => (
                <div key={a.id} className={`fleet-alert-item fleet-alert-${a.level}`}>
                  <div className="fleet-alert-icon">
                    {a.level === 'critical' ? '🔴' : a.level === 'warning' ? '🟡' : '🔵'}
                  </div>
                  <div className="fleet-alert-body">
                    <div className="fleet-alert-msg">{a.msg}</div>
                    <div className="fleet-alert-meta">{a.node} · {a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
