"use client"

import { motion } from "framer-motion"
import {
  MessageCircle,
  Mail,
  Linkedin,
  Youtube,
  Instagram,
  Facebook,
  Send,
  MessageSquare,
  Copy,
  Check,
} from "lucide-react"
import { contactConfig } from "../lib/config"
import { useState } from "react"

const contactMethods = [
  {
    name: "WhatsApp",
    description: "Quick chat for project inquiries",
    icon: MessageCircle,
    href: contactConfig.whatsapp,
    color:
      "hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-400",
  },
  {
    name: "Telegram",
    description: "Chat with us on Telegram",
    icon: Send,
    href: contactConfig.telegram,
    color:
      "hover:bg-sky-500/10 hover:border-sky-500/30 hover:text-sky-400",
  },
  {
    name: "Instagram",
    description: "Follow us on Instagram",
    icon: Instagram,
    href: contactConfig.instagram,
    color:
      "hover:bg-pink-500/10 hover:border-pink-500/30 hover:text-pink-400",
  },
  {
    name: "Facebook",
    description: "Connect with us on Facebook",
    icon: Facebook,
    href: contactConfig.facebook,
    color:
      "hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400",
  },
  {
    name: "Reddit",
    description: "Join our Reddit community",
    icon: MessageSquare,
    href: contactConfig.reddit,
    color:
      "hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-400",
  },
  {
    name: "Discord",
    description: "Join our Discord community",
    icon: MessageCircle,
    href: contactConfig.discord,
    color:
      "hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-indigo-400",
  },
  {
    name: "LinkedIn",
    description: "Connect professionally",
    icon: Linkedin,
    href: contactConfig.linkedin,
    color:
      "hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400",
  },
  {
    name: "YouTube",
    description: "Watch our project demos",
    icon: Youtube,
    href: contactConfig.youtube,
    color:
      "hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400",
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(contactConfig.email)
    setCopied(true)

    setTimeout(() => setCopied(false), 2000)
  }

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    contactConfig.email
  )}&su=Project%20Inquiry%20-%20JizAI`

  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
    contactConfig.email
  )}&subject=Project%20Inquiry%20-%20JizAI`

  return (
    <section id="contact" className="py-20 md:py-32 bg-card/20">
      <div className="container-custom section-padding">
        <div className="max-w-5xl mx-auto">

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
              Have an automation idea? Let&apos;s discuss how AI and automation
              can improve your workflow.
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

            {/* Card Heading */}
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Have a project in mind?
              </h3>

              <p className="text-muted">
                Tell us what you&apos;re trying to automate.
              </p>
            </div>

            {/* Email Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 mb-6"
            >
              {/* Email Heading */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-light" />
                </div>

                <span className="text-white font-semibold">
                  Email Us
                </span>
              </div>

              {/* Email Address */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <code className="px-4 py-2 rounded-lg bg-black/30 text-accent-light font-mono text-sm">
                  {contactConfig.email}
                </code>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted" />
                  )}
                </button>
              </div>

              {/* Email Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                {/* Gmail */}
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500/20 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Open in Gmail
                </a>

                {/* Outlook */}
                <a
                  href={outlookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Open in Outlook
                </a>
              </div>
            </motion.div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.name}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -3,
                  }}
                  className={`group p-5 rounded-xl bg-white/5 border border-white/10 transition-all duration-200 ${method.color}`}
                >
                  <div className="flex items-start gap-4">

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                      <method.icon className="w-5 h-5" />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
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
                href={contactConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-light transition-all duration-200 shadow-lg shadow-accent/25"
              >
                <Send className="w-5 h-5" />
                Let&apos;s Talk
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}