import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

// export default function Login() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [role, setRole] = useState('SUPER_ADMIN')
//   const [error, setError] = useState('')
//   const { login } = useAuth()
//   const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const ok = login(email, password, role)
//     if (ok) navigate('/')
//     else setError('Invalid email or password')
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-100">
//       <div className="card w-full max-w-md space-y-4">
//         <h2 className="text-xl font-semibold">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <div>
//             <label className="text-sm">Email</label>
//             <input type="email" className="input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="admin@gmail.com" required />
//           </div>
//           <div>
//             <label className="text-sm">Password</label>
//             <input type="password" className="input" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Admin@123" required />
//           </div>
//           <div>
//             <label className="text-sm">Role</label>
//             <select className="select" value={role} onChange={(e)=>setRole(e.target.value)}>
//               <option value="SUPER_ADMIN">Super Admin</option>
//               <option value="EDITOR">Editor</option>
//               <option value="VERIFIER">Verifier</option>
//             </select>
//           </div>
//           {error && <p className="text-red-600 text-sm">{error}</p>}
//           <button type="submit" className="btn btn-primary w-full">Login</button>
//         </form>
//       </div>
//     </div>
//   )
// }
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("SUPER_ADMIN");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = login(email, password, role);
    if (ok) navigate("/");
    else setError("Invalid email or password");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
      {/* Card */}
      <div className="card w-full max-w-md space-y-4">
        {/* Replaced Heading */}
        <div className="flex flex-col gap-[8px] pb-[8px]">
          <h5 className="font-medium text-center font-semibold text-slate-700">
            Admin Panel
          </h5>
          <p className="text-sm font-normal text-slate-500 opacity-75 text-center">
            Please enter your details below to log in.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
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
              placeholder="Admin@123"
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

      {/* Footer
      <footer className="mt-50 text-center text-xs text-slate-500">
        © 2025 Copyright AI
      </footer> */}
    </div>
  );
}