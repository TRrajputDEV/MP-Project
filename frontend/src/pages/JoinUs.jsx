const reasons = [
  { icon: '🌱', title: 'Grow Together', desc: 'Learn from others, share your skills, and build something bigger than yourself.' },
  { icon: '🤝', title: 'Real Connections', desc: 'Meet genuine, like-minded people in your city who care about the same things you do.' },
  { icon: '📢', title: 'Your Voice Matters', desc: 'Have a say in what events we organise and causes we rally around.' },
  { icon: '🎉', title: 'Exclusive Access', desc: 'Be the first to know about events, initiatives, and opportunities in the community.' },
]

export default function JoinUs() {
  const WHATSAPP_LINK = 'https://chat.whatsapp.com/YOUR_GROUP_INVITE_LINK'

  return (
    <div className="min-h-screen bg-cream pt-28 pb-20">
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden grain"
        style={{ background: 'linear-gradient(135deg, #0f4a40 0%, #1a6b5e 100%)' }}
      >
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-white/5 border-[30px] border-white/5" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to everyone
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-5">
            Be Part of <span className="italic text-amber">Our Story</span>
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-xl mx-auto">
            We're more than a group — we're a movement. Whether you want to volunteer, contribute ideas, or simply belong to something meaningful, there's a place for you here.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60L720 20L1440 60V60H0V60Z" fill="#f9f5ef"/>
          </svg>
        </div>
      </section>

      {/* Why join */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div style={{ width: 56, height: 3, background: '#e8973a', margin: '0 auto 1rem' }} />
          <h2 className="font-serif text-4xl text-charcoal">Why Join Us?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white border border-cream-dark rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-serif text-xl mb-2 text-charcoal">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-charcoal mb-6 text-center">What to Expect</h2>
          <div className="space-y-4">
            {[
              'Regular updates about upcoming events and initiatives',
              'Open discussions and polls on community decisions',
              'Volunteer opportunities and skill-sharing sessions',
              'A respectful, inclusive space for everyone',
              'Connections with community leaders and changemakers',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 shadow-sm">
                <span className="w-6 h-6 rounded-full bg-teal/10 text-teal flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                <p className="text-gray-600 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="bg-white border border-cream-dark rounded-3xl p-10 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#25d366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          <h2 className="font-serif text-3xl text-charcoal mb-3">Join Our WhatsApp Community</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            One tap is all it takes. Join hundreds of active members already making a difference in our shared WhatsApp group.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg text-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Join on WhatsApp
          </a>
          <p className="text-gray-400 text-xs mt-4">Free to join · No spam · Leave anytime</p>
        </div>
      </section>
    </div>
  )
}