import { Navbar, Footer } from '@/components/layout'
import {
  Hero,
  Services,
  WhyUs,
  Schedule,
  Store,
  Gallery,
  Team,
  Contact,
} from '@/sections'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Schedule />
      <Store />
      <Gallery />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default App
