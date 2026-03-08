import { Link } from 'react-router-dom'

const stats = [
  { value: '500+', labelHi: 'सदस्य',          labelEn: 'Members' },
  { value: '80+',  labelHi: 'कार्यक्रम',       labelEn: 'Events Held' },
  { value: '12',   labelHi: 'शहर',             labelEn: 'Cities' },
  { value: '5K+',  labelHi: 'लाभान्वित परिवार', labelEn: 'Families Helped' },
  { value: '6+',   labelHi: 'वर्षों का अनुभव',  labelEn: 'Years of Service' },
]

export function StatsStrip() {
  return (
    <section
      className="py-14 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #3D0000 0%, #8B0000 50%, #CC5200 100%)' }}
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {[...Array(10)].map((_, i) => (
            <line key={i} x1={i * 11} y1="0" x2={i * 11} y2="100" stroke="white" strokeWidth="0.3"/>
          ))}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map(({ value, labelHi, labelEn }, i) => (
            <div key={labelEn} className={`text-center ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
              <p className="font-display text-4xl md:text-5xl font-bold text-gold">{value}</p>
              <p
                className="text-white/80 text-sm mt-1"
                style={{ fontFamily: 'Noto Sans Devanagari, Mukta, sans-serif' }}
              >
                {labelHi}
              </p>
              <p className="text-white/50 text-xs mt-0.5" style={{ fontFamily: 'Mukta, sans-serif' }}>
                {labelEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DonateStrip() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1A0000 0%, #5C0000 60%, #8B0000 100%)' }}
    >
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <polygon points="0,0 100,0 100,100" fill="white"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p
              className="text-white/60 text-sm mb-1"
              style={{ fontFamily: 'Noto Sans Devanagari, Mukta, sans-serif' }}
            >
              🙏 आपका सहयोग हमारी शक्ति है
            </p>
            <h2
              className="text-white font-display text-2xl md:text-3xl"
            >
              The Best Way to Make a Difference
            </h2>
            <p
              className="text-white/60 mt-1"
              style={{ fontFamily: 'Noto Sans Devanagari, Mukta, sans-serif', fontSize: '0.9rem' }}
            >
              समाज की सेवा में अपना योगदान दें — हर राशि महत्वपूर्ण है
            </p>
          </div>
          <Link
            to="/donate"
            className="flex-shrink-0 font-display font-bold text-white text-base px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-transform"
            style={{ background: 'linear-gradient(135deg, #FF6600, #CC5200)' }}
          >
            🙏 DONATE NOW · दान करें
          </Link>
        </div>
      </div>
    </section>
  )
}