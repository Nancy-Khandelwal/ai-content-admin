// import { useAuth } from '../context/AuthContext.jsx'
// export default function Login() {
//   const { loginAs } = useAuth()
//   return (
//     <div className="min-h-screen grid place-items-center bg-slate-50">
//       <div className="card w-full max-w-md space-y-4">
//         <h2 className="text-xl font-semibold">Sign in</h2>
//         <div className="grid grid-cols-3 gap-2">
//           <button className="btn btn-primary" onClick={() => loginAs('SUPER_ADMIN')}>Super</button>
//           <button className="btn btn-secondary" onClick={() => loginAs('EDITOR')}>Editor</button>
//           <button className="btn" onClick={() => loginAs('VERIFIER')}>Verifier</button>
//         </div>
//       </div>
//     </div>
//   )
// }
// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { useAuth } from "../context/AuthContext.jsx"

// export default function Login() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")
//   const { login } = useAuth()
//   const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const ok = login(email, password)
//     if (ok) {
//       navigate("/") // go to dashboard
//     } else {
//       setError("Invalid email or password")
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-100">
//       <div className="card w-full max-w-sm space-y-4">
//         <h2 className="text-xl font-semibold">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <div>
//             <label className="text-sm">Email</label>
//             <input
//               type="email"
//               className="input"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter email"
//               required
//             />
//           </div>
//           <div>
//             <label className="text-sm">Password</label>
//             <input
//               type="password"
//               className="input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter password"
//               required
//             />
//           </div>
//           {error && <p className="text-red-600 text-sm">{error}</p>}
//           <button type="submit" className="btn btn-primary w-full">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("SUPER_ADMIN")
  const [error, setError] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const ok = login(email, password, role)
    if (ok) {
      navigate("/") // go to dashboard
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="card w-full max-w-sm space-y-4">
        <h2 className="text-xl font-semibold">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <div>
            <label className="text-sm">Role</label>
            <select
              className="select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="SUPER_ADMIN">Super Admin</option>
              <option value="EDITOR">Editor</option>
              <option value="VERIFIER">Verifier</option>
            </select>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
