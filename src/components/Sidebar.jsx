import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

const itemsByRole = {
  SUPER_ADMIN: [
    { to: '/', label: 'Dashboard' },
    { to: '/articles', label: 'Articles' },
    { to: '/review', label: 'Review Queue' },
    { to: '/reports', label: 'Reports' },
    { to: '/settings', label: 'Settings' },
  ],
  EDITOR: [
    { to: '/', label: 'Dashboard' },
    { to: '/articles', label: 'Articles' },
  ],
  VERIFIER: [
    { to: '/', label: 'Dashboard' },
    { to: '/review', label: 'Review Queue' },
  ],
}

export default function Sidebar() {
  const { user } = useAuth()
  const items = itemsByRole[user?.role || 'EDITOR']
  return (
    <aside className="sidebar">
      <div className="text-2xl font-bold mb-6">Admin Panel</div>
      <nav className="space-y-1">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'bg-slate-800' : ''}`
            }
          >
            {it.label}
          </NavLink>
        ))}
      </nav>
      <p className="text-xs text-slate-400 mt-6">Role: {user?.role}</p>
    </aside>
  )
}
