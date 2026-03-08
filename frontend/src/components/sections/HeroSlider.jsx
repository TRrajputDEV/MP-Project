import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    id: 1,
    bg: 'linear-gradient(135deg, #3D0000 0%, #8B0000 40%, #CC5200 100%)',
    tag: '🚩 Jai Eklingji',
    title: 'Valor & Service',
    subtitle: 'Dedicated to community service, carrying forward the legacy of Maharana Pratap.',
    ctaLabel: 'About Us',
    ctaTo: '/about',
    ctaSecondary: 'Our Events',
    ctaSecondaryTo: '/events',
    pattern: 'spears',
  },
  {
    id: 2,
    bg: 'linear-gradient(135deg, #1A0000 0%, #5C0000 40%, #8B0000 100%)',
    tag: '📅 Upcoming Events',
    title: 'Together We Build',
    subtitle: 'Every event is a new beginning — our commitment to strengthening the community.',
    ctaLabel: 'View Events',
    ctaTo: '/events',
    ctaSecondary: 'Gallery',
    ctaSecondaryTo: '/gallery',
    pattern: 'dots',
  },
  {
    id: 3,
    bg: 'linear-gradient(135deg, #2D1000 0%, #8B3000 40%, #FF6600 100%)',
    tag: '🙏 Support Our Cause',
    title: 'Your Contribution Matters',
    subtitle: 'With your support we can help more families and strengthen our community.',
    ctaLabel: 'Donate Now',
    ctaTo: '/donate',
    ctaSecondary: 'Learn More',
    ctaSecondaryTo: '/about',
    pattern: 'diamonds',
  },
]

// Decorative SVG pattern overlays
function PatternOverlay({ type }) {
  if (type === 'spears') return (
    <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      {[...Array(8)].map((_, i) => (
        <g key={i} transform={`translate(${i * 14}, 0)`}>
          <line x1="7" y1="0" x2="7" y2="100" stroke="white" strokeWidth="0.5"/>
          <polygon points="7,5 5,12 9,12" fill="white"/>
        </g>
      ))}
    </svg>
  )
  if (type === 'dots') return (
    <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      {[...Array(100)].map((_, i) => (
        <circle key={i} cx={(i % 10) * 11 + 5} cy={Math.floor(i / 10) * 11 + 5} r="1" fill="white"/>
      ))}
    </svg>
  )
  return (
    <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      {[...Array(20)].map((_, i) => (
        <rect key={i} x={(i % 5) * 22} y={Math.floor(i / 5) * 22} width="10" height="10" fill="none" stroke="white" strokeWidth="0.5" transform="rotate(45 10 10)"/>
      ))}
    </svg>
  )
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((idx) => {
    if (animating) return
    setAnimating(true)
    setCurrent(idx)
    setTimeout(() => setAnimating(false), 700)
  }, [animating])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  const slide = slides[current]

  return (
    <section className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 0px)', minHeight: 580 }}>

      {/* ── Slide Background ── */}
      <div
        key={current}
        className="absolute inset-0 transition-opacity duration-700"
        style={{ background: slide.bg, opacity: animating ? 0 : 1 }}
      >
        <PatternOverlay type={slide.pattern} />

        {/* Right decorative circle */}
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 border-[60px] border-white" />
        <div className="absolute -right-8 bottom-20 w-48 h-48 rounded-full opacity-5 bg-white" />
        {/* Bottom diagonal */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 opacity-10"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}
        />
      </div>

      {/* ── Content ── */}
      <div
        key={`content-${current}`}
        className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center fade-up"
      >
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/90 text-xs px-4 py-1.5 rounded-full mb-6 stagger-1 fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            {slide.tag}
          </div>

          {/* Title */}
          <h1
            className="text-white font-display font-bold mb-5 stagger-2 fade-up"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1.1,
            }}
          >
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-lg mb-8 max-w-lg leading-relaxed stagger-3 fade-up">
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 stagger-4 fade-up">
            <Link
              to={slide.ctaTo}
              className="font-display font-semibold text-white text-sm px-7 py-3.5 rounded-full shadow-lg hover:scale-105 transition-transform"
              style={{ background: 'linear-gradient(135deg, #FF6600, #8B0000)' }}
            >
              {slide.ctaLabel}
            </Link>
            <Link
              to={slide.ctaSecondaryTo}
              className="border border-white/40 text-white text-sm font-body font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              {slide.ctaSecondary} →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Slide counter ── */}
      <div className="absolute bottom-28 right-8 text-white/40 font-display text-sm z-10">
        <span className="text-saffron text-xl font-bold">{String(current + 1).padStart(2, '0')}</span>
        <span className="mx-1">/</span>
        {String(slides.length).padStart(2, '0')}
      </div>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`slider-dot ${i === current ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Arrow buttons ── */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* ── Wave divider ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 70L80 58C160 46 320 22 480 16C640 10 800 22 960 30C1120 38 1280 42 1360 44L1440 46V70H0Z" fill="#FDF8F0"/>
        </svg>
      </div>
    </section>
  )
}