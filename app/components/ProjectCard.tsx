"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Play } from "lucide-react"
import { Project } from "../lib/projects"
import YouTubeModal from "./YouTubeModal"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [showVideo, setShowVideo] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative rounded-2xl bg-card border border-white/5 overflow-hidden hover:border-accent/20 transition-all duration-300 hover:glow-accent"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-white/5">
          {!imgError ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted/30">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3">
                  <Play className="w-6 h-6 text-muted/40" />
                </div>
                <span className="text-xs">Image not found</span>
                <p className="text-[10px] text-muted/50 mt-1">{project.image}</p>
              </div>
            </div>
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-light transition-colors">
            {project.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-muted border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={`/projects/${project.id}/`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent-light text-sm font-medium hover:bg-accent/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              View Project
            </a>
            <button
              onClick={() => setShowVideo(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
          </div>
        </div>
      </motion.div>

      {/* YouTube Modal */}
      <YouTubeModal
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        youtubeUrl={project.youtubeUrl}
        title={project.title}
      />
    </>
  )
}