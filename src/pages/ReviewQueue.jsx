import { useState } from 'react'
import Pagination from '../components/Pagination.jsx'
import { useGlobal } from '../context/GlobalContext.jsx'

const all = Array.from({length: 12}).map((_,i)=>({ id: i+1, title: `Pending ${i+1}`, author: `Editor ${i%3+1}`}))

export default function ReviewQueue() {
  const [page, setPage] = useState(1)
  const { pageSize } = useGlobal()
  const total = all.length
  const paged = all.slice((page-1)*pageSize, page*pageSize)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Review Queue</h2>
      <div className="overflow-x-auto card">
        <table className="table min-w-[500px]">
          <thead><tr><th>ID</th><th>Title</th><th>Author</th><th>Action</th></tr></thead>
          <tbody>
            {paged.map(p=> (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.author}</td>
                <td>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button className="btn btn-primary w-full sm:w-auto">Approve</button>
                    <button className="btn btn-danger w-full sm:w-auto">Reject</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination total={total} page={page} setPage={setPage} pageSize={pageSize} />
    </div>
  )
}
