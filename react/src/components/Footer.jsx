import { X } from 'lucide-react'

const columns = [
  {
    heading: 'Services',
    links: ['Healthcare Access', 'Counseling', 'Benefits Assistance', 'Family Support'],
  },
  {
    heading: 'Resources',
    links: ['Veterans Crisis Line', 'VA Benefits Portal', 'Support Groups', 'FAQs'],
  },
  {
    heading: 'Organization',
    links: ['About Us', 'Our Team', 'Partners', 'Careers'],
  },
  {
    heading: 'Need help?',
    links: ['Contact us', 'Book an appointment', 'Send a message', 'Get urgent support'],
    icons: true,
  },
]

const socialIcons = [
  { label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { label: 'X', path: 'M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M19.5 4l-6.768 6.768' },
  { label: 'YouTube', path: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98l5.75 3.02z' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white py-16 lg:py-24 px-4 sm:px-6" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 lg:mb-16">
          <h2 className="text-white font-[500] text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.2] tracking-[-0.72px] max-w-lg">
            We are always here when you need us.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {columns.map(({ heading, links, icons }) => (
            <div key={heading}>
              <h3 className="text-white/50 font-[700] text-xs tracking-[0.56px] uppercase mb-4 sm:mb-5">
                {heading}
              </h3>
              <ul className="space-y-3 sm:space-y-3.5">
                {links.map((link, i) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`font-[450] text-sm leading-[1.4] hover:opacity-70 transition-opacity inline-flex items-center gap-2 ${icons ? 'text-white' : 'text-white/70'}`}
                    >
                      {icons && (
                        <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            {i === 0 && <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />}
                            {i === 1 && <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>}
                            {i === 2 && <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>}
                            {i === 3 && <><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></>}
                          </svg>
                        </span>
                      )}
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/15">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap items-center gap-4 text-white/40 font-[450] text-xs">
              <span>&copy; {new Date().getFullYear()} VFCA. All rights reserved.</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
              <span aria-hidden="true">·</span>
              <a href="#" className="hover:text-white/70 transition-colors">Terms of Use</a>
              <span aria-hidden="true">·</span>
              <a href="#" className="hover:text-white/70 transition-colors">Accessibility</a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {socialIcons.map(({ label, path }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    aria-label={label}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
              <div className="h-6 w-px bg-white/15" aria-hidden="true" />
              <button
                className="flex items-center gap-2 text-white/70 font-[450] text-xs border border-white/20 rounded-full px-4 py-1.5 hover:bg-white/10 transition-colors"
                aria-label="Select country and language"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                United States — English
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
