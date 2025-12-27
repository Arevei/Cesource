"use client"

import { motion } from "framer-motion"
import { Building2, Train, Zap, Cloud, Home, Users, Hammer, Lightbulb } from "lucide-react"

const sectors = [
  { name: "Urban & Regional Development", icon: Building2 },
  { name: "Transportation & Mobility", icon: Train },
  { name: "E-Mobility Solutions", icon: Zap },
  { name: "Climate Change Adaptation", icon: Cloud },
  { name: "Infrastructure Engineering", icon: Home },
  { name: "Social Development", icon: Users },
  { name: "Construction & Utility", icon: Hammer },
  { name: "Innovation & R&D", icon: Lightbulb },
]

export function SectorsGrid() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[rgba(44,160,160,1)] uppercase mb-6">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              Driving sustainable growth across diverse industrial sectors.
            </h3>
          </div>
          <p className="text-muted-foreground max-w-sm mb-2">
            Cesource Technical is focused on contributing Engineering and Consulting services that shape tomorrow's
            infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {sectors.map((sector, idx) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group aspect-square border border-gray-100 flex flex-col justify-between p-10 hover:bg-[rgba(44,160,160,1)] transition-colors duration-500"
            >
              <sector.icon className="w-10 h-10 text-[rgba(44,160,160,1)] group-hover:text-white transition-colors" />
              <div className="space-y-4">
                <h4 className="text-xl font-bold group-hover:text-white transition-colors leading-snug">
                  {sector.name}
                </h4>
                <div className="w-0 group-hover:w-full h-[2px] bg-white transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
