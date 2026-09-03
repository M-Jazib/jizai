"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

// ============================================
// ADD REAL REVIEWS HERE WHEN YOU GET THEM
// Replace the placeholders below with actual client feedback
// ============================================

const testimonials = [
  {
    quote: "Replace this with your first real client review. What did they say about your service?",
    author: "Client Name",
    company: "Company Name",
    industry: "HVAC / Plumbing / etc.",
    rating: 5,
  },
  {
    quote: "Replace this with your second real client review. How did automation help their business?",
    author: "Client Name",
    company: "Company Name",
    industry: "Roofing / Solar / etc.",
    rating: 5,
  },
  {
    quote: "Replace this with your third real client review. What results did they see?",
    author: "Client Name",
    company: "Company Name",
    industry: "Electrical / Landscaping / etc.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-custom section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent-light text-sm font-medium tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Real feedback from home service businesses we've helped automate.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-6 md:p-8 rounded-2xl bg-card border border-white/5 hover:border-accent/20 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-accent-light" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent-light font-bold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{t.author}</p>
                  <p className="text-muted text-xs">{t.company}</p>
                  <p className="text-accent-light/60 text-xs">{t.industry}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted/40 text-xs mt-10">
          Reviews will be updated as we complete more projects.
        </p>
      </div>
    </section>
  )
}