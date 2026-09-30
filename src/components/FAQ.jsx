import { useState } from 'react'
import { Plus, X } from 'lucide-react'

const faqs = [
  {
    q: 'How many students are in each class?',
    a: 'We keep classes small — typically 6 to 8 students. This ensures every child gets personal attention and can ask questions freely.',
  },
  {
    q: 'Do you offer trial classes?',
    a: 'Yes! We offer a free trial class so your child can experience our teaching style before committing. Just WhatsApp or call us to arrange one.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fees vary depending on the level and number of subjects. Contact us for a detailed fee schedule — we keep it affordable for families.',
  },
  {
    q: 'Do you provide materials and worksheets?',
    a: 'Yes, we provide notes, worksheets and past-year exam papers as part of our classes. No need to buy extra workbooks.',
  },
  {
    q: 'Can my child join mid-term?',
    a: 'Absolutely. We welcome new students at any time and will help them catch up with the current topics being covered.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">
          Questions parents ask
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-brand-dark md:text-4xl">
          Everything you need to know.
        </h2>

        <div className="mt-12 space-y-4 text-left">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`rounded-xl border transition ${
                  isOpen ? 'border-brand bg-white shadow-sm' : 'border-gray-200 bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-brand-dark">{faq.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen ? 'bg-brand text-white' : 'text-gray-400'
                    }`}
                  >
                    {isOpen ? <X size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="leading-relaxed text-gray-500">{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
