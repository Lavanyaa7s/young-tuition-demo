import { Smile, Award, Clock, Users } from 'lucide-react'

const stats = [
  { icon: Smile, value: '500+', label: 'Students taught' },
  { icon: Award, value: '95%', label: 'Exam pass rate' },
  { icon: Clock, value: '12', label: 'Years of teaching' },
  { icon: Users, value: '8:1', label: 'Student to teacher' },
]

export default function Stats() {
  return (
    <section className="bg-brand-dark">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Icon size={20} className="text-sun" />
            </span>
            <div>
              <p className="text-2xl font-extrabold text-white">{value}</p>
              <p className="text-sm text-gray-400">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
