import vector from '../assets/vector.png'
// if it's directly in assets: import vector from '../assets/vector.png'

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 py-8">
      <div className="grid items-center gap-10 rounded-3xl bg-[#fdf9e7] p-8 md:grid-cols-2 md:p-16">
        <div>
          <span className="rounded-full bg-sun px-3 py-1 text-xs font-semibold">
            Small classes • Caring teachers
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Helping Every Child Shine Bright
          </h1>
          <p className="mt-4 text-slate-600">
            Tuition for primary and secondary students in Taman Malim Jaya, Melaka.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <a href="#contact" className="rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">
              Enquire Now
            </a>
            <a href="#hours" className="font-medium underline">See class hours</a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={vector}
            alt="Happy students at Young Tuition Centre"
            className="w-64 animate-bounce [animation-duration:4s] md:w-96"
          />
        </div>
      </div>
    </section>
  )
}