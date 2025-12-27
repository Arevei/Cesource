"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "15+", label: "years of experience" },
  { value: "1500+", label: "projects completed" },
  { value: "790+", label: "satisfied clients" },
  { value: "100+", label: "active consultants" },
]

export function AboutStats() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-10 bg-[rgba(44,160,160,1)]" />
              <h2 className="text-4xl font-bold tracking-tight">About Us</h2>
            </div>
          </div>
          <div className="lg:w-2/3 space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              We Will Provide You The Best Work Which You Dreamt For!
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Cesource Technical Private Limited is an Engineering, Consultancy and Infrastructure company. We harness
              the power of technology to create innovative solutions that drive business success across multiple
              infrastructure sectors.
            </p>
            <button className="bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[rgba(44,160,160,1)] transition-all">
              Read More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-12 text-center group hover:bg-[rgba(44,160,160,0.05)] transition-colors"
            >
              <div className="text-5xl md:text-6xl font-black text-gray-900 mb-4 group-hover:text-[rgba(44,160,160,1)] transition-colors">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-widest font-semibold text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
