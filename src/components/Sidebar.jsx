// import { NavLink } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext.jsx'

// const itemsByRole = {
//   SUPER_ADMIN: [
//     { to: '/', label: 'Dashboard' },
//     { to: '/articles', label: 'Articles' },
//     { to: '/review', label: 'Review Queue' },
//     { to: '/reports', label: 'Reports' },
//     { to: '/settings', label: 'Settings' },
//   ],
//   EDITOR: [
//     { to: '/', label: 'Dashboard' },
//     { to: '/articles', label: 'Articles' },
//   ],
//   VERIFIER: [
//     { to: '/', label: 'Dashboard' },
//     { to: '/review', label: 'Review Queue' },
//   ],
// }

// export default function Sidebar() {
//   const { user } = useAuth()
//   const items = itemsByRole[user?.role || 'EDITOR']
//   return (
//     <aside className="sidebar">
//       <div className="text-2xl font-bold mb-4">Admin Panel</div>
//       <div className="uppercase text-xs font-semibold text-slate-400 tracking-wider mb-3">Menu</div>
//       <nav className="space-y-1">
//         {items.map((it) => (
//           <NavLink key={it.to} to={it.to} className={({ isActive }) => `nav-link ${isActive ? 'bg-slate-800' : ''}`}>
//             {it.label}
//           </NavLink>
//         ))}
//       </nav>
//       <p className="text-xs text-slate-400 mt-6">Role: {user?.role}</p>
//     </aside>
//   )
// }


// import { NavLink } from "react-router-dom"
// import { useAuth } from "../context/AuthContext.jsx"
// import { menuItems } from "../constants/menuItems.js"
// import { Icon } from "@iconify/react"   // for icons

// export default function Sidebar() {
//   const { user } = useAuth()
//   const items = menuItems[user?.role || "EDITOR"]

//   return (
//     <aside className="sidebar">
//       <div className="text-2xl font-bold mb-4">Admin Panel</div>

//       <nav className="space-y-1">
//         {items.map((it, idx) =>
//           it.isHeader ? (
//             <div
//               key={idx}
//               className="uppercase text-xs font-semibold text-slate-400 tracking-wider mb-2"
//             >
//               {it.title}
//             </div>
//           ) : (
//             <NavLink
//               key={it.link}
//               to={it.link}
//               className={({ isActive }) =>
//                 `nav-link flex items-center gap-2 ${
//                   isActive ? "bg-slate-800" : ""
//                 }`
//               }
//             >
//               {it.icon && <Icon icon={it.icon} width={18} />}
//               {it.title}
//             </NavLink>
//           )
//         )}
//       </nav>

//       <p className="text-xs text-slate-400 mt-6">Role: {user?.role}</p>
//     </aside>
//   )
// }
import { NavLink } from "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx"
import { menuItems } from "../constant/menuItems.js"
import { Icon } from "@iconify/react"   // for icons

// export default function Sidebar() {
//   const { user } = useAuth()
//   const items = menuItems[user?.role || "EDITOR"]

//   return (
//     <aside className="sidebar">
//       <div className="text-2xl font-bold mb-4">Admin Panel</div>

//       <nav className="space-y-1">
//         {items.map((it, idx) =>
//           it.isHeader ? (
//             <div
//               key={idx}
//               className="uppercase text-xs font-semibold text-slate-400 tracking-wider mb-2"
//             >
//               {it.title}
//             </div>
//           ) : (
//             // <NavLink
//             //   key={it.link}
//             //   to={it.link}
//             //   className={({ isActive }) =>
//             //     `nav-link flex items-center gap-2 ${
//             //       isActive ? "bg-slate-800" : ""
//             //     }`
//             //   }
//             // >
//             //   {it.icon && <Icon icon={it.icon} width={18} />}
//             //   {it.title}
//             // </NavLink>
//             <NavLink
//   key={it.link}
//   to={it.link}
//   className={({ isActive }) =>
//     `nav-link flex items-center gap-2 px-3 py-2 rounded-md ${
//       isActive ? "bg-slate-800" : ""
//     }`
//   }
// >
//   {it.icon && (
//     <span className="flex-shrink-0 inline-flex items-center">
//       <Icon icon={it.icon} width={18} />
//     </span>
//   )}
//   <span className="text-sm">{it.title}</span>
// </NavLink>

//           )
//         )}
//       </nav>

//       <p className="text-xs text-slate-400 mt-6">Role: {user?.role}</p>
//     </aside>
//   )
// }
export default function Sidebar() {
  const { user } = useAuth();
  const items = menuItems[user?.role || "EDITOR"];

  return (
    <aside className="sidebar">
      <div className="text-2xl font-bold mb-4">Admin Panel</div>

      <nav className="space-y-1">
        {items.map((it, idx) =>
          it.isHeader ? (
            <div
              key={idx}
              className="uppercase text-xs font-semibold text-slate-400 tracking-wider mb-2"
            >
              {it.title}
            </div>
          ) : (
            <NavLink
              key={it.link}
              to={it.link}
              className={({ isActive }) =>
                `nav-link flex items-center gap-3 px-3 py-2 rounded-lg ${
                  isActive ? "bg-slate-800" : "hover:bg-slate-800/60"
                }`
              }
            >
              {/* ICON WRAPPER */}
              <span className="w-5 h-5 shrink-0 grid place-items-center">
                {it.icon && (
                  <Icon icon={it.icon} className="w-5 h-5 block" />
                )}
              </span>

              {/* TEXT */}
              <span className="text-sm leading-none">{it.title}</span>
            </NavLink>
          )
        )}
      </nav>

      <p className="text-xs text-slate-400 mt-6">Role: {user?.role}</p>
    </aside>
  );
}
