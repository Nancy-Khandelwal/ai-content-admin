import { useState } from 'react'
export default function Settings() {
  const [rules, setRules] = useState({
    veryImportant: 30,
    semiImportant: 5,
    social: 2,
    crm: 'Zoho',
  })
  const onChange = (e) => setRules({ ...rules, [e.target.name]: e.target.value })
  const save = (e) => { e.preventDefault(); alert(JSON.stringify(rules, null, 2)) }
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Settings</h2>
      <form onSubmit={save} className="card grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Very Important (days)</label>
          <input className="input" type="number" name="veryImportant" value={rules.veryImportant} onChange={onChange}/>
        </div>
        <div>
          <label className="text-sm font-medium">Semi Important (days)</label>
          <input className="input" type="number" name="semiImportant" value={rules.semiImportant} onChange={onChange}/>
        </div>
        <div>
          <label className="text-sm font-medium">Social (days)</label>
          <input className="input" type="number" name="social" value={rules.social} onChange={onChange}/>
        </div>
        <div>
          <label className="text-sm font-medium">CRM</label>
          <select className="select" name="crm" value={rules.crm} onChange={onChange}>
            <option>Zoho</option>
            <option>HubSpot</option>
            <option>Custom</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  )
}
