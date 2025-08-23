"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    // Only add scroll listener after component is mounted
    window.addEventListener("scroll", handleScroll)
    
    // Check initial scroll position
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isActiveLink = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  // Prevent hydration mismatch by using consistent initial state
  const navClassName = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isMounted && isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg border-b border-border" : "bg-transparent"
  }`

  return (
    <>
      <nav className={navClassName}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="font-heading font-black text-2xl text-primary hover:text-accent transition-all duration-300 transform hover:scale-105"
            >
              GORILLA STUNTER
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`font-heading font-semibold transition-all duration-300 relative group ${
                  isActiveLink("/") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Home
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    isActiveLink("/") ? "w-full" : ""
                  }`}
                ></span>
              </Link>
              <Link
                href="/about"
                className={`font-heading font-semibold transition-all duration-300 relative group ${
                  isActiveLink("/about") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                About
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    isActiveLink("/about") ? "w-full" : ""
                  }`}
                ></span>
              </Link>
              <Link
                href="/contact"
                className={`font-heading font-semibold transition-all duration-300 relative group ${
                  isActiveLink("/contact") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Contact
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    isActiveLink("/contact") ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            </div>

            <Button className="hidden md:inline-flex bg-primary hover:bg-accent text-primary-foreground font-heading font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Join Community
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-foreground hover:text-primary hover:bg-muted transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                ></span>
                <span
                  className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 top-3 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Mobile menu panel */}
        <div
          className={`absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg transform transition-all duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className={`block font-heading font-semibold text-lg py-3 px-4 rounded-lg transition-all duration-300 ${
                isActiveLink("/") ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-muted"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block font-heading font-semibold text-lg py-3 px-4 rounded-lg transition-all duration-300 ${
                isActiveLink("/about")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-muted"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`block font-heading font-semibold text-lg py-3 px-4 rounded-lg transition-all duration-300 ${
                isActiveLink("/contact")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-muted"
              }`}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-border">
              <Button className="w-full bg-primary hover:bg-accent text-primary-foreground font-heading font-semibold transition-all duration-300">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
