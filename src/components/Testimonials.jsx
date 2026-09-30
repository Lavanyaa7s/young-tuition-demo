import { Star } from 'lucide-react'

const reviews = [
  {
    text: '"My daughter went from struggling with Maths to scoring A in her PT3. The teachers here truly care about each child."',
    name: 'Siti Aminah',
    role: 'Parent of Form 3 student',
    initial: 'S',
    color: 'bg-coral',
  },
  {
    text: '"Small classes made a big difference. My son actually looks forward to tuition now — he feels confident asking questions."',
    name: 'Lim Wei Jie',
    role: 'Parent of Year 5 student',
    initial: 'L',
    color: 'bg-brand',
  },
  {
    text: '"The SPM preparation was thorough and well-structured. My son improved two grades in Add Maths. Highly recommend."',
    name: 'Rajesh Kumar',
    role: 'Parent of Form 5 student',
    initial: 'R',
    color: 'bg-teal',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-soft-blue py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">
          Parents talk about us
        </p>
        <h2 className="mt-3 text-2xl font-extrabold text-brand-dark sm:text-3xl md:text-4xl">
          Stories that make us proud.
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-sm sm:p-6"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-sun text-sun sm:h-[18px] sm:w-[18px]" />
                ))}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:mt-4 sm:text-base">
                {r.text}
              </p>

              <div className="mt-5 flex items-center gap-3 sm:mt-6">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white sm:h-10 sm:w-10 ${r.color}`}
                >
                  {r.initial}
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
