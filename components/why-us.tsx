"use client"

export function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8 relative">
                <img
                  src="/engineering-construction-project.jpg"
                  alt="Engineering Project"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white p-4 hidden md:block">
                  <img src="/architectural-plan.jpg" alt="Plan" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="col-span-4 mt-20">
                <img
                  src="/engineers-team.jpg"
                  alt="Team"
                  className="w-full aspect-[3/4] object-cover shadow-2xl"
                />
              </div>
            </div>
            {/* Dot pattern deco */}
            <div className="absolute -bottom-10 -left-10 grid grid-cols-6 gap-2 opacity-20 hidden md:grid">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[rgba(44,160,160,1)]" />
              ))}
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <span className="text-[rgba(44,160,160,1)] font-bold tracking-[0.3em] uppercase block">Why Us</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Engineering capabilities and journey to excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a progressive business, committed to doing the right thing, Cesource recognises the urgency of the
              climate change agenda and champions the role we have to play in decarbonising the economy for a greener,
              more sustainable future.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work with clients to deliver low and net zero projects and work with suppliers and design consultants
              to help everyone in the industry reach their net zero targets.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
