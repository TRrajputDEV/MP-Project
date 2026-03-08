import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const navItems = ['Overview', 'Events', 'Gallery', 'Team', 'Messages']

/* ─── Sub-panels ─── */
function OverviewPanel() {
  const stats = [
    { label: 'Total Events', value: '82', icon: '\u{1F4C5}' },
    { label: 'Active Members', value: '534', icon: '\u{1F465}' },
    { label: 'Cities', value: '12', icon: '\u{1F4CD}' },
    { label: 'Donations', value: '\u20B92.4L', icon: '\u{1F4B0}' },
  ]
  return (
    <div>
      <h2 className="font-display text-2xl text-charcoal mb-6">Dashboard Overview</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map(({ label, value, icon }) => (
          <div key={label} className="bg-white border border-ivory-dark rounded-2xl p-5 shadow-sm">
            <div className="text-2xl mb-2">{icon}</div>
            <p className="text-3xl font-display font-bold text-charcoal">{value}</p>
            <p className="text-muted text-sm mt-1">{label}</p>
          </div>
        ))}
      </div>
      <div className="bg-white border border-ivory-dark rounded-2xl p-6 shadow-sm">
        <h3 className="font-display text-lg text-charcoal mb-3">Recent Activity</h3>
        <div className="space-y-3">
          {['New volunteer signup: Priya S.', 'Event published: Community Health Camp', 'Donation received: \u20B95,000', 'Gallery updated: 8 new photos'].map((a, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-saffron flex-shrink-0" />
              <p className="text-muted">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EventsPanel() {
  const events = [
    { title: 'Community Health Camp', date: '2024-07-20', status: 'upcoming' },
    { title: 'Tree Plantation Drive', date: '2024-06-10', status: 'past' },
    { title: 'Youth Skill Workshop', date: '2024-08-15', status: 'upcoming' },
  ]
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl text-charcoal">Manage Events</h2>
        <button className="text-white text-sm font-display font-semibold px-5 py-2 rounded-xl hover:scale-[1.02] transition-transform" style={{ background: 'linear-gradient(135deg, #FF6600, #8B0000)' }}>
          + New Event
        </button>
      </div>
      <div className="space-y-3">
        {events.map((e) => (
          <div key={e.title} className="bg-white border border-ivory-dark rounded-xl p-4 shadow-sm flex items-center justify-between">
            <div>
              <h3 className="font-display text-charcoal">{e.title}</h3>
              <p className="text-muted text-xs">{e.date}</p>
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${e.status === 'upcoming' ? 'bg-saffron/10 text-saffron' : 'bg-ivory-dark text-muted'}`}>
              {e.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function GalleryPanel() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl text-charcoal">Manage Gallery</h2>
        <button className="text-white text-sm font-display font-semibold px-5 py-2 rounded-xl hover:scale-[1.02] transition-transform" style={{ background: 'linear-gradient(135deg, #FF6600, #8B0000)' }}>
          + Upload Photos
        </button>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="aspect-square rounded-2xl relative overflow-hidden shadow-sm" style={{ background: `linear-gradient(135deg, ${i%2===0?'#FF6600':'#8B0000'}, ${i%2===0?'#8B0000':'#CC5200'})` }}>
            <div className="absolute inset-0 flex items-center justify-center text-white/40 text-sm font-display">Photo {i}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TeamPanel() {
  const members = [
    { name: 'Arjun Mehta', role: 'Founder', initials: 'AM' },
    { name: 'Priya Sharma', role: 'Events', initials: 'PS' },
    { name: 'Rohit Verma', role: 'Community', initials: 'RV' },
  ]
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl text-charcoal">Team Members</h2>
        <button className="text-white text-sm font-display font-semibold px-5 py-2 rounded-xl hover:scale-[1.02] transition-transform" style={{ background: 'linear-gradient(135deg, #FF6600, #8B0000)' }}>
          + Add Member
        </button>
      </div>
      <div className="space-y-3">
        {members.map((m) => (
          <div key={m.name} className="bg-white border border-ivory-dark rounded-xl p-4 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FF6600, #8B0000)' }}>{m.initials}</div>
            <div>
              <h3 className="font-display text-charcoal">{m.name}</h3>
              <p className="text-muted text-xs">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MessagesPanel() {
  const msgs = [
    { from: 'Rahul K.', subject: 'Volunteer inquiry', time: '2 hours ago' },
    { from: 'Meera J.', subject: 'Donation receipt', time: '1 day ago' },
    { from: 'Amit S.', subject: 'Event partnership', time: '3 days ago' },
  ]
  return (
    <div>
      <h2 className="font-display text-2xl text-charcoal mb-6">Messages</h2>
      <div className="space-y-3">
        {msgs.map((m) => (
          <div key={m.from} className="bg-white border border-ivory-dark rounded-xl p-4 shadow-sm flex items-center justify-between">
            <div>
              <h3 className="font-display text-charcoal text-sm">{m.from}</h3>
              <p className="text-muted text-xs">{m.subject}</p>
            </div>
            <span className="text-muted text-xs">{m.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Main ─── */
const panels = { Overview: OverviewPanel, Events: EventsPanel, Gallery: GalleryPanel, Team: TeamPanel, Messages: MessagesPanel }

export default function AdminDashboard() {
  const [active, setActive] = useState('Overview')
  const navigate = useNavigate()
  const ActivePanel = panels[active]

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    navigate('/admin')
  }

  return (
    <div className="min-h-screen bg-ivory flex">
      {/* Sidebar */}
      <aside className="w-56 flex-shrink-0 border-r border-ivory-dark bg-white hidden md:flex flex-col">
        <div className="p-6 border-b border-ivory-dark">
          <h2 className="font-display text-lg text-charcoal">Admin Panel</h2>
          <p className="text-muted text-xs">MP Seva Samiti</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                active === item
                  ? 'text-white'
                  : 'text-muted hover:bg-ivory-dark'
              }`}
              style={active === item ? { background: 'linear-gradient(135deg, #FF6600, #8B0000)' } : {}}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-ivory-dark">
          <button onClick={handleLogout} className="w-full text-left px-4 py-2.5 rounded-xl text-sm text-crimson hover:bg-crimson/10 transition-colors font-medium">
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Top bar (mobile nav) */}
        <header className="md:hidden border-b border-ivory-dark bg-white px-4 py-3 flex items-center justify-between">
          <h2 className="font-display text-lg text-charcoal">Admin</h2>
          <select
            value={active}
            onChange={(e) => setActive(e.target.value)}
            className="border border-ivory-dark rounded-lg px-3 py-1.5 text-sm text-charcoal bg-ivory"
          >
            {navItems.map((item) => <option key={item}>{item}</option>)}
          </select>
        </header>

        <main className="flex-1 p-6 md:p-10 max-w-5xl">
          <ActivePanel />
        </main>
      </div>
    </div>
  )
}
