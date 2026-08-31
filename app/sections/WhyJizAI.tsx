"use client"

import { motion } from "framer-motion"
import { Zap, Puzzle, Cpu, TrendingUp } from "lucide-react"
import { LucideIcon } from "lucide-react"

interface Reason {
  title: string
  description: string
  icon: LucideIcon
}

const reasons: Reason[] = [
  {
    title: "Smart Automation",
    description:
      "We focus on automating processes that actually save time and reduce repetitive work.",
    icon: Zap,
  },
  {
    title: "Custom Solutions",
    description:
      "Every workflow is designed around the specific requirements of the business.",
    icon: Puzzle,
  },
  {
    title: "Modern AI",
    description:
      "We use modern AI models, agents, automation platforms, APIs, and integrations.",
    icon: Cpu,
  },
  {
    title: "Scalable Workflows",
    description:
      "We build flexible systems that can evolve as business needs grow.",
    icon: TrendingUp,
  },
]

export default function WhyJizAI() {
  return (
    <section className="py-20 md:py-32">
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
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose JizAI?
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl bg-card border border-white/5 hover:border-accent/20 transition-all duration-300 hover:glow-accent"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <reason.icon className="w-7 h-7 text-accent-light" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-light transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
