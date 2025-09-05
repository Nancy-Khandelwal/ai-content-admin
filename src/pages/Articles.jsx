import { useState, useMemo } from 'react'
import Pagination from '../components/Pagination.jsx'
import Tabs from '../components/Tabs.jsx'
import { useGlobal } from '../context/GlobalContext.jsx'

const all = Array.from({length: 22}).map((_,i)=>({ id: i+1, title: `Article ${i+1}`, category: ['Very Important','Semi Important','Social'][i%3], status: ['Draft','Review','Published'][i%3]}))

export default function Articles() {
  const [query, setQuery] = useState('')
  const [tab, setTab] = useState('All')
  const [page, setPage] = useState(1)
  const { pageSize } = useGlobal()

  const filtered = useMemo(()=> all.filter(a=> (tab==='All' || a.status===tab) && a.title.toLowerCase().includes(query.toLowerCase())), [tab, query])

  const total = filtered.length
  const paged = filtered.slice((page-1)*pageSize, page*pageSize)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Articles</h2>
        <div className="flex gap-2 items-center">
          <input className="input" placeholder="Search title..." value={query} onChange={e=>{ setQuery(e.target.value); setPage(1) }} />
          <select className="select" onChange={e=> setTab(e.target.value)} value={tab}>
            <option value="All">All</option>
            <option value="Draft">Draft</option>
            <option value="Review">Review</option>
            <option value="Published">Published</option>
          </select>
        </div>
      </div>

      <Tabs tabs={['All','Draft','Review','Published']} active={tab} setActive={(t)=>{ setTab(t); setPage(1) }} />

      <div className="overflow-x-auto card">
        <table className="table min-w-[600px]">
          <thead>
            <tr><th>ID</th><th>Title</th><th>Category</th><th>Status</th></tr>
          </thead>
          <tbody>
            {paged.map(a=> (
              <tr key={a.id}><td>{a.id}</td><td>{a.title}</td><td>{a.category}</td><td>{a.status}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination total={total} page={page} setPage={setPage} pageSize={pageSize} />
    </div>
  )
}
