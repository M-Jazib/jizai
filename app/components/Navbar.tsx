
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { navLinks, siteConfig } from "../lib/config"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // ==========================================================
  // SMOOTH SCROLL HANDLER
  // ==========================================================

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Only handle internal anchor links
    if (href.startsWith("#")) {
      e.preventDefault()

      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      // Close mobile menu first
      setIsOpen(false)

      if (targetElement) {
        const navbarHeight = 80

        const elementPosition =
          targetElement.getBoundingClientRect().top + window.scrollY

        const offsetPosition = elementPosition - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
  }

  // ==========================================================
  // SCROLL TO TOP
  // ==========================================================

  const handleLogoClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault()

    setIsOpen(false)

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/5 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      {/* ======================================================
          NAVBAR CONTAINER
      ======================================================= */}

      <div className="container-custom section-padding">
        <div className="flex h-16 items-center justify-between md:h-20">

          {/* ==================================================
              LOGO
          ================================================== */}

          <a
            href="/"
            onClick={handleLogoClick}
            className="group flex items-center gap-2"
          >
            <img
              src="/images/LOGO.png"
              alt="JizAI"
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <span className="text-xl font-bold tracking-tight text-white">
              {siteConfig.name}
            </span>
          </a>

          {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="
                  relative
                  text-sm
                  font-medium
                  text-muted
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ==================================================
              DESKTOP CTA
          ================================================== */}

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-accent/30
                bg-accent/10
                px-5
                py-2.5
                text-sm
                font-medium
                text-accent-light
                transition-all
                duration-200
                hover:border-accent/50
                hover:bg-accent/20
              "
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* ==================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              text-white
              transition-all
              duration-200
              hover:border-white/20
              hover:bg-white/[0.08]
              md:hidden
            "
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ======================================================
          MOBILE MENU
      ======================================================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              overflow-hidden
              border-t
              border-white/5
              bg-[#08080f]/95
              backdrop-blur-2xl
              md:hidden
            "
          >
            <div className="container-custom section-padding py-5">

              {/* =================================================
                  MOBILE LINKS
              ================================================== */}

              <div className="flex flex-col">

                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.05,
                    }}
                    className="
                      group
                      flex
                      items-center
                      border-b
                      border-white/[0.06]
                      py-4
                      text-base
                      font-medium
                      text-white/65
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {link.name}
                    </span>
                  </motion.a>
                ))}

                {/* =================================================
                    MOBILE CTA
                ================================================== */}

                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: navLinks.length * 0.05,
                  }}
                  className="
                    mt-5
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-accent/30
                    bg-accent/10
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-accent-light
                    transition-all
                    duration-200
                    hover:border-accent/50
                    hover:bg-accent/20
                  "
                >
                  Let&apos;s Talk
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

