import React from 'react'

export default function Pagination({ total, page, setPage, pageSize }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const pages = []
  for (let i = 1; i <= totalPages; i++) pages.push(i)
  return (
    <div className="flex items-center gap-2 mt-4">
      <button className="btn" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
      <div className="flex gap-1">
        {pages.map(p => (
          <button key={p} onClick={() => setPage(p)} className={`btn ${p===page ? 'btn-primary' : ''}`}>{p}</button>
        ))}
      </div>
      <button className="btn" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</button>
    </div>
  )
}
