import Atmosphere from './components/Atmosphere'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Gallery from './components/Gallery'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-linen">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Philosophy />
        <Gallery />
        <Atmosphere />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
