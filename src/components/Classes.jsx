import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { centre } from '../data/centre'

const filters = ['All', 'Primary', 'Secondary']

const colorMap = {
  'Primary-Bahasa Melayu': { border: 'border-l-yellow-400', text: 'text-yellow-600' },
  'Primary-Mathematics':   { border: 'border-l-blue-400',   text: 'text-blue-600' },
  'Primary-English':       { border: 'border-l-teal-400',   text: 'text-teal-600' },
  'Secondary-Mathematics': { border: 'border-l-orange-400', text: 'text-orange-600' },
  'Secondary-Science':     { border: 'border-l-blue-400',   text: 'text-blue-600' },
  'Secondary-English':     { border: 'border-l-teal-400',   text: 'text-teal-600' },
}

export default function Classes() {
  const [active, setActive] = useState('All')
  const list = centre.classes.filter(c => active === 'All' || c.level === active)

  return (
    <section id="classes" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center md:flex md:items-end md:justify-between md:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Build a strong foundation
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-brand-dark sm:text-3xl md:text-4xl">
              Classes that make learning click.
            </h2>
          </div>
          <p className="mx-auto mt-3 max-w-sm leading-relaxed text-gray-400 md:mx-0 md:mt-0">
            Clear explanations, regular practice and a little more confidence every week.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex justify-center gap-3 md:mt-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition sm:px-6 ${
                active === f
                  ? 'bg-brand text-white'
                  : 'border border-gray-200 bg-white text-gray-600 hover:border-brand'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 md:gap-5 lg:grid-cols-3">
          {list.map((c, i) => {
            const key = `${c.level}-${c.title}`
            const colors = colorMap[key] || { border: 'border-l-gray-300', text: 'text-brand' }
            return (
              <div
                key={i}
                className={`rounded-xl border border-gray-100 border-l-4 ${colors.border} bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg sm:p-6`}
              >
                <span className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>
                  {c.level}
                </span>
                <h3 className="mt-2 text-lg font-bold text-brand-dark">{c.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{c.desc}</p>
                <a
                  href="#contact"
                  className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-all hover:gap-2 sm:mt-5 ${colors.text}`}
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}