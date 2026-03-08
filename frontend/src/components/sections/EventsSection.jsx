import { useState } from 'react'
import { Link } from 'react-router-dom'

const events = [
  {
    id: 1,
    titleHi: 'वार्षिक महोत्सव',
    titleEn: 'Annual Festival',
    date: 'April 15, 2025',
    location: 'City Park, Main Ground',
    type: 'upcoming',
    desc: 'हमारे वार्षिक महोत्सव में शामिल हों — सांस्कृतिक कार्यक्रम, प्रतियोगिताएं और भव्य आयोजन।',
    descEn: 'Join our grand annual festival — cultural programs, competitions and celebrations.',
  },
  {
    id: 2,
    titleHi: 'युवा नेतृत्व कार्यशाला',
    titleEn: 'Youth Leadership Workshop',
    date: 'March 28, 2025',
    location: 'Community Hall, Block B',
    type: 'upcoming',
    desc: 'युवाओं को नेतृत्व कौशल प्रदान करने वाली एक अनूठी कार्यशाला।',
    descEn: 'A unique workshop empowering youth with leadership skills.',
  },
  {
    id: 3,
    titleHi: 'शीतकालीन खाद्य वितरण',
    titleEn: 'Winter Food Drive',
    date: 'December 10, 2024',
    location: 'District Centre',
    type: 'past',
    desc: '2,000 किलोग्राम से अधिक खाद्य सामग्री जरूरतमंद परिवारों को वितरित की गई।',
    descEn: 'Over 2,000 kg of food distributed to families in need.',
  },
]

export default function EventsSection() {
  const [tab, setTab] = useState('upcoming')
  const filtered = events.filter(e => e.type === tab)

  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="section-accent" />
            <h2 className="font-display text-3xl md:text-4xl text-charcoal">
              Our Events
            </h2>
            <p
              className="text-muted mt-1"
              style={{ fontFamily: 'Noto Sans Devanagari, Mukta, sans-serif' }}
            >
              हमारे कार्यक्रम
            </p>
          </div>
          <Link
            to="/events"
            className="text-saffron text-sm font-display font-semibold hover:text-crimson transition-colors self-start md:self-auto"
          >
            सभी देखें / View All →
          </Link>
        </div>

        {/* Tab toggle */}
        <div className="flex gap-1 mb-10 bg-ivory-dark w-fit p-1 rounded-full">
          {[
            { val: 'upcoming', labelHi: 'आगामी', labelEn: 'Upcoming' },
            { val: 'past',     labelHi: 'पिछले',  labelEn: 'Past' },
          ].map(({ val, labelHi, labelEn }) => (
            <button
              key={val}
              onClick={() => setTab(val)}
              className={`px-6 py-2.5 rounded-full text-sm font-display font-semibold transition-all ${
                tab === val
                  ? 'text-white shadow-md'
                  : 'text-muted hover:text-charcoal'
              }`}
              style={tab === val ? { background: 'linear-gradient(135deg, #FF6600, #8B0000)' } : {}}
            >
              {labelHi} / {labelEn}
            </button>
          ))}
        </div>

        {/* Event cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((ev) => (
            <div
              key={ev.id}
              className="event-card bg-white rounded-2xl overflow-hidden shadow-sm border border-ivory-dark"
            >
              {/* Color top bar */}
              <div
                className="h-1.5"
                style={{ background: ev.type === 'upcoming'
                  ? 'linear-gradient(to right, #FF6600, #8B0000)'
                  : 'linear-gradient(to right, #8B0000, #5C0000)' }}
              />

              {/* Image placeholder — replace with <img> when images available */}
              <div
                className="h-44 flex items-center justify-center text-white/20 text-5xl relative overflow-hidden"
                style={{ background: ev.type === 'upcoming'
                  ? 'linear-gradient(135deg, #8B0000, #FF6600)'
                  : 'linear-gradient(135deg, #3D0000, #8B0000)' }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                </svg>
                {/* Type badge */}
                <span
                  className="absolute top-3 right-3 text-xs font-display font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: 'rgba(0,0,0,0.3)',
                    color: ev.type === 'upcoming' ? '#FF8533' : '#DDD',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {ev.type === 'upcoming' ? 'Upcoming' : 'Past'}
                </span>
              </div>

              <div className="p-5">
                <h3
                  className="font-semibold text-charcoal mb-0.5"
                  style={{ fontFamily: 'Noto Sans Devanagari, Mukta, sans-serif', fontSize: '1.05rem' }}
                >
                  {ev.titleHi}
                </h3>
                <p className="font-display text-xs text-saffron mb-3">{ev.titleEn}</p>
                <p className="text-muted text-xs mb-0.5">📅 {ev.date}</p>
                <p className="text-muted text-xs mb-3">📍 {ev.location}</p>
                <p
                  className="text-sm leading-relaxed text-muted"
                  style={{ fontFamily: 'Noto Sans Devanagari, Mukta, sans-serif' }}
                >
                  {ev.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}