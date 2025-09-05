import { useState } from 'react'
import { useGlobal } from '../context/GlobalContext.jsx'

export default function Settings() {
  const [rules, setRules] = useState({ veryImportant: 30, semiImportant: 5, social: 2, crm: 'Zoho' })
  const { pageSize, setPageSize } = useGlobal()
  const onChange = (e) => setRules({ ...rules, [e.target.name]: e.target.value })

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Settings</h2>
      <form className="card grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e)=>e.preventDefault()}>
        <div>
          <label className="text-sm font-medium">Very Important (days)</label>
          <input className="input" type="number" name="veryImportant" value={rules.veryImportant} onChange={onChange} />
        </div>
        <div>
          <label className="text-sm font-medium">Semi Important (days)</label>
          <input className="input" type="number" name="semiImportant" value={rules.semiImportant} onChange={onChange} />
        </div>
        <div>
          <label className="text-sm font-medium">Social (days)</label>
          <input className="input" type="number" name="social" value={rules.social} onChange={onChange} />
        </div>
        <div>
          <label className="text-sm font-medium">CRM</label>
          <select className="select" name="crm" value={rules.crm} onChange={onChange}>
            <option>Zoho</option>
            <option>HubSpot</option>
            <option>Custom</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium">Rows per page (preview)</label>
          <select className="select" value={pageSize} onChange={(e)=> setPageSize(Number(e.target.value))}>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <button className="btn btn-primary">Save Settings</button>
        </div>
      </form>
    </div>
  )
}
