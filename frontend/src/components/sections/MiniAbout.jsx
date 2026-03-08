import { Link } from 'react-router-dom'

export default function MiniAbout() {
  return (
    <section className="py-20 bg-ivory-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* ── Left: Image ── */}
          <div className="relative">
            {/* Main image placeholder */}
            <div
              className="w-full h-80 md:h-96 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-xl"
              style={{ background: 'linear-gradient(135deg, #5C0000, #8B0000, #CC5200)' }}
            >
              {/* Decorative pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                {[...Array(5)].map((_, i) => (
                  <circle key={i} cx={i * 25} cy="50" r={10 + i * 5} fill="none" stroke="white" strokeWidth="0.5"/>
                ))}
              </svg>
              <div className="text-center text-white/30 z-10">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21,15 16,10 5,21"/>
                </svg>
                <p className="text-xs mt-2">Photo coming soon</p>
              </div>
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-6 py-4 shadow-xl border border-ivory-dark"
            >
              <p className="font-display text-3xl font-bold text-saffron">500+</p>
              <p
                className="text-muted text-xs mt-0.5"
                style={{ fontFamily: 'Noto Sans Devanagari, Mukta, sans-serif' }}
              >
                सक्रिय सदस्य<br/><span className="font-body">Active Members</span>
              </p>
            </div>

            {/* Decorative saffron box behind */}
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-3xl -z-10 opacity-20"
              style={{ background: 'linear-gradient(135deg, #FF6600, #8B0000)' }}
            />
          </div>

          {/* ── Right: Content ── */}
          <div>
            <div className="section-accent" />
            <p
              className="text-saffron font-semibold text-sm mb-2 tracking-wide uppercase"
              style={{ fontFamily: 'Mukta, sans-serif' }}
            >
              हमारे बारे में · About Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-4 leading-tight">
              Maharana Pratap<br />Seva Samiti
            </h2>
            <p
              className="text-muted leading-relaxed mb-3"
              style={{ fontFamily: 'Noto Sans Devanagari, Mukta, sans-serif', fontSize: '0.95rem' }}
            >
              महाराणा प्रताप सेवा समिति एक सामुदायिक संगठन है जो समाज सेवा, सांस्कृतिक संरक्षण और युवा सशक्तिकरण के लिए समर्पित है। हम महाराणा प्रताप के आदर्शों — वीरता, स्वाभिमान और सेवा — से प्रेरणा लेते हैं।
            </p>
            <p className="text-muted text-sm leading-relaxed mb-8" style={{ fontFamily: 'Mukta, sans-serif' }}>
              Maharana Pratap Seva Samiti is a community organization dedicated to social service, cultural preservation and youth empowerment — inspired by the ideals of valor, self-respect and service.
            </p>

            {/* Vision & Mission cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: '👁️',
                  labelHi: 'हमारी दृष्टि',
                  labelEn: 'Our Vision',
                  textHi: 'एक सशक्त, आत्मनिर्भर समाज',
                  textEn: 'An empowered, self-reliant community',
                },
                {
                  icon: '🎯',
                  labelHi: 'हमारा मिशन',
                  labelEn: 'Our Mission',
                  textHi: 'सेवा, संस्कृति और गौरव',
                  textEn: 'Service, culture and pride',
                },
              ].map(({ icon, labelHi, labelEn, textHi, textEn }) => (
                <div
                  key={labelEn}
                  className="bg-white rounded-xl p-4 border-l-4 shadow-sm"
                  style={{ borderColor: '#FF6600' }}
                >
                  <div className="text-xl mb-2">{icon}</div>
                  <p className="font-display text-xs text-saffron font-semibold uppercase tracking-wide">{labelEn}</p>
                  <p
                    className="text-charcoal font-semibold text-sm mt-1"
                    style={{ fontFamily: 'Noto Sans Devanagari, Mukta, sans-serif' }}
                  >
                    {textHi}
                  </p>
                  <p className="text-muted text-xs mt-0.5">{textEn}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-display font-semibold text-sm text-white px-7 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
              style={{ background: 'linear-gradient(135deg, #FF6600, #8B0000)' }}
            >
              और पढ़ें / Read More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}