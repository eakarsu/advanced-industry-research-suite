import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AI Quantum Computing Assistant Source Feature",
    "href": "/features/source-ai-quantum-computing-assistant",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIQuantumComputingAssistant: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "6 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AI Quantum Computing Assistant Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-ai-quantum-computing-assistant": {
    "title": "AI Quantum Computing Assistant Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIQuantumComputingAssistant, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIQuantumComputingAssistant: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "6 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "6",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AI Quantum Computing Assistant Source Feature": {
    "sourceOwners": [
      "AIQuantumComputingAssistant"
    ],
    "operatingQueues": [
      "Open Router Service",
      "AI Algorithm Tutor",
      "Gap No Algorithmexplainer Plainenglish Explanati",
      "Algorithm Explainer Page"
    ],
    "outputs": [
      "AI Quantum Computing Assistant merged workflow register",
      "AI Quantum Computing Assistant API and route coverage map",
      "AI Quantum Computing Assistant AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-ai-quantum-computing-assistant": {
    "workItems": [
      {
        "id": "source-ai-quantum-computing-assistant-work-1",
        "item": "Open Router Service",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/services/openRouterService.js"
      },
      {
        "id": "source-ai-quantum-computing-assistant-work-2",
        "item": "AI Algorithm Tutor",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/ai-algorithm-tutor.js"
      },
      {
        "id": "source-ai-quantum-computing-assistant-work-3",
        "item": "Gap No Algorithmexplainer Plainenglish Explanati",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap-no-algorithmexplainer-plainenglish-explanati.js"
      },
      {
        "id": "source-ai-quantum-computing-assistant-work-4",
        "item": "Algorithm Explainer Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/AlgorithmExplainerPage.js"
      },
      {
        "id": "source-ai-quantum-computing-assistant-work-5",
        "item": "Gap No Algorithmexplainer Plainenglish Explanati",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/GapNoAlgorithmexplainerPlainenglishExplanati.jsx"
      },
      {
        "id": "source-ai-quantum-computing-assistant-work-6",
        "item": "AI Response Panel",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/components/AIResponsePanel.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-quantum-computing-assistant-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-quantum-computing-assistant-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-quantum-computing-assistant-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-quantum-computing-assistant-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-quantum-computing-assistant-log-1",
        "message": "Deep-merge feature generated from AIQuantumComputingAssistant",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-quantum-computing-assistant-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-ai-quantum-computing-assistant": {
    "title": "AI Quantum Computing Assistant Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-quantum-computing-assistant-entity-1",
        "name": "Open Router Service",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-quantum-computing-assistant-entity-2",
        "name": "AI Algorithm Tutor",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-quantum-computing-assistant-entity-3",
        "name": "Gap No Algorithmexplainer Plainenglish Explanati",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-quantum-computing-assistant-entity-4",
        "name": "Algorithm Explainer Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-quantum-computing-assistant-entity-5",
        "name": "Gap No Algorithmexplainer Plainenglish Explanati",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "AIQuantumComputingAssistant": "/features/source-ai-quantum-computing-assistant"
};
