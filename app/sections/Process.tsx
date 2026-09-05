
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
    description:
      "We understand your business process and identify opportunities for automation.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "We design an efficient AI-powered workflow around your specific requirements.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Build",
    description:
      "We build, integrate, test, and refine the automation.",
    icon: Code,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deploy the solution and help ensure it works smoothly in your workflow.",
    icon: Rocket,
  },
]

export default function Process() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container-custom section-padding">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-20"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-accent-light sm:text-sm">
            Process
          </span>

          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:mb-6 md:text-5xl">
            How We Work
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-relaxed">
            From idea to intelligent automation.
          </p>
        </motion.div>

        {/* =====================================================
            PROCESS
        ====================================================== */}

        <div className="relative mx-auto max-w-5xl">

          {/* Desktop connection line */}
          <div
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-12
              hidden
              h-px
              bg-gradient-to-r
              from-transparent
              via-accent/30
              to-transparent
              md:block
            "
          />

          {/* Mobile vertical line */}
          <div
            className="
              absolute
              bottom-10
              left-[31px]
              top-10
              w-px
              bg-gradient-to-b
              from-accent/30
              via-accent/20
              to-transparent
              md:hidden
            "
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">

            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  className="
                    group
                    relative
                    flex
                    items-start
                    gap-5
                    text-left
                    md:block
                    md:text-center
                  "
                >

                  {/* =================================================
                      ICON
                  ================================================== */}

                  <div className="relative z-10 flex-shrink-0">

                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/[0.08]
                        bg-card
                        shadow-[0_10px_35px_rgba(0,0,0,0.15)]
                        transition-all
                        duration-300
                        group-hover:border-accent/30
                        group-hover:bg-white/[0.04]
                        group-hover:shadow-[0_10px_40px_rgba(139,92,246,0.12)]
                        sm:h-20
                        sm:w-20
                        md:mx-auto
                        md:mb-6
                        md:h-24
                        md:w-24
                      "
                    >
                      <Icon
                        className="
                          h-6
                          w-6
                          text-accent-light
                          transition-transform
                          duration-300
                          group-hover:scale-110
                          sm:h-7
                          sm:w-7
                          md:h-8
                          md:w-8
                        "
                      />
                    </div>

                    {/* Number */}
                    <div
                      className="
                        absolute
                        -right-2
                        -top-2
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#06060d]
                        bg-accent
                        text-[10px]
                        font-bold
                        text-white
                        shadow-lg
                        sm:h-8
                        sm:w-8
                        sm:text-xs
                      "
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="min-w-0 flex-1 pt-1 md:pt-0">

                    <h3
                      className="
                        mb-2
                        text-lg
                        font-semibold
                        tracking-tight
                        text-white
                        sm:text-xl
                        md:mb-3
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        max-w-md
                        text-sm
                        leading-6
                        text-muted
                        sm:leading-7
                        md:mx-auto
                      "
                    >
                      {step.description}
                    </p>
                  </div>

                </motion.div>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}

