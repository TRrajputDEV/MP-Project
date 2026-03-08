import { useState, useEffect } from 'react';

const impactItems = [
  { amount: '500', label: 'Feeds a family for a week' },
  { amount: '1,000', label: 'Plants 10 trees with care kits' },
  { amount: '2,500', label: 'Sponsors a student for one month' },
  { amount: '5,000', label: 'Funds a full community health camp' },
];

export default function Donate() {
  const [amount, setAmount] = useState('');
  const presets = [500, 1000, 2500, 5000, 10000];

  // Snap to top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory pb-24">
      
      {/* ── Hero Section ── */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-crimson-dark via-crimson to-saffron">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 border-[50px] border-white" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="w-16 h-1 rounded-full bg-white mb-6" />
          <h1 className="font-display text-5xl md:text-6xl text-ivory font-bold mb-4 drop-shadow-md">Support Our Mission</h1>
          <p className="text-ivory-dark/90 text-xl max-w-2xl font-body leading-relaxed">
            Every contribution, no matter how small, creates lasting change in communities that need it most.
          </p>
        </div>
        {/* Ivory curve to transition into content */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L720 20L1440 60V60H0Z" fill="var(--ivory)"/></svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── Donation Form ── */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-xl h-fit">
            <h3 className="font-display text-3xl text-charcoal font-bold mb-8">Make a Donation</h3>

            {/* Preset amounts */}
            <p className="text-sm text-muted font-bold uppercase tracking-wider mb-4">Select Amount</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {presets.map((p) => (
                <button
                  key={p}
                  onClick={() => setAmount(String(p))}
                  className={`py-3.5 rounded-xl text-base font-body font-bold transition-all duration-300 ${
                    amount === String(p)
                      ? 'bg-crimson text-white shadow-md scale-105'
                      : 'bg-white border border-gray-200 text-charcoal hover:border-saffron/50 hover:text-saffron'
                  }`}
                >
                  ₹{p.toLocaleString()}
                </button>
              ))}
              
              {/* Custom Amount Input */}
              <div className="relative col-span-2 sm:col-span-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal font-bold">₹</span>
                <input
                  type="number"
                  value={presets.includes(Number(amount)) ? '' : amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Other"
                  className="w-full h-full py-3.5 pl-8 pr-4 rounded-xl text-base font-body font-bold text-charcoal bg-gray-50 border border-gray-200 focus:bg-white focus:outline-none focus:border-crimson focus:ring-2 focus:ring-crimson/20 transition-all"
                />
              </div>
            </div>

            {/* Donor info */}
            <div className="space-y-5 mb-8">
              <div>
                <label className="text-sm text-muted font-bold uppercase tracking-wider block mb-2">Full Name</label>
                <input 
                  placeholder="Your name" 
                  className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-base font-body text-charcoal bg-gray-50 focus:bg-white focus:outline-none focus:border-crimson focus:ring-2 focus:ring-crimson/20 transition-all" 
                />
              </div>
              <div>
                <label className="text-sm text-muted font-bold uppercase tracking-wider block mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-base font-body text-charcoal bg-gray-50 focus:bg-white focus:outline-none focus:border-crimson focus:ring-2 focus:ring-crimson/20 transition-all" 
                />
              </div>
              <div>
                <label className="text-sm text-muted font-bold uppercase tracking-wider block mb-2">Phone (Optional)</label>
                <input 
                  placeholder="+91 98765 43210" 
                  className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-base font-body text-charcoal bg-gray-50 focus:bg-white focus:outline-none focus:border-crimson focus:ring-2 focus:ring-crimson/20 transition-all" 
                />
              </div>
            </div>

            <button
              disabled={!amount}
              className="w-full flex items-center justify-center gap-3 text-white font-display font-bold text-lg py-4 rounded-xl transition-all shadow-md bg-crimson hover:bg-crimson-dark disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
            >
              Donate {amount ? `₹${Number(amount).toLocaleString()}` : ''}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>

          {/* ── Impact + Bank Details ── */}
          <div className="space-y-10">
            
            {/* Impact cards */}
            <div>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-saffron to-crimson mb-6" />
              <h3 className="font-display text-3xl text-charcoal font-bold mb-6">Your Impact</h3>
              <div className="space-y-4">
                {impactItems.map(({ amount: a, label }) => (
                  <div key={a} className="flex items-center gap-5 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-crimson font-display font-bold text-sm flex-shrink-0 bg-crimson/10">
                      ₹{a}
                    </div>
                    <p className="text-charcoal font-body font-medium text-base">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bank details */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
              <h4 className="font-display font-bold text-2xl text-charcoal mb-6">Bank Transfer Details</h4>
              <div className="space-y-4 font-body text-base">
                {[
                  ['Account Name', 'Maharana Pratap Seva Samiti'],
                  ['Account Number', '1234 5678 9012'],
                  ['IFSC Code', 'SBIN0001234'],
                  ['Bank', 'State Bank of India'],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-muted mb-1 sm:mb-0">{k}</span>
                    <span className="text-charcoal font-bold">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparency */}
            <div className="bg-ivory-dark rounded-3xl p-8 border border-gray-200">
              <h4 className="font-display font-bold text-xl text-charcoal mb-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-saffron/20 flex items-center justify-center text-saffron">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                100% Transparent
              </h4>
              <p className="text-muted font-body text-base leading-relaxed pl-11">
                Every rupee is accounted for. We publish quarterly reports detailing exactly how donations are utilised across our programs.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}