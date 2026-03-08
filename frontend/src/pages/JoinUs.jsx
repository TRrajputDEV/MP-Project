import { useState } from 'react'

const roles = [
  { title: 'Event Volunteer', desc: 'Help organise and run our on-ground events across cities.', icon: '\u{1F3AA}' },
  { title: 'Content Creator', desc: 'Write blogs, shoot videos or manage our social media presence.', icon: '\u{1F4F8}' },
  { title: 'Community Ambassador', desc: 'Represent us in your city and help expand our network.', icon: '\u{1F91D}' },
  { title: 'Tech & Design', desc: 'Support our digital platforms, website and creative assets.', icon: '\u{1F4BB}' },
  { title: 'Fundraising', desc: 'Help us plan campaigns and connect with potential donors.', icon: '\u{1F4B0}' },
  { title: 'Teaching & Mentoring', desc: 'Conduct workshops and mentor youth in underserved areas.', icon: '\u{1F4DA}' },
]

export default function JoinUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', role: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

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
          <h1 className="font-display text-5xl text-white mb-3">Join the Movement</h1>
          <p className="text-white/70 text-lg max-w-xl">Be part of a passionate community making a real difference. No experience needed, just heart.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L720 20L1440 60V60H0Z" fill="#FDF8F0"/></svg>
        </div>
      </section>

      {/* Roles */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="section-accent mx-auto" style={{ margin: '0 auto 0.85rem' }} />
          <h2 className="font-display text-4xl text-charcoal">How You Can Help</h2>
          <p className="text-muted mt-3">Choose a role that fits your skills and passion</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {roles.map(({ title, desc, icon }) => (
            <div key={title} className="bg-white border border-ivory-dark rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-display text-lg text-charcoal mb-1">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="bg-ivory-dark py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="section-accent mx-auto" style={{ margin: '0 auto 0.85rem' }} />
            <h2 className="font-display text-4xl text-charcoal">Volunteer Registration</h2>
          </div>

          {submitted ? (
            <div className="bg-white border border-ivory-dark rounded-3xl p-10 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-saffron/10 flex items-center justify-center text-3xl mx-auto mb-4">{'\u{1F389}'}</div>
              <h3 className="font-display text-2xl text-charcoal mb-2">You're In!</h3>
              <p className="text-muted text-sm">Thank you for signing up. Our team will reach out to you within 48 hours.</p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', city: '', role: '', message: '' }) }}
                className="mt-6 text-saffron text-sm font-medium hover:underline"
              >
                Register another volunteer
              </button>
            </div>
          ) : (
            <div className="bg-white border border-ivory-dark rounded-3xl p-8 shadow-sm">
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="w-full border border-ivory-dark rounded-xl px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-saffron transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" className="w-full border border-ivory-dark rounded-xl px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-saffron transition-colors" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full border border-ivory-dark rounded-xl px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-saffron transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">City</label>
                    <input name="city" value={form.city} onChange={handleChange} placeholder="Your city" className="w-full border border-ivory-dark rounded-xl px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-saffron transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Preferred Role</label>
                  <select name="role" value={form.role} onChange={handleChange} className="w-full border border-ivory-dark rounded-xl px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-saffron transition-colors">
                    <option value="">Select a role...</option>
                    {roles.map((r) => <option key={r.title} value={r.title}>{r.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Why do you want to join?</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us a bit about yourself..." className="w-full border border-ivory-dark rounded-xl px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-saffron transition-colors resize-none" />
                </div>
                <button
                  onClick={() => setSubmitted(true)}
                  disabled={!form.name || !form.email}
                  className="w-full text-white font-display font-semibold py-3.5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
                  style={{ background: 'linear-gradient(135deg, #FF6600, #8B0000)' }}
                >
                  Submit Application {'\u2192'}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
