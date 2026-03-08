import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home',    to: '/' },
  { label: 'Events',  to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About',   to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-teal flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg">C</span>
          </div>
          <span
            className={`font-serif font-semibold text-xl transition-colors ${
              scrolled ? 'text-charcoal' : 'text-white'
            }`}
          >
            Community<span className="text-amber">Connect</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium tracking-wide transition-colors relative group ${
                scrolled ? 'text-charcoal hover:text-teal' : 'text-white/90 hover:text-white'
              } ${pathname === to ? '!text-amber' : ''}`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-amber transition-all duration-300 ${
                  pathname === to ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
          <Link
            to="/join"
            className="bg-amber text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-amber-light transition-colors shadow-md"
          >
            Join Us
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col gap-1.5 p-2 ${scrolled ? 'text-charcoal' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white/98 backdrop-blur-md px-6 py-4 flex flex-col gap-4 border-t border-cream-dark">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium text-charcoal hover:text-teal transition-colors ${
                pathname === to ? 'text-teal font-semibold' : ''
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/join"
            className="bg-amber text-white text-sm font-semibold px-5 py-2 rounded-full text-center hover:bg-amber-light transition-colors"
          >
            Join Us
          </Link>
        </nav>
      </div>
    </header>
  )
}