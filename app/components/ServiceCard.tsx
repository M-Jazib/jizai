"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  number: string
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  index: number
}

export default function ServiceCard({
  number,
  title,
  description,
  features,
  icon: Icon,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative p-6 md:p-8 rounded-2xl bg-card border border-white/5 hover:border-accent/20 transition-all duration-300 hover:glow-accent"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        {/* Number and Icon */}
        <div className="flex items-start justify-between mb-6">
          <span className="text-xs font-mono text-accent/60">{number}</span>
          <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <Icon className="w-5 h-5 text-accent-light" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-light transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-muted/80">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
