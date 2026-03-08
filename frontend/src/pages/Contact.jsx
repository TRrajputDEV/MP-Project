import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Banner */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3D0000 0%, #8B0000 50%, #CC5200 100%)' }}
      >
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 border-[50px] border-white" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="section-accent" />
          <h1 className="font-display text-5xl text-white mb-3">Get in Touch</h1>
          <p className="text-white/70 text-lg max-w-xl">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L720 20L1440 60V60H0Z" fill="#FDF8F0"/></svg>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10">

          {/* Contact info */}
          <div className="md:col-span-2 space-y-5">
            {[
              { icon: '\u{1F4E7}', label: 'Email', value: 'info@mpsevasamiti.org' },
              { icon: '\u{1F4DE}', label: 'Phone', value: '+91 98765 43210' },
              { icon: '\u{1F4CD}', label: 'Address', value: 'Your City, Rajasthan, India' },
              { icon: '\u{1F550}', label: 'Response Time', value: 'Within 24-48 hours' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex gap-4 bg-white border border-ivory-dark rounded-xl p-4 shadow-sm">
                <div className="text-2xl">{icon}</div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide">{label}</p>
                  <p className="text-charcoal font-medium text-sm">{value}</p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="bg-white border border-ivory-dark rounded-xl p-5 shadow-sm">
              <p className="text-xs text-muted uppercase tracking-wide mb-3">Follow Us</p>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-9 h-9 rounded-full bg-ivory-dark hover:bg-saffron hover:text-white transition-colors flex items-center justify-center text-xs font-semibold text-muted"
                  >
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 bg-white border border-ivory-dark rounded-3xl p-8 shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 rounded-full bg-saffron/10 flex items-center justify-center text-3xl mb-4">{'\u2705'}</div>
                <h3 className="font-display text-2xl text-charcoal mb-2">Message Sent!</h3>
                <p className="text-muted text-sm">Thanks for reaching out. We'll get back to you within 24-48 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-6 text-saffron text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div>
                <h3 className="font-display text-2xl text-charcoal mb-6">Send Us a Message</h3>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Your Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border border-ivory-dark rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-saffron transition-colors bg-ivory"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full border border-ivory-dark rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-saffron transition-colors bg-ivory"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full border border-ivory-dark rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-saffron transition-colors bg-ivory"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className="w-full border border-ivory-dark rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-saffron transition-colors bg-ivory resize-none"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !form.name || !form.email || !form.message}
                    className="w-full text-white font-display font-semibold py-3.5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
                    style={{ background: 'linear-gradient(135deg, #FF6600, #8B0000)' }}
                  >
                    {loading ? 'Sending...' : 'Send Message \u2192'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
