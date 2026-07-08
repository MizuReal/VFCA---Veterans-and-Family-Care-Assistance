import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Services from './components/Services'
import Eligibility from './components/Eligibility'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Services />
        <Eligibility />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
