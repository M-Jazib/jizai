
"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Sparkles,
  Play,
  CheckCircle2,
  Zap,
  ArrowUp,
} from "lucide-react"

const companies = [
  "AirPro",
  "BlueLine",
  "ComfortPro",
  "EliteFlow",
  "HomeGuard",
  "ProEdge",
  "GreenPro",
  "SunPeak",
  "PowerCore",
  "RoofRight",
  "PipePro",
  "SparkPro",
  "YardPro",
  "PestShield",
  "EcoHome",
  "FixWise",
  "TradeMax",
  "HomeCraft",
  "ServicePro",
  "NexaHome",
]

export default function Hero() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#06060d]">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Deep cinematic overlay */}
      <div className="absolute inset-0 bg-[#06060d]/80" />

      {/* Gradient depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070711]/70 via-[#080713]/65 to-[#06060d]" />

      {/* Center spotlight */}
      <div className="absolute left-1/2 top-[42%] h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.07] blur-[140px]" />

      {/* Purple ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.23, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[140px]"
      />

      {/* Blue ambient glow */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]"
      />

      {/* =====================================================
          GRID
      ====================================================== */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(3,3,8,0.75)_100%)]" />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-24 pt-28 sm:px-8 lg:px-12">

        <div className="mx-auto w-full max-w-5xl text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>

            <Sparkles className="h-3.5 w-3.5 text-violet-300" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-xs">
              AI Automation Agency
            </span>
          </motion.div>

          {/* =================================================
              HEADLINE
          ================================================= */}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mx-auto max-w-5xl text-[3.2rem] font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[5.7rem]"
          >
            Automate Smarter.
            <br />

            <span className="bg-gradient-to-r from-violet-300 via-white to-blue-300 bg-clip-text text-transparent">
              Grow Faster.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg md:text-xl"
          >
            JizAI designs AI agents, automated workflows, and intelligent
            business systems that eliminate repetitive work, reduce
            operational costs, and help your business scale.
          </motion.p>

          {/* =================================================
              CTA
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >

            {/* Primary CTA */}
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(139,92,246,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(139,92,246,0.4)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/[0.06] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">
                Start Automating
              </span>

              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20">
                <Play className="ml-0.5 h-2.5 w-2.5 fill-white" />
              </span>

              See How It Works
            </a>
          </motion.div>

          {/* =================================================
              MICRO TRUST
          ================================================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-white/35 sm:text-xs"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-violet-400/80" />
              AI-Powered Workflows
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-violet-400/80" />
              Custom AI Agents
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-violet-400/80" />
              Business Automation
            </span>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          TRUSTED COMPANIES
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="absolute bottom-0 left-0 right-0 z-20"
      >

        {/* Top separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent" />

        <div className="relative overflow-hidden bg-[#07070e]/75 backdrop-blur-2xl">

          {/* Heading */}
          <div className="relative z-10 flex items-center justify-center gap-3 px-5 py-5">
            <Zap className="h-3.5 w-3.5 text-violet-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40 sm:text-xs">
              Trusted by modern businesses
            </span>
          </div>

          {/* Marquee */}
          <div className="relative overflow-hidden pb-7">

            {/* Left fade */}
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#07070e] to-transparent sm:w-40" />

            {/* Right fade */}
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#07070e] to-transparent sm:w-40" />

            <motion.div
              className="flex w-max items-center"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 38,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="flex items-center"
                >
                  <span className="px-7 text-lg font-semibold tracking-tight text-white/[0.42] transition-colors duration-300 hover:text-white/75 sm:px-10 sm:text-xl md:px-14 md:text-2xl">
                    {company}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-violet-400/40 shadow-[0_0_10px_rgba(139,92,246,0.7)]" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#06060d] to-transparent" />

      {/* =====================================================
          BACK TO TOP BUTTON
      ====================================================== */}

      <motion.button
        initial={{ opacity: 0, scale: 0.8, y: 15 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0.8,
          y: showBackToTop ? 0 : 15,
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          fixed
          bottom-6
          right-6
          z-[100]
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-[#0b0b14]/80
          text-white/70
          shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-violet-400/30
          hover:bg-violet-500/15
          hover:text-white
          hover:shadow-[0_10px_35px_rgba(139,92,246,0.25)]
          sm:bottom-8
          sm:right-8
        "
        style={{
          pointerEvents: showBackToTop ? "auto" : "none",
        }}
      >
        <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </motion.button>

    </section>
  )
}

