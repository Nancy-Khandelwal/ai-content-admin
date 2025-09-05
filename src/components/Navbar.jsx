import { Menu } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

export default function Navbar({ onMenuClick }) {
  const { user, logout, loginAs } = useAuth()
  return (
    <header className="header sticky top-0 z-30 bg-white/80 backdrop-blur">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md hover:bg-slate-200"
        >
          <Menu size={22} />
        </button>
        <span className="font-semibold">Dashboard</span>
      </div>
      <div className="flex items-center gap-2">
        <select
          className="select w-36"
          value={user?.role || 'EDITOR'}
          onChange={(e) => loginAs(e.target.value)}
        >
          <option value="SUPER_ADMIN">Super Admin</option>
          <option value="EDITOR">Editor</option>
          <option value="VERIFIER">Verifier</option>
        </select>
        {user && (
          <button className="btn btn-danger" onClick={logout}>Logout</button>
        )}
      </div>
    </header>
  )
}
