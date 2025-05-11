"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface Slide {
  url: string
  alt: string
}

interface ImageSliderProps {
  slides: Slide[]
  autoPlay?: boolean
  autoPlayInterval?: number
  height?: number
  className?: string
}

export function ImageSlider({
  slides,
  autoPlay = false,
  autoPlayInterval = 5000,
  height = 500,
  className,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex, slides.length])

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    let slideInterval: NodeJS.Timeout

    if (autoPlay) {
      slideInterval = setInterval(() => {
        goToNext()
      }, autoPlayInterval)
    }

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval)
      }
    }
  }, [autoPlay, autoPlayInterval, goToNext])

  if (!slides || slides.length === 0) {
    return null
  }

  return (
    <div className={`relative w-full h-full ${className || ""}`}>
      <div className={`relative w-full overflow-hidden rounded-3xl shadow-xl`} style={{ height: `${height}px` }}>
        <AnimatePresence mode="wait">
          {slides.map(
            (slide, index) =>
              index === currentIndex && (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={slide.url || "/placeholder.svg"}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full h-10 w-10 md:h-12 md:w-12 backdrop-blur-sm"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full h-10 w-10 md:h-12 md:w-12 backdrop-blur-sm"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 md:gap-2">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all ${
              slideIndex === currentIndex ? "bg-primary w-4 md:w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
