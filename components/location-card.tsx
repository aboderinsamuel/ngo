"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { motion } from "framer-motion"

interface LocationCardProps {
  title: string
  address: string
  city: string
  postalCode: string
  mapUrl: string
}

export function LocationCard({ title, address, city, postalCode, mapUrl }: LocationCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="bg-gradient-to-br from-card to-card/50 border-primary/10 overflow-hidden h-full">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="bg-primary/10 rounded-full p-2 md:p-3 mt-1 flex-shrink-0">
              <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">{title}</h3>
              <p className="text-muted-foreground mb-1 text-sm md:text-base">{address}</p>
              <p className="text-muted-foreground mb-1 text-sm md:text-base">{city}</p>
              <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">{postalCode}</p>

              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 rounded-full text-sm md:text-base"
                >
                  View on Map
                </Button>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
