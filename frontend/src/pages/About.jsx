import { useEffect } from 'react';

// Replaced hex colors with our clean Tailwind classes
const team = [
  { name: 'Arjun Mehta', role: 'Founder & Lead Organizer', initials: 'AM', bgClass: 'bg-crimson-dark' },
  { name: 'Priya Sharma', role: 'Events Coordinator', initials: 'PS', bgClass: 'bg-saffron' },
  { name: 'Rohit Verma', role: 'Community Manager', initials: 'RV', bgClass: 'bg-charcoal' },
  { name: 'Ananya Singh', role: 'Outreach & Partnerships', initials: 'AS', bgClass: 'bg-crimson' },
  { name: 'Karan Patel', role: 'Digital & Media', initials: 'KP', bgClass: 'bg-saffron-dark' },
  { name: 'Sneha Gupta', role: 'Volunteer Coordinator', initials: 'SG', bgClass: 'bg-muted' },
];

const milestones = [
  { year: '2019', label: 'Founded with 12 passionate members' },
  { year: '2020', label: 'First major food drive, 500 kg collected' },
  { year: '2021', label: 'Crossed 100 active members' },
  { year: '2022', label: 'Expanded to 5 cities' },
  { year: '2023', label: '50th event milestone celebrated' },
  { year: '2024', label: '500+ members, 12 cities, still growing' },
];

export default function About() {
  // Always snap to the top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory pb-24">
      
      {/* ── Hero Banner ── */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-crimson-dark via-crimson to-saffron">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 border-[50px] border-white" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="w-16 h-1 rounded-full bg-white mb-6" />
          <h1 className="font-display text-5xl md:text-6xl text-ivory font-bold mb-4 drop-shadow-md">Our Story</h1>
          <p className="text-ivory-dark/90 text-xl max-w-2xl font-body leading-relaxed">
            Building community through service, culture, and collective action since 2019.
          </p>
        </div>
        {/* Ivory curve to transition into content */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L720 20L1440 60V60H0Z" fill="var(--ivory)"/></svg>
        </div>
      </section>

      {/* ── Story + Values ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Story Text */}
          <div>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-saffron to-crimson mb-6" />
            <h2 className="font-display text-4xl md:text-5xl text-charcoal font-bold mb-6">How It Started</h2>
            <div className="space-y-6 font-body text-lg text-muted leading-relaxed">
              <p>
                Maharana Pratap Seva Samiti started in 2019 with a simple idea — what if ordinary people came together to do extraordinary things? A small group of 12 friends began organising neighbourhood events, and something remarkable happened: people showed up.
              </p>
              <p>
                Five years later, we are 500+ strong, spanning 12 cities, having run over 80 events. But our heart remains the same — genuine connection, collective action, and the belief that community is the most powerful force for change.
              </p>
            </div>
          </div>

          {/* Values (Replaced emojis with clean SVGs) */}
          <div className="space-y-5">
            {[
              { 
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />, 
                title: 'Inclusivity', 
                desc: 'Everyone belongs here, regardless of background or status.' 
              },
              { 
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />, 
                title: 'Initiative', 
                desc: 'We act. We do not wait for someone else to start the change.' 
              },
              { 
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />, 
                title: 'Connection', 
                desc: 'Genuine relationships are the foundation of everything we do.' 
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-5 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center text-saffron flex-shrink-0 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-charcoal mb-2">{title}</h3>
                  <p className="text-muted font-body text-base leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-white border-y border-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-saffron to-crimson mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl text-charcoal font-bold">Our Journey</h2>
          </div>
          
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-0.5 hidden md:block bg-gray-200" />
            
            <div className="space-y-12">
              {milestones.map(({ year, label }, i) => (
                <div key={year} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Card */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-ivory border border-gray-100 rounded-2xl p-5 shadow-sm inline-block hover:shadow-md transition-shadow">
                      <p className="text-charcoal font-body text-base font-medium">{label}</p>
                    </div>
                  </div>
                  
                  {/* Milestone Circle */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full text-white flex items-center justify-center font-display font-bold text-lg shadow-md z-10 bg-crimson border-4 border-white">
                    {year}
                  </div>
                  
                  {/* Spacer for the other side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-saffron to-crimson mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl text-charcoal font-bold">Meet the Team</h2>
          <p className="text-muted font-body text-lg mt-4">The passionate people driving our initiatives forward.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map(({ name, role, initials, bgClass }) => (
            <div key={name} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white font-display font-bold text-3xl mx-auto mb-6 shadow-inner ${bgClass}`}>
                {initials}
              </div>
              <h3 className="font-display font-bold text-2xl text-charcoal mb-1 group-hover:text-crimson transition-colors">{name}</h3>
              <p className="text-saffron font-body text-sm font-bold uppercase tracking-wider">{role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}