import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const stats = [
  { value: '500+', label: 'Members' },
  { value: '80+',  label: 'Events Held' },
  { value: '12',   label: 'Cities Reached' },
  { value: '5K+',  label: 'Lives Impacted' },
]

const featuredEvents = [
  {
    id: 1,
    title: 'Annual Community Gathering',
    date: 'April 15, 2025',
    type: 'upcoming',
    location: 'City Park, Main Ground',
    desc: 'Our flagship annual event bringing hundreds of community members together for a day of activities, sharing, and connection.',
    color: '#1a6b5e',
  },
  {
    id: 2,
    title: 'Youth Leadership Workshop',
    date: 'March 28, 2025',
    type: 'upcoming',
    location: 'Community Hall, Block B',
    desc: 'A hands-on workshop empowering young voices with the skills to lead positive change in their neighbourhoods.',
    color: '#e8973a',
  },
  {
    id: 3,
    title: 'Winter Food Drive',
    date: 'December 10, 2024',
    type: 'past',
    location: 'District Centre',
    desc: 'Together we collected over 2,000 kg of food for families in need — a testament to what our community can achieve.',
    color: '#0f4a40',
  },
]

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll('.fade-up')
    items?.forEach((el) => el.classList.add('fade-up'))
  }, [])

  return (
    <div>
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center grain overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f4a40 0%, #1a6b5e 50%, #2a8f7f 100%)',
        }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 border-[40px] border-white" />
        <div className="absolute bottom-0 -left-16 w-64 h-64 rounded-full opacity-10 border-[30px] border-amber" />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-amber opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-white opacity-40" />

        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/90 text-xs font-medium px-4 py-1.5 rounded-full mb-6 fade-up stagger-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
              Rooted in Community, Driven by Purpose
            </div>
            <h1 className="text-white font-serif text-5xl md:text-6xl lg:text-7xl leading-tight fade-up stagger-2">
              Together We<br />
              <span className="italic text-amber">Build More</span>
            </h1>
            <p className="text-white/75 text-lg mt-6 leading-relaxed max-w-md fade-up stagger-3">
              We're a grassroots community group united by shared values — empowering people, celebrating culture, and creating opportunities for everyone to thrive.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 fade-up stagger-4">
              <Link
                to="/events"
                className="bg-amber hover:bg-amber-light text-white font-semibold px-7 py-3 rounded-full transition-colors shadow-lg"
              >
                Explore Events
              </Link>
              <Link
                to="/join"
                className="border border-white/40 text-white hover:bg-white/10 font-medium px-7 py-3 rounded-full transition-colors"
              >
                Join the Community →
              </Link>
            </div>
          </div>

          {/* Stats card */}
          <div className="fade-up stagger-5">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 grid grid-cols-2 gap-6">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-serif text-4xl font-bold text-amber">{value}</div>
                  <div className="text-white/70 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#f9f5ef"/>
          </svg>
        </div>
      </section>

      {/* ── Mission strip ── */}
      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="section-line mx-auto" style={{ width: 56, height: 3, background: '#e8973a', margin: '0 auto 1.5rem' }} />
          <h2 className="font-serif text-4xl text-charcoal mb-5">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We believe that every individual has the power to shape their community. Our group exists to provide the platform, support, and connection needed to turn that belief into action — one event, one handshake, one story at a time.
          </p>
        </div>
      </section>

      {/* ── Featured Events ── */}
      <section className="bg-cream-dark py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div style={{ width: 56, height: 3, background: '#e8973a', marginBottom: '0.75rem' }} />
              <h2 className="font-serif text-4xl text-charcoal">Featured Events</h2>
            </div>
            <Link to="/events" className="text-teal font-medium text-sm hover:underline">
              View all →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <div key={event.id} className="event-card bg-white rounded-2xl overflow-hidden shadow-sm">
                {/* Color band */}
                <div className="h-2" style={{ background: event.color }} />
                <div className="p-6">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide"
                    style={{
                      background: event.type === 'upcoming' ? '#e8f5f2' : '#f5f0e8',
                      color: event.type === 'upcoming' ? '#1a6b5e' : '#8a6030',
                    }}
                  >
                    {event.type}
                  </span>
                  <h3 className="font-serif text-xl mt-3 mb-2">{event.title}</h3>
                  <p className="text-gray-500 text-sm mb-1">📅 {event.date}</p>
                  <p className="text-gray-500 text-sm mb-3">📍 {event.location}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a6b5e, #0f4a40)' }}
      >
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-5">
            Ready to Be Part<br />of Something Real?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Join hundreds of passionate individuals making a difference every day. Our WhatsApp community is just one tap away.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/join"
              className="bg-amber hover:bg-amber-light text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg"
            >
              Join Our Community
            </Link>
            <Link
              to="/donate"
              className="border border-white/40 text-white hover:bg-white/10 font-medium px-8 py-3.5 rounded-full transition-colors"
            >
              Support Our Cause
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}