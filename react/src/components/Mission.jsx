import { Shield, Heart, Users, Award } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

const values = [
  { icon: Shield, label: 'Trust', desc: 'Every interaction is built on honesty and integrity.' },
  { icon: Heart, label: 'Compassion', desc: 'We meet every person with empathy and understanding.' },
  { icon: Users, label: 'Community', desc: 'No one walks alone. We connect, we support, we grow.' },
  { icon: Award, label: 'Excellence', desc: 'We hold ourselves to the highest standard of service.' },
]

export default function Mission() {
  return (
    <section id="mission" className="relative bg-cream py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">

      <div
        className="absolute inset-0 bg-gradient-to-l from-signal-orange/[0.04] via-cream/70 to-transparent pointer-events-none animate-fade-in-slow"
        aria-hidden="true"
      />

      <div
        className="absolute top-8 sm:top-12 left-1/2 -translate-x-1/2 text-[48px] sm:text-[64px] lg:text-[80px] font-[500] leading-[1] tracking-[-1.6px] bg-gradient-to-r from-signal-orange/[0.40] via-ink/[0.20] to-ink/[0.06] bg-clip-text text-transparent pointer-events-none select-none whitespace-nowrap animate-fade-in-slow"
        aria-hidden="true"
        style={{ animationDelay: '0.3s' }}
      >
        OUR MISSION
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimateOnScroll>
          <p className="text-signal-orange font-[700] text-sm tracking-[0.56px] uppercase mb-4 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-signal-orange" aria-hidden="true" />
            ABOUT US
          </p>
          <h2 className="text-ink font-[500] text-[32px] sm:text-[36px] leading-[44px] tracking-[-0.72px] mb-6 max-w-2xl">
            We exist to ensure no veteran or family member navigates life after service alone.
          </h2>
          <p className="text-ink font-[450] text-base sm:text-lg leading-[1.4] max-w-2xl mb-16">
            Through compassionate guidance, dedicated advocacy, and accessible resources, we stand beside
            those who stood for us. Every transition is unique — and every family deserves dignity and support.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map(({ icon: Icon, label, desc }, i) => (
            <AnimateOnScroll key={label} className="flex flex-col items-center text-center" rootMargin="0px 0px -60px 0px">
              <div className="relative mb-5">
                <div className="w-28 h-28 sm:w-[120px] sm:h-[120px] rounded-full bg-white shadow-[0_4px_24px_0_rgba(0,0,0,0.04)] flex items-center justify-center">
                  <Icon size={36} className="text-ink" />
                </div>
                <div
                  className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_2px_8px_0_rgba(0,0,0,0.04)]"
                  aria-hidden="true"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#141413" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
              <h3 className="text-ink font-[500] text-xl sm:text-2xl tracking-[-0.48px] mb-2">
                {label}
              </h3>
              <p className="text-slate font-[450] text-sm sm:text-base leading-[1.4] max-w-[200px]">
                {desc}
              </p>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="relative mt-16 sm:mt-20" aria-hidden="true">
          <svg className="w-full h-8 sm:h-10" viewBox="0 0 1200 40" fill="none" preserveAspectRatio="none">
            <path
              d="M0 20 Q150 0 300 20 Q450 40 600 20 Q750 0 900 20 Q1050 40 1200 20"
              stroke="#F37338"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.4"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
