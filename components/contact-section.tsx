"use client"

import { ChevronDown, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's Talk</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                We've found that we deliver the greatest value to our clients when we establish ongoing relationships
                that allow us to materially contribute to their long-term success.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[rgba(44,160,160,1)] font-bold cursor-pointer">
                <ChevronDown className="w-5 h-5" />
                <span>Visit us personally</span>
              </div>

              <div className="pl-8 space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Plot No. 123, Tech Hub, Sector 5<br />
                    Bhubaneswar, Odisha, India.
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden grayscale opacity-80 h-64 shadow-inner border border-gray-200">
                  <img src="/city-map-pinpoint.jpg" alt="Location" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 shadow-2xl rounded-2xl relative">
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-50 border-none px-4 py-4 rounded-lg focus:ring-2 focus:ring-[rgba(44,160,160,1)] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full bg-gray-50 border-none px-4 py-4 rounded-lg focus:ring-2 focus:ring-[rgba(44,160,160,1)] transition-all"
                />
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-sm font-bold text-gray-700">Message</label>
              <textarea
                placeholder="Say Something..."
                rows={6}
                className="w-full bg-gray-50 border-none px-4 py-4 rounded-lg focus:ring-2 focus:ring-[rgba(44,160,160,1)] transition-all resize-none"
              />
            </div>

            <button className="bg-[rgba(44,160,160,1)] text-white px-10 py-4 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-[rgba(44,160,160,0.4)]">
              Send us a message
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
