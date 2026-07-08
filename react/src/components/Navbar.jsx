import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const links = [
  { label: 'For you', href: '#mission' },
  { label: 'Services', href: '#services' },
  { label: 'Eligibility', href: '#eligibility' },
  { label: 'Stories', href: '#stories' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 sm:px-6"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full max-w-7xl bg-white/95 backdrop-blur-md shadow-[0_4px_24px_0_rgba(0,0,0,0.04)] rounded-full px-5 sm:px-10 h-12 flex items-center justify-between">
        <a href="#" className="text-ink font-[500] text-base tracking-[-0.32px] shrink-0" aria-label="Home">
          VFCA
        </a>

        <div className="hidden md:flex items-center gap-10 lg:gap-12">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink font-[500] text-base tracking-[-0.48px] hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            className="w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center hover:bg-cream transition-colors"
            aria-label="Search"
          >
            <Search size={16} className="text-ink" />
          </button>
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} className="text-ink" /> : <Menu size={20} className="text-ink" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-[20px] shadow-[0_24px_48px_0_rgba(0,0,0,0.08)] p-6 md:hidden">
          <div className="flex flex-col gap-5" role="menu">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                role="menuitem"
                onClick={() => setMenuOpen(false)}
                className="text-ink font-[500] text-base tracking-[-0.48px]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
