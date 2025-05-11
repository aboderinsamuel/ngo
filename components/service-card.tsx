"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="bg-gradient-to-br from-card to-card/50 border-primary/10 overflow-hidden h-full">
        <CardContent className="p-6">
          <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">{icon}</div>
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
