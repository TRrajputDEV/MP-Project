import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home',    to: '/' },
  { label: 'Events',  to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About',   to: '/about' },
  { label: 'Donate',  to: '/donate' },
  { label: 'Contact', to: '/contact' },
]

const tickerItems = [
  '🚩 Welcome to Maharana Pratap Seva Samiti — Service, Culture & Pride',
  '📅 Next Event: Annual Festival — April 15, 2025',
  '🙏 Dedicated to community service and youth empowerment',
  '📞 Contact us: +91 98765 43210',
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [tickerIdx, setTickerIdx] = useState(0)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setTickerIdx(i => (i + 1) % tickerItems.length), 5000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      {/* ── Top Ticker Bar ── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 py-1.5 overflow-hidden"
        style={{ background: 'linear-gradient(to right, #5C0000, #8B0000, #CC5200)' }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">
          {/* Ticker text */}
          <div className="flex-1 overflow-hidden">
            <p
              key={tickerIdx}
              className="text-white/90 text-xs font-body fade-in"
              style={{ fontFamily: 'Mukta, sans-serif' }}
            >
              {tickerItems[tickerIdx]}
            </p>
          </div>
          {/* Social quick links */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {['FB', 'IG', 'YT'].map(s => (
              <a key={s} href="#"
                className="text-white/60 hover:text-white text-xs transition-colors"
              >{s}</a>
            ))}
            <span className="text-white/30">|</span>
            <Link to="/admin/login"
              className="text-white/50 hover:text-white/80 text-xs transition-colors"
            >Admin</Link>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-400 ${
          scrolled
            ? 'bg-white/97 backdrop-blur-md shadow-lg top-[30px]'
            : 'top-[30px] bg-white/95 backdrop-blur-sm'
        }`}
      >
        {/* Saffron top border */}
        <div className="h-0.5 pratap-border" />

        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-3">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Emblem circle */}
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
              style={{ background: 'linear-gradient(135deg, #8B0000, #FF6600)' }}
            >
              {/* Spear / Bhala icon (simplified SVG) */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L14 7H19L15 10L17 15L12 12L7 15L9 10L5 7H10L12 2Z" fill="white" opacity="0.9"/>
                <line x1="12" y1="12" x2="12" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="font-display text-sm font-bold text-crimson leading-tight tracking-wide">
                Maharana Pratap
              </p>
              <p className="text-xs text-saffron font-body font-medium leading-tight"
                style={{ fontFamily: 'Noto Sans Devanagari, Mukta, sans-serif' }}>
                सेवा समिति
              </p>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, to }) => {
              const active = pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 rounded-lg group transition-all duration-200 ${
                    active
                      ? 'bg-saffron/10 text-saffron'
                      : 'text-charcoal hover:text-saffron hover:bg-saffron/5'
                  }`}
                >
                  <span className="block text-sm font-display font-semibold tracking-wide">
                    {label}
                  </span>
                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full transition-all duration-300 ${
                      active ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`}
                    style={{ background: 'linear-gradient(to right, #FF6600, #8B0000)' }}
                  />
                </Link>
              )
            })}
          </nav>

          {/* ── Join CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/join"
              className="flex items-center gap-2 text-white text-sm font-display font-semibold px-5 py-2.5 rounded-full shadow-md transition-all hover:shadow-lg hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #FF6600, #8B0000)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Join Us
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 text-crimson"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Bottom border */}
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #FF6600, #8B0000, #FF6600, transparent)' }} />

        {/* ── Mobile Menu ── */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
          <nav className="bg-white px-6 py-4 flex flex-col gap-1 border-t border-ivory-dark">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center px-4 py-3 rounded-xl transition-colors ${
                  pathname === to
                    ? 'bg-saffron/10 text-saffron'
                    : 'text-charcoal hover:bg-ivory-dark hover:text-saffron'
                }`}
              >
                <span className="font-display font-semibold text-sm">{label}</span>
              </Link>
            ))}
            <Link
              to="/join"
              className="mt-2 text-center text-white text-sm font-display font-semibold px-5 py-3 rounded-full"
              style={{ background: 'linear-gradient(135deg, #FF6600, #8B0000)' }}
            >
              Join Us
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}