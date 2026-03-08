import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    // TODO: connect to /api/auth/login
    await new Promise((r) => setTimeout(r, 800))
    if (form.email === 'admin@cc.org' && form.password === 'admin123') {
      localStorage.setItem('admin_token', 'demo_token')
      navigate('/admin')
    } else {
      setError('Invalid credentials. Try admin@cc.org / admin123')
    }
    setLoading(false)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center grain"
      style={{ background: 'linear-gradient(135deg, #0f4a40 0%, #1a6b5e 100%)' }}
    >
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md mx-6">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg">C</span>
          </div>
          <div>
            <p className="font-serif font-semibold text-charcoal">CommunityConnect</p>
            <p className="text-xs text-gray-400">Admin Dashboard</p>
          </div>
        </div>

        <h1 className="font-serif text-3xl text-charcoal mb-2">Welcome back</h1>
        <p className="text-gray-500 text-sm mb-7">Sign in to manage your community</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-5">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-400 uppercase tracking-wide block mb-1.5">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="admin@communityconnect.org"
              className="w-full border border-cream-dark rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors bg-cream"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 uppercase tracking-wide block mb-1.5">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
              className="w-full border border-cream-dark rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors bg-cream"
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={loading || !form.email || !form.password}
            className="w-full bg-teal hover:bg-teal-light text-white font-semibold py-3.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign In →'}
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Demo: admin@cc.org / admin123
        </p>
      </div>
    </div>
  )
}