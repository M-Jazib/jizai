"use client"

import { motion } from "framer-motion"
import { MessageCircle, Mail, Linkedin, Youtube, ExternalLink } from "lucide-react"
import { contactConfig } from "../lib/config"

const contactMethods = [
  {
    name: "WhatsApp",
    description: "Quick chat for project inquiries",
    icon: MessageCircle,
    href: contactConfig.whatsapp,
    color: "hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-400",
  },
  {
    name: "Email",
    description: "Send us a detailed message",
    icon: Mail,
    href: `mailto:${contactConfig.email}`,
    color: "hover:bg-accent/10 hover:border-accent/30 hover:text-accent-light",
  },
  {
    name: "LinkedIn",
    description: "Connect professionally",
    icon: Linkedin,
    href: contactConfig.linkedin,
    color: "hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400",
  },
  {
    name: "YouTube",
    description: "Watch our project demos",
    icon: Youtube,
    href: contactConfig.youtube,
    color: "hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400",
  },
  {
    name: "Fiverr",
    description: "Hire us on Fiverr",
    icon: ExternalLink,
    href: contactConfig.fiverr,
    color: "hover:bg-green-400/10 hover:border-green-400/30 hover:text-green-300",
  },
  {
    name: "Upwork",
    description: "Hire us on Upwork",
    icon: ExternalLink,
    href: contactConfig.upwork,
    color: "hover:bg-green-600/10 hover:border-green-600/30 hover:text-green-500",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card/20">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-accent-light text-sm font-medium tracking-wider uppercase mb-4 block">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Let&apos;s Build Something Smarter
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Have an automation idea? Let&apos;s discuss how AI and automation can improve your workflow.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-2xl bg-card border border-white/5"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Have a project in mind?
              </h3>
              <p className="text-muted">
                Tell us what you&apos;re trying to automate.
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.name}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className={`group p-5 rounded-xl bg-white/5 border border-white/10 transition-all duration-200 ${method.color}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-inherit transition-colors mb-1">
                        {method.name}
                      </h4>
                      <p className="text-sm text-muted group-hover:text-inherit/80 transition-colors">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <a
                href={contactConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-light transition-all duration-200 shadow-lg shadow-accent/25"
              >
                <MessageCircle className="w-5 h-5" />
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
