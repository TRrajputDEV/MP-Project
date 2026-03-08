import { Link } from 'react-router-dom';

const stats = [
  { value: '500+', label: 'Active Members' },
  { value: '80+',  label: 'Events Held' },
  { value: '12',   label: 'Cities Reached' },
  { value: '5K+',  label: 'Families Helped' },
];

export default function MiniAbout() {
  return (
    <section className="py-12 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* ── Top: About Content & Image Mosaic ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-12">

          {/* ── Left: Compact Image Mosaic ── */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 w-full h-[320px] md:h-[400px]">
              <div className="col-span-1 h-full rounded-2xl overflow-hidden shadow-md group bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80&w=800"
                    alt="Community Service"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="col-span-1 grid grid-rows-2 gap-3 h-full">
                <div className="row-span-1 rounded-2xl overflow-hidden shadow-md group bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80&w=800"
                    alt="Elderly couple smiling"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="row-span-1 rounded-2xl overflow-hidden shadow-md group bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800"
                    alt="Volunteers helping"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="order-1 lg:order-2">
            <h3 className="text-crimson font-display font-bold text-sm tracking-widest uppercase mb-2">
              About Us
            </h3>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal font-bold leading-tight mb-4">
              Maharana Pratap <span className="text-crimson">Seva Samiti</span>
            </h2>
            <p className="text-muted font-body text-base md:text-lg leading-relaxed mb-6">
              Inspired by the ideals of valor, self-respect, and service, we are a community organization dedicated to social welfare, cultural preservation, and empowering the youth to build a stronger tomorrow.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center text-crimson mb-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                </div>
                <h4 className="font-display font-bold text-charcoal mb-1">Our Vision</h4>
                <p className="text-muted font-body text-sm leading-snug">An empowered, self-reliant community deeply connected to its roots.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center text-crimson mb-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                </div>
                <h4 className="font-display font-bold text-charcoal mb-1">Our Mission</h4>
                <p className="text-muted font-body text-sm leading-snug">Service to society through action, cultural pride, and youth leadership.</p>
              </div>
            </div>

            <Link to="/about" className="inline-flex items-center gap-2 text-white font-display font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 bg-crimson hover:bg-crimson-dark text-sm">
              Read Our Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </div>

        {/* ── Bottom: Integrated Stats Strip ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-gray-200">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center justify-center text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-1">{value}</p>
              <p className="text-muted font-body text-xs md:text-sm font-bold uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}