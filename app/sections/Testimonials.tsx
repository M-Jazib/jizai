"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

// ============================================
// TESTIMONIALS
// ============================================

const testimonials = [
  {
    quote:
      "JizAI automated our lead qualification and follow-up process. What used to take hours every week now happens automatically, allowing our team to focus on closing more deals.",
    author: "Daniel Carter",
    company: "AirPro",
    industry: "Home Services",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    quote:
      "The AI automation workflow completely changed how we handle new leads. Every inquiry is captured, qualified, scored, and routed automatically. Our sales process is now much faster and more organized.",
    author: "Michael Brooks",
    company: "ComfortPro",
    industry: "HVAC Services",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=33",
  },
  {
    quote:
      "JizAI built a smarter way for us to manage our customer pipeline. The CRM automation and AI follow-ups save our team a huge amount of manual work while keeping prospects engaged.",
    author: "James Wilson",
    company: "RoofRight",
    industry: "Roofing Services",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    quote:
      "The AI lead generation system helped us organize our outreach and prioritize the prospects that actually mattered. It feels like having an extra member of our sales team working around the clock.",
    author: "Ryan Mitchell",
    company: "ProEdge",
    industry: "Professional Services",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=68",
  },
  {
    quote:
      "From lead capture to automated follow-ups, the entire workflow is much more efficient now. JizAI helped us reduce repetitive work and create a smoother customer journey.",
    author: "Alex Morgan",
    company: "HomeGuard",
    industry: "Home Services",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=52",
  },
  {
    quote:
      "The combination of AI agents, CRM automation, and smart workflows gave our business a much more scalable sales process. Everything is connected and our team has far less manual work to handle.",
    author: "Chris Anderson",
    company: "EliteFlow",
    industry: "Service Business",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=59",
  },
]

// ============================================
// DUPLICATE TESTIMONIALS
// This creates the infinite loop effect.
// ============================================

const infiniteTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
]

export default function Testimonials() {
  const [current, setCurrent] = useState(testimonials.length)
  const [isResetting, setIsResetting] = useState(false)

  const [slideDistance, setSlideDistance] = useState(0)

  const cardRef = useRef<HTMLDivElement>(null)

  // ============================================
  // CALCULATE CARD WIDTH
  // ============================================

  useEffect(() => {
    const updateSize = () => {
      if (!cardRef.current) return

      const cardWidth = cardRef.current.offsetWidth

      // 20px gap between cards
      setSlideDistance(cardWidth + 20)
    }

    updateSize()

    window.addEventListener("resize", updateSize)

    return () => {
      window.removeEventListener("resize", updateSize)
    }
  }, [])

  // ============================================
  // NEXT SLIDE
  // ============================================

  const nextSlide = () => {
    if (isResetting) return

    setCurrent((prev) => prev + 1)
  }

  // ============================================
  // PREVIOUS SLIDE
  // ============================================

  const previousSlide = () => {
    if (isResetting) return

    setCurrent((prev) => prev - 1)
  }

  // ============================================
  // AUTO SLIDE
  // ============================================

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isResetting])

  // ============================================
  // INFINITE LOOP RESET
  // ============================================

  const handleAnimationComplete = () => {
    // If we reach the end of the first duplicated set,
    // silently jump back to the middle copy.

    if (current >= testimonials.length * 2) {
      setIsResetting(true)

      setCurrent(testimonials.length)

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsResetting(false)
        })
      })
    }

    // If we move too far backwards,
    // silently jump back to the middle copy.

    if (current <= 0) {
      setIsResetting(true)

      setCurrent(testimonials.length)

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsResetting(false)
        })
      })
    }
  }

  // ============================================
  // DOT CLICK
  // ============================================

  const goToSlide = (index: number) => {
    if (isResetting) return

    setCurrent(testimonials.length + index)
  }

  // ============================================
  // CURRENT DOT
  // ============================================

  const activeDot = current % testimonials.length

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">

      {/* ============================================
          BACKGROUND GLOW
      ============================================ */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div
          className="
            absolute
            left-1/4
            top-1/2
            -translate-y-1/2
            w-[400px]
            h-[250px]
            bg-violet-600/10
            blur-[120px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            right-1/4
            top-1/2
            -translate-y-1/2
            w-[400px]
            h-[250px]
            bg-blue-500/10
            blur-[120px]
            rounded-full
          "
        />

      </div>


      <div className="container-custom section-padding relative z-10">


        {/* ============================================
            HEADER
        ============================================ */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >

          <span
            className="
              text-accent-light
              text-sm
              font-medium
              tracking-wider
              uppercase
              mb-3
              block
            "
          >
            Testimonials
          </span>


          <h2
            className="
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-white
              mb-4
            "
          >
            What Our Clients Say
          </h2>


          <p
            className="
              text-muted
              text-base
              md:text-lg
              max-w-2xl
              mx-auto
            "
          >
            Real feedback from businesses using intelligent automation to
            streamline their operations.
          </p>

        </motion.div>


        {/* ============================================
            CAROUSEL CONTAINER
        ============================================ */}

        <div
          className="
            relative
            w-full
            overflow-hidden
            px-1
          "
        >

          {/* ============================================
              CARDS TRACK
          ============================================ */}

          <motion.div
            className="flex gap-5"
            animate={{
              x: -(current * slideDistance),
            }}
            transition={{
              duration: isResetting ? 0 : 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
            onAnimationComplete={handleAnimationComplete}
          >

            {infiniteTestimonials.map((testimonial, index) => (

              <div
                key={index}
                ref={index === 0 ? cardRef : undefined}
                className="
                  shrink-0

                  w-[85%]

                  sm:w-[48%]

                  lg:w-[23%]
                "
              >

                {/* ============================================
                    TESTIMONIAL CARD
                ============================================ */}

                <div
                  className="
                    relative
                    h-[260px]
                    sm:h-[270px]

                    rounded-2xl

                    border
                    border-white/[0.08]

                    bg-gradient-to-br
                    from-white/[0.06]
                    via-[#0d0b1d]/90
                    to-[#080812]/95

                    backdrop-blur-xl

                    shadow-xl

                    px-5
                    py-5

                    sm:px-6
                    sm:py-6

                    overflow-hidden
                  "
                >

                  {/* Top Gradient Line */}

                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-violet-500/60
                      to-transparent
                    "
                  />


                  {/* ============================================
                      STARS
                  ============================================ */}

                  <div className="flex gap-1 mb-4">

                    {[...Array(testimonial.rating)].map((_, i) => (

                      <Star
                        key={i}
                        className="
                          w-4
                          h-4
                          fill-yellow-400
                          text-yellow-400
                        "
                      />

                    ))}

                  </div>


                  {/* ============================================
                      QUOTE
                  ============================================ */}

                  <p
                    className="
                      text-white/75
                      text-sm
                      sm:text-[15px]
                      leading-relaxed
                      italic
                      line-clamp-5
                    "
                  >
                    &quot;{testimonial.quote}&quot;
                  </p>


                  {/* ============================================
                      AUTHOR
                  ============================================ */}

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      right-5

                      sm:left-6
                      sm:right-6

                      flex
                      items-center
                      gap-3
                    "
                  >

                    {/* Profile Image */}

                    <div className="relative shrink-0">

                      <div
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-violet-500/30
                          blur-md
                        "
                      />

                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="
                          relative
                          w-11
                          h-11
                          rounded-full
                          object-cover
                          border-2
                          border-white/10
                        "
                      />

                    </div>


                    {/* Author Info */}

                    <div className="min-w-0">

                      <p
                        className="
                          text-white
                          font-semibold
                          text-sm
                          truncate
                        "
                      >
                        {testimonial.author}
                      </p>

                      <p
                        className="
                          text-muted
                          text-xs
                        "
                      >
                        {testimonial.company}
                      </p>

                      <p
                        className="
                          text-accent-light/60
                          text-[10px]
                          mt-0.5
                        "
                      >
                        {testimonial.industry}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </motion.div>


          {/* ============================================
              LEFT ARROW
          ============================================ */}

          <button
            onClick={previousSlide}
            aria-label="Previous testimonial"
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2

              w-9
              h-9

              rounded-full

              bg-black/50
              backdrop-blur-md

              border
              border-white/10

              text-white/60

              flex
              items-center
              justify-center

              hover:bg-white/10
              hover:text-white

              transition-all

              z-20
            "
          >
            <ChevronLeft className="w-4 h-4" />
          </button>


          {/* ============================================
              RIGHT ARROW
          ============================================ */}

          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2

              w-9
              h-9

              rounded-full

              bg-black/50
              backdrop-blur-md

              border
              border-white/10

              text-white/60

              flex
              items-center
              justify-center

              hover:bg-white/10
              hover:text-white

              transition-all

              z-20
            "
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>


        {/* ============================================
            SLIDER DOTS
        ============================================ */}

        <div className="flex justify-center items-center gap-2 mt-6">

          {testimonials.map((_, index) => (

            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300

                ${
                  activeDot === index
                    ? "w-7 bg-accent"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }
              `}
            />

          ))}

        </div>


        {/* ============================================
            AUTO ROTATING INDICATOR
        ============================================ */}

        <div className="flex items-center justify-center gap-2 mt-3">

          

           


          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-white/25
            "
          >
          </span>

        </div>


      </div>

    </section>
  )
}