import { Users, GraduationCap, FileText, CalendarDays, MessageCircle } from 'lucide-react'

const items = [
  { icon: Users, label: 'Small groups', desc: 'A calmer place to learn' },
  { icon: GraduationCap, label: 'Experienced teachers', desc: 'Guidance that sticks' },
  { icon: FileText, label: 'Exam practice', desc: 'Build skills and confidence' },
  { icon: CalendarDays, label: 'Flexible days', desc: 'Fits your family rhythm' },
  { icon: MessageCircle, label: 'Doubt solving', desc: 'Questions always welcome' },
]

export default function Features() {
  return (
    <section className="border-y border-gray-100 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-3 lg:grid-cols-5">
        {items.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-soft text-brand">
              <Icon size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-brand-dark">{label}</p>
              <p className="text-xs text-gray-400">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}