"use client"

import { motion } from "framer-motion"
import { Bot, Workflow, Users, FileSearch, MessageSquare, Mic } from "lucide-react"
import { LucideIcon } from "lucide-react"

const capabilities = [
  { name: "AI Agents", icon: Bot },
  { name: "n8n Automation", icon: Workflow },
  { name: "CRM Solutions", icon: Users },
  { name: "RAG Systems", icon: FileSearch },
  { name: "AI Chatbots", icon: MessageSquare },
  { name: "AI Voice Agents", icon: Mic },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card/20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent-light text-sm font-medium tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              About JizAI
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                JizAI is an AI automation agency focused on helping businesses work smarter 
                through intelligent technology.
              </p>
              <p>
                We combine AI agents, workflow automation, CRM systems, APIs, and modern AI 
                technologies to turn repetitive processes into efficient automated systems.
              </p>
              <p className="text-white font-medium text-lg">
                Our goal is simple: Automate Smarter. Work Better.
              </p>
            </div>
          </motion.div>

          {/* Capabilities Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-xl bg-card border border-white/5 hover:border-accent/20 transition-all duration-300 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <cap.icon className="w-5 h-5 text-accent-light" />
                </div>
                <span className="text-white font-medium text-sm">{cap.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
