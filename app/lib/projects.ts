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
    id: "ai-crm-revenue-engine",
    title: "AI CRM Revenue Engine",
    description:"An AI-powered CRM revenue engine that captures, qualifies, researches, scores, nurtures, and routes leads automatically while keeping HubSpot as the central source of truth.",
  longDescription: "A complete AI-driven sales automation system built with n8n, HubSpot, AI agents, APIs, and PostgreSQL. The system captures leads from forms, websites, and email, automatically enriches and researches companies, qualifies prospects using AI, assigns lead scores and priorities, generates personalized outreach, detects email replies, classifies prospect intent, triggers follow-ups, and routes high-intent conversations to the sales team. Human approval is built into critical sales actions to keep the automation controlled and reliable.",
    image: "/images/AI_CRM_Revenue_Engine.png",
     technologies: [
    "n8n",
    "HubSpot",
    "AI Agents",
    "OpenAI",
    "Gmail",
    "APIs",
    "PostgreSQL",
    "Webhooks",
    "Automation"
  ],
      features: [
    "Multi-source lead capture",
    "AI-powered lead qualification",
    "Automated company research",
    "AI lead scoring and priority detection",
    "Buying intent analysis",
    "Personalized AI sales outreach",
    "Automated email reply detection",
    "AI reply classification",
    "Smart follow-up scheduling",
    "HubSpot CRM synchronization",
    "Sales team notifications",
    "Human approval and control",
    "Meeting booking automation",
    "Deal pipeline automation",
    "AI deal intelligence",
    "Client onboarding automation",
    "Automated reporting"
  ],
    problem:
    "Sales teams often lose opportunities because leads are captured across different channels, CRM data requires manual updates, qualification takes time, follow-ups are inconsistent, and sales representatives lack the right context when responding to prospects.",

  solution:
    "An end-to-end AI CRM revenue engine that connects lead sources, email, HubSpot, AI agents, APIs, and databases into one intelligent sales pipeline. Leads are automatically captured, enriched, researched, scored, personalized, contacted, monitored for replies, followed up, and moved through the sales pipeline with human approval at critical stages.",

  workflow: [
    "Lead enters through website, form, or email",

    "n8n captures and normalizes the lead data",

    "Lead is created or updated in HubSpot CRM",

    "AI qualification agent analyzes the lead and business need",

    "Company research agent researches the prospect and identifies potential pain points",

    "AI scoring engine calculates lead score, priority, and buying intent",

    "Hot leads are routed to the sales team while warm leads enter an AI nurture flow",

    "AI generates personalized sales outreach based on lead and company context",

    "Email is sent automatically and the communication is tracked",

    "Incoming prospect replies are detected and analyzed",

    "AI classifies replies as positive, question, not-now, negative, unsubscribe, or out-of-office",

    "Positive replies are marked as REPLIED and the sales team is notified",

    "Not-now prospects are scheduled for automated follow-up",

    "Negative and unsubscribe replies automatically stop further outreach",

    "Qualified prospects move toward meeting booking",

    "Meeting bookings update the CRM and sales pipeline",

    "Deals are tracked through the sales pipeline",

    "AI provides deal intelligence and recommended next actions",

    "Won deals trigger client onboarding workflows",

    "CRM and automation data are used for reporting and revenue insights"
    ],
    // Replace with your actual YouTube demo URL
    youtubeUrl: "https://www.youtube.com/embed/wuCXbOsltNI?si=iVjT51nkV7CN4OTX",
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
