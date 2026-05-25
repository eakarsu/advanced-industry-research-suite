export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AIQuantumComputingAssistant"
    ],
    "examples": [
      "client/src/components/AIResponsePanel",
      "client/src/pages/AlgorithmExplainerPage",
      "client/src/pages/GapNoAlgorithmexplainerPlainenglishExplanati",
      "server/routes/ai-algorithm-tutor",
      "server/routes/gap-no-algorithmexplainer-plainenglish-explanati",
      "server/services/openRouterService"
    ],
    "count": 1
  }
];
