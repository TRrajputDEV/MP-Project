export function PartnersMarquee() {
  const partners = ['City Hospital', 'Rotary Club', 'Apex Schools', 'Lions Club', 'Rajasthan Patrika', 'HDFC Bank', 'City Hospital', 'Rotary Club', 'Apex Schools'];

  return (
    <section className="py-8 bg-white border-b border-gray-100 overflow-hidden flex flex-col items-center">
      <p className="text-muted font-display text-xs font-bold uppercase tracking-widest mb-4 text-center">
        Supported By Our Community Partners
      </p>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll { animation: scroll 30s linear infinite; }
        .animate-scroll:hover { animation-play-state: paused; }
      `}</style>

      <div className="w-full max-w-7xl mx-auto overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex w-[200%] animate-scroll items-center">
          {partners.map((partner, idx) => (
            <div key={idx} className="w-1/2 flex justify-around items-center px-4">
              <span className="text-lg md:text-xl font-display font-bold text-gray-300 whitespace-nowrap px-6 transition-colors hover:text-gray-400 cursor-default">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const quotes = [
    {
      text: "The Maharana Pratap Seva Samiti didn't just give us food during the crisis; they gave us hope and respect when we needed it most.",
      author: "Ramesh Devi",
      role: "Beneficiary",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    },
    {
      text: "Volunteering here completely changed my perspective. It's incredible what we can achieve when the youth come together for a shared cause.",
      author: "Vikram Singh",
      role: "Youth Volunteer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section className="py-12 bg-ivory-dark border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <div className="w-12 h-1 rounded-full bg-crimson mx-auto mb-3" />
          <h2 className="font-display text-3xl md:text-4xl text-charcoal font-bold">Voices of Impact</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((quote, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 relative group hover:shadow-md transition-shadow">
              {/* Scaled down Quote SVG */}
              <svg className="absolute top-6 left-6 w-8 h-8 text-saffron/10 group-hover:text-saffron/20 transition-colors" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8.2c.4-2.2 2.3-4 4.8-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-5.8c.4-2.2 2.3-4 4.8-4V8z"/>
              </svg>
              
              <p className="text-charcoal font-body text-base md:text-lg leading-snug mb-6 relative z-10 italic pl-2">
                "{quote.text}"
              </p>
              
              <div className="flex items-center gap-4 pl-2">
                <img src={quote.image} alt={quote.author} className="w-12 h-12 rounded-full object-cover bg-gray-200" loading="lazy" />
                <div>
                  <p className="font-display font-bold text-charcoal text-base leading-tight">{quote.author}</p>
                  <p className="text-muted font-body text-xs md:text-sm">{quote.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}