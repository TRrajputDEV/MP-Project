import { useState } from 'react'

const eventFilters = ['All', 'Annual Gathering', 'Food Drive', 'Culture Fair', 'Workshops', 'Clean-Up Drive']

const photos = [
  { id: 1, event: 'Annual Gathering', caption: 'Community gathering 2024', span: 'col-span-2' },
  { id: 2, event: 'Food Drive', caption: 'Volunteers sorting donations', span: '' },
  { id: 3, event: 'Culture Fair', caption: 'Cultural performances', span: '' },
  { id: 4, event: 'Workshops', caption: 'Youth workshop session', span: '' },
  { id: 5, event: 'Food Drive', caption: 'Food distribution day', span: '' },
  { id: 6, event: 'Annual Gathering', caption: 'Group photo 2024', span: 'row-span-2' },
  { id: 7, event: 'Clean-Up Drive', caption: 'Riverside clean-up', span: '' },
  { id: 8, event: 'Culture Fair', caption: 'Art exhibition stalls', span: 'col-span-2' },
  { id: 9, event: 'Workshops', caption: 'Digital skills training', span: '' },
  { id: 10, event: 'Annual Gathering', caption: 'Opening ceremony', span: '' },
  { id: 11, event: 'Clean-Up Drive', caption: 'Before and after', span: '' },
  { id: 12, event: 'Food Drive', caption: '2000kg milestone!', span: '' },
]

const gradients = [
  'linear-gradient(135deg, #1a6b5e, #2a8f7f)',
  'linear-gradient(135deg, #e8973a, #f5b563)',
  'linear-gradient(135deg, #0f4a40, #1a6b5e)',
  'linear-gradient(135deg, #5a4020, #8a6030)',
  'linear-gradient(135deg, #2a3a5e, #3a5a8f)',
  'linear-gradient(135deg, #5a1a5e, #8f2a8f)',
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? photos : photos.filter((p) => p.event === active)

  return (
    <div className="min-h-screen bg-cream pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div style={{ width: 56, height: 3, background: '#e8973a', marginBottom: '0.75rem' }} />
          <h1 className="font-serif text-5xl text-charcoal mb-3">Gallery</h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Moments that define us — captured from events, drives, and gatherings across the years.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {eventFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? 'bg-teal text-white shadow-md'
                  : 'bg-cream-dark text-gray-600 hover:text-charcoal'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((photo, i) => (
            <div
              key={photo.id}
              className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden shadow-sm"
              onClick={() => setLightbox(photo)}
            >
              <div
                className="w-full flex items-center justify-center text-white/30 text-5xl transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: gradients[i % gradients.length],
                  height: (i % 3 === 0) ? '260px' : '180px',
                }}
              >
                🖼️
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <div className="p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                  <p className="text-white/70 text-xs mt-0.5">{photo.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-gray-400">
            <div className="text-5xl mb-4">🖼️</div>
            <p>No photos for this event yet.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full h-80 flex items-center justify-center text-white/30 text-6xl"
              style={{ background: gradients[lightbox.id % gradients.length] }}
            >
              🖼️
            </div>
            <div className="p-6 flex items-start justify-between">
              <div>
                <p className="font-serif text-xl text-charcoal">{lightbox.caption}</p>
                <p className="text-gray-500 text-sm mt-1">{lightbox.event}</p>
              </div>
              <button onClick={() => setLightbox(null)} className="text-gray-400 hover:text-charcoal text-2xl">✕</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}