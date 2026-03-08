import { useState } from 'react'

const categories = ['all', 'events', 'community', 'nature', 'volunteers']

const photos = [
  { id: 1, cat: 'events', title: 'Health Camp 2024', gradient: 'linear-gradient(135deg, #FF6600, #8B0000)' },
  { id: 2, cat: 'community', title: 'Community Gathering', gradient: 'linear-gradient(135deg, #8B0000, #3D0000)' },
  { id: 3, cat: 'nature', title: 'Tree Plantation Drive', gradient: 'linear-gradient(135deg, #CC5200, #D4A017)' },
  { id: 4, cat: 'volunteers', title: 'Volunteer Team', gradient: 'linear-gradient(135deg, #5C0000, #FF6600)' },
  { id: 5, cat: 'events', title: 'Skill Workshop', gradient: 'linear-gradient(135deg, #D4A017, #CC5200)' },
  { id: 6, cat: 'community', title: 'Diwali Celebration', gradient: 'linear-gradient(135deg, #FF6600, #D4A017)' },
  { id: 7, cat: 'nature', title: 'River Cleanup', gradient: 'linear-gradient(135deg, #3D0000, #8B0000)' },
  { id: 8, cat: 'volunteers', title: 'Training Session', gradient: 'linear-gradient(135deg, #8B0000, #CC5200)' },
  { id: 9, cat: 'events', title: 'Blood Donation Camp', gradient: 'linear-gradient(135deg, #CC5200, #5C0000)' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = filter === 'all' ? photos : photos.filter((p) => p.cat === filter)

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
          <h1 className="font-display text-5xl text-white mb-3">Gallery</h1>
          <p className="text-white/70 text-lg max-w-xl">Glimpses of our events, initiatives and the vibrant community in action.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L720 20L1440 60V60H0Z" fill="#FDF8F0"/></svg>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-colors ${
                filter === c
                  ? 'bg-saffron text-white'
                  : 'bg-ivory-dark text-muted hover:bg-saffron/10 hover:text-saffron'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              style={{ background: p.gradient }}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs bg-white/20 text-white backdrop-blur-sm px-3 py-1 rounded-full capitalize">
                  {p.cat}
                </span>
                <h3 className="font-display text-white text-lg mt-2">{p.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video" style={{ background: selected.gradient }} />
            <div className="bg-white p-6">
              <span className="text-xs bg-saffron/10 text-saffron font-semibold px-3 py-1 rounded-full capitalize">{selected.cat}</span>
              <h3 className="font-display text-2xl text-charcoal mt-3">{selected.title}</h3>
              <p className="text-muted text-sm mt-2">Photos will be uploaded here. This is a placeholder view.</p>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white text-lg flex items-center justify-center hover:bg-black/70"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
