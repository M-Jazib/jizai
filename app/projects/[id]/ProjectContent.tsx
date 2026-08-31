"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image" 
import YouTubeModal from "../../components/YouTubeModal"
import { ArrowLeft, Check, Play, ArrowRight } from "lucide-react"
import { Project } from "../../lib/projects"

export default function ProjectContent({ project }: { project: Project }) {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="pt-32 pb-20">
      <div className="container-custom section-padding max-w-4xl">
        {/* Back Link */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-muted border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            {project.longDescription}
          </p>
        </div>

          {/* Project Image */}
<div className="aspect-video rounded-2xl bg-card border border-white/5 overflow-hidden mb-12 relative">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover"
    sizes="(max-width: 1024px) 100vw, 800px"
  />
</div>
        

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-xl bg-card border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-3">Problem</h3>
            <p className="text-muted text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-3">Solution</h3>
            <p className="text-muted text-sm leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Workflow</h3>
          <div className="space-y-4">
            {project.workflow.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-accent-light">{i + 1}</span>
                </div>
                <p className="text-muted text-sm pt-1.5">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Watch Demo Button */}
        <div className="mb-12 text-center">
          <button
            onClick={() => setShowVideo(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-light transition-all shadow-lg shadow-accent/25"
          >
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>

        {/* YouTube Modal */}
        <YouTubeModal
          isOpen={showVideo}
          onClose={() => setShowVideo(false)}
          youtubeUrl={project.youtubeUrl}
          title={project.title}
        />

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl bg-card border border-white/5">
          <h3 className="text-xl font-semibold text-white mb-4">
            Want something similar?
          </h3>
          <p className="text-muted mb-6">
            Let&apos;s discuss how we can build a custom solution for your business.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-light transition-all"
          >
            Let&apos;s Talk
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}