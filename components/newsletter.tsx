"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Loader2 } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-background border-input text-foreground focus:ring-2 focus:ring-primary rounded-full pl-6 pr-6 sm:pr-36 py-6 h-auto"
          disabled={isSubmitting || isSubmitted}
          required
        />
        <Button
          type="submit"
          className={`mt-4 sm:mt-0 sm:absolute sm:right-1 sm:top-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-4 h-auto w-full sm:w-auto transition-all ${
            isSubmitted ? "bg-green-600 hover:bg-green-700" : ""
          }`}
          disabled={isSubmitting || isSubmitted}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : isSubmitted ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Subscribed!
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
    </form>
  )
}
