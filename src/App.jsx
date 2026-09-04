import Loader from './components/Loader.jsx'
import Ticker from './components/Ticker.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import StaticBand from './components/StaticBand.jsx'
import Film from './components/Film.jsx'
import About from './components/About.jsx'
import Resources from './components/Resources.jsx'
import Members from './components/Members.jsx'
import Gallery from './components/Gallery.jsx'
import Join from './components/Join.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Loader />
      <Ticker />
      <Navbar />
      <Hero />
      <StaticBand />
      <Film />
      <About />
      <Resources />
      <Members />
      <Gallery />
      <Join />
      <Footer />
    </>
  )
}

export default App
