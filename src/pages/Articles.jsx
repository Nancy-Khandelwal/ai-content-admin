const mock = [
  { id: 1, title: 'AI in Hospitality', category: 'Semi Important', status: 'Draft' },
  { id: 2, title: 'Market Trends 2025', category: 'Very Important', status: 'Published' },
  { id: 3, title: 'Staff Video → Article', category: 'Social', status: 'Review' },
]
export default function Articles() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Articles</h2>
      <div className="overflow-x-auto">
        <table className="table min-w-[600px]">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mock.map(a => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.title}</td>
                <td>{a.category}</td>
                <td>{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
