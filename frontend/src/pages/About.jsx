const team = [
  { name: 'Arjun Mehta', role: 'Founder & Lead Organizer', initials: 'AM', color: '#8B0000' },
  { name: 'Priya Sharma', role: 'Events Coordinator', initials: 'PS', color: '#FF6600' },
  { name: 'Rohit Verma', role: 'Community Manager', initials: 'RV', color: '#CC5200' },
  { name: 'Ananya Singh', role: 'Outreach & Partnerships', initials: 'AS', color: '#5C0000' },
  { name: 'Karan Patel', role: 'Digital & Media', initials: 'KP', color: '#D4A017' },
  { name: 'Sneha Gupta', role: 'Volunteer Coordinator', initials: 'SG', color: '#3D0000' },
]

const milestones = [
  { year: '2019', label: 'Founded with 12 passionate members' },
  { year: '2020', label: 'First major food drive, 500 kg collected' },
  { year: '2021', label: 'Crossed 100 active members' },
  { year: '2022', label: 'Expanded to 5 cities' },
  { year: '2023', label: '50th event milestone celebrated' },
  { year: '2024', label: '500+ members, 12 cities, still growing' },
]

export default function About() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Banner */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3D0000 0%, #8B0000 50%, #CC5200 100%)' }}
      >
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 border-[50px] border-white" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="section-accent" />
          <h1 className="font-display text-5xl text-white mb-3">Our Story</h1>
          <p className="text-white/70 text-lg max-w-xl">
            Building community through service, culture and collective action since 2019.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L720 20L1440 60V60H0Z" fill="#FDF8F0"/></svg>
        </div>
      </section>

      {/* Story + Values */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-accent" />
            <h2 className="font-display text-4xl text-charcoal mb-5">How It Started</h2>
            <p className="text-muted leading-relaxed mb-4">
              Maharana Pratap Seva Samiti started in 2019 with a simple idea — what if ordinary people came together to do extraordinary things? A small group of 12 friends began organising neighbourhood events, and something remarkable happened: people showed up.
            </p>
            <p className="text-muted leading-relaxed">
              Five years later, we are 500+ strong, spanning 12 cities, having run over 80 events. But our heart remains the same — genuine connection, collective action, and the belief that community is the most powerful force for change.
            </p>
          </div>

          {/* Values */}
          <div className="space-y-4">
            {[
              { icon: '\u{1F33F}', title: 'Inclusivity', desc: 'Everyone belongs here, regardless of background.' },
              { icon: '\u{1F4A1}', title: 'Initiative', desc: 'We act, we do not wait for someone else to start.' },
              { icon: '\u{1F517}', title: 'Connection', desc: 'Relationships are the foundation of everything we do.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 bg-white border border-ivory-dark rounded-xl p-5 shadow-sm">
                <div className="text-2xl flex-shrink-0">{icon}</div>
                <div>
                  <h3 className="font-display text-lg text-charcoal">{title}</h3>
                  <p className="text-muted text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ivory-dark py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-accent mx-auto" style={{ margin: '0 auto 0.85rem' }} />
            <h2 className="font-display text-4xl text-charcoal">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-0.5 hidden md:block" style={{ background: '#d4ccbc' }} />
            <div className="space-y-6">
              {milestones.map(({ year, label }, i) => (
                <div
                  key={year}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white border border-ivory-dark rounded-xl p-4 shadow-sm inline-block">
                      <p className="text-muted text-sm">{label}</p>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-full text-white flex items-center justify-center font-display font-bold text-sm shadow-md z-10"
                    style={{ background: 'linear-gradient(135deg, #FF6600, #8B0000)' }}
                  >
                    {year}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="section-accent mx-auto" style={{ margin: '0 auto 0.85rem' }} />
          <h2 className="font-display text-4xl text-charcoal">Meet the Team</h2>
          <p className="text-muted mt-3">The passionate people behind every event and initiative</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map(({ name, role, initials, color }) => (
            <div key={name} className="bg-white border border-ivory-dark rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-display font-bold text-xl mx-auto mb-4"
                style={{ background: color }}
              >
                {initials}
              </div>
              <h3 className="font-display text-xl text-charcoal">{name}</h3>
              <p className="text-muted text-sm mt-1">{role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
