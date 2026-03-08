import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#0D0000' }}>
      {/* Top gradient border */}
      <div className="h-1 pratap-border" />

      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #8B0000, #FF6600)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L14 7H19L15 10L17 15L12 12L7 15L9 10L5 7H10L12 2Z" fill="white"/>
                <line x1="12" y1="12" x2="12" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="font-display text-sm text-white font-semibold leading-tight">Maharana Pratap</p>
              <p className="text-saffron text-xs" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>सेवा समिति</p>
            </div>
          </div>
          <p
            className="text-white/50 text-sm leading-relaxed"
          >
            A community organization dedicated to social service, cultural preservation and pride.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-sm text-saffron mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: 'Home', to: '/' },
              { label: 'Events', to: '/events' },
              { label: 'Gallery', to: '/gallery' },
              { label: 'About', to: '/about' },
              { label: 'Donate', to: '/donate' },
              { label: 'Join Us', to: '/join' },
            ].map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-white/50 text-sm hover:text-saffron transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm text-saffron mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3">
            {[
              { icon: '📧', val: 'info@mpsevasamiti.org' },
              { icon: '📞', val: '+91 98765 43210' },
              { icon: '📍', val: 'Your City, Rajasthan, India' },
            ].map(({ icon, val }) => (
              <li key={val} className="flex gap-2 text-white/50 text-sm">
                <span className="flex-shrink-0">{icon}</span>
                <span>{val}</span>
              </li>
            ))}
          </ul>
          {/* Social */}
          <div className="flex gap-2 mt-5">
            {['FB', 'IG', 'YT', 'WA'].map(s => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white/60 hover:text-white transition-colors border border-white/10 hover:border-saffron"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div>
          <h4 className="font-display text-sm text-saffron mb-4 uppercase tracking-wider">Join Us</h4>
          <p
            className="text-white/50 text-sm leading-relaxed mb-5"
          >
            Join our WhatsApp community and be part of our activities.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 text-white text-sm font-display font-semibold px-5 py-2.5 rounded-full"
            style={{ background: '#25d366' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Group
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-4 text-center">
        <p className="text-white/20 text-xs">
          © {new Date().getFullYear()} Maharana Pratap Seva Samiti · All rights reserved
        </p>
      </div>
    </footer>
  )
}