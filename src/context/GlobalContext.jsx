import React, { createContext, useContext, useState } from 'react'

const GlobalContext = createContext(null)

export function GlobalProvider({ children }) {
  const [pageSize, setPageSize] = useState(5)
  return (
    <GlobalContext.Provider value={{ pageSize, setPageSize }}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobal() {
  const ctx = useContext(GlobalContext)
  if (!ctx) throw new Error('useGlobal must be used within GlobalProvider')
  return ctx
}
