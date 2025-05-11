"use client"

import { useEffect, useRef } from "react"

export function InfiniteScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Clone the content for seamless scrolling
    const content = scrollContainer.querySelector(".scroll-content")
    if (!content) return

    const clone = content.cloneNode(true)
    scrollContainer.appendChild(clone)

    // Animation
    let animationId: number
    let scrollPos = 0

    const scroll = () => {
      scrollPos += 0.5 // Adjust speed here

      // Reset position when first set of logos is scrolled past
      if (scrollPos >= content.clientWidth) {
        scrollPos = 0
      }

      scrollContainer.style.transform = `translateX(-${scrollPos}px)`
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="overflow-hidden py-8">
      <div ref={scrollRef} className="flex items-center" style={{ willChange: "transform" }}>
        <div className="scroll-content flex items-center gap-24">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="bg-card p-8 rounded-2xl flex items-center justify-center min-w-[200px] h-[100px] border border-primary/10 shadow-md hover:shadow-lg transition-shadow"
            >
              <img src={`/images/partners/p${(i % 4) + 1}.webp`} alt={`Partner ${i}`} className="max-w-full max-h-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
