import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "premium" | "ghost";
}

export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className, variant = "premium", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          variant === "premium" ? "glass-premium" : "glass-ghost",
          className
        )}
        {...props}
      />
    )
  }
)
GlassPanel.displayName = "GlassPanel"
