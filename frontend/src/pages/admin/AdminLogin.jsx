import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))

    if (email === 'admin@mpsevasamiti.org' && password === 'admin123') {
      localStorage.setItem('admin_token', 'demo-token')
      navigate('/admin/dashboard')
    } else {
      setError('Invalid credentials. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ background: 'linear-gradient(135deg, #3D0000 0%, #8B0000 50%, #CC5200 100%)' }}
    >
      <div className="w-full max-w-md">
        {/* Logo / Branding */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF6600, #D4A017)' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          </div>
          <h1 className="font-display text-3xl text-white">Admin Panel</h1>
          <p className="text-white/60 text-sm mt-1">Maharana Pratap Seva Samiti</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <h2 className="font-display text-xl text-charcoal mb-6 text-center">Sign In</h2>

          {error && (
            <div className="mb-4 bg-crimson/10 text-crimson text-sm rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@mpsevasamiti.org"
                required
                className="w-full border border-ivory-dark rounded-xl px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-saffron transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full border border-ivory-dark rounded-xl px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-saffron transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full text-white font-display font-semibold py-3.5 rounded-xl transition-all disabled:opacity-50 hover:scale-[1.01]"
              style={{ background: 'linear-gradient(135deg, #FF6600, #8B0000)' }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-muted text-xs text-center mt-5">
            Demo: admin@mpsevasamiti.org / admin123
          </p>
        </div>
      </div>
    </div>
  )
}
