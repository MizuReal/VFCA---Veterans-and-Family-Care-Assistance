import { Phone, MessageCircle, ArrowRight, Check } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import Button from './Button'

const groups = [
  'All veterans who served honorably',
  'Active duty service members preparing for transition',
  'Military spouses and children',
  'Surviving family members of veterans',
  'Caregivers of veterans',
]

const steps = [
  {
    icon: Phone,
    step: '01',
    title: 'Reach Out',
    desc: 'Call us, send a message, or stop by. We are ready to listen without judgment.',
  },
  {
    icon: MessageCircle,
    step: '02',
    title: 'We Listen',
    desc: 'Share your story and your needs. Every situation is unique, and we treat it that way.',
  },
  {
    icon: ArrowRight,
    step: '03',
    title: 'We Connect',
    desc: 'We match you with the right resources, benefits, and support for your specific needs.',
  },
]

export default function Eligibility() {
  return (
    <section id="eligibility" className="bg-cream py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16 sm:mb-20">
          <p className="text-signal-orange font-[700] text-sm tracking-[0.56px] uppercase flex items-center justify-center gap-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-signal-orange" aria-hidden="true" />
            ELIGIBILITY
          </p>
          <h2 className="text-ink font-[500] text-[32px] sm:text-[36px] leading-[44px] tracking-[-0.72px] mb-4">
            Who We Serve
          </h2>
          <p className="text-slate font-[450] text-base sm:text-lg leading-[1.4] max-w-xl mx-auto">
            Our services are available to anyone who has served — and those who support them.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <AnimateOnScroll>
            <div className="bg-white rounded-[40px] p-8 sm:p-10 shadow-[0_4px_24px_0_rgba(0,0,0,0.04)]">
              <h3 className="text-ink font-[500] text-xl sm:text-2xl tracking-[-0.48px] mb-6">
                You are eligible if you are:
              </h3>
              <ul className="space-y-4">
                {groups.map((group) => (
                  <li key={group} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-ink/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-ink" />
                    </span>
                    <span className="text-ink/80 font-[450] text-base leading-[1.4]">
                      {group}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in">
            <div>
              <h3 className="text-ink font-[500] text-xl sm:text-2xl tracking-[-0.48px] mb-8">
                How It Works
              </h3>
              <div className="space-y-8">
                {steps.map(({ icon: Icon, step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.04)] flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-ink" />
                      </div>
                      <div className="w-px flex-1 bg-hairline mt-2" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-slate font-[450] text-xs tracking-[0.56px] uppercase">
                        Step {step}
                      </span>
                      <h4 className="text-ink font-[500] text-lg leading-[1.2] tracking-[-0.36px] mt-1">
                        {title}
                      </h4>
                      <p className="text-slate font-[450] text-base leading-[1.4] mt-1">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll className="text-center">
          <Button href="#contact" variant="primary">
            Get Help Today
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
