import AnimateOnScroll from './AnimateOnScroll'

const testimonials = [
  {
    quote:
      'After my transition, I felt lost. This organization helped me find not just benefits, but a community. For the first time in years, I feel like someone has my back.',
    name: 'James R.',
    role: 'U.S. Army Veteran',
  },
  {
    quote:
      "When my husband deployed, I didn't know where to turn. The family support programs made sure my children and I had everything we needed. They treated us like family.",
    name: 'Maria S.',
    role: 'Military Spouse',
  },
  {
    quote:
      'Filing my disability claim was overwhelming. They walked me through every page, every form, every deadline. I would have given up without them.',
    name: 'David L.',
    role: 'U.S. Marine Corps Veteran',
  },
]

export default function Testimonials() {
  return (
    <section id="stories" className="bg-lifted-cream py-24 lg:py-32 px-4 sm:px-6" aria-label="Stories">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16 sm:mb-20">
          <p className="text-signal-orange font-[700] text-sm tracking-[0.56px] uppercase flex items-center justify-center gap-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-signal-orange" aria-hidden="true" />
            STORIES
          </p>
          <h2 className="text-ink font-[500] text-[32px] sm:text-[36px] leading-[44px] tracking-[-0.72px] mb-4">
            Stories of Support
          </h2>
          <p className="text-slate font-[450] text-base sm:text-lg leading-[1.4] max-w-xl mx-auto">
            Real experiences from veterans and families we have had the privilege of serving.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map(({ quote, name, role }, i) => (
            <AnimateOnScroll
              key={name}
              className="bg-white rounded-[40px] p-8 sm:p-10 shadow-[0_4px_24px_0_rgba(0,0,0,0.04)] flex flex-col"
              rootMargin="0px 0px -60px 0px"
            >
              <div className="mb-6">
                <svg width="24" height="18" viewBox="0 0 28 20" fill="none" aria-hidden="true">
                  <path
                    d="M6.2 0C9.6 0 12.4 2.8 12.4 6.2C12.4 13.2 6.8 19.2 0 20L1.4 16.4C4.6 14.8 7 11.6 7.2 8.4H6.2C2.8 8.4 0 5.6 0 2.2C0 1 0.4 0 1.2 1.2C2 0.4 3 0 4.2 0H6.2ZM21.8 0C25.2 0 28 2.8 28 6.2C28 13.2 22.4 19.2 15.6 20L17 16.4C20.2 14.8 22.6 11.6 22.8 8.4H21.8C18.4 8.4 15.6 5.6 15.6 2.2C15.6 1 16 0 16.8 1.2C17.6 0.4 18.6 0 19.8 0H21.8Z"
                    fill="#141413"
                    opacity="0.15"
                  />
                </svg>
              </div>
              <blockquote className="text-ink/75 font-[450] text-base leading-[1.4] flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-6 border-t border-ink/10">
                <div className="text-ink font-[500] text-base tracking-[-0.32px]">
                  {name}
                </div>
                <div className="text-slate font-[450] text-sm leading-[1.4] mt-0.5">
                  {role}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
