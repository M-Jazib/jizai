"use client"

import { motion } from "framer-motion"
import { Search, PenTool, Code, Rocket } from "lucide-react"
import { LucideIcon } from "lucide-react"

interface Step {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

const steps: Step[] = [
  {
    number: "01",
    title: "Discover",
    description: "We understand your business process and identify opportunities for automation.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description: "We design an efficient AI-powered workflow around your specific requirements.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Build",
    description: "We build, integrate, test, and refine the automation.",
    icon: Code,
  },
  {
    number: "04",
    title: "Launch",
    description: "We deploy the solution and help ensure it works smoothly in your workflow.",
    icon: Rocket,
  },
]

export default function Process() {
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
            Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            From idea to intelligent automation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line - desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Icon */}
                <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-2xl bg-card border border-white/5 flex items-center justify-center group hover:border-accent/30 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-accent-light group-hover:scale-110 transition-transform" />
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
