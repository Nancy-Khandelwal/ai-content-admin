import { useState } from 'react'
import Pagination from '../components/Pagination.jsx'
import { useGlobal } from '../context/GlobalContext.jsx'

const stats = Array.from({length: 18}).map((_,i)=>({ date: `2025-09-${String(i+1).padStart(2,'0')}`, published: 10+i, veryImportant: i%3, semiImportant: i%4, social: i%2 }))

export default function Reports(){
  const [page, setPage] = useState(1)
  const { pageSize } = useGlobal()
  const total = stats.length
  const paged = stats.slice((page-1)*pageSize, page*pageSize)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Reports</h2>
      <div className="overflow-x-auto card">
        <table className="table min-w-[500px]">
          <thead><tr><th>Date</th><th>Published</th><th>Very Important</th><th>Semi Important</th><th>Social</th></tr></thead>
          <tbody>
            {paged.map(s=> (
              <tr key={s.date}>
                <td>{s.date}</td>
                <td>{s.published}</td>
                <td>{s.veryImportant}</td>
                <td>{s.semiImportant}</td>
                <td>{s.social}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination total={total} page={page} setPage={setPage} pageSize={pageSize} />
    </div>
  )
}
