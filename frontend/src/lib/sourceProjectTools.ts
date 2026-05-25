export const sourceProjectTools = [
  {
    "id": "ai-quantum-computing-assistant-source-workflow",
    "title": "AI Quantum Computing Assistant Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIQuantumComputingAssistant.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIQuantumComputingAssistant to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Quantum Computing Assistant source context",
    "outputLabel": "AI Quantum Computing Assistant source analysis",
    "signals": [
      "server/services/openRouterService",
      "server/routes/ai-algorithm-tutor",
      "server/routes/gap-no-algorithmexplainer-plainenglish-explanati",
      "client/src/pages/AlgorithmExplainerPage",
      "client/src/pages/GapNoAlgorithmexplainerPlainenglishExplanati",
      "client/src/components/AIResponsePanel"
    ]
  },
  {
    "id": "ai-quantum-computing-assistant-ai-tools",
    "title": "AI Quantum Computing Assistant AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIQuantumComputingAssistant.",
    "defaultPrompt": "Review AIQuantumComputingAssistant AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Quantum Computing Assistant AI prompt or tool context",
    "outputLabel": "AI Quantum Computing Assistant AI tool response",
    "signals": [
      "server/services/openRouterService.js",
      "server/routes/ai-algorithm-tutor.js",
      "server/routes/gap-no-algorithmexplainer-plainenglish-explanati.js",
      "client/src/pages/AlgorithmExplainerPage.js",
      "client/src/pages/GapNoAlgorithmexplainerPlainenglishExplanati.jsx",
      "client/src/components/AIResponsePanel.js"
    ]
  },
  {
    "id": "ai-quantum-computing-assistant-ai-algorithm-tutor-1cq0pq-exact-ai",
    "title": "AI Quantum Computing Assistant: AI Algorithm Tutor",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-algorithm-tutor.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Algorithm Tutor\" from AIQuantumComputingAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Algorithm Tutor donor inputs",
    "outputLabel": "AI Algorithm Tutor AI response",
    "signals": [
      "server/routes/ai-algorithm-tutor.js"
    ]
  },
  {
    "id": "ai-quantum-computing-assistant-gap-no-algorithmexplainer-plainenglish-explanati-1xqqjj-exact-ai",
    "title": "AI Quantum Computing Assistant: Gap No Algorithmexplainer Plainenglish Explanati",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-no-algorithmexplainer-plainenglish-explanati.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Algorithmexplainer Plainenglish Explanati\" from AIQuantumComputingAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Algorithmexplainer Plainenglish Explanati donor inputs",
    "outputLabel": "Gap No Algorithmexplainer Plainenglish Explanati AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "ai-quantum-computing-assistant-algorithm-explainer-page-51fbnu-exact-ai",
    "title": "AI Quantum Computing Assistant: Algorithm Explainer Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AlgorithmExplainerPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Algorithm Explainer Page\" from AIQuantumComputingAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Algorithm Explainer Page donor inputs",
    "outputLabel": "Algorithm Explainer Page AI response",
    "signals": [
      "client/src/pages/AlgorithmExplainerPage.js"
    ]
  },
  {
    "id": "ai-quantum-computing-assistant-gap-no-algorithmexplainer-plainenglish-explanati-1mzli5-exact-ai",
    "title": "AI Quantum Computing Assistant: Gap No Algorithmexplainer Plainenglish Explanati",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoAlgorithmexplainerPlainenglishExplanati.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Algorithmexplainer Plainenglish Explanati\" from AIQuantumComputingAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Algorithmexplainer Plainenglish Explanati donor inputs",
    "outputLabel": "Gap No Algorithmexplainer Plainenglish Explanati AI response",
    "signals": [
      "client/src/pages/GapNoAlgorithmexplainerPlainenglishExplanati.jsx"
    ]
  }
];
