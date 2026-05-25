export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['research-programs', 'Research Programs Records', 'Research Programs priority queue', 'Open', 'Research Programs exception list', 'Research Lead', '$0'],
  ['lab-notes', 'Lab Notes Records', 'Lab Notes priority queue', 'Review', 'Lab Notes exception list', 'Research Lead', '$0'],
  ['experiments', 'Experiments Records', 'Experiments priority queue', 'Action needed', 'Experiments exception list', 'Research Lead', '$0'],
  ['grants', 'Grants Records', 'Grants priority queue', 'Open', 'Grants exception list', 'Research Lead', '$0'],
  ['ip-pipeline', 'IP Pipeline Records', 'IP Pipeline priority queue', 'Review', 'IP Pipeline exception list', 'Operations Lead', '$0'],
  ['publications', 'Publications Records', 'Publications priority queue', 'Action needed', 'Publications exception list', 'Operations Lead', '$0'],
  ['simulations', 'Simulations Records', 'Simulations priority queue', 'Open', 'Simulations exception list', 'Operations Lead', '$0'],
  ['materials', 'Materials Records', 'Materials priority queue', 'Review', 'Materials exception list', 'Operations Lead', '$0'],
  ['equipment', 'Equipment Records', 'Equipment priority queue', 'Action needed', 'Equipment exception list', 'Governance Lead', '$0'],
  ['safety', 'Safety Records', 'Safety priority queue', 'Open', 'Safety exception list', 'Governance Lead', '$0'],
  ['collaborations', 'Collaborations Records', 'Collaborations priority queue', 'Review', 'Collaborations exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
