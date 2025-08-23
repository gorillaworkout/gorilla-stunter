"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname, isMounted])

  // Prevent hydration mismatch by not showing loading state during SSR
  const showLoading = isMounted && isLoading

  return (
    <>
      {showLoading && (
        <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="font-heading font-semibold text-foreground">Loading...</p>
          </div>
        </div>
      )}
      <div className={`transition-opacity duration-300 ${showLoading ? "opacity-0" : "opacity-100"}`}>{children}</div>
    </>
  )
}
