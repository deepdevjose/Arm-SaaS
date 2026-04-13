export const demoFleet = [
  { id: 'arm-01', region: 'eu-west-1', status: 'healthy', temperature: 52, cpu: 38, memory: 61, rul: 192 },
  { id: 'arm-02', region: 'eu-west-1', status: 'warning', temperature: 71, cpu: 64, memory: 74, rul: 84 },
  { id: 'arm-03', region: 'ap-southeast-1', status: 'critical', temperature: 84, cpu: 86, memory: 91, rul: 21 },
  { id: 'arm-04', region: 'us-east-1', status: 'healthy', temperature: 49, cpu: 33, memory: 48, rul: 214 }
] as const;

export const demoAlerts = [
  { id: 'A-291', level: 'critical', title: 'Thermal trend exceeded threshold', node: 'arm-03', time: '32s ago' },
  { id: 'A-290', level: 'warning', title: 'RUL forecast dropped below 96h', node: 'arm-02', time: '4m ago' },
  { id: 'A-289', level: 'info', title: 'Edge gateway re-synced successfully', node: 'arm-01', time: '18m ago' }
] as const;