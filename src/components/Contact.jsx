import { useState } from 'react'
import { MapPin, Phone, Navigation } from 'lucide-react'
import { centre } from '../data/centre'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
  }

  const field = 'w-full rounded-lg border p-3 outline-none focus:border-brand'

  const mapQuery = encodeURIComponent(centre.address)

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold">Visit or Contact Us</h2>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-5">
          <p className="flex gap-3"><MapPin className="shrink-0 text-brand" /> {centre.address}</p>
          <p className="flex gap-3"><Phone className="shrink-0 text-brand" />
            <a href={`tel:${centre.phone}`}>{centre.phone}</a></p>
          <a href={`https://wa.me/${centre.whatsapp}`} target="_blank" rel="noreferrer"
             className="inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700">
            WhatsApp Us
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input className={field} placeholder="Parent's name" required />
          <input className={field} type="tel" placeholder="Phone number" required />
          <select className={field} required defaultValue="">
            <option value="" disabled>Student's level</option>
            <option>Primary</option>
            <option>Secondary</option>
          </select>
          <button className="w-full rounded-lg bg-brand py-3 font-semibold text-white hover:bg-brand-dark">
            Send Enquiry
          </button>
          {sent && <p className="font-medium text-green-600">Thanks! We'll contact you soon. (Demo)</p>}
        </form>
      </div>

      {/* Google Maps Location */}
      <div className="mt-12">
        <div className="overflow-hidden rounded-2xl shadow-sm">
          <iframe
            title="Young Tuition Centre Location"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-4 text-center">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-brand px-5 py-2 font-medium text-brand transition hover:bg-brand hover:text-white"
          >
            <Navigation size={16} /> Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}