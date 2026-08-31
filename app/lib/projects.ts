export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  features: string[]
  problem: string
  solution: string
  workflow: string[]
  youtubeUrl: string
}

// ============================================
// PROJECTS DATA
// Add new projects by following this structure
// ============================================

export const projects: Project[] = [
  {
    id: "ai-pdf-rag-chatbot",
    title: "AI PDF RAG Chatbot",
    description:
      "An AI-powered document assistant that allows users to interact with PDF knowledge bases and retrieve relevant information using Retrieval-Augmented Generation.",
    longDescription:
      "This project delivers an intelligent document assistant that transforms static PDFs into interactive knowledge bases. Users can ask natural language questions and receive accurate, context-aware answers sourced directly from their documents. The system uses vector embeddings to understand document semantics and retrieves the most relevant passages to ground AI responses in factual content.",
    image: "/images/project-rag.jpg",
    technologies: ["n8n", "RAG", "AI", "Vector Database"],
    features: [
      "Natural language querying over PDF documents",
      "Vector-based semantic search",
      "Context-aware AI responses",
      "Multi-document knowledge base support",
      "Real-time document processing",
    ],
    problem:
      "Businesses accumulate vast amounts of documentation (manuals, reports, contracts) that are difficult to search and extract insights from efficiently.",
    solution:
      "A RAG-powered chatbot that ingests PDFs, creates vector embeddings, and enables conversational access to document knowledge with source citations.",
    workflow: [
      "Upload PDF documents to the system",
      "Documents are parsed and converted to vector embeddings",
      "User asks a question in natural language",
      "System retrieves relevant document chunks via vector search",
      "AI generates a contextual answer based on retrieved content",
    ],
    // Replace with your actual YouTube demo URL
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "ai-voice-agent",
    title: "AI Voice Agent",
    description:
      "An AI-powered voice agent that handles customer conversations, qualifies leads, captures customer information, and automates appointment booking.",
    longDescription:
      "AI Voice Revenue Agent is an intelligent conversational AI system built with ElevenLabs and n8n automation. It can communicate naturally with customers through voice, answer business-related questions using a knowledge base, understand customer needs, qualify potential leads, capture important lead information, trigger AI lead scoring, synchronize qualified leads with a CRM, and check calendar availability before scheduling consultations.",
    image: "/images/AI-Voice.png",
    technologies: [ "ElevenLabs",
    "AI Voice Agent",
    "RAG",
    "OpenAI",
    "n8n",
    "HubSpot",
    "Google Calendar",
    "APIs" ],
    features: [
       "Natural AI voice conversations",
    "24/7 customer support",
    "Knowledge-base powered responses",
    "Lead qualification through conversation",
    "Automatic lead capture",
    "AI lead scoring",
    "HOT / WARM / COLD lead classification",
    "CRM automation with HubSpot",
    "Calendar availability checking",
    "Automated appointment booking",
    "Human handoff for complex requests",
    "n8n workflow automation"
    ],
     problem:
    "Businesses often miss potential customers because calls and inquiries are difficult to handle consistently during busy hours. Sales teams also spend valuable time manually collecting lead information, qualifying prospects, updating CRM records, and arranging meetings.",

  solution:
    "An AI voice agent that handles customer conversations naturally, answers questions using approved business knowledge, qualifies prospects, captures lead information, triggers AI-powered lead scoring, sends qualified data into the CRM, and helps customers schedule consultations through an automated calendar workflow.",

  workflow: [
    "Customer starts a voice conversation with the AI agent",
    "AI understands the customer's intent and requirements",
    "Knowledge base provides relevant business information",
    "AI naturally qualifies the potential lead",
    "Customer name, email, business need, service, budget, and timeline are captured",
    "Lead information is sent to an n8n automation workflow",
    "AI analyzes and scores the lead",
    "Lead is classified as HOT, WARM, or COLD",
    "Qualified lead information is synchronized with HubSpot CRM",
    "AI checks Google Calendar availability when the customer wants to book",
    "Available appointments are booked automatically",
    "Complex requests can be routed toward human assistance"
  ],
    // Replace with your actual YouTube demo URL
    youtubeUrl: "https://www.youtube.com/embed/WZsOiCDowFw?si=67G-6uti2y_4YS-K",
  },
  {
    id: "crm-automation-workflow",
    title: "CRM Automation Workflow",
    description:
      "An automated CRM workflow that captures leads, organizes customer data, triggers follow-ups, and connects business tools through automation.",
    longDescription:
      "This comprehensive CRM automation workflow connects lead capture forms, email platforms, and CRM systems into a seamless pipeline. New leads are automatically enriched, segmented, and routed to the appropriate sales team member. Follow-up sequences are triggered based on lead behavior, ensuring no opportunity falls through the cracks.",
    image: "C:/Users/mianh/Downloads/Compressed/jizai-website/Images/Voice agent .png",
    technologies: ["CRM", "n8n", "APIs", "Automation"],
    features: [
      "Automated lead capture and enrichment",
      "Smart lead segmentation and routing",
      "Automated follow-up sequences",
      "CRM data synchronization",
      "Sales pipeline automation",
    ],
    problem:
      "Manual CRM data entry and follow-up processes are time-consuming and result in lost leads and inconsistent customer communication.",
    solution:
      "An end-to-end automated workflow that captures leads from any source, enriches data, updates CRM records, and triggers personalized follow-ups automatically.",
    workflow: [
      "Lead submits form or interacts with business touchpoint",
      "Lead data is captured and enriched with additional info",
      "CRM record is created or updated automatically",
      "Lead is segmented and assigned to sales rep",
      "Personalized follow-up sequence is triggered",
      "Sales team receives notification with lead context",
    ],
    // Replace with your actual YouTube demo URL
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "business-workflow-automation",
    title: "Business Workflow Automation",
    description:
      "An automated workflow connecting multiple business tools to reduce repetitive manual tasks and improve operational efficiency.",
    longDescription:
      "This project unifies disparate business tools into cohesive automated workflows. Data flows seamlessly between applications, eliminating manual copy-paste work and reducing human error. From invoice processing to inventory updates to team notifications, routine tasks are handled automatically so teams can focus on high-value work.",
    image: "/images/project-workflow.jpg",
    technologies: ["n8n", "APIs", "AI", "Automation"],
    features: [
      "Multi-tool API integrations",
      "Automated data synchronization",
      "Error handling and retry logic",
      "Real-time notifications and alerts",
      "Custom workflow logic and branching",
    ],
    problem:
      "Teams waste hours on repetitive tasks like copying data between apps, sending routine emails, and updating multiple systems manually.",
    solution:
      "A centralized automation hub that connects all business tools and automates cross-platform workflows with intelligent error handling and monitoring.",
    workflow: [
      "Trigger event occurs (new order, form submission, scheduled time)",
      "Automation workflow is initiated",
      "Data is extracted, transformed, and validated",
      "Connected systems are updated in sequence",
      "Team members receive relevant notifications",
      "Execution log is recorded for audit and debugging",
    ],
    // Replace with your actual YouTube demo URL
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
