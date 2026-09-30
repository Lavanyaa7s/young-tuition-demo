import { useState } from 'react'
import { MapPin, Phone, ArrowRight, Navigation } from 'lucide-react'
import { centre } from '../data/centre'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
  }
  const mapQuery = encodeURIComponent(centre.address)

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Come say hello
            </p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-brand-dark sm:text-3xl md:text-4xl">
              Ready to help your child feel more confident?
            </h2>
            <p className="mx-auto mt-4 max-w-sm leading-relaxed text-gray-400 md:mx-0">
              Tell us a little about your child and we'll help you find the
              right class.
            </p>

            <div className="mt-8 space-y-5 text-left">
              <div className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-soft-blue text-brand">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">Visit us</p>
                  <p className="text-sm text-gray-400">{centre.address}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-soft-blue text-brand">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">Call or WhatsApp</p>
                  <p className="text-sm text-gray-400">
                    <a href={`tel:${centre.phone}`}>{centre.phone}</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center md:text-left">
              <a
                href={`https://wa.me/${centre.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
              >
                Message us on WhatsApp <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right — Form card */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-brand-dark">Start a conversation</h3>
            <p className="mt-1 text-sm text-gray-400">
              We'll get back to you during opening hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label className="text-sm font-semibold text-brand-dark">Parent's name</label>
                <input
                  className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-brand"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-brand-dark">Phone number</label>
                <input
                  className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-brand"
                  type="tel"
                  placeholder="019-000 0000"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-brand-dark">Student's level</label>
                <select
                  className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-500 outline-none transition focus:border-brand"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Select a level</option>
                  <option>Primary</option>
                  <option>Secondary</option>
                </select>
              </div>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-dark py-3.5 font-semibold text-white transition hover:bg-brand">
                Send enquiry <ArrowRight size={16} />
              </button>
              {sent && (
                <p className="text-center text-sm font-medium text-green-600">
                  Thanks! We'll contact you soon.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12 md:mt-16">
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <iframe
              title="Young Tuition Centre Location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="sm:h-[350px]"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2 text-sm font-medium text-brand-dark transition hover:bg-brand-dark hover:text-white"
            >
              <Navigation size={14} /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}