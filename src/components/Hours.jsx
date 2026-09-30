import { ArrowRight } from 'lucide-react'
import { centre } from '../data/centre'

export default function Hours() {
  const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  const isOpen = centre.hours.find(h => h.day === todayName)?.time !== 'Closed'

  return (
    <section id="hours" className="bg-soft-blue py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-12">
        {/* Left */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Plan your week
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight text-brand-dark sm:text-3xl md:text-4xl">
            Good things happen{' '}
            <span className="text-brand">on a regular day.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-sm leading-relaxed text-gray-400 md:mx-0">
            Drop in after school, make progress at your own pace, and leave
            knowing a little more than when you arrived.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 font-semibold text-white transition hover:bg-brand md:mt-8"
          >
            Ask about a class <ArrowRight size={16} />
          </a>
        </div>

        {/* Right — Schedule card */}
        <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-brand-dark">Opening hours</h3>
            {isOpen && (
              <span className="flex items-center gap-1.5 text-sm font-medium text-mint">
                <span className="h-2 w-2 rounded-full bg-mint" />
                Open today
              </span>
            )}
          </div>

          <ul className="divide-y divide-gray-100">
            {centre.hours.map(h => (
              <li
                key={h.day}
                className={`flex justify-between px-3 py-3 text-sm sm:px-4 sm:py-3.5 ${
                  h.day === todayName
                    ? 'rounded-lg bg-sun font-bold text-brand-dark'
                    : 'text-gray-500'
                }`}
              >
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}