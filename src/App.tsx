import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChoose from './components/WhyChoose'
import TrustStats from './components/TrustStats'
import Resources from './components/Resources'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import JsonLd from './components/JsonLd'
import SkipLink from './components/SkipLink'

export default function App() {
  return (
    <>
      <JsonLd />
      <SkipLink />
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <HowItWorks />
        <WhyChoose />
        <TrustStats />
        <Resources />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
