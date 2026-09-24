import { Users, GraduationCap, FileText, CalendarDays, MessageCircle } from 'lucide-react'

const items = [
  { icon: Users, label: 'Small Groups' },
  { icon: GraduationCap, label: 'Experienced Teachers' },
  { icon: FileText, label: 'Exam Practice' },
  { icon: CalendarDays, label: 'Flexible Days' },
  { icon: MessageCircle, label: 'Doubt Solving' },
]

export default function Features() {
  return (
    <section className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-4 px-6 py-8">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-3 font-semibold">
          <span className="rounded-lg bg-soft p-2 text-brand"><Icon size={20} /></span>
          {label}
        </div>
      ))}
    </section>
  )
}