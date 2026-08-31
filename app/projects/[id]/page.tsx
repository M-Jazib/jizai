import { notFound } from "next/navigation"
import { getProjectById, projects } from "../../lib/projects"
import { siteConfig } from "../../lib/config"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ProjectContent from "./ProjectContent"

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id)
  if (!project) return { title: "Project Not Found" }
  return {
    title: `${project.title} — ${siteConfig.name}`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id)
  
  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ProjectContent project={project} />
      <Footer />
    </main>
  )
}