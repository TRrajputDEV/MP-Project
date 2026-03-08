import { useState } from 'react'

const impactItems = [
  { amount: '500', label: 'Feeds a family for a week' },
  { amount: '1,000', label: 'Plants 10 trees with care kits' },
  { amount: '2,500', label: 'Sponsors a student for one month' },
  { amount: '5,000', label: 'Funds a full community health camp' },
]

export default function Donate() {
  const [amount, setAmount] = useState('')
  const presets = [500, 1000, 2500, 5000, 10000]

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3D0000 0%, #8B0000 50%, #CC5200 100%)' }}
      >
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 border-[50px] border-white" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="section-accent" />
          <h1 className="font-display text-5xl text-white mb-3">Support Our Mission</h1>
          <p className="text-white/70 text-lg max-w-xl">Every contribution, no matter how small, creates lasting change in communities that need it most.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L720 20L1440 60V60H0Z" fill="#FDF8F0"/></svg>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Donation Form */}
          <div className="bg-white border border-ivory-dark rounded-3xl p-8 shadow-sm">
            <h3 className="font-display text-2xl text-charcoal mb-6">Make a Donation</h3>

            {/* Preset amounts */}
            <p className="text-xs text-muted uppercase tracking-wide mb-3">Select Amount</p>
            <div className="grid grid-cols-3 gap-3 mb-5">
              {presets.map((p) => (
                <button
                  key={p}
                  onClick={() => setAmount(String(p))}
                  className={`py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    amount === String(p)
                      ? 'text-white shadow-md'
                      : 'bg-ivory-dark text-charcoal hover:bg-saffron/10'
                  }`}
                  style={amount === String(p) ? { background: 'linear-gradient(135deg, #FF6600, #8B0000)' } : {}}
                >
                  {'\u20B9'}{p.toLocaleString()}
                </button>
              ))}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted text-sm">{'\u20B9'}</span>
                <input
                  type="number"
                  value={presets.includes(Number(amount)) ? '' : amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Other"
                  className="w-full py-2.5 pl-7 pr-3 rounded-xl text-sm bg-ivory border border-ivory-dark focus:border-saffron focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Donor info */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Full Name</label>
                <input placeholder="Your name" className="w-full border border-ivory-dark rounded-xl px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-saffron transition-colors" />
              </div>
              <div>
                <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full border border-ivory-dark rounded-xl px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-saffron transition-colors" />
              </div>
              <div>
                <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Phone (Optional)</label>
                <input placeholder="+91 98765 43210" className="w-full border border-ivory-dark rounded-xl px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-saffron transition-colors" />
              </div>
            </div>

            <button
              disabled={!amount}
              className="w-full text-white font-display font-semibold py-3.5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
              style={{ background: 'linear-gradient(135deg, #FF6600, #8B0000)' }}
            >
              Donate {amount ? `\u20B9${Number(amount).toLocaleString()}` : ''} {'\u2192'}
            </button>
          </div>

          {/* Impact + Bank Details */}
          <div className="space-y-8">
            {/* Impact cards */}
            <div>
              <div className="section-accent" />
              <h3 className="font-display text-2xl text-charcoal mb-5">Your Impact</h3>
              <div className="space-y-3">
                {impactItems.map(({ amount: a, label }) => (
                  <div key={a} className="flex items-center gap-4 bg-white border border-ivory-dark rounded-xl p-4 shadow-sm">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-display font-bold text-xs flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #FF6600, #8B0000)' }}
                    >
                      {'\u20B9'}{a}
                    </div>
                    <p className="text-muted text-sm">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bank details */}
            <div className="bg-ivory-dark rounded-2xl p-6">
              <h4 className="font-display text-lg text-charcoal mb-4">Bank Transfer Details</h4>
              <div className="space-y-2 text-sm">
                {[
                  ['Account Name', 'Maharana Pratap Seva Samiti'],
                  ['Account Number', '1234 5678 9012'],
                  ['IFSC Code', 'SBIN0001234'],
                  ['Bank', 'State Bank of India'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <span className="text-muted">{k}</span>
                    <span className="text-charcoal font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparency */}
            <div className="bg-white border border-ivory-dark rounded-2xl p-6 shadow-sm">
              <h4 className="font-display text-lg text-charcoal mb-2">100% Transparent</h4>
              <p className="text-muted text-sm leading-relaxed">
                Every rupee is accounted for. We publish quarterly reports detailing exactly how donations are utilised across our programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
