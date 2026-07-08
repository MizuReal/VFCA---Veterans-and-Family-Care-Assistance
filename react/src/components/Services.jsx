import { Stethoscope, Brain, FileText, HeartHandshake } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

const services = [
  {
    icon: Stethoscope,
    title: 'Healthcare Access',
    description:
      'Navigating healthcare benefits can be overwhelming. We help veterans and their families understand and access the medical care they have earned.',
  },
  {
    icon: Brain,
    title: 'Counseling & Mental Health',
    description:
      'Transitioning to civilian life brings unique challenges. Our counseling services provide a safe, confidential space for veterans and their families.',
  },
  {
    icon: FileText,
    title: 'Benefits Assistance',
    description:
      'From disability claims to education benefits, we guide you through every step of the application process with clarity and patience.',
  },
  {
    icon: HeartHandshake,
    title: 'Community & Family Support',
    description:
      'No one should face challenges alone. We connect veterans and families with local support networks, peer groups, and community resources.',
  },
]

function OrbitalLine({ index }) {
  const paths = [
    'M0 20 Q150 0 300 20 Q450 40 600 20',
    'M0 20 Q150 40 300 20 Q450 0 600 20',
    'M0 20 Q150 0 300 20 Q450 40 600 20',
  ]
  return (
    <div className="hidden lg:block absolute top-1/2 left-0 w-full pointer-events-none" aria-hidden="true">
      <svg className="w-full h-12" viewBox="0 0 600 40" fill="none" preserveAspectRatio="none">
        <path
          d={paths[index % paths.length]}
          stroke="#F37338"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.35"
          fill="none"
        />
      </svg>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-lifted-cream py-24 lg:py-32 px-4 sm:px-6" aria-label="Our services">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16 sm:mb-20">
          <p className="text-signal-orange font-[700] text-sm tracking-[0.56px] uppercase flex items-center justify-center gap-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-signal-orange" aria-hidden="true" />
            SERVICES
          </p>
          <h2 className="text-ink font-[500] text-[32px] sm:text-[36px] leading-[44px] tracking-[-0.72px]">
            How we help
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20">
          {services.map(({ icon: Icon, title, description }, i) => (
            <AnimateOnScroll key={title} className="relative flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-full bg-cream shadow-[0_4px_24px_0_rgba(0,0,0,0.04)] flex items-center justify-center">
                  <Icon size={48} className="text-ink" />
                </div>
                <div
                  className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_2px_8px_0_rgba(0,0,0,0.04)]"
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#141413" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
                <OrbitalLine index={i} />
              </div>
              <h3 className="text-ink font-[500] text-xl sm:text-2xl tracking-[-0.48px] mb-3">
                {title}
              </h3>
              <p className="text-slate font-[450] text-sm sm:text-base leading-[1.4] max-w-xs">
                {description}
              </p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
