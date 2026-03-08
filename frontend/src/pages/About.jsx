const team = [
  { name: 'Arjun Mehta', role: 'Founder & Lead Organizer', initials: 'AM', color: '#1a6b5e' },
  { name: 'Priya Sharma', role: 'Events Coordinator', initials: 'PS', color: '#e8973a' },
  { name: 'Rohit Verma', role: 'Community Manager', initials: 'RV', color: '#0f4a40' },
  { name: 'Ananya Singh', role: 'Outreach & Partnerships', initials: 'AS', color: '#5a4020' },
  { name: 'Karan Patel', role: 'Digital & Media', initials: 'KP', color: '#2a3a5e' },
  { name: 'Sneha Gupta', role: 'Volunteer Coordinator', initials: 'SG', color: '#5a1a3e' },
]

const milestones = [
  { year: '2019', label: 'Founded with 12 passionate members' },
  { year: '2020', label: 'First major food drive, 500kg collected' },
  { year: '2021', label: 'Crossed 100 active members' },
  { year: '2022', label: 'Expanded to 5 cities' },
  { year: '2023', label: '50th event milestone celebrated' },
  { year: '2024', label: '500+ members, 12 cities, still growing' },
]

export default function About() {
  return (
    <div className="min-h-screen bg-cream pt-28 pb-20">

      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div style={{ width: 56, height: 3, background: '#e8973a', marginBottom: '0.75rem' }} />
            <h1 className="font-serif text-5xl text-charcoal mb-5">Our Story</h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              CommunityConnect started in 2019 with a simple idea — what if ordinary people came together to do extraordinary things? A small group of 12 friends began organising neighbourhood events, and something remarkable happened: people showed up.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Five years later, we're 500+ strong, spanning 12 cities, having run over 80 events. But our heart remains the same — genuine connection, collective action, and the belief that community is the most powerful force for change.
            </p>
          </div>

          {/* Values */}
          <div className="space-y-4">
            {[
              { icon: '🌿', title: 'Inclusivity', desc: 'Everyone belongs here, regardless of background.' },
              { icon: '💡', title: 'Initiative', desc: 'We act, we don\'t wait for someone else to start.' },
              { icon: '🔗', title: 'Connection', desc: 'Relationships are the foundation of everything we do.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 bg-white border border-cream-dark rounded-xl p-4 shadow-sm">
                <div className="text-2xl flex-shrink-0">{icon}</div>
                <div>
                  <h3 className="font-semibold text-charcoal">{title}</h3>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream-dark py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div style={{ width: 56, height: 3, background: '#e8973a', margin: '0 auto 1rem' }} />
            <h2 className="font-serif text-4xl text-charcoal">Our Journey</h2>
          </div>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-cream-dark -translate-x-0.5 hidden md:block" style={{ background: '#d4ccbc' }} />
            <div className="space-y-6">
              {milestones.map(({ year, label }, i) => (
                <div
                  key={year}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white border border-cream-dark rounded-xl p-4 shadow-sm inline-block">
                      <p className="text-gray-600 text-sm">{label}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-teal text-white flex items-center justify-center font-serif font-bold text-sm shadow-md z-10">
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
          <div style={{ width: 56, height: 3, background: '#e8973a', margin: '0 auto 1rem' }} />
          <h2 className="font-serif text-4xl text-charcoal">Meet the Team</h2>
          <p className="text-gray-500 mt-3">The passionate people behind every event and initiative</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map(({ name, role, initials, color }) => (
            <div key={name} className="bg-white border border-cream-dark rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl mx-auto mb-4"
                style={{ background: color }}
              >
                {initials}
              </div>
              <h3 className="font-serif text-xl text-charcoal">{name}</h3>
              <p className="text-gray-500 text-sm mt-1">{role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}