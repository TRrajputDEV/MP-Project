import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const sidebarItems = [
  { id: 'overview',  icon: '📊', label: 'Overview' },
  { id: 'events',    icon: '📅', label: 'Events' },
  { id: 'gallery',   icon: '🖼️',  label: 'Gallery' },
  { id: 'team',      icon: '👥', label: 'Team' },
  { id: 'messages',  icon: '💬', label: 'Messages' },
]

// ── Sub-panels ────────────────────────────────────────────────
function Overview() {
  const stats = [
    { label: 'Total Events', value: '83', change: '+3 this month', color: '#1a6b5e' },
    { label: 'Gallery Photos', value: '247', change: '+12 this week', color: '#e8973a' },
    { label: 'Messages', value: '14', change: '3 unread', color: '#5a4020' },
    { label: 'Team Members', value: '6', change: 'All active', color: '#2a3a5e' },
  ]
  return (
    <div>
      <h2 className="font-serif text-3xl text-charcoal mb-8">Dashboard Overview</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {stats.map(({ label, value, change, color }) => (
          <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-cream-dark">
            <div className="w-2 h-8 rounded-full mb-4" style={{ background: color }} />
            <p className="font-serif text-3xl font-bold text-charcoal">{value}</p>
            <p className="text-gray-500 text-sm mt-1">{label}</p>
            <p className="text-xs text-gray-400 mt-1">{change}</p>
          </div>
        ))}
      </div>
      <div className="bg-amber/10 border border-amber/30 rounded-2xl p-6">
        <h3 className="font-semibold text-charcoal mb-2">🚧 Backend Integration Pending</h3>
        <p className="text-gray-600 text-sm">This dashboard is currently showing static demo data. Once the Express + MongoDB backend is connected, all data will be live and editable.</p>
      </div>
    </div>
  )
}

function EventsPanel() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Annual Community Gathering', date: '2025-04-15', type: 'upcoming', location: 'City Park' },
    { id: 2, title: 'Youth Leadership Workshop', date: '2025-03-28', type: 'upcoming', location: 'Community Hall' },
    { id: 3, title: 'Winter Food Drive', date: '2024-12-10', type: 'past', location: 'District Centre' },
  ])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: '', date: '', type: 'upcoming', location: '', desc: '' })

  const addEvent = () => {
    if (!form.title) return
    setEvents([...events, { ...form, id: Date.now() }])
    setForm({ title: '', date: '', type: 'upcoming', location: '', desc: '' })
    setShowForm(false)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-3xl text-charcoal">Events Manager</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-teal text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-teal-light transition-colors"
        >
          + Add Event
        </button>
      </div>

      {showForm && (
        <div className="bg-white border border-cream-dark rounded-2xl p-6 mb-6 shadow-sm">
          <h3 className="font-semibold text-charcoal mb-4">New Event</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input placeholder="Event title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="border border-cream-dark rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal bg-cream" />
            <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="border border-cream-dark rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal bg-cream" />
            <input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="border border-cream-dark rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal bg-cream" />
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="border border-cream-dark rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal bg-cream">
              <option value="upcoming">Upcoming</option>
              <option value="past">Past</option>
            </select>
          </div>
          <textarea placeholder="Description" value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} rows={3} className="w-full border border-cream-dark rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal bg-cream resize-none mb-4" />
          <div className="flex gap-3">
            <button onClick={addEvent} className="bg-teal text-white text-sm px-5 py-2 rounded-xl hover:bg-teal-light transition-colors">Save Event</button>
            <button onClick={() => setShowForm(false)} className="bg-cream-dark text-gray-500 text-sm px-5 py-2 rounded-xl hover:text-charcoal transition-colors">Cancel</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {events.map((ev) => (
          <div key={ev.id} className="bg-white border border-cream-dark rounded-xl p-4 shadow-sm flex items-center justify-between">
            <div>
              <p className="font-medium text-charcoal text-sm">{ev.title}</p>
              <p className="text-xs text-gray-400">{ev.date} · {ev.location}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${ev.type === 'upcoming' ? 'bg-teal/10 text-teal' : 'bg-amber/10 text-amber'}`}>
                {ev.type}
              </span>
              <button onClick={() => setEvents(events.filter((e) => e.id !== ev.id))} className="text-red-400 hover:text-red-600 text-xs">Delete</button>
            </div>
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
        <h2 className="font-serif text-3xl text-charcoal">Gallery Manager</h2>
        <button className="bg-teal text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-teal-light transition-colors">
          + Upload Photos
        </button>
      </div>
      <div className="bg-cream-dark rounded-2xl border-2 border-dashed border-gray-300 p-16 text-center text-gray-400">
        <div className="text-5xl mb-4">📸</div>
        <p className="font-medium">Drag & drop photos here</p>
        <p className="text-sm mt-1">or click Upload Photos to browse</p>
        <p className="text-xs mt-3 text-gray-300">Backend upload integration coming soon</p>
      </div>
    </div>
  )
}

function TeamPanel() {
  const [team, setTeam] = useState([
    { id: 1, name: 'Arjun Mehta', role: 'Founder & Lead Organizer' },
    { id: 2, name: 'Priya Sharma', role: 'Events Coordinator' },
    { id: 3, name: 'Rohit Verma', role: 'Community Manager' },
  ])
  const [form, setForm] = useState({ name: '', role: '' })

  const add = () => {
    if (!form.name) return
    setTeam([...team, { ...form, id: Date.now() }])
    setForm({ name: '', role: '' })
  }

  return (
    <div>
      <h2 className="font-serif text-3xl text-charcoal mb-6">Team Manager</h2>
      <div className="bg-white border border-cream-dark rounded-2xl p-6 mb-6 shadow-sm">
        <h3 className="font-semibold text-charcoal mb-4">Add Team Member</h3>
        <div className="flex gap-3">
          <input placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="flex-1 border border-cream-dark rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal bg-cream" />
          <input placeholder="Role / Title" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="flex-1 border border-cream-dark rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal bg-cream" />
          <button onClick={add} className="bg-teal text-white text-sm px-5 py-2.5 rounded-xl hover:bg-teal-light transition-colors whitespace-nowrap">Add</button>
        </div>
      </div>
      <div className="space-y-3">
        {team.map((m) => (
          <div key={m.id} className="bg-white border border-cream-dark rounded-xl p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold">
                {m.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <p className="font-medium text-charcoal text-sm">{m.name}</p>
                <p className="text-xs text-gray-400">{m.role}</p>
              </div>
            </div>
            <button onClick={() => setTeam(team.filter((t) => t.id !== m.id))} className="text-red-400 hover:text-red-600 text-xs">Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

function MessagesPanel() {
  const messages = [
    { id: 1, name: 'Rahul Kumar', email: 'rahul@email.com', subject: 'Volunteering inquiry', message: 'Hi, I would love to volunteer at your next event...', read: false, date: '2025-03-05' },
    { id: 2, name: 'Sunita Patel', email: 'sunita@email.com', subject: 'Donation receipt request', message: 'Could you please send me a receipt for my donation of ₹2000...', read: false, date: '2025-03-04' },
    { id: 3, name: 'Deepak Joshi', email: 'deepak@email.com', subject: 'Partnership proposal', message: 'Our company would like to sponsor your upcoming events...', read: true, date: '2025-03-01' },
  ]

  return (
    <div>
      <h2 className="font-serif text-3xl text-charcoal mb-6">Messages</h2>
      <div className="space-y-3">
        {messages.map((m) => (
          <div key={m.id} className={`bg-white border rounded-xl p-5 shadow-sm ${!m.read ? 'border-teal/30' : 'border-cream-dark'}`}>
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-charcoal text-sm">{m.name}</p>
                  {!m.read && <span className="w-2 h-2 rounded-full bg-teal" />}
                </div>
                <p className="text-xs text-gray-400">{m.email} · {m.date}</p>
              </div>
              <p className="text-xs font-medium text-gray-500 bg-cream px-3 py-1 rounded-full">{m.subject}</p>
            </div>
            <p className="text-gray-600 text-sm">{m.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Main Dashboard ─────────────────────────────────────────────
const panels = { overview: Overview, events: EventsPanel, gallery: GalleryPanel, team: TeamPanel, messages: MessagesPanel }

export default function AdminDashboard() {
  const [active, setActive] = useState('overview')
  const navigate = useNavigate()
  const Panel = panels[active]

  const logout = () => {
    localStorage.removeItem('admin_token')
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-cream flex">
      {/* Sidebar */}
      <aside className="w-60 bg-teal-dark text-white flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber flex items-center justify-center">
              <span className="text-white font-serif font-bold text-sm">C</span>
            </div>
            <div>
              <p className="font-serif text-sm font-semibold">CommunityConnect</p>
              <p className="text-xs text-white/50">Admin Panel</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                active === id ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{icon}</span> {label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <Panel />
      </main>
    </div>
  )
}