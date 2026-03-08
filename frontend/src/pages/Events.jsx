import { useState, useEffect } from 'react';

// Added placeholder images and updated dates to match realistic upcoming/past scenarios
const events = [
  { id: 1, title: 'Community Health Camp', date: '2026-07-20', category: 'health', desc: 'Free health check-ups and consultation by certified doctors for underserved communities.', status: 'upcoming', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Tree Plantation Drive', date: '2025-06-10', category: 'environment', desc: '500 saplings planted along the riverbank in collaboration with local schools.', status: 'past', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Youth Skill Workshop', date: '2026-08-15', category: 'education', desc: 'Digital literacy and communication skills training for rural youth.', status: 'upcoming', image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Diwali Food Distribution', date: '2025-11-12', category: 'food', desc: 'Distributed 2,000 meal packets across 6 localities during the festive season.', status: 'past', image: 'https://images.unsplash.com/photo-1593113563332-e147ce10091a?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Blood Donation Camp', date: '2025-05-01', category: 'health', desc: 'Over 120 units of blood collected in partnership with local hospitals.', status: 'past', image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Clean River Campaign', date: '2026-09-05', category: 'environment', desc: 'A 3-day clean-up campaign to restore the local river ecosystem.', status: 'upcoming', image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=800' },
];

const cats = ['all', 'health', 'environment', 'education', 'food'];

export default function Events() {
  const [tab, setTab] = useState('all');
  const [view, setView] = useState('upcoming');

  const filtered = events.filter(
    (e) => (tab === 'all' || e.category === tab) && e.status === view
  );

  // Snap to top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory pb-24">
      
      {/* ── Hero Section ── */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-crimson-dark via-crimson to-saffron">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 border-[50px] border-white" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="w-16 h-1 rounded-full bg-white mb-6" />
          <h1 className="font-display text-5xl md:text-6xl text-ivory font-bold mb-4 drop-shadow-md">Events & Drives</h1>
          <p className="text-ivory-dark/90 text-xl max-w-2xl font-body leading-relaxed">
            Explore our upcoming initiatives and review the past events that have created a lasting impact in our communities.
          </p>
        </div>
        {/* Ivory curve at the bottom to transition smoothly into the content */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L720 20L1440 60V60H0Z" fill="var(--ivory)"/></svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        
        {/* ── Filters & Controls ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          
          {/* Upcoming / Past Toggle */}
          <div className="flex gap-2 bg-white border border-gray-200 p-1.5 rounded-full shadow-sm w-full md:w-auto overflow-x-auto">
            {['upcoming', 'past'].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-8 py-2.5 rounded-full text-sm font-display font-bold transition-all duration-300 capitalize whitespace-nowrap ${
                  view === v
                    ? 'bg-crimson text-white shadow-md'
                    : 'text-muted hover:text-charcoal hover:bg-gray-50'
                }`}
              >
                {v} Events
              </button>
            ))}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setTab(c)}
                className={`px-5 py-2 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 ${
                  tab === c
                    ? 'bg-saffron text-white shadow-md'
                    : 'bg-white border border-gray-200 text-muted hover:border-saffron/50 hover:text-saffron'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* ── Event Cards Grid ── */}
        {filtered.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="font-display text-2xl text-charcoal font-bold mb-2">No Events Found</h3>
            <p className="text-muted font-body">We couldn't find any events matching your selected category.</p>
            <button 
              onClick={() => setTab('all')}
              className="mt-6 text-saffron font-bold font-body hover:text-crimson transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((e) => (
              <div
                key={e.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full"
              >
                {/* Image Area */}
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  <img 
                    src={e.image} 
                    alt={e.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient for better visual weight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                  
                  {/* Category Badge floated over the image */}
                  <span className="absolute top-4 left-4 text-xs font-display font-bold px-4 py-1.5 rounded-full bg-white/95 text-crimson shadow-sm uppercase tracking-wider backdrop-blur-md">
                    {e.category}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Date Block */}
                  <div className="flex items-center gap-3 mb-4 text-muted">
                    <svg className="w-4 h-4 text-saffron flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span className="text-sm font-body font-medium">
                      {new Date(e.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-2xl text-charcoal font-bold mb-3 group-hover:text-crimson transition-colors leading-tight">
                    {e.title}
                  </h3>
                  
                  <p className="text-muted font-body text-base leading-relaxed flex-grow">
                    {e.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}