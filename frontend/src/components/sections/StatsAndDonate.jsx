import { Link } from 'react-router-dom';

const stats = [
  { value: '500+', label: 'Members' },
  { value: '80+',  label: 'Events Held' },
  { value: '12',   label: 'Cities' },
  { value: '5K+',  label: 'Families Helped' },
  { value: '6+',   label: 'Years of Service' },
];

export function StatsStrip() {
  return (
    <section className="py-16 bg-white border-b border-gray-100 relative z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:divide-x divide-gray-200">
          {stats.map(({ value, label }, i) => (
            <div 
              key={label} 
              className={`flex flex-col items-center justify-center text-center ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-crimson to-saffron mb-2 drop-shadow-sm">
                {value}
              </p>
              <p className="text-muted font-body text-sm font-bold uppercase tracking-widest">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DonateStrip() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* The Impact Card */}
        <div className="bg-gradient-to-br from-crimson-dark via-crimson to-saffron rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Subtle geometric background pattern for depth */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
              <polygon points="50,0 100,0 100,100 0,100" fill="white"/>
            </svg>
          </div>

          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-white font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
              The Best Way to Make a Difference
            </h2>
            <p className="text-white/85 font-body text-lg max-w-xl leading-relaxed">
              Contribute to community service and youth empowerment. Every single rupee creates a lasting ripple effect.
            </p>
          </div>
          
          {/* Call to Action Button */}
          <Link
            to="/donate"
            className="relative z-10 flex-shrink-0 flex items-center gap-3 font-display font-bold text-crimson text-lg px-10 py-4 bg-white rounded-full shadow-xl hover:scale-105 hover:shadow-2xl hover:text-saffron transition-all duration-300"
          >
            {/* Clean SVG Heart instead of emoji */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            Donate Now
          </Link>
          
        </div>
      </div>
    </section>
  );
}