import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate network request
    setTimeout(() => {
      navigate('/admin/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-charcoal rounded-b-[100px] shadow-2xl" />
      
      <div className="w-full max-w-md bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 relative z-10">
        
        {/* Logo/Brand Area */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-full bg-crimson/10 flex items-center justify-center text-crimson mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z"></path></svg>
          </div>
          <h2 className="font-display text-2xl text-charcoal font-bold mb-1">Admin Portal</h2>
          <p className="text-muted font-body text-sm">Secure access for authorized personnel only.</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="text-sm text-muted font-bold uppercase tracking-wider block mb-2">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@sevasamiti.org" 
              className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-base font-body text-charcoal bg-gray-50 focus:bg-white focus:outline-none focus:border-crimson focus:ring-2 focus:ring-crimson/20 transition-all" 
            />
          </div>
          <div>
            <label className="text-sm text-muted font-bold uppercase tracking-wider block mb-2">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-base font-body text-charcoal bg-gray-50 focus:bg-white focus:outline-none focus:border-crimson focus:ring-2 focus:ring-crimson/20 transition-all" 
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 text-white font-display font-bold text-lg py-4 rounded-xl transition-all shadow-md bg-crimson hover:bg-crimson-dark disabled:opacity-70 mt-4 hover:-translate-y-0.5"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Authenticating...
              </span>
            ) : (
              'Login to Dashboard'
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <a href="/" className="text-muted text-sm font-body hover:text-crimson transition-colors">
            &larr; Back to Public Website
          </a>
        </div>
      </div>
    </div>
  );
}