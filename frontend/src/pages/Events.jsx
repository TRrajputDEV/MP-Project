import { useState } from 'react'

const allEvents = [
  { id: 1, title: 'Annual Community Gathering', date: '2025-04-15', location: 'City Park, Main Ground', type: 'upcoming', desc: 'Our flagship annual event bringing hundreds of community members together for a day of activities, sharing, and connection.', tags: ['Community', 'Family'] },
  { id: 2, title: 'Youth Leadership Workshop', date: '2025-03-28', location: 'Community Hall, Block B', type: 'upcoming', desc: 'A hands-on workshop empowering young voices with the skills to lead positive change in their neighbourhoods.', tags: ['Youth', 'Workshop'] },
  { id: 3, title: 'Spring Clean-Up Drive', date: '2025-03-10', location: 'Riverside Park', type: 'upcoming', desc: 'Join us as we clean up our local park and green spaces to make the city a better place for everyone.', tags: ['Environment', 'Volunteering'] },
  { id: 4, title: 'Winter Food Drive', date: '2024-12-10', location: 'District Centre', type: 'past', desc: 'Together we collected over 2,000 kg of food for families in need — a testament to what our community can achieve.', tags: ['Charity', 'Food'] },
  { id: 5, title: 'Culture & Heritage Fair', date: '2024-11-20', location: 'Town Square', type: 'past', desc: 'A vibrant celebration of our diverse cultural roots with performances, food stalls, and art exhibitions.', tags: ['Culture', 'Art'] },
  { id: 6, title: 'Digital Skills Bootcamp', date: '2024-10-05', location: 'Public Library, 2nd Floor', type: 'past', desc: 'We equipped 150+ community members with essential digital skills to thrive in the modern economy.', tags: ['Education', 'Tech'] },
  { id: 7, title: 'Tree Plantation Drive', date: '2024-08-15', location: 'Northern Boulevard', type: 'past', desc: 'We planted 500 saplings across the city to contribute to a greener, healthier environment.', tags: ['Environment'] },
]

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Events() {
  const [tab, setTab] = useState('upcoming')

  const filtered = allEvents.filter((e) => e.type === tab)

  return (
    <div className="min-h-screen bg-cream pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div style={{ width: 56, height: 3, background: '#e8973a', marginBottom: '0.75rem' }} />
          <h1 className="font-serif text-5xl text-charcoal mb-3">Our Events</h1>
          <p className="text-gray-500 text-lg max-w-xl">
            From workshops to drives, every event is an opportunity to connect, contribute, and grow together.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-10 bg-cream-dark w-fit p-1 rounded-full">
          {['upcoming', 'past'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all capitalize ${
                tab === t
                  ? 'bg-teal text-white shadow-md'
                  : 'text-gray-500 hover:text-charcoal'
              }`}
            >
              {t} Events
            </button>
          ))}
        </div>

        {/* Events grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <div className="text-5xl mb-4">📅</div>
            <p>No {tab} events at the moment. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event) => (
              <div key={event.id} className="event-card bg-white rounded-2xl overflow-hidden shadow-sm border border-cream-dark">
                {/* Top color bar */}
                <div
                  className="h-1.5"
                  style={{ background: tab === 'upcoming' ? '#1a6b5e' : '#8a6030' }}
                />

                {/* Image placeholder */}
                <div
                  className="h-44 flex items-center justify-center text-white/40 text-4xl"
                  style={{
                    background: tab === 'upcoming'
                      ? 'linear-gradient(135deg, #1a6b5e, #2a8f7f)'
                      : 'linear-gradient(135deg, #5a4020, #8a6030)',
                  }}
                >
                  📸
                </div>

                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                        style={{ background: '#e8f5f2', color: '#1a6b5e' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-xl mb-2">{event.title}</h3>
                  <p className="text-gray-500 text-sm mb-1">📅 {formatDate(event.date)}</p>
                  <p className="text-gray-500 text-sm mb-4">📍 {event.location}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}