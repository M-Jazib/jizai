"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X, Clock, MessageCircle } from "lucide-react"
import { contactConfig } from "../lib/config"

const industries = [
  { id: "hvac", label: "HVAC" },
  { id: "plumbing", label: "Plumbing" },
  { id: "roofing", label: "Roofing" },
  { id: "solar", label: "Solar" },
  { id: "electrical", label: "Electrical" },
  { id: "landscaping", label: "Landscaping" },
  { id: "pest", label: "Pest Control" },
]

const packages = [
  {
    name: "Bronze",
    subtitle: "Starter",
    price: "$799",
    delivery: "5-7 Days",
    color: "bronze",
    features: [
      "Basic AI Chatbot (FAQ)",
      "1 Tool Integration",
      "1 Revision",
      "Email Support",
      "Basic Analytics",
    ],
    missing: ["CRM Integration", "Lead Follow-up", "Review Automation"],
  },
  {
    name: "Gold",
    subtitle: "Professional",
    price: "$1,499",
    delivery: "10-14 Days",
    color: "gold",
    popular: true,
    features: [
      "AI Chatbot + Booking",
      "CRM Integration",
      "Lead Capture + Follow-up",
      "Review Automation",
      "3 Tool Integrations",
      "3 Revisions + 15 Days Support",
    ],
    missing: [],
  },
  {
    name: "Diamond",
    subtitle: "Enterprise",
    price: "$2,999",
    delivery: "20-30 Days",
    color: "diamond",
    features: [
      "Complete AI System",
      "AI Agents + RAG + Voice",
      "AI Quote/Estimate Bot",
      "Unlimited Integrations",
      "24/7 Priority Support",
      "1 Month Maintenance",
    ],
    missing: [],
  },
]

const industryData = {
  hvac: {
    desc: "Automated scheduling, seasonal maintenance reminders, and emergency dispatch workflows for HVAC companies.",
    table: [
      { name: "Emergency/Booking Chatbot", b: true, g: true, d: true },
      { name: "Seasonal Maintenance Reminders", b: false, g: true, d: true },
      { name: "Technician Dispatch Workflow", b: false, g: true, d: true },
      { name: "Parts/Inventory Alerts", b: false, g: false, d: true },
      { name: "Service Follow-up + Reviews", b: false, g: true, d: true },
    ],
  },
  plumbing: {
    desc: "24/7 emergency intake bot, quote calculators for leaks & fixes, and nearest plumber dispatch automation.",
    table: [
      { name: "24/7 Emergency Intake Bot", b: true, g: true, d: true },
      { name: "Quote Calculator (Leak/Fix)", b: false, g: true, d: true },
      { name: "Dispatch Nearest Plumber", b: false, g: true, d: true },
      { name: "Warranty Tracking", b: false, g: false, d: true },
      { name: "Recurring Maintenance Schedule", b: false, g: true, d: true },
    ],
  },
  roofing: {
    desc: "Free inspection booking, estimate follow-up sequences, and insurance claim workflow automation for roofers.",
    table: [
      { name: "Free Inspection Booking", b: true, g: true, d: true },
      { name: "Estimate Follow-up Sequence", b: false, g: true, d: true },
      { name: "Insurance Claim Workflow", b: false, g: false, d: true },
      { name: "Weather Damage Alert Bot", b: false, g: false, d: true },
      { name: "Review Collection Post-Job", b: false, g: true, d: true },
    ],
  },
  solar: {
    desc: "Savings calculator chatbot, site survey scheduling, and permit status tracking for solar installers.",
    table: [
      { name: "Savings Calculator Chatbot", b: true, g: true, d: true },
      { name: "Site Survey Scheduling", b: false, g: true, d: true },
      { name: "Permit Status Tracking", b: false, g: false, d: true },
      { name: "Installation Milestone Alerts", b: false, g: true, d: true },
      { name: "Referral Request Automation", b: false, g: true, d: true },
    ],
  },
  electrical: {
    desc: "Service request triage bot, code compliance checklists, and invoice automation for electrical contractors.",
    table: [
      { name: "Service Request Triage Bot", b: true, g: true, d: true },
      { name: "Code Compliance Checklist", b: false, g: false, d: true },
      { name: "Invoice + Payment Reminders", b: false, g: true, d: true },
      { name: "Safety Inspection Scheduling", b: false, g: true, d: true },
      { name: "Subcontractor Coordination", b: false, g: false, d: true },
    ],
  },
  landscaping: {
    desc: "Seasonal service reminders, quote by lawn size, and weather-based rescheduling for landscaping companies.",
    table: [
      { name: "Seasonal Service Reminders", b: true, g: true, d: true },
      { name: "Quote by Lawn Size/Type", b: false, g: true, d: true },
      { name: "Recurring Visit Scheduling", b: false, g: true, d: true },
      { name: "Weather-Based Rescheduling", b: false, g: false, d: true },
      { name: "Before/After Photo Collection", b: false, g: false, d: true },
    ],
  },
  pest: {
    desc: "Infestation triage chatbot, treatment schedule reminders, and seasonal prevention alerts for pest control.",
    table: [
      { name: "Infestation Triage Chatbot", b: true, g: true, d: true },
      { name: "Treatment Schedule Reminders", b: false, g: true, d: true },
      { name: "Follow-up: Pests Gone?", b: false, g: true, d: true },
      { name: "Seasonal Prevention Alerts", b: false, g: false, d: true },
      { name: "Technician Route Optimization", b: false, g: false, d: true },
    ],
  },
}

export default function Packages() {
  const [activeIndustry, setActiveIndustry] = useState("hvac")

  const currentData = industryData[activeIndustry as keyof typeof industryData]

  const getWhatsAppLink = (pkgName: string) => {
    const msg = `Hi JizAI! I'm interested in the ${pkgName} package for my ${activeIndustry} business.`
    return `${contactConfig.whatsapp}?text=${encodeURIComponent(msg)}`
  }

  return (
    <section id="packages" className="py-20 md:py-32 bg-card/20">
      <div className="container-custom section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-accent-light text-sm font-medium tracking-wider uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Home Services Automation
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Select your industry to see tailored automation solutions and pricing.
          </p>
        </motion.div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveIndustry(ind.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeIndustry === ind.id
                  ? "bg-accent/15 border-accent/50 text-accent-light"
                  : "bg-white/5 border-white/10 text-muted hover:bg-white/10 hover:text-white"
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>

        {/* Industry Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12 p-4 rounded-xl bg-white/5 border border-white/5 max-w-3xl mx-auto"
          >
            <p className="text-muted text-sm">{currentData.desc}</p>
          </motion.div>
        </AnimatePresence>

        {/* Pricing Cards - Equal Height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-300 cursor-pointer group ${
                pkg.color === "gold"
                  ? "bg-yellow-500/5 border-2 border-yellow-500/30 md:scale-105 z-10 hover:border-yellow-400/60 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]"
                  : pkg.color === "bronze"
                  ? "bg-white/5 border border-white/10 hover:border-orange-400/40 hover:shadow-[0_0_40px_rgba(251,146,60,0.1)] hover:bg-white/[0.07]"
                  : "bg-accent/5 border border-accent/20 hover:border-accent/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:bg-accent/[0.08]"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-yellow-500 text-black text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    pkg.color === "gold"
                      ? "bg-yellow-500/20 text-yellow-400 group-hover:bg-yellow-500/30"
                      : pkg.color === "bronze"
                      ? "bg-orange-700/20 text-orange-400 group-hover:bg-orange-500/30"
                      : "bg-accent/20 text-accent-light group-hover:bg-accent/30"
                  }`}
                >
                  {pkg.color === "bronze" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                  )}
                  {pkg.color === "gold" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.699-3.181a1 1 0 011.827 1.035L17.475 7H20a1 1 0 110 2h-2.525l.5 2.527a1 1 0 01-1.827 1.035L14.449 11.5 13 15.535V17a1 1 0 11-2 0v-1.465l-1.449-4.035-1.699 3.062a1 1 0 01-1.827-1.035L6.525 9H4a1 1 0 110-2h2.525l-.5-2.527a1 1 0 011.827-1.035L9.551 6.5 11 2.465V3a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  )}
                  {pkg.color === "diamond" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">{pkg.name}</h3>
                  <p className="text-xs text-muted">{pkg.subtitle}</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-white group-hover:text-white transition-colors">{pkg.price}</span>
                <span className="text-muted text-sm"> one-time</span>
              </div>

              {/* Delivery */}
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 w-fit transition-colors duration-300 ${
                  pkg.color === "gold"
                    ? "bg-yellow-500/10 text-yellow-400 group-hover:bg-yellow-500/20"
                    : pkg.color === "bronze"
                    ? "bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20"
                    : "bg-accent/10 text-accent-light group-hover:bg-accent/20"
                }`}
              >
                <Clock className="w-3 h-3" />
                Delivery: {pkg.delivery}
              </div>

              {/* Features - flex-grow to push button down */}
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110 ${
                        pkg.color === "gold" ? "text-yellow-400" : "text-accent-light"
                      }`}
                    />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
                {pkg.missing.map((feature, i) => (
                  <li key={`m-${i}`} className="flex items-start gap-3 text-sm">
                    <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted/30" />
                    <span className="text-muted/40">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA - always at bottom */}
              <a
                href={getWhatsAppLink(pkg.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 mt-auto ${
                  pkg.color === "gold"
                    ? "bg-yellow-500 text-black hover:bg-yellow-400 group-hover:shadow-lg group-hover:shadow-yellow-500/25"
                    : pkg.color === "bronze"
                    ? "bg-white/5 text-white border border-white/10 hover:bg-white/10 group-hover:border-orange-400/30"
                    : "bg-accent text-white hover:bg-accent-light shadow-lg shadow-accent/25 group-hover:shadow-accent/40"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Get Started
                </span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* ============================================
    INDUSTRY FEATURE COMPARISON TABLE
============================================ */}

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="max-w-5xl mx-auto mt-16"
>
  {/* Title */}

  <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-6">
    Industry-Specific Automations
  </h3>

  {/* Table */}

  <div
    className="
      rounded-2xl
      bg-[#111116]/80
      border
      border-white/[0.08]
      overflow-hidden
      shadow-xl
    "
  >

    <div className="overflow-x-auto">

      <table className="w-full border-collapse">

        {/* ============================================
            TABLE HEADER
        ============================================ */}

        <thead>

          <tr
            className="
              bg-white/[0.02]
              border-b
              border-white/[0.08]
            "
          >

            {/* Automation */}

            <th
              className="
                w-[40%]
                text-left
                px-5
                py-4
                text-muted
                font-medium
                text-xs
                uppercase
                tracking-wider
              "
            >
              Automation
            </th>


            {/* Bronze */}

            <th
              className="
                w-[20%]
                text-center
                px-3
                py-4
                text-orange-400
                font-semibold
                text-xs
              "
            >
              Bronze
            </th>


            {/* Gold */}

            <th
              className="
                w-[20%]
                text-center
                px-3
                py-4
                text-yellow-400
                font-semibold
                text-xs
              "
            >
              Gold
            </th>


            {/* Diamond */}

            <th
              className="
                w-[20%]
                text-center
                px-3
                py-4
                text-accent-light
                font-semibold
                text-xs
              "
            >
              Diamond
            </th>

          </tr>

        </thead>


        {/* ============================================
            TABLE BODY
        ============================================ */}

        <tbody>

          <AnimatePresence mode="wait">

            <motion.tr
              key={activeIndustry}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
            >

              {/* IMPORTANT:
                  We don't use colSpan + nested grid anymore.
                  This keeps every column perfectly aligned.
              */}

              <td colSpan={4} className="p-0">

                {currentData.table.map((row, i) => (

                  <div
                    key={row.name}
                    className={`
                      grid
                      grid-cols-[40%_20%_20%_20%]
                      items-center
                      min-h-[64px]
                      transition-colors
                      duration-200
                      hover:bg-white/[0.03]

                      ${
                        i < currentData.table.length - 1
                          ? "border-b border-white/[0.06]"
                          : ""
                      }
                    `}
                  >

                    {/* ====================================
                        AUTOMATION NAME
                    ==================================== */}

                    <div
                      className="
                        px-5
                        py-4
                        text-white/85
                        text-sm
                        leading-relaxed
                      "
                    >
                      {row.name}
                    </div>


                    {/* ====================================
                        BRONZE
                    ==================================== */}

                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        px-3
                        py-4
                      "
                    >

                      {row.b ? (

                        <Check
                          className="
                            w-5
                            h-5
                            text-accent-light
                          "
                        />

                      ) : (

                        <X
                          className="
                            w-5
                            h-5
                            text-muted/25
                          "
                        />

                      )}

                    </div>


                    {/* ====================================
                        GOLD
                    ==================================== */}

                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        px-3
                        py-4
                      "
                    >

                      {row.g ? (

                        <Check
                          className="
                            w-5
                            h-5
                            text-yellow-400
                          "
                        />

                      ) : (

                        <X
                          className="
                            w-5
                            h-5
                            text-muted/25
                          "
                        />

                      )}

                    </div>


                    {/* ====================================
                        DIAMOND
                    ==================================== */}

                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        px-3
                        py-4
                      "
                    >

                      {row.d ? (

                        <Check
                          className="
                            w-5
                            h-5
                            text-accent-light
                          "
                        />

                      ) : (

                        <X
                          className="
                            w-5
                            h-5
                            text-muted/25
                          "
                        />

                      )}

                    </div>

                  </div>

                ))}

              </td>

            </motion.tr>

          </AnimatePresence>

        </tbody>

      </table>

    </div>

  </div>

</motion.div>

        {/* Footer Note */}
        <p className="text-center text-muted/60 text-sm mt-10">
          Prices in USD. One-time payment. Custom quotes available for complex requirements.
        </p>
      </div>
    </section>
  )
}