// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
// const data = [
//   { name: 'Draft', value: 25 },
//   { name: 'Reviewed', value: 12 },
//   { name: 'Published', value: 80 },
// ]
// const COLORS = ['#facc15', '#60a5fa', '#34d399']
// export default function Dashboard() {
//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold">Dashboard</h2>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         <div className="card">Articles Today: 12</div>
//         <div className="card">Pending Review: 8</div>
//         <div className="card">Published: 220</div>
//       </div>
//       <div className="card">
//         <h3 className="text-lg font-semibold mb-4">Article Status Distribution</h3>
//         <div style={{ width: '100%', height: 260 }}>
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie data={data} cx="50%" cy="50%" outerRadius={90} dataKey="value" label>
//                 {data.map((_, i) => (
//                   <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                 ))}
//               </PieChart>
//               <Tooltip />
//             </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   )
// }

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Draft', value: 25 },
  { name: 'Reviewed', value: 12 },
  { name: 'Published', value: 80 },
]

const COLORS = ['#facc15', '#60a5fa', '#34d399']

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card">Articles Today: 12</div>
        <div className="card">Pending Review: 8</div>
        <div className="card">Published: 220</div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Article Status Distribution</h3>
        <div style={{ width: '100%', height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={90}
                dataKey="value"
                label
              >
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
