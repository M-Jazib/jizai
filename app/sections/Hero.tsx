"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  const companies = [
    "Vodafone",
    "Huel",
    "Trendyol",
    "Stepstone",
    "Fullscript",
    "ITNT Media Group",
  ]

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Main dark overlay */}
      <div className="absolute inset-0 bg-[#080812]/75" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080812]/60 via-[#0b0a18]/65 to-[#080812]/95" />

      {/* Purple / Blue ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse-slow" />

        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,5,12,0.55)_100%)]" />

      {/* ================= HERO CONTENT ================= */}
      <div className="container-custom section-padding relative z-10 pt-24 pb-16">

        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-xs font-medium tracking-wider uppercase mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI Automation Agency
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="gradient-text">
              Automate Smarter
            </span>

            <br />

            <span className="text-white">
              Work Better
            </span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            JizAI turns repetitive work into intelligent automation, helping businesses work smarter, faster, and more efficiently.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-light transition-all duration-200 shadow-lg shadow-accent/25"
            >
              Explore Our Work

              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-md"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        </div>

{/* =====================================================
    PREMIUM TRUSTED COMPANIES BANNER
====================================================== */}

<motion.section
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.45 }}
  className="relative mt-20 md:mt-28 -mx-4 sm:-mx-6 lg:-mx-10"
>
  {/* Premium background glow */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[500px] h-[180px] rounded-full bg-violet-600/10 blur-[100px]" />

    <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[500px] h-[180px] rounded-full bg-blue-600/10 blur-[100px]" />

    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[120px] bg-indigo-500/5 blur-[80px]" />
  </div>

  {/* Main Banner */}
  <div
    className="
      relative
      w-full
      overflow-hidden
      border-y border-white/[0.98]
      bg-gradient-to-r
      from-[#080812]
      via-[#0d0b1d]
      to-[#080812]
      backdrop-blur-xl
    "
  >

    {/* Top glow line */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

    {/* =================================================
        HEADING
    ================================================= */}

    <div className="relative z-10 flex flex-col items-center text-center pt-9 md:pt-11 pb-7">

      <div className="flex items-center gap-3">
        <span className="w-8 sm:w-14 h-px bg-gradient-to-r from-transparent to-violet-500/50" />

        <span
          className="
            text-[10px]
            sm:text-xs
            md:text-sm
            font-semibold
            uppercase
            tracking-[0.28em]
            bg-gradient-to-r
            from-violet-300
            via-white
            to-blue-300
            bg-clip-text
            text-transparent
          "
        >
          Trusted by businesses worldwide
        </span>

        <span className="w-8 sm:w-14 h-px bg-gradient-to-l from-transparent to-blue-500/50" />
      </div>

      <p className="mt-3 text-[11px] sm:text-sm text-white/35">
        Built for modern businesses across multiple industries
      </p>
    </div>

    {/* =================================================
        SINGLE COMPANY ROW
    ================================================= */}

    <div className="relative overflow-hidden py-8 md:py-10">

      {/* Left fade */}
      <div
        className="
          absolute
          left-0
          top-0
          bottom-0
          w-24
          sm:w-40
          md:w-56
          bg-gradient-to-r
          from-[#080812]
          via-[#080812]/90
          to-transparent
          z-20
          pointer-events-none
        "
      />

      {/* Right fade */}
      <div
        className="
          absolute
          right-0
          top-0
          bottom-0
          w-24
          sm:w-40
          md:w-56
          bg-gradient-to-l
          from-[#080812]
          via-[#080812]/90
          to-transparent
          z-20
          pointer-events-none
        "
      />

      {/* Moving row */}
      <motion.div
        className="flex items-center w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[
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

          /* Duplicate set for seamless marquee */
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
        ].map((company, index) => (
          <div
            key={`${company}-${index}`}
            className="flex items-center"
          >

            {/* Company name */}
            <div className="px-8 sm:px-10 md:px-14 lg:px-16">
              <span
                className="
                  block
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  lg:text-3xl
                  font-semibold
                  tracking-tight
                  text-white/100
                  hover:text-white/85
                  transition-all
                  duration-500
                  whitespace-nowrap
                  select-none
                  cursor-default
                "
              >
                {company}
              </span>
            </div>

            {/* Minimal separator */}
            <div
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-violet-400/40
                shadow-[0_0_12px_rgba(139,92,246,0.7)]
                flex-shrink-0
              "
            />

          </div>
        ))}
      </motion.div>
    </div>

    {/* =================================================
        BOTTOM FEATURE STRIP
    ================================================= */}

    <div className="relative border-t border-white/[0.06]">

      <div className="flex items-center justify-center gap-3 sm:gap-6 px-5 py-4">

  
          

           
      </div>
    </div>

  </div>
</motion.section>
        
      </div>

    </section>
  )
}