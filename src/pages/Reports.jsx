const stats = [
  { date: '2025-09-01', published: 15, veryImportant: 5, semiImportant: 7, social: 3 },
  { date: '2025-09-02', published: 12, veryImportant: 3, semiImportant: 6, social: 3 },
]
export default function Reports() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Reports</h2>
      <div className="overflow-x-auto card">
        <table className="table min-w-[500px]">
          <thead>
            <tr>
              <th>Date</th>
              <th>Published</th>
              <th>Very Important</th>
              <th>Semi Important</th>
              <th>Social</th>
            </tr>
          </thead>
          <tbody>
            {stats.map(s => (
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
    </div>
  )
}
