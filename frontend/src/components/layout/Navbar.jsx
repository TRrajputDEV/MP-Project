import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home',    to: '/' },
  { label: 'Events',  to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About',   to: '/about' },
  { label: 'Donate',  to: '/donate' },
  { label: 'Contact', to: '/contact' },
];

// Clean, rotating items with no overwhelming emojis
const tickerItems = [
  'Welcome to Maharana Pratap Seva Samiti — Service, Culture & Pride',
  '📞 Contact us: +91 98765 43210',
  'Dedicated to community service and youth empowerment',
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tickerIdx, setTickerIdx] = useState(0);
  const { pathname } = useLocation();

  // Handle sticky navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Handle ticker rotation every 4 seconds
  useEffect(() => {
    const t = setInterval(() => setTickerIdx(i => (i + 1) % tickerItems.length), 4000);
    return () => clearInterval(t);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      {/* ── Spacer Block to fix Hero Slider Overlap ── */}
      {/* This pushes the rest of the website down by exactly the height of the fixed navbar */}
      <div className="h-[116px] w-full bg-transparent" aria-hidden="true" />

      {/* ── Top Ticker Bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[36px] flex items-center bg-gradient-to-r from-crimson-dark to-crimson">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center justify-between gap-4">
          
          {/* Rotating Motto / Number */}
          <div className="flex-1 overflow-hidden relative h-full flex items-center">
            <p key={tickerIdx} className="text-white/95 text-sm font-body font-medium tracking-wide fade-in">
              {tickerItems[tickerIdx]}
            </p>
          </div>
          
          {/* Social Icons & Admin */}
          <div className="hidden md:flex items-center gap-5 flex-shrink-0">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 0 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.58 6.55c-.23-.86-.91-1.54-1.77-1.77C18.25 4.33 12 4.33 12 4.33s-6.25 0-7.81.45c-.86.23-1.54.91-1.77 1.77C2 8.11 2 12 2 12s0 3.89.45 5.45c.23.86.91 1.54 1.77 1.77 1.56.45 7.81.45 7.81.45s6.25 0 7.81-.45c.86-.23 1.54-.91 1.77-1.77.45-1.56.45-5.45.45-5.45s0-3.89-.45-5.45zM10 15V9l5.2 3-5.2 3z"/>
              </svg>
            </a>
            
            <span className="text-white/30 text-xs ml-1 mr-1">|</span>
            
            <Link to="/admin/login" className="text-white/70 hover:text-white text-xs font-semibold tracking-wider transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'top-[36px] bg-white/95 backdrop-blur-md shadow-md py-2'
            : 'top-[36px] bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-4 group">
            {/* Emblem circle */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md bg-gradient-to-br from-crimson to-saffron group-hover:shadow-lg transition-all">
              {/* Spear / Bhala icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L14 7H19L15 10L17 15L12 12L7 15L9 10L5 7H10L12 2Z" fill="white" opacity="0.95"/>
                <line x1="12" y1="12" x2="12" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-display text-lg font-bold text-crimson leading-none tracking-wide mb-1">
                Maharana Pratap
              </p>
              <p className="text-sm text-saffron font-hindi font-medium leading-none tracking-wider">
                सेवा समिति
              </p>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map(({ label, to }) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-5 py-2.5 rounded-lg group transition-all duration-300 ${
                    active ? 'text-saffron' : 'text-charcoal hover:text-saffron hover:bg-saffron/5'
                  }`}
                >
                  <span className="block text-sm font-display font-bold tracking-wide">
                    {label}
                  </span>
                  {/* Active underline */}
                  <span
                    className={`absolute bottom-1.5 left-5 right-5 h-0.5 rounded-full transition-all duration-300 bg-gradient-to-r from-saffron to-crimson ${
                      active ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── Join CTA ── */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/join"
              className="flex items-center gap-2 text-white text-sm font-display font-bold px-7 py-3 rounded-full shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 bg-gradient-to-r from-saffron to-crimson"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" opacity="0.9">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              Join Us
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 text-crimson focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 rounded-full ${menuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 rounded-full my-1 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 rounded-full ${menuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`} />
          </button>
        </div>

        {/* ── Mobile Menu Dropdown ── */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out absolute top-full left-0 w-full bg-white shadow-xl ${
            menuOpen ? 'max-h-[400px] border-b border-gray-100' : 'max-h-0'
          }`}
        >
          <nav className="px-6 py-4 flex flex-col gap-2">
            {navLinks.map(({ label, to }) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-3 rounded-xl transition-colors ${
                    active ? 'bg-saffron/10 text-saffron' : 'text-charcoal hover:bg-gray-50 hover:text-saffron'
                  }`}
                >
                  <span className="font-display font-bold text-base">{label}</span>
                </Link>
              );
            })}
            <div className="pt-2 mt-2 border-t border-gray-100">
              <Link
                to="/join"
                className="flex justify-center items-center gap-2 text-white text-base font-display font-bold w-full py-3.5 rounded-xl bg-gradient-to-r from-saffron to-crimson shadow-md"
              >
                Join Us
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}