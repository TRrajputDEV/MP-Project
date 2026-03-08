import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Expanded mock data (In a real app, you'd fetch this from a database)
const events = [
  { 
    id: 1, 
    title: 'Community Health Camp', 
    date: 'July 20, 2026', 
    time: '9:00 AM - 4:00 PM',
    location: 'City Park, Main Ground',
    status: 'upcoming', 
    category: 'Health',
    desc: 'Free health check-ups and consultation by certified doctors.', 
    fullDesc: 'Join us for our comprehensive Community Health Camp. We have partnered with City Hospital to bring 15 certified doctors and specialists to provide free check-ups, basic medication, and health counseling to underserved families. Services include general check-ups, eye exams, and pediatric consultations. No prior registration is required for patients, but volunteers are requested to arrive by 8:00 AM for setup.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: 2, 
    title: 'Tree Plantation Drive', 
    date: 'June 10, 2025', 
    time: '7:00 AM - 11:00 AM',
    location: 'Riverbank, East District',
    status: 'past', 
    category: 'Environment',
    desc: '500 saplings planted along the riverbank in collaboration with local schools.',
    fullDesc: 'Our annual Tree Plantation Drive was a massive success! With the help of 200+ volunteers from Apex Schools, we successfully planted 500 native saplings along the eastern riverbank to prevent soil erosion and improve local air quality. We also distributed plant-care kits to local residents who pledged to water the saplings during the dry season.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: 3, 
    title: 'Youth Skill Workshop', 
    date: 'August 15, 2026', 
    time: '10:00 AM - 2:00 PM',
    location: 'Community Hall, Block B',
    status: 'upcoming', 
    category: 'Education',
    desc: 'Digital literacy and communication skills training for rural youth.',
    fullDesc: 'Empowering the next generation. This intensive 4-hour workshop is designed for youth aged 16-22 from rural areas. We will cover basic digital literacy, resume building, and professional communication skills. Laptops will be provided during the session. We are currently looking for IT professionals and HR executives to volunteer as mentors for this event.',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200' 
  },
];

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  // Snap to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen bg-ivory flex flex-col items-center justify-center text-center px-6">
        <h2 className="font-display text-4xl text-charcoal font-bold mb-4">Event Not Found</h2>
        <p className="text-muted font-body mb-8">The event you are looking for does not exist or has been removed.</p>
        <Link to="/events" className="px-8 py-3 bg-crimson text-white font-display font-bold rounded-xl hover:bg-crimson-dark transition-colors">
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory pb-24">
      
      {/* ── Event Hero ── */}
      <section className="relative h-[50vh] min-h-[400px] w-full bg-charcoal">
        <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pb-12">
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-display font-bold uppercase tracking-widest mb-4 shadow-sm ${event.status === 'upcoming' ? 'bg-saffron text-white' : 'bg-white text-charcoal'}`}>
              {event.status === 'upcoming' ? 'Upcoming Event' : 'Past Event'}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 leading-tight drop-shadow-md">
              {event.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ── Event Content ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Main Description (Left Column) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              <h3 className="font-display text-2xl text-charcoal font-bold mb-6">About the Event</h3>
              <p className="text-muted font-body text-lg leading-relaxed whitespace-pre-line">
                {event.fullDesc}
              </p>
            </div>
          </div>

          {/* Sticky Sidebar (Right Column) */}
          <div className="lg:col-span-1 space-y-6 sticky top-24">
            
            {/* Quick Info Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h4 className="font-display text-xl text-charcoal font-bold mb-6">Event Details</h4>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center text-saffron flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted font-bold uppercase tracking-wider mb-0.5">Date</p>
                    <p className="text-charcoal font-body font-medium">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center text-saffron flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted font-bold uppercase tracking-wider mb-0.5">Time</p>
                    <p className="text-charcoal font-body font-medium">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center text-crimson flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted font-bold uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-charcoal font-body font-medium leading-snug">{event.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Card */}
            {event.status === 'upcoming' ? (
              <div className="bg-charcoal rounded-3xl p-8 shadow-md border border-gray-800 relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-crimson rounded-full blur-[60px] opacity-30 pointer-events-none" />
                <h4 className="font-display text-2xl text-white font-bold mb-3 relative z-10">Get Involved</h4>
                <p className="text-white/70 font-body text-sm mb-6 relative z-10">We need hands on the ground to make this event a success.</p>
                <Link to="/join" className="block w-full py-3.5 bg-crimson text-white font-display font-bold rounded-xl hover:bg-crimson-dark transition-colors relative z-10 shadow-lg hover:-translate-y-0.5">
                  Register to Volunteer
                </Link>
              </div>
            ) : (
              <div className="bg-ivory-dark rounded-3xl p-8 shadow-sm border border-gray-200 text-center">
                <h4 className="font-display text-xl text-charcoal font-bold mb-2">Event Concluded</h4>
                <p className="text-muted font-body text-sm mb-6">Thank you to everyone who made this possible.</p>
                <Link to="/gallery" className="block w-full py-3 bg-white border border-gray-200 text-charcoal font-display font-bold rounded-xl hover:border-saffron hover:text-saffron transition-colors">
                  View Gallery
                </Link>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}