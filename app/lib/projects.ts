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
    "An AI-powered document assistant that lets users upload PDF files, ask questions about their documents, and receive context-aware answers using Retrieval-Augmented Generation.",

  longDescription:
    "This project transforms static PDF documents into an interactive AI knowledge base. Users can upload documents and ask questions using natural language. The system processes the uploaded files, extracts and splits their content into manageable chunks, generates vector embeddings, and stores the document knowledge for semantic retrieval. When a user asks a question, the system retrieves the most relevant information and provides an AI-generated answer grounded in the uploaded documents.",

  image: "/images/Rag-Agent.png",

  technologies: [
    "n8n",
    "RAG",
    "AI",
    "Vector Database",
    "Embeddings",
    "PDF Processing"
  ],

  features: [
    "PDF document upload and processing",
    "Natural language questions over documents",
    "Retrieval-Augmented Generation (RAG)",
    "Semantic vector search",
    "Document chunking and embeddings",
    "Context-aware AI responses",
    "Knowledge base creation from uploaded files",
    "Automated document processing workflow"
  ],

  problem:
    "Important information is often buried inside long PDFs, manuals, reports, and business documents. Finding specific information manually takes time and makes it difficult for users to quickly extract useful answers from their existing documentation.",

  solution:
    "A RAG-powered AI chatbot that converts uploaded PDF documents into a searchable knowledge base. The system processes and chunks documents, creates embeddings, retrieves relevant content based on the user's question, and uses AI to generate answers grounded in the document knowledge.",

  workflow: [
    "User uploads a PDF document",
    "n8n receives and processes the uploaded file",
    "PDF content is extracted using a document loader",
    "Document text is split into smaller searchable chunks",
    "Chunks are converted into vector embeddings",
    "Embeddings are stored in the vector database",
    "User asks a question about the uploaded document",
    "Relevant document chunks are retrieved using semantic search",
    "AI generates a context-aware answer using the retrieved information",
    "The response is returned to the user"
  ],

    // Replace with your actual YouTube demo URL
    youtubeUrl: "https://www.youtube.com/embed/eIzJacaCk0w?si=opRI8nyX0pviVg8F",
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
  id: "ai-sales-follow-up",
  title: "AI Sales Follow-Up & Pipeline Agent",
  description:
    "An AI-powered sales automation system that detects stalled deals, generates personalized follow-up emails, and updates the CRM automatically.",
  longDescription:
    "This workflow helps sales teams prevent opportunities from going cold. It monitors HubSpot deals for inactivity, identifies stalled opportunities, finds the associated contact, and uses AI to generate a context-aware follow-up email based on the deal and contact information. The email is sent automatically through Gmail and the HubSpot deal is updated after the follow-up is completed.",
  image: "/images/AI-Sales-follow-up-agent.png",
  technologies: ["n8n", "HubSpot", "Gmail", "AI", "APIs", "Automation"],
  features: [
    "Automatic stalled-deal detection",
    "HubSpot deal and contact integration",
    "AI-generated personalized follow-up emails",
    "Automatic Gmail email delivery",
    "HubSpot deal status updates",
    "Conditional workflow logic and branching",
  ],
  problem:
    "Sales teams often forget to follow up with prospects after a few days of inactivity. These missed follow-ups can cause otherwise valuable opportunities to go cold or become lost deals.",
  solution:
    "An automated AI sales agent that monitors HubSpot deals, detects opportunities that have been inactive for several days, retrieves the associated contact, generates a personalized follow-up email, sends it through Gmail, and updates the deal in HubSpot.",
  workflow: [
    "HubSpot deals are retrieved on a scheduled basis",
    "Deals are checked for inactivity and stalled status",
    "Associated contact information is retrieved",
    "AI analyzes the deal and contact context",
    "A personalized follow-up email is generated",
    "Email is sent automatically through Gmail",
    "HubSpot deal is updated after the follow-up",
  ],
  // Replace with your actual YouTube demo URL
  youtubeUrl: "https://www.youtube.com/embed/Hodfkt4KcWw?si=beiUHQJHhsXVNJP7",
},
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
