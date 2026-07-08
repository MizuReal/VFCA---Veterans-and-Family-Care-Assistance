import AnimateOnScroll from './AnimateOnScroll'
import Button from './Button'

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 pt-20 pb-16 sm:pb-24"
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-[#e8ddd5] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <AnimateOnScroll className="order-2 lg:order-1">
            <p className="text-signal-orange font-[700] text-sm tracking-[0.56px] uppercase mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-signal-orange" aria-hidden="true" />
              WELCOME
            </p>
            <h1 className="text-ink font-[500] leading-[1] tracking-[-1.28px] text-[40px] sm:text-[48px] lg:text-[64px] mb-5">
              Veterans and Family
              <br />
              Care Assistance
            </h1>
            <p className="text-ink font-[450] text-base sm:text-lg leading-[1.4] max-w-lg mb-8">
              Serving those who served—and their families. We stand beside those who stood for us.
            </p>
            <Button href="#contact" variant="primary">
              Get Help Today
            </Button>
          </AnimateOnScroll>

          <AnimateOnScroll className="order-1 lg:order-2" animation="animate-fade-in">
            <div className="relative flex items-center justify-center">
              <div
                className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-[0_24px_48px_0_rgba(0,0,0,0.08)]"
              >
                <img
                    src="/hero-banner.jpg"
                    alt="A service member embracing their daughter in a heartfelt farewell"
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-14 h-14 sm:w-[60px] sm:h-[60px] bg-white rounded-full flex items-center justify-center shadow-[0_4px_16px_0_rgba(0,0,0,0.06)]"
                aria-hidden="true"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#141413" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
