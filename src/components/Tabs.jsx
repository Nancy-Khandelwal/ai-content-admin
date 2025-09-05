import React from 'react'

export default function Tabs({ tabs, active, setActive }) {
  return (
    <div className="flex gap-2">
      {tabs.map(t => (
        <button key={t} onClick={() => setActive(t)} className={`btn ${active===t ? 'btn-primary' : 'bg-white'}`}>
          {t}
        </button>
      ))}
    </div>
  )
}
