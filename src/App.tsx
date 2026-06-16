import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/sections/Hero/Hero'
import { Services } from '@/sections/Services/Services'
import { WhyUs } from '@/sections/WhyUs/WhyUs'
import { Schedule } from '@/sections/Schedule/Schedule'
import { Store } from '@/sections/Store/Store'
import { Gallery } from '@/sections/Gallery/Gallery'
import { Team } from '@/sections/Team/Team'
import { Contact } from '@/sections/Contact/Contact'
import { Footer } from '@/components/layout/Footer'

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
