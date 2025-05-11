import { cn } from "@/lib/utils"

interface DecorativeCircleProps {
  className?: string
}

export function DecorativeCircle({ className }: DecorativeCircleProps) {
  return (
    <svg viewBox="0 0 200 200" className={cn("absolute", className)}>
      <path d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" fill="currentColor" />
    </svg>
  )
}
