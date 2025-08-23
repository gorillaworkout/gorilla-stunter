"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"
import { useState, useEffect } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  className?: string
  animation?: "slideInUp" | "slideInDown" | "slideInLeft" | "slideInRight" | "scaleIn" | "rotateIn"
}

export default function AnimatedSection({ 
  children, 
  direction = "up", 
  delay = 0, 
  className = "", 
  animation 
}: AnimatedSectionProps) {
  const [isMounted, setIsMounted] = useState(false)
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const getTransformClass = () => {
    // Return neutral state during SSR to prevent hydration mismatch
    if (!isMounted) {
      return "translate-x-0 translate-y-0 opacity-100"
    }

    if (!isVisible) {
      // Handle animation prop for compatibility with existing usage
      if (animation) {
        switch (animation) {
          case "slideInUp":
            return "translate-y-[50px] opacity-0"
          case "slideInDown":
            return "translate-y-[-50px] opacity-0"
          case "slideInLeft":
            return "translate-x-[-100px] opacity-0"
          case "slideInRight":
            return "translate-x-[100px] opacity-0"
          case "scaleIn":
            return "scale-95 opacity-0"
          case "rotateIn":
            return "rotate-3 scale-95 opacity-0"
          default:
            return "translate-y-[50px] opacity-0"
        }
      }

      // Handle direction prop
      switch (direction) {
        case "left":
          return "translate-x-[-100px] opacity-0"
        case "right":
          return "translate-x-[100px] opacity-0"
        case "up":
          return "translate-y-[50px] opacity-0"
        case "down":
          return "translate-y-[-50px] opacity-0"
        default:
          return "translate-y-[50px] opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100 scale-100 rotate-0"
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getTransformClass()} ${className}`}
      style={{ transitionDelay: isMounted ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
