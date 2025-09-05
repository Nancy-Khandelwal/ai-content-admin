import Sidebar from '../components/Sidebar.jsx'
import Navbar from '../components/Navbar.jsx'
import { Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setSidebarOpen(false), [location])
  return (
    <div className="min-h-screen flex bg-gray-100">
      {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      <div className={`fixed z-50 inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="p-4 md:p-6"><Outlet /></main>
      </div>
    </div>
  )
}
