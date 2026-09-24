import { centre } from '../data/centre'

export default function Hours() {
  const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <section id="hours" className="bg-soft py-16">
      <div className="mx-auto max-w-md px-6">
        <h2 className="mb-8 text-center text-3xl font-bold">Opening Hours</h2>
        <ul className="overflow-hidden rounded-2xl bg-white shadow-sm">
          {centre.hours.map(h => (
            <li key={h.day}
              className={`flex justify-between border-b px-6 py-4 last:border-0
                ${h.day === todayName ? 'bg-sun font-bold' : ''}`}>
              <span>{h.day}</span>
              <span>{h.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}