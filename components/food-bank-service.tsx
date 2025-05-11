"use client"

import { School, Heart, Home, Package } from "lucide-react"
import { motion } from "framer-motion"

interface FoodBankServiceProps {
  title: string
  description: string
  icon: string
}

export function FoodBankService({ title, description, icon }: FoodBankServiceProps) {
  const getIcon = () => {
    switch (icon) {
      case "school":
        return <School className="h-6 w-6 text-primary" />
      case "heart":
        return <Heart className="h-6 w-6 text-primary" />
      case "home":
        return <Home className="h-6 w-6 text-primary" />
      case "package":
        return <Package className="h-6 w-6 text-primary" />
      default:
        return <Package className="h-6 w-6 text-primary" />
    }
  }

  return (
    <motion.div
      className="bg-background/50 p-4 md:p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-start gap-3 md:gap-4">
        <div className="bg-primary/10 rounded-full p-2 mt-1 flex-shrink-0">{getIcon()}</div>
        <div>
          <h3 className="text-primary font-bold mb-1 md:mb-2 text-sm md:text-base">{title}</h3>
          <p className="text-muted-foreground text-xs md:text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
