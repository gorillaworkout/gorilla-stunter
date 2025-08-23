"use client"

import * as React from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import { type VariantProps } from "class-variance-authority"

interface WhatsAppButtonProps 
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  children: React.ReactNode
}

const WhatsAppButton = React.forwardRef<HTMLButtonElement, WhatsAppButtonProps>(
  ({ children, ...props }, ref) => {
    const handleClick = () => {
      window.open('https://chat.whatsapp.com/B66JcOMYoKfKocI8sF2gF1?mode=ems_copy_c', '_blank')
    }

    return (
      <Button
        ref={ref}
        {...props}
        onClick={handleClick}
      >
        {children}
      </Button>
    )
  }
)

WhatsAppButton.displayName = "WhatsAppButton"

export default WhatsAppButton
