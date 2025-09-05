const pending = [
  { id: 1, title: 'Tourism Growth Report', author: 'Editor A' },
  { id: 2, title: 'Luxury Hotel Trends', author: 'Editor B' },
]
export default function ReviewQueue() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Review Queue</h2>
      <div className="overflow-x-auto card">
        <table className="table min-w-[500px]">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pending.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.author}</td>
                {/* <td className="space-x-2">
                  <button className="btn btn-primary">Approve</button>
                  <button className="btn">Send Back</button>
                  <button className="btn btn-danger">Reject</button>
                </td> */}
                
<td>
  <div className="flex flex-col sm:flex-row gap-2">
    <button className="btn btn-primary w-full sm:w-auto">Approve</button>
        <button className="btn btn-secondary w-full sm:w-auto">Send Back</button>
    <button className="btn btn-danger w-full sm:w-auto">Reject</button>
  </div>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
