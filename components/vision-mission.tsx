"use client"

export function VisionMission() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-[rgba(44,160,160,1)] font-bold tracking-[0.3em] uppercase block mb-8">
                Our Foundation
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-12 shadow-sm hover:shadow-xl transition-all border-l-4 border-[rgba(44,160,160,1)]">
                <h3 className="text-2xl font-bold mb-6">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our Vision is to be one of the prestigious Building Construction and Infrastructure organizations
                  providing lasting edifice for our clients, with world-class technology at a competitive cost.
                </p>
              </div>

              <div className="bg-white p-12 shadow-sm hover:shadow-xl transition-all border-l-4 border-[rgba(44,160,160,1)]">
                <h3 className="text-2xl font-bold mb-6">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission as an organization is to bridge the gap between technical complexity and practical
                  execution in terms of quality product and reliable service delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-[600px]">
            <img
              src="/modern-architectural-yellow-building-facade.jpg"
              alt="Architecture"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
