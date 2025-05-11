"use client"

import { Briefcase, Users, Utensils } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ProgramCardProps {
  title: string
  description: string
  icon: string
}

export function ProgramCard({ title, description, icon }: ProgramCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "briefcase":
        return <Briefcase className="h-12 w-12 text-primary" />
      case "users":
        return <Users className="h-12 w-12 text-primary" />
      case "utensils":
        return <Utensils className="h-12 w-12 text-primary" />
      default:
        return <Briefcase className="h-12 w-12 text-primary" />
    }
  }

  return (
    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="bg-gradient-to-br from-card to-card/50 border-primary/10 h-full overflow-hidden group">
        <CardContent className="p-6 md:p-8">
          <div className="mb-4 md:mb-6 bg-primary/10 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            {getIcon()}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4 group-hover:text-primary/90 transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
