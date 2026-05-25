export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIQuantumComputingAssistant', ownership: 'Research Programs source capabilities and workflows', coverage: ['Research Programs', 'Lab Notes', 'Experiments'] },
  { name: 'AISemiconductorProcessOptimizer', ownership: 'Lab Notes source capabilities and workflows', coverage: ['Grants', 'IP Pipeline', 'Publications'] },
  { name: 'AIMaterialsDiscovery', ownership: 'Experiments source capabilities and workflows', coverage: ['Simulations', 'Materials', 'Equipment'] },
  { name: 'AIResearchGrantWriter', ownership: 'Grants source capabilities and workflows', coverage: ['Safety', 'Collaborations', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Research Programs', value: '84', note: 'Active' },
  { label: 'Lab Notes', value: '61', note: 'Open' },
  { label: 'Experiments', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Research Programs operating view', 'Lab Notes operating view', 'Experiments operating view', 'Grants operating view', 'IP Pipeline operating view', 'Publications operating view', 'Simulations operating view', 'Materials operating view'];
export const workflowHighlights = ['Research Programs workflow with records, approvals, audit, and reporting', 'Lab Notes workflow with records, approvals, audit, and reporting', 'Experiments workflow with records, approvals, audit, and reporting', 'Grants workflow with records, approvals, audit, and reporting', 'IP Pipeline workflow with records, approvals, audit, and reporting'];
