import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // TODO: connect to backend API
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-cream pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <div style={{ width: 56, height: 3, background: '#e8973a', marginBottom: '0.75rem' }} />
          <h1 className="font-serif text-5xl text-charcoal mb-3">Get in Touch</h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">

          {/* Contact info */}
          <div className="md:col-span-2 space-y-5">
            {[
              { icon: '📧', label: 'Email', value: 'hello@communityconnect.org' },
              { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
              { icon: '📍', label: 'Address', value: 'Your City, State, India' },
              { icon: '🕐', label: 'Response Time', value: 'Within 24–48 hours' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex gap-4 bg-white border border-cream-dark rounded-xl p-4 shadow-sm">
                <div className="text-2xl">{icon}</div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
                  <p className="text-charcoal font-medium text-sm">{value}</p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="bg-white border border-cream-dark rounded-xl p-5 shadow-sm">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Follow Us</p>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-9 h-9 rounded-full bg-cream-dark hover:bg-teal hover:text-white transition-colors flex items-center justify-center text-xs font-semibold text-gray-500"
                  >
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 bg-white border border-cream-dark rounded-3xl p-8 shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center text-3xl mb-4">✅</div>
                <h3 className="font-serif text-2xl text-charcoal mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">Thanks for reaching out. We'll get back to you within 24–48 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-6 text-teal text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div>
                <h3 className="font-serif text-2xl text-charcoal mb-6">Send Us a Message</h3>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wide block mb-1.5">Your Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Arjun Mehta"
                        className="w-full border border-cream-dark rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-teal transition-colors bg-cream"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wide block mb-1.5">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full border border-cream-dark rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-teal transition-colors bg-cream"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 uppercase tracking-wide block mb-1.5">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full border border-cream-dark rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-teal transition-colors bg-cream"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 uppercase tracking-wide block mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className="w-full border border-cream-dark rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-teal transition-colors bg-cream resize-none"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !form.name || !form.email || !form.message}
                    className="w-full bg-teal hover:bg-teal-light text-white font-semibold py-3.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message →'}
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