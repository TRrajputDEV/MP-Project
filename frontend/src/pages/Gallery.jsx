import { useState, useEffect } from 'react';

const categories = ['all', 'events', 'community', 'nature', 'volunteers'];

// Replaced gradients with high-quality placeholder images
const photos = [
  { id: 1, cat: 'events', title: 'Health Camp 2026', url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800' },
  { id: 2, cat: 'community', title: 'Community Gathering', url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800' },
  { id: 3, cat: 'nature', title: 'Tree Plantation Drive', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800' },
  { id: 4, cat: 'volunteers', title: 'Volunteer Team', url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800' },
  { id: 5, cat: 'events', title: 'Skill Workshop', url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800' },
  { id: 6, cat: 'community', title: 'Diwali Celebration', url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800' },
  { id: 7, cat: 'nature', title: 'River Cleanup', url: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=800' },
  { id: 8, cat: 'volunteers', title: 'Training Session', url: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80&w=800' },
  { id: 9, cat: 'events', title: 'Blood Donation Camp', url: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=800' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'all' ? photos : photos.filter((p) => p.cat === filter);

  // Snap to top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selected]);

  return (
    <div className="min-h-screen bg-ivory pb-24">
      
      {/* ── Hero Section ── */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-crimson-dark via-crimson to-saffron">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 border-[50px] border-white" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="w-16 h-1 rounded-full bg-white mb-6" />
          <h1 className="font-display text-5xl md:text-6xl text-ivory font-bold mb-4 drop-shadow-md">Photo Gallery</h1>
          <p className="text-ivory-dark/90 text-xl max-w-2xl font-body leading-relaxed">
            Glimpses of our events, initiatives, and the vibrant community in action.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-1">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L720 20L1440 60V60H0Z" fill="var(--ivory)"/></svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        
        {/* ── Filter Pills ── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-6 py-2 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === c
                  ? 'bg-crimson text-white shadow-md'
                  : 'bg-white border border-gray-200 text-muted hover:border-saffron/50 hover:text-saffron'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* ── Photo Grid ── */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted font-body">No photos found for this category.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelected(p)}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-zoom-in block w-full text-left focus:outline-none focus:ring-2 focus:ring-crimson/50"
              >
                <img 
                  src={p.url} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-display font-bold uppercase tracking-widest bg-white/20 text-white backdrop-blur-md mb-3 border border-white/10">
                    {p.cat}
                  </span>
                  <h3 className="font-display text-white text-xl md:text-2xl font-bold leading-tight drop-shadow-sm">
                    {p.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Enhanced Lightbox Modal ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-charcoal/95 backdrop-blur-sm transition-opacity"
          onClick={() => setSelected(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl bg-charcoal" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 hover:scale-105 transition-all backdrop-blur-md border border-white/10"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* Image Area */}
            <div className="flex-1 min-h-0 relative bg-black/50 flex items-center justify-center overflow-hidden">
               <img 
                src={selected.url} 
                alt={selected.title} 
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            {/* Info Bar */}
            <div className="bg-white p-6 md:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-shrink-0">
              <div>
                <h3 className="font-display text-2xl text-charcoal font-bold">{selected.title}</h3>
                <p className="text-muted font-body text-sm mt-1">High-resolution image view.</p>
              </div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-display font-bold uppercase tracking-widest bg-crimson/10 text-crimson border border-crimson/10 self-start sm:self-auto">
                {selected.cat}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}