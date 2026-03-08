import { useState } from 'react';
import { Link } from 'react-router-dom';

const events = [
  { 
    id: 1, 
    title: 'Community Health Camp', 
    date: '2026-07-20', 
    location: 'City Park, Main Ground',
    status: 'upcoming', 
    desc: 'Free health check-ups and consultation by certified doctors.', 
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 2, 
    title: 'Tree Plantation Drive', 
    date: '2025-06-10', 
    location: 'Riverbank, East District',
    status: 'past', 
    desc: '500 saplings planted along the riverbank in collaboration with local schools.', 
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 3, 
    title: 'Youth Skill Workshop', 
    date: '2026-08-15', 
    location: 'Community Hall, Block B',
    status: 'upcoming', 
    desc: 'Digital literacy and communication skills training for rural youth.', 
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800' 
  },
];

export default function EventsSection() {
  const [tab, setTab] = useState('upcoming');
  const filtered = events.filter((e) => e.status === tab);

  return (
    <section className="py-12 bg-ivory-dark relative border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div>
            <div className="w-12 h-1 rounded-full bg-crimson mb-3" />
            <h2 className="font-display text-3xl md:text-4xl text-charcoal font-bold">Our Events</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-1 bg-white border border-gray-200 p-1 rounded-full shadow-sm">
              {['upcoming', 'past'].map((v) => (
                <button 
                  key={v} 
                  onClick={() => setTab(v)} 
                  className={`px-5 py-1.5 rounded-full text-xs font-display font-bold transition-all capitalize ${tab === v ? 'bg-crimson text-white' : 'text-muted hover:text-charcoal'}`}
                >
                  {v}
                </button>
              ))}
            </div>
            <Link to="/events" className="hidden md:flex items-center gap-1 text-crimson font-display font-bold text-sm hover:text-crimson-dark transition-colors group">
              View All <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-10 text-muted font-body">No events found for this category.</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((ev) => (
              <Link 
                to={`/events/${ev.id}`} 
                key={ev.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 group flex flex-col cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img src={ev.image} alt={ev.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60" />
                  <span className={`absolute top-3 right-3 text-[10px] font-display font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-widest ${ev.status === 'upcoming' ? 'bg-crimson text-white' : 'bg-white text-charcoal'}`}>
                    {ev.status === 'upcoming' ? 'Upcoming' : 'Past'}
                  </span>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-lg text-charcoal mb-2 leading-tight group-hover:text-crimson">{ev.title}</h3>
                  <div className="flex flex-col gap-1.5 mb-3 text-muted">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-crimson flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      <span className="text-xs font-body font-medium">{ev.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-crimson flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      <span className="text-xs font-body font-medium">{ev.location}</span>
                    </div>
                  </div>
                  <p className="text-sm font-body leading-snug text-muted flex-grow">{ev.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}