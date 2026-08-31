"use client"

import { motion } from "framer-motion"
import { 
  Bot, 
  Workflow, 
  Users, 
  MessageSquare, 
  FileSearch, 
  Mic, 
  Plug 
} from "lucide-react"
import ServiceCard from "../components/ServiceCard"

const services = [
  {
    number: "01",
    title: "AI Agents",
    description:
      "Intelligent AI agents that understand tasks, make decisions, use tools, and automate complex business workflows.",
    features: [
      "Task automation",
      "AI decision making",
      "Tool integration",
      "Workflow execution",
    ],
    icon: Bot,
  },
  {
    number: "02",
    title: "n8n Automation",
    description:
      "Connect your favorite tools and automate repetitive business processes with powerful n8n workflows.",
    features: [
      "Workflow automation",
      "API integrations",
      "Data synchronization",
      "Automated notifications",
    ],
    icon: Workflow,
  },
  {
    number: "03",
    title: "CRM Solutions",
    description:
      "Organize customer relationships, automate sales processes, and connect CRM systems with intelligent workflows.",
    features: [
      "Lead management",
      "Customer tracking",
      "Sales pipeline automation",
      "CRM integrations",
      "Automated follow-ups",
      "Data synchronization",
    ],
    icon: Users,
  },
  {
    number: "04",
    title: "AI Chatbots",
    description:
      "Build intelligent conversational assistants for websites, customer support, internal teams, and business operations.",
    features: [
      "Customer support",
      "FAQ automation",
      "Lead qualification",
      "AI-powered conversations",
    ],
    icon: MessageSquare,
  },
  {
    number: "05",
    title: "RAG Systems",
    description:
      "AI assistants that retrieve information from documents and knowledge bases to provide relevant and context-aware responses.",
    features: [
      "PDF/document knowledge",
      "Vector search",
      "Knowledge bases",
      "Context-aware AI responses",
    ],
    icon: FileSearch,
  },
  {
    number: "06",
    title: "AI Voice Agents",
    description:
      "Voice-powered AI assistants designed to automate conversations, handle calls, and improve customer interactions.",
    features: [
      "Voice conversations",
      "Call automation",
      "Lead qualification",
      "Appointment workflows",
    ],
    icon: Mic,
  },
  {
    number: "07",
    title: "API & Business Automation",
    description:
      "Connect APIs, applications, AI models, CRM platforms, and business tools into seamless automated workflows.",
    features: [
      "API integration",
      "CRM integration",
      "AI integration",
      "Data automation",
      "Third-party services",
    ],
    icon: Plug,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container-custom section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-accent-light text-sm font-medium tracking-wider uppercase mb-4 block">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What We Build
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Intelligent technology solutions designed to automate, organize, and grow your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
