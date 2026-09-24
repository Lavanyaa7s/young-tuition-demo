import { useState } from 'react'
import { centre } from '../data/centre'

const filters = ['All', 'Primary', 'Secondary']

export default function Classes() {
  const [active, setActive] = useState('All')
  const list = centre.classes.filter(c => active === 'All' || c.level === active)

  return (
    <section id="classes" className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h2 className="text-3xl font-bold">Our Classes</h2>

      <div className="mt-6 flex justify-center gap-3">
        {filters.map(f => (
          <button key={f} onClick={() => setActive(f)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition
              ${active === f ? 'border-brand bg-brand text-white' : 'bg-white hover:border-brand'}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c, i) => (
          <div key={i}
            className="rounded-2xl border border-t-4 border-t-transparent bg-white p-6 text-left transition hover:-translate-y-1 hover:border-t-sun hover:shadow-lg">
            <span className="text-xs font-semibold text-brand">{c.level}</span>
            <h3 className="mt-1 text-lg font-semibold">{c.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}