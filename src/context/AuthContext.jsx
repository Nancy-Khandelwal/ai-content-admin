// import React, { createContext, useContext, useState, useMemo } from 'react'
// const AuthContext = createContext(null)

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState({ name: 'Nancy', role: 'SUPER_ADMIN' })
//   const loginAs = (role) => setUser({ name: 'Nancy', role })
//   const logout = () => setUser(null)
//   const value = useMemo(() => ({ user, loginAs, logout }), [user])
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
// }
// export function useAuth() { return useContext(AuthContext) }
// import React, { createContext, useContext, useState, useMemo } from 'react'
// const AuthContext = createContext(null)

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null)

//   const login = (email, password) => {
//     if (email === "admin@gmail.com" && password === "Admin@123") {
//       setUser({ name: "Admin", role: "SUPER_ADMIN" })
//       return true
//     }
//     return false
//   }

//   const logout = () => setUser(null)

//   const value = useMemo(() => ({ user, login, logout }), [user])
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
// }

// export function useAuth() {
//   return useContext(AuthContext)
// }


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

export function useAuth() {
  return useContext(AuthContext)
}
