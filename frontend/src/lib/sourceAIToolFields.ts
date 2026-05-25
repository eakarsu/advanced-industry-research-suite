export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "ai-quantum-computing-assistant-ai-algorithm-tutor-1cq0pq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Algorithm Tutor source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-algorithm-tutor.js"
    }
  ],
  "ai-quantum-computing-assistant-gap-no-algorithmexplainer-plainenglish-explanati-1xqqjj-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-algorithmexplainer-plainenglish-explanati.js"
    }
  ],
  "ai-quantum-computing-assistant-algorithm-explainer-page-51fbnu-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Algorithm Explainer Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AlgorithmExplainerPage.js"
    }
  ],
  "ai-quantum-computing-assistant-gap-no-algorithmexplainer-plainenglish-explanati-1mzli5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Algorithmexplainer Plainenglish Explanati source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoAlgorithmexplainerPlainenglishExplanati.jsx"
    }
  ],
  "ai-quantum-computing-assistant-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Algorithm Tutor source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-algorithm-tutor.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-algorithmexplainer-plainenglish-explanati.js"
    }
  ],
  "ai-quantum-computing-assistant-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Algorithm Tutor source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-algorithm-tutor.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-algorithmexplainer-plainenglish-explanati.js"
    }
  ]
};
