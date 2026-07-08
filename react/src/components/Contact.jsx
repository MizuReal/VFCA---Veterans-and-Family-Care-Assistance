import { Phone, Mail, MapPin } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import Button from './Button'

const details = [
  { icon: Phone, label: 'Call Us', value: '(555) 123-4567', href: 'tel:+15551234567' },
  { icon: Mail, label: 'Email Us', value: 'help@vfcare.org', href: 'mailto:help@vfcare.org' },
  { icon: MapPin, label: 'Visit Us', value: '123 Freedom Way, Suite 200\nWashington, DC 20001' },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-24 lg:py-32 px-4 sm:px-6" aria-label="Contact us">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16 sm:mb-20">
          <p className="text-signal-orange font-[700] text-sm tracking-[0.56px] uppercase flex items-center justify-center gap-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-signal-orange" aria-hidden="true" />
            CONTACT
          </p>
          <h2 className="text-ink font-[500] text-[32px] sm:text-[36px] leading-[44px] tracking-[-0.72px] mb-4">
            Get in Touch
          </h2>
          <p className="text-slate font-[450] text-base sm:text-lg leading-[1.4] max-w-xl mx-auto">
            Whether you need help, have questions, or want to learn more — we are here for you.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimateOnScroll>
            <div className="bg-white rounded-[40px] p-8 sm:p-10 shadow-[0_4px_24px_0_rgba(0,0,0,0.04)] h-full">
              <h3 className="text-ink font-[500] text-xl sm:text-2xl tracking-[-0.48px] mb-8">
                Reach out to us
              </h3>
              <div className="space-y-6">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-11 h-11 rounded-full bg-cream flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-ink" />
                    </div>
                    <div>
                      <div className="text-slate font-[450] text-xs tracking-[0.56px] uppercase mb-1">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-ink font-[450] text-base leading-[1.4] hover:opacity-60 transition-opacity"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-ink font-[450] text-base leading-[1.4] whitespace-pre-line">
                          {value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in">
            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Contact form"
            >
              <div>
                <label htmlFor="name" className="sr-only">Your name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white text-ink font-[450] text-base leading-[1.4] placeholder:text-slate/50 px-5 py-3.5 rounded-full border border-ink/15 focus:outline-none focus:border-ink/40 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white text-ink font-[450] text-base leading-[1.4] placeholder:text-slate/50 px-5 py-3.5 rounded-full border border-ink/15 focus:outline-none focus:border-ink/40 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Your phone number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full bg-white text-ink font-[450] text-base leading-[1.4] placeholder:text-slate/50 px-5 py-3.5 rounded-full border border-ink/15 focus:outline-none focus:border-ink/40 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us how we can help..."
                  className="w-full bg-white text-ink font-[450] text-base leading-[1.4] placeholder:text-slate/50 px-5 py-3.5 rounded-[20px] border border-ink/15 focus:outline-none focus:border-ink/40 transition-colors resize-none"
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
