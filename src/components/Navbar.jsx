import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/logo.png'
import { centre } from '../data/centre'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Classes', href: '#classes' },
  { label: 'Hours', href: '#hours' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2.5 text-lg font-bold text-brand-dark">
          <img src={logo} alt="Young Tuition" className="h-10" />
          Young Tuition
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 transition hover:text-brand-dark">
              {l.label}
            </a>
          ))}
          <a href={`tel:${centre.phone}`}
             className="flex items-center gap-2 rounded-full bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand">
            <Phone size={15} /> Call Us
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t bg-white px-6 py-5 md:hidden">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-medium text-gray-700">
              {l.label}
            </a>
          ))}
          <a href={`tel:${centre.phone}`}
             className="flex w-max items-center gap-2 rounded-full bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white">
            <Phone size={15} /> Call Us
          </a>
        </nav>
      )}
    </header>
  )
}