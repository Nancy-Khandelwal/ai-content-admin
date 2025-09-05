import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Articles from './pages/Articles.jsx'
import ReviewQueue from './pages/ReviewQueue.jsx'
import Reports from './pages/Reports.jsx'
import Settings from './pages/Settings.jsx'
import Login from './pages/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { GlobalProvider } from './context/GlobalContext.jsx'

export default function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute allow={['SUPER_ADMIN','EDITOR','VERIFIER']}><AdminLayout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="articles" element={<ProtectedRoute allow={['SUPER_ADMIN','EDITOR']}><Articles /></ProtectedRoute>} />
            <Route path="review" element={<ProtectedRoute allow={['SUPER_ADMIN','VERIFIER']}><ReviewQueue /></ProtectedRoute>} />
            <Route path="reports" element={<ProtectedRoute allow={['SUPER_ADMIN']}><Reports /></ProtectedRoute>} />
            <Route path="settings" element={<ProtectedRoute allow={['SUPER_ADMIN']}><Settings /></ProtectedRoute>} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </GlobalProvider>
    </AuthProvider>
  )
}
