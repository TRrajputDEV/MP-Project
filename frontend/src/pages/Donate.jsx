import { useState } from 'react'

const impactItems = [
  { amount: '₹500',  impact: 'Provides stationery for 10 children for a month' },
  { amount: '₹1,000', impact: 'Feeds a family of 4 for a week' },
  { amount: '₹2,500', impact: 'Supports one community workshop session' },
  { amount: '₹5,000', impact: 'Plants 50 trees in your name' },
]

export default function Donate() {
  const [copied, setCopied] = useState('')

  const copy = (text, label) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <div className="min-h-screen bg-cream pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div style={{ width: 56, height: 3, background: '#e8973a', margin: '0 auto 1rem' }} />
          <h1 className="font-serif text-5xl text-charcoal mb-4">Support Our Cause</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Your generosity fuels every event, every drive, every smile. 100% of donations go directly to community initiatives.
          </p>
        </div>

        {/* Impact section */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-8 text-center">Your Donation, Their Impact</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {impactItems.map(({ amount, impact }) => (
              <div key={amount} className="bg-white border border-cream-dark rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="font-serif text-3xl text-teal font-bold mb-3">{amount}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment details */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Bank Transfer */}
          <div className="bg-white border border-cream-dark rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center text-teal text-xl">🏦</div>
              <h3 className="font-serif text-2xl text-charcoal">Bank Transfer</h3>
            </div>

            {[
              { label: 'Account Name', value: 'CommunityConnect Trust' },
              { label: 'Account Number', value: '1234 5678 9012' },
              { label: 'IFSC Code', value: 'SBIN0001234' },
              { label: 'Bank', value: 'State Bank of India' },
              { label: 'Branch', value: 'Main Branch, Your City' },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between py-3 border-b border-cream-dark last:border-0">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
                  <p className="font-medium text-charcoal">{value}</p>
                </div>
                <button
                  onClick={() => copy(value, label)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                    copied === label
                      ? 'bg-teal text-white'
                      : 'bg-cream-dark text-gray-500 hover:text-teal'
                  }`}
                >
                  {copied === label ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            ))}
          </div>

          {/* UPI / QR */}
          <div className="bg-white border border-cream-dark rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center text-amber text-xl">📱</div>
              <h3 className="font-serif text-2xl text-charcoal">UPI / QR Code</h3>
            </div>

            {/* QR placeholder */}
            <div className="w-48 h-48 bg-cream-dark rounded-2xl mx-auto flex items-center justify-center mb-5 border-2 border-dashed border-cream-dark">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">⬛</div>
                <p className="text-xs">QR Code</p>
                <p className="text-xs">will appear here</p>
              </div>
            </div>

            <div className="bg-cream rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">UPI ID</p>
                <p className="font-medium text-charcoal">communityconnect@sbi</p>
              </div>
              <button
                onClick={() => copy('communityconnect@sbi', 'UPI')}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                  copied === 'UPI' ? 'bg-teal text-white' : 'bg-cream-dark text-gray-500 hover:text-teal'
                }`}
              >
                {copied === 'UPI' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p className="text-gray-500 text-xs text-center mt-4 leading-relaxed">
              Scan the QR or copy the UPI ID to pay via any UPI app — Google Pay, PhonePe, Paytm, BHIM
            </p>
          </div>
        </div>

        {/* Transparency note */}
        <div
          className="mt-12 rounded-3xl p-8 text-white text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a6b5e, #0f4a40)' }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="text-3xl mb-3">🤝</div>
          <h3 className="font-serif text-2xl mb-3">100% Transparent</h3>
          <p className="text-white/75 max-w-xl mx-auto text-sm leading-relaxed">
            Every rupee donated is accounted for. We publish annual reports on how funds are used. Our community always knows exactly where the money goes.
          </p>
        </div>
      </div>
    </div>
  )
}