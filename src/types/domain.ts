export type HealthState = 'healthy' | 'warning' | 'critical' | 'offline';

export type NavItem = {
  href: string;
  label: string;
};

export type FleetNode = {
  id: string;
  region: string;
  status: HealthState;
  temperature: number;
  cpu: number;
  memory: number;
  rul: number;
};
