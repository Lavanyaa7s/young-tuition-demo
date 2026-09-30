import { Sparkles, ArrowRight, CheckCircle2, GraduationCap } from 'lucide-react'
import vector from '../assets/vector.png'

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 py-10 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        {/* Left content */}
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sun/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-dark">
            <Sparkles size={14} /> Small classes · Caring teachers
          </span>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl md:mt-6 md:text-5xl lg:text-[3.5rem]">
            Helping every child{' '}
            <span className="text-teal">shine bright.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-md leading-relaxed text-gray-500 md:mx-0 md:mt-5">
            Friendly, focused tuition for primary and secondary students in
            Taman Malim Jaya, Melaka.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:mt-8 md:items-center md:justify-start md:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 font-semibold text-white transition hover:bg-brand"
            >
              Enquire now <ArrowRight size={16} />
            </a>
            <a
              href="#classes"
              className="inline-flex items-center gap-2 font-medium text-gray-600 transition hover:text-brand-dark"
            >
              Explore our classes <ArrowRight size={16} />
            </a>
          </div>

          {/* Trust badge */}
          <div className="mt-8 flex items-center justify-center gap-3 md:mt-10 md:justify-start">
            <div className="flex -space-x-1">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sun text-xs font-bold text-brand-dark ring-2 ring-white">
                Y
              </span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-coral text-xs font-bold text-white ring-2 ring-white">
                T
              </span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-bold text-white ring-2 ring-white">
                •
              </span>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-brand-dark">Trusted by local families</p>
              <p className="text-xs text-gray-400">Personal attention, real progress</p>
            </div>
          </div>
        </div>

        {/* Right image area */}
        <div className="relative flex justify-center">
          {/* Yellow decorative arc */}
          <div className="absolute -right-4 -top-4 h-64 w-64 rounded-full bg-sun/25 sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem]" />

          {/* Image container */}
          <div className="relative z-10 overflow-hidden rounded-[2rem] bg-white p-3 shadow-lg">
            <img
              src={vector}
              alt="Young Tuition Centre"
              className="w-56 rounded-2xl sm:w-64 md:w-80"
            />
          </div>

          {/* Floating badge — top left */}
          <div className="absolute -left-2 top-4 z-20 hidden items-center gap-2.5 rounded-xl bg-white px-3 py-2 shadow-md sm:flex md:left-0 md:top-6 md:px-4 md:py-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sun/30">
              <GraduationCap size={16} className="text-brand-dark" />
            </span>
            <div>
              <p className="text-xs font-semibold text-brand-dark sm:text-sm">Learn with joy</p>
              <p className="text-xs text-gray-400">Confidence starts here</p>
            </div>
          </div>

          {/* Floating badge — bottom right */}
          <div className="absolute -right-2 bottom-2 z-20 hidden items-center gap-2.5 rounded-xl bg-white px-3 py-2 shadow-md sm:flex md:bottom-4 md:right-0 md:px-4 md:py-2.5">
            <CheckCircle2 size={18} className="text-teal" />
            <div>
              <p className="text-xs font-semibold text-brand-dark sm:text-sm">Small groups</p>
              <p className="text-xs text-gray-400">More attention for every child</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}