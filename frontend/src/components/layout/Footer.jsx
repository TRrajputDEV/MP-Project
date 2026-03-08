import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-teal-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-amber flex items-center justify-center">
              <span className="text-white font-serif font-bold">C</span>
            </div>
            <span className="font-serif font-semibold text-lg">
              Community<span className="text-amber">Connect</span>
            </span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            A community built on shared values, collective action, and the belief that together we can create meaningful change.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg mb-4 text-amber">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: 'Home', to: '/' },
              { label: 'Events', to: '/events' },
              { label: 'Gallery', to: '/gallery' },
              { label: 'About Us', to: '/about' },
              { label: 'Donate', to: '/donate' },
              { label: 'Join Us', to: '/join' },
            ].map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-white/70 text-sm hover:text-amber transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-lg mb-4 text-amber">Get In Touch</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>📧 hello@communityconnect.org</li>
            <li>📞 +91 98765 43210</li>
            <li>📍 Your City, India</li>
          </ul>
          <div className="flex gap-3 mt-5">
            {['FB', 'IG', 'TW', 'YT'].map((s) => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-amber transition-colors flex items-center justify-center text-xs font-semibold"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-white/40 text-xs">
        © {new Date().getFullYear()} CommunityConnect. All rights reserved.
      </div>
    </footer>
  )
}