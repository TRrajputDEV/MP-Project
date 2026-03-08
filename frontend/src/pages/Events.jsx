import { useState } from 'react'

const events = [
  { id: 1, title: 'Community Health Camp', date: '2024-07-20', category: 'health', desc: 'Free health check-ups and consultation by certified doctors for underserved communities.', status: 'upcoming' },
  { id: 2, title: 'Tree Plantation Drive', date: '2024-06-10', category: 'environment', desc: '500 saplings planted along the riverbank in collaboration with local schools.', status: 'past' },
  { id: 3, title: 'Youth Skill Workshop', date: '2024-08-15', category: 'education', desc: 'Digital literacy and communication skills training for rural youth.', status: 'upcoming' },
  { id: 4, title: 'Diwali Food Distribution', date: '2023-11-12', category: 'food', desc: 'Distributed 2,000 meal packets across 6 localities during the festive season.', status: 'past' },
  { id: 5, title: 'Blood Donation Camp', date: '2024-05-01', category: 'health', desc: 'Over 120 units of blood collected in partnership with local hospitals.', status: 'past' },
  { id: 6, title: 'Clean River Campaign', date: '2024-09-05', category: 'environment', desc: 'A 3-day clean-up campaign to restore the local river ecosystem.', status: 'upcoming' },
]

const cats = ['all', 'health', 'environment', 'education', 'food']

export default function Events() {
  const [tab, setTab] = useState('all')
  const [view, setView] = useState('upcoming')

  const filtered = events.filter(
    (e) => (tab === 'all' || e.category === tab) && e.status === view
  )

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3D0000 0%, #8B0000 50%, #CC5200 100%)' }}
      >
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 border-[50px] border-white" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="section-accent" />
          <h1 className="font-display text-5xl text-white mb-3">Events</h1>
          <p className="text-white/70 text-lg max-w-xl">Explore our upcoming drives and past initiatives that have made a difference.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L720 20L1440 60V60H0Z" fill="#FDF8F0"/></svg>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Toggle upcoming / past */}
        <div className="flex gap-3 mb-8">
          {['upcoming', 'past'].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-5 py-2 rounded-full text-sm font-display font-semibold transition-all capitalize ${
                view === v
                  ? 'text-white shadow-md'
                  : 'bg-ivory-dark text-muted hover:bg-ivory-dark/80'
              }`}
              style={view === v ? { background: 'linear-gradient(135deg, #FF6600, #8B0000)' } : {}}
            >
              {v}
            </button>
          ))}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setTab(c)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-colors ${
                tab === c
                  ? 'bg-saffron text-white'
                  : 'bg-ivory-dark text-muted hover:bg-saffron/10 hover:text-saffron'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Event cards */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted">No events found for this filter.</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((e) => (
              <div
                key={e.id}
                className="bg-white border border-ivory-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Gradient top bar */}
                <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #FF6600, #8B0000)' }} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-saffron/10 text-saffron font-semibold px-3 py-1 rounded-full capitalize">
                      {e.category}
                    </span>
                    <span className="text-xs text-muted">
                      {new Date(e.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-2">{e.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
