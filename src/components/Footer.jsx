import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm md:flex-row">
        <a href="#home" className="flex items-center gap-2 font-bold text-white">
          <img src={logo} alt="Young Tuition" className="h-8 brightness-200" />
          Young Tuition
        </a>
        <p className="text-gray-400">
          Helping young minds grow, one lesson at a time.
        </p>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Young Tuition Centre
        </p>
      </div>
    </footer>
  )
}