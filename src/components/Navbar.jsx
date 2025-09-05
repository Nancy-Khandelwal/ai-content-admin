import { Menu } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

export default function Navbar({ onMenuClick }) {
  const { user, logout } = useAuth()
  return (
    <header className="header sticky top-0 z-30 bg-white/80 backdrop-blur">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="lg:hidden p-2 rounded-md hover:bg-slate-200">
          <Menu size={22} />
        </button>
        <span className="font-semibold">Dashboard</span>
      </div>
      <div className="flex items-center gap-3">
        {user && <div className="text-sm px-3 py-2 rounded-lg bg-white/60">{user.name}</div>}
        {user && <div className="text-sm"><span className="hidden sm:inline">Role:</span> {user.role}</div>}
        {user && <button className="btn btn-danger" onClick={logout}>Logout</button>}
      </div>
    </header>
  )
}
