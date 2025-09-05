import React, { createContext, useContext, useState, useMemo } from 'react'
const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (email, password, role) => {
    if (email === "admin@gmail.com" && password === "Admin@123") {
      setUser({ name: "Admin", role })
      return true
    }
    return false
  }

  const logout = () => setUser(null)

  const value = useMemo(() => ({ user, login, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() { return useContext(AuthContext) }
