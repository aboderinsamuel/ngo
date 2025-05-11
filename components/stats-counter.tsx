"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Stat {
  label: string
  value: number
}

interface StatsCounterProps {
  stats: Stat[]
  textColor?: string
  labelColor?: string
}

export function StatsCounter({ stats, textColor = "text-black", labelColor = "text-black/80" }: StatsCounterProps) {
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0))
  const counterRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          stats.forEach((stat, index) => {
            const duration = 2000 // 2 seconds
            const frameDuration = 1000 / 60 // 60fps
            const totalFrames = Math.round(duration / frameDuration)
            const valueIncrement = stat.value / totalFrames

            let currentFrame = 0

            const counter = setInterval(() => {
              currentFrame++

              setCounters((prev) => {
                const newCounters = [...prev]
                newCounters[index] = Math.min(Math.round(valueIncrement * currentFrame), stat.value)
                return newCounters
              })

              if (currentFrame === totalFrames) {
                clearInterval(counter)
              }
            }, frameDuration)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [stats])

  return (
    <div ref={counterRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-center">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <span className={`text-4xl md:text-5xl lg:text-7xl font-bold ${textColor} mb-2 md:mb-4`}>
            {counters[index].toLocaleString()}
          </span>
          <span className={`text-sm md:text-base lg:text-lg font-medium ${labelColor}`}>{stat.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
