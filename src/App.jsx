import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Classes from './components/Classes'
import Hours from './components/Hours'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Classes />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </>
  )
}