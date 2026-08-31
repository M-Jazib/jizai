"use client"

import { motion } from "framer-motion"

const technologies = [
  "n8n",
  "AI Agents",
  "RAG",
  "CRM",
  "OpenAI",
  "Python",
  "JavaScript",
  "APIs",
  "Vector Databases",
  "Workflow Automation",
]

export default function TechStack() {
  return (
    <section className="py-16 md:py-24 border-y border-white/5">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Powered by Modern AI & Automation
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            We leverage cutting-edge technologies to build intelligent automation solutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-accent/10 hover:border-accent/30 hover:text-accent-light transition-all duration-200 cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
